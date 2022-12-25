import {SPRITE_TYPES, SpriteData} from "../const/types";
import {DOM} from "./DOM";
import {Map} from "./Map";
import {Sprites} from "../const/sprites";
import {Main} from "../Main";
import {Select} from "./utils/Select";
import {tiles} from "../data/tiles/tiles";
import {GAME_DATA} from "../data";
import {EngineObject, SpriteSize} from "../data/types";
import {SpritesConfig} from "../data/spritesConfig";

export class RightPanel {
    private dom: DOM;
    private map: Map;
    private main: Main;
    private objects: Array<EngineObject>;
    private DOM: {
        objectsContainer: HTMLDivElement;
    }

    constructor(main: Main) {
        this.dom = main.dom;
        this.map = main.map;
        this.main = main;
        this.DOM = {
            objectsContainer: document.querySelector('#current-sprite-container')
        }
        this.objects = [];
    }

    renderEditorSpriteGrid(): void {
        const rows: number = this.main.sprite.size.spriteHeight / this.main.sprite.size.cellHeight;
        const columns: number = this.main.sprite.size.spriteWidth / this.main.sprite.size.cellWidth;

        // clear previous
        this.dom.currentSprite.innerHTML = ""

        for (let i = 0; i < rows; i++) {
            const row: HTMLDivElement = document.createElement('div');
            row.className = `row`;
            row.style.height = `${this.main.sprite.size.cellHeight}px`
            for (let j = 0; j < columns; j++) {
                const cell: HTMLDivElement = document.createElement('div');
                cell.className = `cell`;
                cell.style.height = '100%'
                cell.style.width = `${this.main.sprite.size.cellWidth}px`
                cell.addEventListener('click', () => {
                    this.map.setSpriteCell({x: i, y: j});
                    this.dom.panelCellPosition.innerText = `{x: ${i}, y: ${j}}`;
                })
                row.appendChild(cell)
            }
            this.dom.currentSprite.appendChild(row);
        }
    }

    private renderObjectsGrid(): void {
        this.DOM.objectsContainer.classList.add('objectContainer__objects');
        this.DOM.objectsContainer.innerHTML = '';

        this.objects.forEach((el) => {
            const spriteSize: SpriteSize | undefined = SpritesConfig.find(({sprite}) => sprite === el.sprite.src)?.size
            if (spriteSize) {
                const {cellWidth, cellHeight} = spriteSize;

                const div: HTMLDivElement = document.createElement('div');

                div.style.width = `${cellWidth}px`;
                div.style.height = `${cellHeight}px`;
                div.style.backgroundImage = `url(./src/sprites/${el.sprite.src})`;
                div.style.backgroundPosition = `-${el.sprite.position.y * spriteSize.cellWidth}px -${el.sprite.position.x * spriteSize.cellHeight}px`;
                div.style.backgroundRepeat = 'no-repeat';
                
                div.addEventListener('click', () => {
                    this.main.setEngineObject(el);
                });
                this.DOM.objectsContainer.appendChild(div);
            }


        })

    }

    private renderGrid(): void {
        this.DOM.objectsContainer.style.flexWrap = 'no-wrap';
        if (this.main.getSpriteType() === SPRITE_TYPES.OBJECT) {
            this.renderObjectsGrid();
        }
    }

    initSpriteSelect(): void {
        const tileSetsOptions = tiles.map(({label}) => ({label, value: label}));
        const gameObjects = Object.entries(GAME_DATA.objects).map(([key]) => ({label: key, value: key}));
        const options = [...tileSetsOptions, ...gameObjects];

        const handleChange = ({value}: { value: string }) => {
            // @ts-ignore
            const objects = GAME_DATA.objects[value as keyof typeof GAME_DATA];
            if (objects) {
                this.objects = objects;
                this.main.setSpriteType(SPRITE_TYPES.OBJECT);
            }

            this.renderGrid();
        }

        new Select("select-sprite-sheet", options, handleChange);
    }

    setSpriteBgImage(): void {
        this.dom.currentSprite.style.backgroundImage = this.main.sprite.src;
        this.dom.currentSprite.style.width = `${this.main.sprite.size.spriteWidth}px`;
        this.dom.currentSprite.style.height = `${this.main.sprite.size.spriteHeight}px`;
    }
}