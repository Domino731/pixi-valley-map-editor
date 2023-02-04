import {Vector} from "../../types";
import {SPRITE_TYPES} from "../../const/types";
import {Main} from "../../Main";
import {ENGINE_OBJECTS_TYPES, EngineObject, SpriteSize} from "../../data/types";
import {SpritesConfig} from "../../data/spritesConfig";
import {CROPS_PER_PANEL} from "../../data/crops/const";
import {CropObject} from "../../data/crops/types";
import {InspectWorldObjects} from "../LeftPanel/InspectWorld/components/InspectWorldObjects";
import {v4 as uuidv4} from 'uuid';

export class Map {
    readonly cellSize: number;
    private spriteCell: Vector;
    private main: Main;
    private size: Vector;
    private hoverPosition: Vector;
    private readonly inspectWorldObjects: InspectWorldObjects;

    constructor(main: Main) {
        this.inspectWorldObjects = new InspectWorldObjects();
        this.main = main;
        this.size = {
            x: 60,
            y: 60
        }
        this.cellSize = 16;
        this.spriteCell = {
            x: 0,
            y: 0
        }
        this.hoverPosition = {
            x: 0,
            y: 0
        }
    }

    ////
    // class setters
    ////

    // set spriteCell
    public setSpriteCell(vector: Vector): void {
        this.spriteCell = {
            x: vector.x,
            y: vector.y
        }
    }

    /** set cell graphics */
    private setGroundTile(cell: HTMLDivElement) {
        // TODO: fix
        if ("src" in this.main.sprite) {
            cell.style.backgroundImage = this.main.sprite.src;
        }
        if ("size" in this.main.sprite) {
            cell.style.backgroundPosition = `-${this.spriteCell.y * this.main.sprite.size.cellHeight}px -${this.spriteCell.x * this.main.sprite.size.cellWidth}px`;
        }

    }

    private setObject() {
        this.main.dom.map.addEventListener('click', (e) => {
            if (this.main.getSpriteType() === SPRITE_TYPES.OBJECT) {
                const engineObject: EngineObject | CropObject = this.main.getEngineObject()
                let rect: DOMRect = this.main.dom.map.getBoundingClientRect();

                const position: Vector = {
                    x: Math.floor((e.clientX - rect.left) / this.cellSize),
                    y: Math.floor((e.clientY - rect.top) / this.cellSize)
                }
                const spriteSize: SpriteSize | undefined = SpritesConfig.find(({sprite}) => sprite === this.main.getEngineObject().sprite.src)?.size
                if (spriteSize) {
                    const object: HTMLDivElement = document.createElement('div');

                    const mapId = uuidv4();

                    object.dataset.objectName = this.main.getEngineObject().name;
                    object.style.position = "absolute";
                    object.dataset.spriteSrc = engineObject.sprite.src;
                    object.dataset.spritePositionX = String(engineObject.sprite.position.x);
                    object.dataset.spritePositionY = String(engineObject.sprite.position.y);
                    object.dataset.objectPositionX = `${position.x}`;
                    object.dataset.objectPositionY = `${position.y}`;
                    object.dataset.objectId = engineObject.id;
                    object.dataset.objectGroup = engineObject.group;
                    object.dataset.objectType = engineObject.type;
                    object.dataset.id = mapId;

                    object.style.width = `${spriteSize.cellWidth}px`;
                    object.style.height = `${spriteSize.cellHeight}px`;
                    object.style.left = `${this.cellSize * position.x}px`;
                    object.style.top = `${this.cellSize * position.y}px`;
                    object.style.zIndex = `${position.y}`;
                    object.style.backgroundImage = `url(./src/sprites/${this.main.getEngineObject().sprite.src})`;
                    object.style.backgroundRepeat = 'no-repeat'


                    if (engineObject.type === ENGINE_OBJECTS_TYPES.CROPS && engineObject.stages?.length) {
                        const cropObject: CropObject = engineObject as CropObject;
                        object.style.backgroundPosition = `-${(spriteSize.cellWidth * CROPS_PER_PANEL.x) * cropObject.spriteIndex.x}px -${0}px`;
                    } else {
                        object.style.backgroundPosition = `-${engineObject.sprite.position.x * spriteSize.cellWidth}px -${engineObject.sprite.position.y * spriteSize.cellHeight}px`;
                    }

                    this.main.dom.map.appendChild(object);
                    this.main.pushToDataObjects({...engineObject, mapId: mapId});
                    this.inspectWorldObjects.build(engineObject.type, this.main.getDataObjects());
                }
            }
        });
    }

    // create map grid, user will be able to arrange objects
    private renderMapGrid(): void {
        const rows: number = this.size.y;
        const columns: number = this.size.x;

        for (let i = 0; i < rows; i++) {
            const row: HTMLDivElement = document.createElement('div');
            row.className = `row row--${this.cellSize}`;

            for (let j = 0; j < columns; j++) {
                const cell: HTMLDivElement = document.createElement('div');
                // add custom dataset, so that it is clear what object is where
                cell.dataset.cordX = String(j);
                cell.dataset.cordY = String(i);
                cell.className = `cell cell--${this.cellSize}`;

                // add click event in order to set specific tile on map
                cell.addEventListener('click', () => {
                    if (this.main.getSpriteType() === SPRITE_TYPES.GROUND_TILE) {
                        this.setGroundTile(cell);
                    }
                })

                row.appendChild(cell)
            }

            this.main.dom.map.appendChild(row);
        }
    }

    // set default tile on every tile on map
    private static renderGround(): void {
        const mapTiles: NodeListOf<HTMLDivElement> = document.querySelectorAll('#map .row div');
        mapTiles.forEach(tile => {
            tile.style.backgroundImage = 'url(./src/sprites/outdoors_spring.png)';
            tile.style.backgroundPosition = `-0px -112px`;
            tile.style.backgroundRepeat = 'no-repeat'
        })
    }

    // show selected object on map using mouse position
    private selectedObjectOnMousePosition(): void {
        const rect = this.main.dom.map.getBoundingClientRect();

        // apply mousemove event and calculate mouse position
        this.main.dom.map.addEventListener('mousemove', (({clientX, clientY}): void => {
            const position: Vector = {
                x: Math.floor((clientX - rect.left) / this.cellSize),
                y: Math.floor((clientY - rect.top) / this.cellSize)
            }
            const engineObject: EngineObject | null = this.main.getEngineObject();
            if (position.x >= 0 && position.y >= 0 && position.x <= this.size.x && position.y <= this.size.y && engineObject) {
                this.main.dom.hoverObject.style.left = `${(position.x * this.cellSize)}px`;
                this.main.dom.hoverObject.style.top = `${(position.y * this.cellSize)}px`;
            }
        }));
    }

    public init(): void {
        this.renderMapGrid();
        this.setObject();
        this.selectedObjectOnMousePosition();

        Map.renderGround();
    }
}