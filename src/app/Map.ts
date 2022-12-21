import {Vector} from "../types";
import {DOM} from "./DOM";
import {SPRITE_TYPES, SpriteData} from "../const/types";
import {Main} from "../Main";

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

    private setObject(position: Vector) {
        const object: HTMLDivElement = document.createElement('div');
        object.style.position = "absolute";
        object.style.width = `${this.main.sprite.size.cellWidth}px`;
        object.style.height = `${this.main.sprite.size.cellHeight}px`;
        object.style.left = `${this.cellSize * position.y}px`;
        object.style.top = `${this.cellSize * position.x}px`;
        object.style.border = '2px solid red';
        object.style.backgroundImage = this.main.sprite.src;
        object.style.backgroundPosition = `-${this.spriteCell.y * this.main.sprite.size.cellHeight}px -${this.spriteCell.x * this.main.sprite.size.cellWidth}px`;
        this.main.dom.map.appendChild(object);
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
                cell.addEventListener('click', () => {
                    if (this.main.sprite.type === SPRITE_TYPES.GROUND_TILE) {
                        this.setGroundTile(cell);
                    } else if (this.main.sprite.type === SPRITE_TYPES.OBJECT) {
                        this.setObject({x: i, y: j});
                    }
                })
                row.appendChild(cell)
            }
            this.main.dom.map.appendChild(row);
        }
    }

    public init(): void {
        this.renderMapGrid();
    }
}