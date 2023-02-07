import {EngineObject, EngineObjectTypesUnion} from "../../../../data/types";
import {ExtendedEngineObject} from "../../../../types";
import {ContextMenu} from "../../../utils/ContextMenu";
import {ContextMenuOption} from "../../../utils/types";

export class InspectWorldObjects {
    private readonly MapObjectsElements: Array<HTMLDivElement>;

    constructor() {

    }


    public static findObjectElement(objectMapId: string): HTMLDivElement | null {
        return document.getElementById(`${objectMapId}`) as HTMLDivElement | null;
    }

    public deleteObjectFromMap(objectMapId: string): void {
        const target: HTMLDivElement | null = InspectWorldObjects.findObjectElement(objectMapId);
        if (target) {
            target.remove();
        }
    }

    private getCheckedObjects(objectName: string) {
        const accordionElement: HTMLDivElement | null = document.querySelector(`#${this.getObjectsAccordionElementId(objectName)}`)
        const checkedObjectsIds: Array<string> = [];

        if (accordionElement) {
            const checkboxes: Array<HTMLInputElement> = accordionElement.querySelectorAll('input[type="checkbox"]') as unknown as Array<HTMLInputElement>;
            checkboxes.forEach(({dataset, checked}: HTMLInputElement) => {
                if (checked) {
                    checkedObjectsIds.push(dataset.mapId);
                }
            });
        }
        return checkedObjectsIds;
    }

    public toggleMapObjectVisibility(objectMapId: string, objectId: string, contextMenuButton: HTMLButtonElement): void {
        const checkedObjects: Array<string> = this.getCheckedObjects(objectId);

        const toggleVisibility = (mapId: string) => {
            const target: HTMLDivElement | null = InspectWorldObjects.findObjectElement(mapId);
            if (target) {
                const isVisible = !InspectWorldObjects.findObjectElement(objectMapId).classList.contains('hide');
                if (isVisible) {
                    target.classList.add('hide');
                    contextMenuButton.innerText = 'Show';
                } else {
                    target.classList.remove('hide');
                    contextMenuButton.innerText = 'Hide';
                }
            }
        }

        if (checkedObjects.includes(objectMapId)) {
            checkedObjects.forEach((el) => toggleVisibility(el))
        } else {
            toggleVisibility(objectMapId)
        }
    }

    private createObjectsListItem({name, mapId, map, id}: ExtendedEngineObject): HTMLLIElement {
        const {cord} = map;

        const liElement: HTMLLIElement = document.createElement('li');
        const mapObject: HTMLDivElement | null = document.getElementById(mapId) as HTMLDivElement | null;
        const objectNameElement: HTMLParagraphElement = document.createElement('p');
        const checkboxWrapperElement: HTMLDivElement = document.createElement('div');
        const checkboxElement: HTMLInputElement = document.createElement('input');
        const contextMenuWrapperElement: HTMLDivElement = document.createElement('div');


        checkboxWrapperElement.className = 'inspect__listCheckbox';
        checkboxElement.type = 'checkbox';
        checkboxElement.dataset.mapId = mapId;
        objectNameElement.innerText = `${cord.x}x - ${cord.y}y`;
        checkboxWrapperElement.appendChild(checkboxElement);

        contextMenuWrapperElement.className = 'inspect__listContextMenu';

        const getLabel = (): string => {
            return InspectWorldObjects.findObjectElement(mapId)?.classList.contains('hide') ? 'Show' : 'Hide';
        }

        const options: Array<ContextMenuOption> = [
            {
                label: getLabel,
                onClick: ({button}) => this.toggleMapObjectVisibility(mapId, id, button),
                hideOnClick: false
            },
            {
                label: 'Delete',
                onClick: () => {
                    this.deleteObjectFromMap(mapId);
                    liElement.remove();
                }
            },
        ]

        new ContextMenu(contextMenuWrapperElement, options);

        liElement.appendChild(checkboxWrapperElement);
        liElement.appendChild(objectNameElement);
        liElement.appendChild(contextMenuWrapperElement);
        liElement.className = 'accordion__listItem';
        liElement.addEventListener('mouseenter', () => {
            mapObject.classList.add('mapObject__active')
        });
        liElement.addEventListener('mouseleave', () => {
            mapObject.classList.remove('mapObject__active')
        });
        return liElement;
    }

    public getObjectsAccordionElementId(objectID: string): string {
        return `inspect-world-objects-accordion-${objectID}`;
    }

    private createAccordion({
                                name,
                                id
                            }: ExtendedEngineObject, objectsByName: Array<ExtendedEngineObject>): HTMLLIElement {
        const liElement: HTMLLIElement = document.createElement('li');
        const accordionButton: HTMLDivElement = document.createElement('div');

        accordionButton.className = 'accordion__button';
        accordionButton.innerHTML = `
          <p class="accordion__buttonText">${name} (${objectsByName.length})</p>
          <i class="fa-solid fa-chevron-down accordion__buttonIcon"></i>
        `
        liElement.id = this.getObjectsAccordionElementId(id);

        const objectsList: HTMLUListElement = document.createElement('ul');
        objectsList.className = 'accordion__list';
        objectsByName.forEach((el: ExtendedEngineObject) => {
            objectsList.appendChild(this.createObjectsListItem(el))
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
        const objectsByType: Array<ExtendedEngineObject> = allObjects.filter(({type}: { type: EngineObjectTypesUnion }) => type === objectsType);
        this.buildObjectsAccordionButtons(objectsByType);
    }
}