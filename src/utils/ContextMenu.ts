import {ContextMenuOption} from "./types";

/**
 * A class which is responsible for creating context menu
 * @Param parenElement - the element or element selector, where you want to place menu button
 * @Param options - array of options that will be available in menu
 * */
export class ContextMenu {
    // needed to inject button
    private readonly parentElement: HTMLElement;
    // to render the menu in the right place
    private readonly portalElement: HTMLElement;
    // options array
    private readonly options: Array<ContextMenuOption>;
    // A flag indicating whether the menu is open or not
    private isOpen: boolean;

    constructor(parentElement: HTMLElement | string, options: Array<ContextMenuOption>) {
        this.parentElement = typeof parentElement === "string" ? document.querySelector(parentElement) : parentElement;
        this.portalElement = document.querySelector("#context-menu-portal");
        this.options = options;
        this.isOpen = false;
        this.init();
    }

    /**
     * Creating menu button element with appropriate styles
     * */
    private createMenuButtonElement(): HTMLDivElement {
        const menuButtonElement: HTMLDivElement = document.createElement('div');
        menuButtonElement.className = 'contextMenu__button';
        menuButtonElement.innerHTML = '<i class="fa-solid fa-ellipsis"></i>'

        return menuButtonElement;
    }

    /**
     * clean portal's html
     * */
    private cleanPortal(): void {
        this.portalElement.innerHTML = '';
    }

    /**
     * create menu list
     * @Param left - left indent
     * @Param top - top indent
     * */
    private createListElement(left: number, top: number): void {
        // clean portal from previous one
        this.cleanPortal();

        // create list element and add correct position
        const listElement: HTMLUListElement = document.createElement('ul');
        listElement.className = 'contextMenu__list';
        listElement.style.top = `${top}px`;
        listElement.style.left = `${left}px`;

        // create options
        this.options.forEach(({onClick, label, hideOnClick}: ContextMenuOption) => {
            const listItemElement: HTMLLIElement = document.createElement('li');
            const buttonElement: HTMLButtonElement = document.createElement('button');

            listItemElement.className = "contextMenu__listItem";
            buttonElement.innerText = typeof label === 'function' ? label() : label;
            // add click event for button with passed action
            buttonElement.addEventListener('click', () => {
                // pass button & list item element, so you can change button text for example on after click hide option
                onClick({button: buttonElement, listItem: listItemElement});
                if (hideOnClick === undefined) {
                    this.cleanPortal();
                }
            });

            // add button to list
            listItemElement.appendChild(buttonElement);
            listElement.appendChild(listItemElement);
        });

        // show menu
        this.portalElement.appendChild(listElement);
    }

    /**
     * add button with click event that is responsible for toggling menu
     * */
    private buildContextMenu(): void {
        const menuButton: HTMLDivElement = this.createMenuButtonElement();
        menuButton.title = 'Open context menu';

        // add click event to button so menu list will be showing on click
        menuButton.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;
            const {left, top} = target.getBoundingClientRect();
            this.createListElement(left, top);
            this.isOpen = true;
        })

        this.parentElement.appendChild(menuButton);
    }

    /**
     * Init class logic - create menu button & menu list
     * */
    private init(): void {
        this.buildContextMenu();
    }

}