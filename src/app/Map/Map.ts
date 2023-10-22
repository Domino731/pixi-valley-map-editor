import {Vector} from "../../types";
import {Main} from "../../Main";
import {ENGINE_OBJECTS_TYPES, EngineObject, GameMapTileData, SpriteSize} from "../../data/types";
import {SpritesConfig} from "../../data/spritesConfig";
import {CROPS_PER_PANEL} from "../../data/crops/const";
import {CropObject} from "../../data/crops/types";
import {InspectWorldObjects} from "../Inspect/InspectWorld/components/InspectWorldObjects";
import {v4 as uuidv4} from 'uuid';
import {CONTENT_TYPE} from "./const";
import {TILE_SIZE} from "../../const";
import {Locations} from "../Inspect/Inspect/Components/Locations";
import {hide, isVisible, show} from "../../utils/toggleElementVisibility";

export class Map {
    readonly cellSize: number;
    private spriteCell: Vector;
    private main: Main;
    public readonly size: Vector;
    private hoverPosition: Vector;
    private readonly inspectWorldObjects: InspectWorldObjects;
    private readonly elements: {
        topBarCurrentCellX: HTMLSpanElement;
        topBarCurrentCellY: HTMLSpanElement;
        map: HTMLElement;
        hoverObject: HTMLElement
    }
    private contentType: CONTENT_TYPE;
    private tile: {
        src: string;
        position: Vector;
        spriteName: string;
        id: number;
    }
    private mapDOMRect: DOMRect | null;

    constructor(main: Main) {
        this.main = main;
        this.elements = {
            topBarCurrentCellX: document.querySelector('#map-current-cell-cords-x'),
            topBarCurrentCellY: document.querySelector('#map-current-cell-cords-y'),
            map: document.querySelector('#map'),
            hoverObject: document.querySelector('#container-hover-object')
        }
        this.inspectWorldObjects = new InspectWorldObjects();
        this.size = {
            x: 70,
            y: 70
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
        this.contentType = CONTENT_TYPE.TILE_SETS;
        this.tile = {
            src: '',
            position: {x: 0, y: 0},
            spriteName: '',
            id: 1
        }
        this.mapDOMRect = null;
    }

    ////
    // class setters
    ////

    public setContentType(payload: CONTENT_TYPE): void {
        this.contentType = payload
    }

    public setTile(src: string, position: Vector, spriteName: string, spriteId: number): void {
        Map.hideHoverObject();
        this.contentType = CONTENT_TYPE.TILE_SETS;
        this.tile = {src, position, spriteName, id: spriteId};
    }


    private setGroundTile(cell: HTMLDivElement) {
        const {src, position: {x, y}, spriteName, id} = this.tile;
        const {dataset: {cordX, cordY}} = cell;
        const tileData: GameMapTileData = {
            spriteName,
            cords: {
                x: Number(cordX),
                y: Number(cordY)
            },
            spriteCords: {
                x, y
            },
            id
        }
        console.log('tileData: ', tileData);
        this.main.pushToDataTiles(tileData)
        cell.style.backgroundImage = `url("./src/sprites/${src}")`;
        cell.style.backgroundPosition = `-${x * TILE_SIZE}px -${y * TILE_SIZE}px`;
    }

    public createObject(engineObject: EngineObject, position: Vector, inspect: boolean): void {
        const spriteSize: SpriteSize | undefined = SpritesConfig.find(({sprite}) => sprite === engineObject.sprite.src)?.size
        if (spriteSize) {
            const object: HTMLDivElement = document.createElement('div');

            const mapId = uuidv4();

            object.dataset.objectName = engineObject.name;
            object.dataset.spriteSrc = engineObject.sprite.src;
            object.dataset.spritePositionX = String(engineObject.sprite.position.x);
            object.dataset.spritePositionY = String(engineObject.sprite.position.y);
            object.dataset.objectPositionX = `${position.x}`;
            object.dataset.objectPositionY = `${position.y}`;
            object.dataset.objectId = engineObject.id;
            object.dataset.objectGroup = engineObject.group;
            object.dataset.objectType = engineObject.type;
            object.id = mapId;
            object.style.position = "absolute";
            object.style.width = `${spriteSize.cellWidth}px`;
            object.style.height = `${spriteSize.cellHeight}px`;
            object.style.left = `${this.cellSize * position.x}px`;
            object.style.top = `${this.cellSize * position.y}px`;
            object.style.zIndex = `${position.y}`;
            object.style.backgroundImage = `url(./src/sprites/${engineObject.sprite.src})`;
            object.style.backgroundRepeat = 'no-repeat'

            // TODO before release: fix ts
            // @ts-ignore
            if (engineObject.type === ENGINE_OBJECTS_TYPES.CROPS && engineObject.stages?.length) {
                const cropObject: CropObject = engineObject as CropObject;
                // @ts-ignore
                object.style.backgroundPosition = `-${(spriteSize.cellWidth * CROPS_PER_PANEL.x) * cropObject.spriteIndex.x}px -${0}px`;
            } else {
                object.style.backgroundPosition = `-${engineObject.sprite.position.x * spriteSize.cellWidth}px -${engineObject.sprite.position.y * spriteSize.cellHeight}px`;
            }

            this.elements.map.appendChild(object);
            this.main.pushToDataObjects({
                ...engineObject, mapId: mapId, map: {
                    cord: {...position}
                }
            });

            new Locations().build(this.main.getDataObjects(), engineObject.id)
            if (inspect) {
                // @ts-ignore
                this.inspectWorldObjects.build(engineObject.type, this.main);
            }

        }
    }

    private setObject() {
        this.elements.map.addEventListener('click', ({clientX, clientY}) => {
            if (this.contentType === CONTENT_TYPE.OBJECTS) {
                const {left, top}: DOMRect = this.elements.map.getBoundingClientRect();
                const position: Vector = {
                    x: Math.floor((clientX - left) / this.cellSize),
                    y: Math.floor((clientY - top) / this.cellSize)
                }
                this.createObject(this.main.getEngineObject(), position, true);
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
                cell.className = `map__cell map__cell--border`;

                // add click event in order to set specific tile on map
                cell.addEventListener('click', () => {
                    if (this.contentType === CONTENT_TYPE.TILE_SETS) {
                        this.setGroundTile(cell);
                    }
                })

                row.appendChild(cell)
            }

            this.elements.map.appendChild(row);
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

    public static getHoverObjectElement(): HTMLElement {
        return document.querySelector('#container-hover-object')
    }

    public static showHoverObject(): void {
        show(Map.getHoverObjectElement())
    }

    public static hideHoverObject(): void {
        hide(Map.getHoverObjectElement())
    }

    private setCurrentCellCords({x, y}: Vector): void {
        let xText: string = `${x}`;
        let yText: string = `${y}`;
        if (x < 0 || y < 0) {
            xText = '';
            yText = '';
        }
        this.elements.topBarCurrentCellX.innerText = xText;
        this.elements.topBarCurrentCellY.innerText = yText;
    }

    // show selected object on map using mouse position
    private selectedObjectOnMousePosition(): void {
        // apply mousemove event and calculate mouse position
        this.elements.map.addEventListener('mousemove', (({clientX, clientY}): void => {
            if (!isVisible(this.elements.hoverObject)) {
                show(this.elements.hoverObject)
            }
            const position: Vector = {
                x: Math.floor((clientX - this.mapDOMRect?.left) / this.cellSize),
                y: Math.floor((clientY - this.mapDOMRect?.top) / this.cellSize)
            }
            this.setCurrentCellCords(position);
            if (this.contentType === CONTENT_TYPE.OBJECTS) {
                const engineObject: EngineObject | null = this.main.getEngineObject();
                if (position.x >= 0 && position.y >= 0 && position.x <= this.size.x && position.y <= this.size.y && engineObject) {
                    this.elements.hoverObject.style.left = `${(position.x * this.cellSize)}px`;
                    this.elements.hoverObject.style.top = `${(position.y * this.cellSize)}px`;
                }
            }
        }));
        this.elements.map.addEventListener('mouseleave', () => {
            hide(this.elements.hoverObject);
            this.setCurrentCellCords({x: -1, y: -1});
        })
    }

    private setMapDOMRect(): void {
        this.mapDOMRect = this.elements.map.getBoundingClientRect();
        window.addEventListener('resize', () => {
            this.mapDOMRect = this.elements.map.getBoundingClientRect();
        });
    }

    public init(): void {
        this.renderMapGrid();
        this.setObject();
        this.setMapDOMRect();
        this.selectedObjectOnMousePosition();
        Map.renderGround();
    }
}