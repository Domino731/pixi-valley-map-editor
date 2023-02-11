import {Main} from "../../Main";
import {ObjectsContent} from "./components/objects";
import {hide, show} from "../utils/toggleElementVisibility";
import {setPanelButtonActive, setPanelButtonDisabled} from "../utils/setPanelButton";
import {TileSets} from "./components/tileSets";

export class Content {
    private readonly main: Main;
    private readonly elements: {
        objectsButton: HTMLButtonElement;
        tileSetsButton: HTMLButtonElement;
        objectsSection: HTMLDivElement;
        tileSetsSection: HTMLDivElement;
        objectsContainer: HTMLDivElement;
        tileSetsContainer: HTMLDivElement;
    }

    constructor(main: Main) {
        this.main = main;
        this.elements = {
            objectsButton: document.querySelector('#context-toggle-objects-button'),
            tileSetsButton: document.querySelector('#context-toggle-tile-sets-button'),
            objectsSection: document.querySelector('#content-objects-section'),
            tileSetsSection: document.querySelector('#content-tile-sets-section'),
            objectsContainer: document.querySelector('#content-objects-list-container'),
            tileSetsContainer: document.querySelector('#content-tiles-container'),
        }

        // init logic
        this.init();
    }

    private buttonsOnClick(): void {
        this.elements.objectsButton.addEventListener('click', () => {
            hide(this.elements.tileSetsSection);
            hide(this.elements.tileSetsContainer);
            show(this.elements.objectsSection);
            show(this.elements.objectsContainer);
            setPanelButtonDisabled(this.elements.tileSetsButton);
            setPanelButtonActive(this.elements.objectsButton);
        });
        this.elements.tileSetsButton.addEventListener('click', () => {
            hide(this.elements.objectsSection);
            hide(this.elements.objectsContainer);
            show(this.elements.tileSetsSection);
            show(this.elements.tileSetsContainer);
            setPanelButtonDisabled(this.elements.objectsButton);
            setPanelButtonActive(this.elements.tileSetsButton);
        });
    }

    /** init logic */
    private init(): void {
        this.buttonsOnClick();
        new ObjectsContent(this.main);
        new TileSets(this.main.map);
    }
}