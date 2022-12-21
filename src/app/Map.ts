import {Vector} from "../types";
import {DOM} from "./DOM";
import {SpriteData} from "../const/types";

export class Map {
    private size: Vector
    private dom: DOM;
    private sprite: SpriteData;
    readonly cellSize: number;
    private spriteCell: Vector;

    constructor(mapSize: Vector, currentSprite: SpriteData) {
        this.dom = new DOM();
        this.size = mapSize;
        this.cellSize = 16;
        this.sprite = currentSprite;
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
                    cell.style.backgroundImage = this.sprite.src;
                    cell.style.backgroundPosition = `-${this.spriteCell.y * this.sprite.size.cellHeight}px -${this.spriteCell.x * this.sprite.size.cellWidth}px`
                })
                row.appendChild(cell)
            }
            this.dom.map.appendChild(row);
        }
    }

    public init(): void {
        this.renderMapGrid();
    }
}