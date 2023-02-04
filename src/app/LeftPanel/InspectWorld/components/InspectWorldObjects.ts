import {EngineObject, EngineObjectTypesUnion} from "../../../../data/types";
import {ExtendedEngineObject} from "../../../../types";

export class InspectWorldObjects {
    private readonly MapObjectsElements: Array<HTMLDivElement>;

    constructor() {

    }

    public test(): void {
        console.log(1);
    }

    private createObjectsListItem() {

    }

    private createAccordion({name}: ExtendedEngineObject, objectsByName: Array<ExtendedEngineObject>): HTMLLIElement {
        const liElement: HTMLLIElement = document.createElement('li');

        const accordionButton: HTMLDivElement = document.createElement('div');
        accordionButton.className = 'accordion__button';
        accordionButton.innerHTML = `
          <p class="accordion__buttonText">${name} (${objectsByName.length})</p>
          <i class="fa-solid fa-chevron-down accordion__buttonIcon"></i>
        `

        const objectsList: HTMLUListElement = document.createElement('ul');
        objectsList.className = 'hide';
        objectsByName.forEach(() => {
            objectsList.innerHTML = `<li>TEST</li>`
        }, [])

        accordionButton.addEventListener('click', () => {
            if (objectsList.classList.contains('hide')) {
                objectsList.classList.remove('hide')
            } else {
                objectsList.classList.add('hide')
            }
        })

        liElement.appendChild(accordionButton);
        liElement.appendChild(objectsList);

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
                const objectsByName: Array<ExtendedEngineObject> = objects.filter(({name}: { name: string }) => el.name === name);
                objectsList.appendChild(this.createAccordion(el, objectsByName));
            }
        })

    }


    public build(objectsType: EngineObjectTypesUnion, allObjects: Array<ExtendedEngineObject>): void {
        const allObjectsElements = document.querySelectorAll(`#map div[data-object-type="${objectsType}"]`);
        const objectsByType: Array<ExtendedEngineObject> = allObjects.filter(({type}: { type: EngineObjectTypesUnion }) => type === objectsType);
        this.buildObjectsAccordionButtons(objectsByType);
    }
}