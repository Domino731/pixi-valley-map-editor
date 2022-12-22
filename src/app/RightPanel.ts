import {SpriteData} from "../const/types";
import {DOM} from "./DOM";
import {Map} from "./Map";
import {Sprites} from "../const/sprites";
import {Main} from "../Main";

export class RightPanel {
    private dom: DOM;
    private map: Map;
    private main: Main;

    constructor(main: Main) {
        this.dom = main.dom;
        this.map = main.map;
        this.main = main;
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
        Sprites.forEach(({label, spriteName}) => {
            const option: HTMLLIElement = document.createElement('li');
            const optionButton: HTMLButtonElement = document.createElement('button');
            optionButton.addEventListener("click", () => {
                this.main.changeSprite(spriteName);
                this.dom.selectList.classList.add('hide');
            })
            option.appendChild(optionButton);
            option.className = 'select-item';
            optionButton.innerText = label;
            this.dom.selectList.appendChild(option);
        });

        this.dom.selectSpriteSheetButton.addEventListener('click', () => {
            this.dom.selectList.classList.remove('hide');
        })
    }

    setSpriteBgImage(): void {
        this.dom.currentSprite.style.backgroundImage = this.main.sprite.src;
        this.dom.currentSprite.style.width = `${this.main.sprite.size.spriteWidth}px`;
        this.dom.currentSprite.style.height = `${this.main.sprite.size.spriteHeight}px`;
    }
}