import {list} from "postcss";
import {DetectOutsideClick} from "./DetectOutsideClick";

export class ContextMenu {
    private readonly parentElement: HTMLElement;
    private readonly portalElement: HTMLElement;
    private isOpen: boolean;

    constructor(parentElement: HTMLElement | string) {
        this.parentElement = parentElement;
        this.portalElement = document.querySelector('#context-menu-portal');
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

        const listElement: HTMLUListElement = document.createElement('ul');
        listElement.className = 'contextMenu__list';
        listElement.innerHTML = '<li class="contextMenu__listItem"><button>TEST</button></li> <li class="contextMenu__listItem"><button>TEST</button></li>';
        listElement.style.top = `${top}px`;
        listElement.style.left = `${left}px`

        // new DetectOutsideClick(listElement, () => {
        //     if (this.isOpen) {
        //         this.cleanPortal();
        //     }
        // });

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