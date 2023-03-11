import {SelectOption} from "./types";
import {hide, show} from "./toggleElementVisibility";

/** Create select component */
export class Select {
    // id of <ul> element needed to inject options list
    private listId: string;
    // an array with options for select
    private options: Array<{ label: string, value: string }>;
    // select button needed to toggle list visibility
    private button: HTMLButtonElement;
    // <ul> element needed to inject options
    private readonly list: HTMLDivElement;
    // the option that is visible at start
    private readonly startOption: string | null;
    // flag indicates if list open or not
    private isListOpen: boolean;

    /**
     * @Param listId - id of select list
     * @Param options - options array
     * @Param onChange - callback, which will be called each time the option is clicked
     * */
    constructor(listId: string, options: Array<SelectOption>, onChange: (v: SelectOption) => void, startOption?: string) {
        this.listId = listId;
        this.button = document.querySelector(`#${listId} button`);
        this.list = document.querySelector(`#${listId} ul`);
        this.startOption = startOption ?? null;
        this.options = options;
        this.isListOpen = false;
        this.init(onChange);
    }

    /** Add click event for button to toggle list visibility */
    private buttonClickEvent(): void {
        this.button.addEventListener('click', () => {
            show(this.list);
            setTimeout(() => {
                this.isListOpen = true
            }, 1)
        });
    }

    /** Create options list
     * @Param onChange - callback, which will be called each time the option is clicked
     * */
    private createOptionsList(onChange: (v: SelectOption) => void): void {
        this.options.forEach((el: SelectOption) => {
            // create elements
            const option: HTMLLIElement = document.createElement('li');
            const optionButton: HTMLButtonElement = document.createElement('button');
            // set class name & label
            option.className = 'select-item';
            optionButton.innerText = el.label;
            // add click event - hide list, set current option and call onChange() callback
            optionButton.addEventListener("click", () => {
                hide(this.list);
                this.isListOpen = false;
                this.button.innerText = el.label;
                onChange(el);
            })
            option.appendChild(optionButton);
            this.list.appendChild(option);
        });
    }

    /** detect click that is outside the list, if so then hide list  */
    private listOutsideClick(): void {
        document.addEventListener('click', (event) => {
            if (this.isListOpen)
                if (this.list && !this.list.contains(event.target as HTMLElement)) {
                    hide(this.list);
                    this.isListOpen = false;
                }
        });
    }

    /** set button text */
    private setButtonPlaceholder(): void {
        this.button.innerText = this.startOption ?? 'Choose from list'
    }

    /** invoke class logic */
    private init(onChange: (v: { label: string, value: string }) => void): void {
        this.setButtonPlaceholder();
        this.createOptionsList(onChange);
        this.buttonClickEvent();
        this.listOutsideClick();
    }
}