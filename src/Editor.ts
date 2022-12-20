import {Sprites} from "./const/sprites";
import {SPRITE_NAMES, SpriteDim, SpriteNamesUnion, Vector} from "./types";
import {SpriteData} from "./const/types";

export class Editor {
    private dom: any;
    private spriteData: SpriteDim;
    private currentSprite: SpriteNamesUnion;
    private mapSize: Vector;
    private selectedSpriteCell: Vector;

    constructor() {
        this.dom = {
            currentSprite: document.querySelector('.editor__currentSprite'),
            map: document.querySelector('#map'),
            panelCellSize: document.querySelector('#panel-cell-size span'),
            panelCellPosition: document.querySelector('#panel-cell-position span')
        }
        this.spriteData = {
            cellWidth: 0,
            cellHeight: 0,
            spriteWidth: 0,
            spriteHeight: 0
        }
        this.mapSize = {
            x: 65, y: 65
        }
        this.selectedSpriteCell = {
            x: 0,
            y: 0
        }
        this.currentSprite = SPRITE_NAMES.OUTDOOR_SPRING;
        this.init();
    }

    // setters
    setSelectedSpriteCell(cell: Vector): void {
        this.selectedSpriteCell = cell;
    }

    setSpriteData(): void {
        const data: SpriteData | undefined = Sprites.find(({spriteName}) => spriteName === this.currentSprite);
        if (data) {
            const {size: {cellWidth, cellHeight, spriteWidth, spriteHeight}} = data;
            this.spriteData = {
                cellWidth,
                cellHeight,
                spriteWidth,
                spriteHeight
            }
        }
    }

    setSpriteBgImage(): void {
        this.dom.currentSprite.style.backgroundImage = "url(./src/sprites/outdoors_spring.png)";
        console.log(this.spriteData.spriteWidth);
        this.dom.currentSprite.style.width = `${this.spriteData.spriteWidth}px`;
        this.dom.currentSprite.style.height = `${this.spriteData.spriteHeight}px`;
    }

    renderEditorSpriteGrid(): void {
        const rows: number = this.spriteData.spriteHeight / this.spriteData.cellHeight;
        const columns: number = this.spriteData.spriteWidth / this.spriteData.cellWidth;

        for (let i = 0; i < rows; i++) {
            const row: HTMLDivElement = document.createElement('div');
            row.className = `row row--${this.spriteData.cellWidth}`;
            for (let j = 0; j < columns; j++) {
                const cell: HTMLDivElement = document.createElement('div');
                cell.className = `cell cell--${this.spriteData.cellWidth}`;
                cell.addEventListener('click', () => {
                    this.setSelectedSpriteCell({x: i, y: j});
                    this.dom.panelCellPosition.innerText = `{x: ${i}, y: ${j}}`;
                })
                row.appendChild(cell)
            }
            this.dom.currentSprite.appendChild(row);
        }
    }

    setPanelCellSize(): void {
        this.dom.panelCellSize.innerText = `{x: ${this.spriteData.cellWidth}, y: ${this.spriteData.cellHeight}}`
    }

    renderMapGrid(): void {
        const rows: number = this.mapSize.y;
        const columns: number = this.mapSize.x;
        for (let i = 0; i < rows; i++) {
            const row: HTMLDivElement = document.createElement('div');
            row.className = `row row--${this.spriteData.cellWidth}`;
            for (let j = 0; j < columns; j++) {
                const cell: HTMLDivElement = document.createElement('div');
                cell.className = `cell cell--${this.spriteData.cellWidth}`;
                cell.addEventListener('click', () => {
                    cell.style.backgroundImage = "url(./src/sprites/outdoors_spring.png)";
                    console.log(this.selectedSpriteCell)
                    cell.style.backgroundSize = `${this.spriteData.spriteWidth}px ${this.spriteData.spriteHeight}px`;
                    cell.style.backgroundPosition = `-${this.selectedSpriteCell.y * this.spriteData.cellHeight}px -${this.selectedSpriteCell.x * this.spriteData.cellWidth}px`
                })
                row.appendChild(cell)
            }
            this.dom.map.appendChild(row);
        }
    }

    init(): void {
        this.setSpriteData();
        this.setSpriteBgImage();
        this.renderEditorSpriteGrid();
        this.renderMapGrid();
        this.setPanelCellSize();
        console.log("Editor started");
    }
}