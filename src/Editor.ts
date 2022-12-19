import {Sprites} from "./const/sprites";
import {SPRITE_NAMES, SpriteDim, SpriteNamesUnion, Vector} from "./types";
import {SpriteData} from "./const/types";

export class Editor {
    private dom: any;
    private spriteData: SpriteDim;
    private currentSprite: SpriteNamesUnion;
    private mapSize: Vector;

    constructor() {
        this.dom = {
            currentSprite: document.querySelector('.editor__currentSprite'),
            map: document.querySelector('#map')
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
        this.currentSprite = SPRITE_NAMES.OUTDOOR_SPRING;
        this.init();
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
                row.appendChild(cell)
            }
            this.dom.currentSprite.appendChild(row);
        }
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
        console.log("Editor started");
    }
}