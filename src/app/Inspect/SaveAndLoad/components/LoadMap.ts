import {Map} from "../../../Map/Map";

export class LoadMap {
    private readonly elements: {
        input: HTMLInputElement;
    }

    constructor() {
        this.elements = {
            input: document.querySelector('#inspect-load-map-input')
        }
        this.init();
    }

    private inputOnChange(): void {
        const onLoad = (event: ProgressEvent<FileReader>) => {
            try {
                if (typeof event.target.result === "string") {
                    Map.loadMap(JSON.parse(event.target.result));
                }
            } catch (e) {
                console.error('An error occurred while trying to read the json file');
            }

        }

        const onChange = (event: InputEvent) => {
            const reader = new FileReader();
            reader.onload = onLoad;
            reader.readAsText((<HTMLInputElement>event.target).files[0]);
        }


        this.elements.input.addEventListener('change', onChange);
    }

    private init(): void {
        this.inputOnChange();
    }
}