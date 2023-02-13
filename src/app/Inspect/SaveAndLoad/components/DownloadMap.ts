import {Map} from "../../../Map/Map";
import {Main} from "../../../../Main";

export class DownloadMap {
    private readonly main: Main;
    private readonly elements: {
        button: HTMLButtonElement;
    }

    constructor(main: Main) {
        this.main = main;
        this.elements = {
            button: document.querySelector('#inspect-download-button')
        }
        this.init();
    }

    private buttonOnClick(): void {
        this.elements.button.addEventListener('click', () => {
            console.log(this.main.mapSize)
        });
    }

    private init(): void {
        this.buttonOnClick();
    }
}