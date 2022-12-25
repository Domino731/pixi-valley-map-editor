import {SelectOption} from "./types";

export class Select {
    // id of <ul> element needed to inject options list
    private listId: string;
    private options: Array<{ label: string, value: string }>;
    private button: HTMLButtonElement;
    private list: HTMLDivElement;

    constructor(listId: string, options: Array<SelectOption>, onChange: (v: SelectOption) => void) {
        this.listId = listId;
        this.button = document.querySelector(`#${listId} button`);
        this.list = document.querySelector(`#${listId} ul`);
        this.options = options;
        this.init(onChange);
    }

    private buttonClickEvent(): void {
        this.button.addEventListener('click', () => {
            this.list.classList.remove('hide');
        });
    }

    private createOptionsList(onChange: (v: SelectOption) => void): void {
        this.options.forEach((el: SelectOption) => {
            const option: HTMLLIElement = document.createElement('li');
            const optionButton: HTMLButtonElement = document.createElement('button');
            optionButton.addEventListener("click", () => {
                this.list.classList.add('hide');
                this.button.innerText = el.label;
                onChange(el);
            })
            option.className = 'select-item';
            optionButton.innerText = el.label;
            option.appendChild(optionButton);

            this.list.appendChild(option);
        });
    }

    private setButtonPlaceholder(): void {
        this.button.innerText = 'Choose from list'
    }

    private init(onChange: (v: { label: string, value: string }) => void): void {
        this.setButtonPlaceholder();
        this.createOptionsList(onChange);
        this.buttonClickEvent();
    }
}