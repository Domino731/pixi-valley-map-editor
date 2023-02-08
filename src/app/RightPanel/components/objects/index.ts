import {Map} from "../../../Map/Map";
import {Main} from "../../../../Main";
import {EngineObject} from "../../../../data/types";
import {ObjectsListBuilder} from "../../ObjectsListBuilder";
import {tiles} from "../../../../data/tiles/tiles";
import {GAME_DATA} from "../../../../data";
import {SPRITE_TYPES} from "../../../../const/types";
import {Select} from "../../../utils/Select";
import {DOM} from "../../../DOM";

export class ObjectsContent {
    private dom: DOM;
    private map: Map;
    private main: Main;
    private objects: Array<EngineObject>;
    private objectsListBuilder: ObjectsListBuilder
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
        this.objectsListBuilder = new ObjectsListBuilder(this.main);
        this.objects = [];
        this.init();
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
                this.dom.currentSprite.style.width = 'auto';
            }

            this.objectsListBuilder.objectsListWithStages(objects)
        }

        new Select("select-sprite-sheet", options, handleChange);
    }

    setSpriteBgImage(): void {
        this.dom.currentSprite.style.backgroundImage = this.main.sprite.src;
        this.dom.currentSprite.style.width = `${this.main.sprite.size.spriteWidth}px`;
        this.dom.currentSprite.style.height = `${this.main.sprite.size.spriteHeight}px`;
    }

    private init(): void {
        this.setSpriteBgImage();
        this.renderEditorSpriteGrid();
        this.initSpriteSelect();
    }
}