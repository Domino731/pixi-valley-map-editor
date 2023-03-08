import {EngineObjectTypesUnion} from "../../../data/types";
import {INSPECT_WORLD_OBJECT_AMOUNT_ELEMENTS} from "./const";

export class InspectWorld {
    private readonly buttonElements: Array<HTMLButtonElement>;
    private readonly sectionElements: Array<HTMLDivElement>;

    constructor() {
        this.buttonElements = document.querySelectorAll('#inspect-world-buttons button') as unknown as Array<HTMLButtonElement>;
        this.sectionElements = document.querySelectorAll('#inspect-world-section div[data-section-panel-name]') as unknown as Array<HTMLDivElement>;
        this.init();
    }

    private openSection(buttonName: EngineObjectTypesUnion): void {
        this.sectionElements.forEach((sectionElement: HTMLDivElement) => {
            if (buttonName === sectionElement.dataset.sectionPanelName) {
                sectionElement.classList.remove('hide');
            } else {
                sectionElement.classList.add('hide');
            }
        })
    }

    private setAllButtonsDisabled(): void {
        this.buttonElements.forEach((buttonElement: HTMLButtonElement) => buttonElement.className = 'inspect__panelButton inspect__panelButton--disabled');
    }

    private buttonClickEvents(): void {
        this.buttonElements.forEach((buttonElement: HTMLButtonElement) => {
            buttonElement.addEventListener('click', (e) => {
                this.setAllButtonsDisabled();
                buttonElement.className = 'inspect__panelButton inspect__panelButton--active'
                this.openSection(buttonElement.dataset.sectionName as EngineObjectTypesUnion)
            })
        })
    }

    private init(): void {
        this.buttonClickEvents();
        // new InspectWorldObjects().build();
    }


    // STATIC METHODS

    public static updateObjectAmountText(objectType: EngineObjectTypesUnion, amount: number): void {
        INSPECT_WORLD_OBJECT_AMOUNT_ELEMENTS[objectType].innerText = `${amount}`;
    }

}