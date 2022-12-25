import {SPRITE_NAMES, Vector} from "../types";
import {DOM} from "./DOM";
import {SPRITE_TYPES, SpriteData} from "../const/types";
import {Main} from "../Main";
import {Sprites} from "../const/sprites";
import {SpriteSize} from "../data/types";
import {SpritesConfig} from "../data/spritesConfig";

export class Map {
    private dom: DOM;
    readonly cellSize: number;
    private spriteCell: Vector;
    private main: Main;
    private size: Vector;

    constructor(main: Main) {
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
    }

    // setters
    public setSpriteCell(vector: Vector): void {
        this.spriteCell = {
            x: vector.x,
            y: vector.y
        }
    }

    private setGroundTile(cell: HTMLDivElement) {
        cell.style.backgroundImage = this.main.sprite.src;
        cell.style.backgroundPosition = `-${this.spriteCell.y * this.main.sprite.size.cellHeight}px -${this.spriteCell.x * this.main.sprite.size.cellWidth}px`;
    }

    private setObject() {
        this.main.dom.map.addEventListener('click', (e) => {
            if (this.main.getSpriteType() === SPRITE_TYPES.OBJECT) {
                let rect: DOMRect = this.main.dom.map.getBoundingClientRect();

                const position: Vector = {
                    x: Math.floor((e.clientX - rect.left) / this.cellSize),
                    y: Math.floor((e.clientY - rect.top) / this.cellSize)
                }
                const spriteSize: SpriteSize | undefined = SpritesConfig.find(({sprite}) => sprite === this.main.getEngineObject().sprite.src)?.size
                if (spriteSize) {
                    console.log(spriteSize);
                    const object: HTMLDivElement = document.createElement('div');

                    object.style.position = "absolute";
                    object.style.width = `${spriteSize.cellWidth}px`;
                    object.style.height = `${spriteSize.cellHeight}px`;
                    object.style.left = `${this.cellSize * position.x}px`;
                    object.style.top = `${this.cellSize * position.y}px`;
                    object.style.backgroundImage = `url(./src/sprites/${this.main.getEngineObject().sprite.src})`;
                    object.style.backgroundPosition = `-${this.main.getEngineObject().sprite.position.x * spriteSize.cellWidth}px -${this.main.getEngineObject().sprite.position.y * spriteSize.cellHeight}px`;
                    object.style.backgroundRepeat = 'no-repeat'

                    this.main.dom.map.appendChild(object);
                }
            }
        });
    }

    public renderMapGrid(): void {
        const rows: number = this.size.y;
        const columns: number = this.size.x;
        for (let i = 0; i < rows; i++) {
            const row: HTMLDivElement = document.createElement('div');
            row.className = `row row--${this.cellSize}`;
            for (let j = 0; j < columns; j++) {
                const cell: HTMLDivElement = document.createElement('div');
                cell.className = `cell cell--${this.cellSize}`;
                cell.addEventListener('click', (e) => {
                    if (this.main.getSpriteType() === SPRITE_TYPES.GROUND_TILE) {
                        this.setGroundTile(cell);
                    }
                })
                row.appendChild(cell)
            }
            this.main.dom.map.appendChild(row);
        }
    }

    private renderGround(): void {
        const mapTiles: NodeListOf<HTMLDivElement> = document.querySelectorAll('#map .row div');
        mapTiles.forEach(tile => {
            const groundSprite = Sprites.find(({spriteName}) => spriteName === SPRITE_NAMES.OUTDOOR_SPRING);
            tile.style.backgroundImage = groundSprite.src;
            tile.style.backgroundPosition = `-0px -112px`;
            tile.style.backgroundRepeat = 'no-repeat'
        })
    }

    public init(): void {
        this.renderMapGrid();
        this.setObject();
        this.renderGround()
    }
}