import {list} from "postcss";
import {DetectOutsideClick} from "./DetectOutsideClick";
import {ContextMenuOption} from "./types";

export class ContextMenu {
    private readonly parentElement: HTMLElement;
    private readonly portalElement: HTMLElement;
    private readonly options: Array<ContextMenuOption>;
    private isOpen: boolean;

    constructor(parentElement: HTMLElement | string, options: Array<ContextMenuOption>) {
        this.parentElement = parentElement;
        this.portalElement = document.querySelector('#context-menu-portal');
        this.options = options;
        this.isOpen = false;
        this.init();
    }

    private createMenuButtonElement(): HTMLDivElement {
        const menuButtonElement: HTMLDivElement = document.createElement('div');
        menuButtonElement.className = 'contextMenu__button';
        menuButtonElement.innerHTML = '<i class="fa-solid fa-ellipsis"></i>'

        return menuButtonElement;
    }

    private cleanPortal(): void {
        this.portalElement.innerHTML = '';
    }

    private createListElement(left: number, top: number): void {
        this.cleanPortal();

        // create list element and add correct position
        const listElement: HTMLUListElement = document.createElement('ul');
        listElement.className = 'contextMenu__list';
        listElement.style.top = `${top}px`;
        listElement.style.left = `${left}px`;

        // create options
        this.options.forEach(({onClick, label}: ContextMenuOption) => {
            const listItemElement: HTMLLIElement = document.createElement('li');
            const buttonElement: HTMLButtonElement = document.createElement('button');

            listItemElement.className = "contextMenu__listItem";
            buttonElement.innerText = label;

            buttonElement.addEventListener('click', () => {
                onClick();
            });

            listItemElement.appendChild(buttonElement);
            listElement.appendChild(listItemElement);
        });

        this.portalElement.appendChild(listElement);
    }

    private buildContextMenu(): void {
        const menuButton: HTMLDivElement = this.createMenuButtonElement();
        menuButton.title = 'Open context menu';

        menuButton.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;
            const {left, top} = target.getBoundingClientRect();
            this.createListElement(left, top);
            this.isOpen = true;
        })

        this.parentElement.appendChild(menuButton);
    }


    private init(): void {
        this.buildContextMenu();
    }

}