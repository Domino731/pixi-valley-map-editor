import {Main} from "../../../../Main";
import {EngineObject, EngineObjectWithStages, SpriteSize} from "../../../../data/types";
import {SelectOption} from "../../../../utils/types";
import {Select} from "../../../../utils/Select";
import {GAME_OBJECTS_OPTIONS} from "./const";
import {CropObject} from "../../../../data/crops/types";
import {SpritesConfig} from "../../../../data/spritesConfig";
import {GAME_DATA} from "../../../../data";

/** Class responsible for objects panel
 *  Allow the user to select objects and allow him to choose a specific object and then add it to the map
 * */
export class ObjectsContent {
    /** Main class */
    private readonly main: Main;
    /** html elements */
    private readonly elements: {
        objectsContainer: HTMLDivElement;
    }

    constructor(main: Main) {
        this.main = main;
        this.elements = {
            objectsContainer: document.querySelector('#current-sprite-container')
        }
        this.init();
    }

    /** Remove all elements from objects container */
    private cleanObjectsContainer(): void {
        this.elements.objectsContainer.innerHTML = '';
    }

    /** create list with objects, user after object click can pass that object into the map */
    public createObjectsList(objects: Array<EngineObjectWithStages>): void {
        // clean container to avoid multiple objects
        this.cleanObjectsContainer();
        // create list
        objects.forEach((e) => {
            const el = e as CropObject;
            const spriteSize: SpriteSize | undefined = SpritesConfig.find(({sprite}) => sprite === el.sprite.src)?.size
            if (spriteSize) {
                // create elements
                const wrapper: HTMLDivElement = document.createElement('div');
                const mainObjectWrapper: HTMLDivElement = document.createElement('div');
                const image: HTMLDivElement = document.createElement('div');
                const icon: HTMLElement = document.createElement('i');
                const title: HTMLParagraphElement = document.createElement('p');
                const list: HTMLUListElement = document.createElement('ul');
                // set their styles
                mainObjectWrapper.className = 'engineObject__wrapper mb--4'
                image.style.backgroundImage = `url(./src/sprites/${el.sprite.src})`;
                image.style.backgroundPosition = `-${el.sprite.position.x * spriteSize.cellWidth}px -${el.sprite.position.y * spriteSize.cellHeight}px`;
                image.style.width = `${16}px`;
                image.style.height = `${32}px`;
                icon.className = 'fa-solid fa-chevron-down';
                list.className = 'pt--8 pb--8 pl--24';
                // set title
                let objectTitle = el.name;
                if (el.stages?.length) {
                    objectTitle += ` (${el.stages.length})`;
                }
                title.innerText = objectTitle;
                title.className = 'text--white'
                // create nodes structure
                mainObjectWrapper.appendChild(image);
                mainObjectWrapper.appendChild(title);
                wrapper.appendChild(mainObjectWrapper)
                // creating stages list
                const listId = `object-stages-list-${el.id}`
                if (el.stages?.length) {
                    const stages: Array<EngineObject> = el.stages as Array<EngineObject>;

                    stages.forEach((stage: EngineObject, index: number) => {
                        // create elements
                        const mainObjectWrapper: HTMLLIElement = document.createElement('li');
                        const image: HTMLDivElement = document.createElement('div');
                        const title: HTMLParagraphElement = document.createElement('p');
                        // create image position
                        let imageYOffset: number = spriteSize.cellHeight * stage.sprite.position.y;
                        let imageXOffset: number = spriteSize.cellWidth * stage.sprite.position.x;
                        // set styles
                        mainObjectWrapper.className = 'stageObject__listItem text flex flex__align--center pl--10 mb--6 text--whiteHover'
                        image.style.backgroundPosition = `-${imageXOffset}px -${imageYOffset}px`;
                        image.style.backgroundImage = `url(./src/sprites/${stage.sprite.src})`;
                        image.style.width = `${16}px`;
                        image.style.height = `${32}px`;
                        title.className = 'text--grey pl--10'
                        // set title
                        // @ts-ignore, fix later
                        let innerText = `Stage ${stage.stage}`;
                        if (index === el.stages.length - 1) {
                            innerText += ' (Harvest)'
                        }
                        title.innerText = innerText;
                        // create node structure
                        mainObjectWrapper.appendChild(image);
                        mainObjectWrapper.appendChild(title);
                        // add a click event so that the user can add this object to the map
                        mainObjectWrapper.addEventListener('click', () => {
                            this.main.setEngineObject(stage);
                        });
                        // add item to the list
                        list.appendChild(mainObjectWrapper)
                    });

                    list.id = listId;
                    list.style.display = 'none';
                    // create node structure
                    wrapper.appendChild(list);
                    mainObjectWrapper.appendChild(icon)
                }

                // add click event for wrapper, if object has stages then show stages list otherwise select object
                mainObjectWrapper.addEventListener('click', () => {
                    if (!el.stages?.length) {
                        this.main.setEngineObject(el);
                    } else {
                        const isVisible: boolean = list.style.display === 'block';
                        list.style.display = isVisible ? 'none' : 'block';
                        if (isVisible) {
                            icon.classList.remove('stageObject__iconActive')
                        } else {
                            icon.classList.add('stageObject__iconActive')
                        }

                    }
                });

                this.elements.objectsContainer.appendChild(wrapper);
            }
        })
    }

    /** create select with available objects (trees, bushes...) */
    private createSelect(): void {
        // on option click create list with new objects
        const onChange = ({value}: SelectOption) => {
            this.createObjectsList(value);
        }
        new Select('content-objects-select', GAME_OBJECTS_OPTIONS, onChange, 'Trees')
    }

    /** invoke class logic */
    private init(): void {
        this.createObjectsList(GAME_DATA.objects.Trees);
        this.createSelect();
    }
}