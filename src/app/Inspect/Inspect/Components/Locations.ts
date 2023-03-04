import {ExtendedEngineObject} from "../../../../types";
import {getObjectNameById} from "../../../../utils/objectUtils";
import {ContextMenuOption} from "../../../../utils/types";
import {ContextMenu} from "../../../../utils/ContextMenu";

export class Locations {
    constructor() {
    }

    private createObjectsListItem({name, mapId, map, id}: ExtendedEngineObject): HTMLLIElement {
        const {cord} = map;

        const liElement: HTMLLIElement = document.createElement('li');
        const mapObject: HTMLDivElement | null = document.getElementById(mapId) as HTMLDivElement | null;
        const objectNameElement: HTMLParagraphElement = document.createElement('p');
        const checkboxWrapperElement: HTMLDivElement = document.createElement('div');
        const checkboxElement: HTMLInputElement = document.createElement('input');
        const contextMenuWrapperElement: HTMLDivElement = document.createElement('div');
        const visibilityButton: HTMLButtonElement = document.createElement('button');

        visibilityButton.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
        visibilityButton.className = 'inspect__visibilityButton hide'
        visibilityButton.addEventListener('click', () => {
            const target: HTMLDivElement | null = InspectWorldObjects.findObjectElement(mapId);
            if (target) {
                visibilityButton.classList.add('hide');
                target.classList.remove('hide');
            }
        })

        checkboxWrapperElement.className = 'inspect__listCheckbox';
        checkboxElement.type = 'checkbox';
        checkboxElement.dataset.mapId = mapId;
        objectNameElement.innerText = `${cord.x}x - ${cord.y}y`;
        checkboxWrapperElement.appendChild(checkboxElement);

        contextMenuWrapperElement.className = 'inspect__listContextMenu';

        const getLabel = (): string => {
            return 'Hide';
        }

        const options: Array<ContextMenuOption> = [
            {
                label: getLabel,
                onClick: () => console.log(1),
                // onClick: ({button}) => this.toggleMapObjectVisibility(mapId, id, button, visibilityButton),
                hideOnClick: false
            },
            {
                label: 'Delete',
                onClick: () => {
                    // this.deleteObjectFromMap(mapId);
                    // liElement.remove();
                }
            },
        ]

        new ContextMenu(contextMenuWrapperElement, options);

        liElement.appendChild(checkboxWrapperElement);
        liElement.appendChild(objectNameElement);
        liElement.appendChild(contextMenuWrapperElement);
        liElement.appendChild(visibilityButton);

        liElement.className = 'accordion__listItem';
        liElement.addEventListener('mouseenter', () => {
            mapObject.classList.add('mapObject__active')
        });
        liElement.addEventListener('mouseleave', () => {
            mapObject.classList.remove('mapObject__active')
        });
        return liElement;
    }

    public build(allObjects: Array<ExtendedEngineObject>, objectId: string): void {
        const targetObjects = allObjects.filter(({id}) => id === objectId);
    }
}