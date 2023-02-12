import {EngineObject} from "../../../../data/types";

export class InspectJson {
    private readonly containerElement: HTMLElement;

    constructor() {
        this.containerElement = document.querySelector('#inspect-json-container')
    }

    public build(engineObject: EngineObject) {
        this.containerElement.innerText = JSON.stringify(engineObject, undefined, 2);
    }
}