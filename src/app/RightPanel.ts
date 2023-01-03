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
import {ObjectsListBuilder} from "./RightPanel/ObjectsListBuilder";

export class RightPanel {
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

                const wrapper: HTMLDivElement = document.createElement('div');
                wrapper.className = 'engineObject__wrapper';
                
                const image: HTMLDivElement = document.createElement('div');
                image.style.backgroundImage = `url(./src/sprites/${el.sprite.src})`;
                image.style.backgroundPosition = `-${el.sprite.position.x * spriteSize.cellWidth}px -${el.sprite.position.y * spriteSize.cellHeight}px`;
                image.style.width = `${16}px`;
                image.style.height = `${16}px`;
                wrapper.appendChild(image)

                // const div: HTMLDivElement = document.createElement('div');
                //
                // div.style.width = `${cellWidth}px`;
                // div.style.height = `${cellHeight}px`;
                // div.style.backgroundImage = `url(./src/sprites/${el.sprite.src})`;
                // div.style.backgroundPosition = `-${el.sprite.position.x * spriteSize.cellWidth}px -${el.sprite.position.y * spriteSize.cellHeight}px`;
                // div.style.backgroundRepeat = 'no-repeat';
                // div.title = el.name
                //
                // div.addEventListener('click', () => {
                //     this.main.setEngineObject(el);
                // });

                this.DOM.objectsContainer.appendChild(wrapper);
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
                console.log(objects);
                this.objects = objects;
                this.main.setSpriteType(SPRITE_TYPES.OBJECT);
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
}