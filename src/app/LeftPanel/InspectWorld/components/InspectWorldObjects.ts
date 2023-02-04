import {EngineObject, EngineObjectTypesUnion} from "../../../../data/types";
import {ExtendedEngineObject} from "../../../../types";

export class InspectWorldObjects {
    private readonly MapObjectsElements: Array<HTMLDivElement>;

    constructor() {

    }

    public test(): void {
        console.log(1);
    }

    private createAccordion({name}: ExtendedEngineObject): HTMLLIElement {
        const liElement: HTMLLIElement = document.createElement('li');
        
        const accordionButton: HTMLDivElement = document.createElement('div');
        accordionButton.className = 'accordion__button';
        accordionButton.innerHTML = `
          <p class="accordion__buttonText">${name}</p>
          <i class="fa-solid fa-chevron-down accordion__buttonIcon"></i>
        `

        liElement.appendChild(accordionButton);
        return liElement;
    }

    private buildObjectsAccordionButtons(objects: Array<ExtendedEngineObject>): void {
        const objectsList = document.querySelector('#inspect-world-section ul[data-world-objects-list]');
        const availableObjects: Array<string> = [];
        objectsList.innerHTML = ``;

        objects.forEach(el => {
            if (availableObjects.includes(el.name)) {
                return false;
            } else {
                availableObjects.push(el.name);
                objectsList.appendChild(this.createAccordion(el));
            }
        })

    }


    public build(objectsType: EngineObjectTypesUnion, allObjects: Array<ExtendedEngineObject>): void {
        const allObjectsElements = document.querySelectorAll(`#map div[data-object-type="${objectsType}"]`);
        const objectsByType: Array<ExtendedEngineObject> = allObjects.filter(({type}: { type: EngineObjectTypesUnion }) => type === objectsType);
        this.buildObjectsAccordionButtons(objectsByType);
    }
}