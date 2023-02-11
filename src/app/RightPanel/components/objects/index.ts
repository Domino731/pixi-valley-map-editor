import {Map} from "../../../Map/Map";
import {Main} from "../../../../Main";
import {EngineObjectWithStages, SpriteSize} from "../../../../data/types";
import {SelectOption} from "../../../utils/types";
import {Select} from "../../../utils/Select";
import {GAME_OBJECTS_OPTIONS} from "./const";
import {CropObject} from "../../../../data/crops/types";
import {SpritesConfig} from "../../../../data/spritesConfig";

export class ObjectsContent {
    private main: Main;
    private elements: {
        objectsContainer: HTMLDivElement;
    }

    constructor(main: Main) {
        this.main = main;
        this.elements = {
            objectsContainer: document.querySelector('#current-sprite-container')
        }
        this.init();
    }

    private cleanObjectsContainer(): void {
        this.elements.objectsContainer.innerHTML = '';
    }

    public createObjectsList(objects: Array<EngineObjectWithStages>): void {
        this.cleanObjectsContainer();
        objects.forEach((e) => {
            const el = e as CropObject;

            const spriteSize: SpriteSize | undefined = SpritesConfig.find(({sprite}) => sprite === el.sprite.src)?.size
            if (spriteSize) {
                const {cellWidth, cellHeight} = spriteSize;

                const wrapper: HTMLDivElement = document.createElement('div');

                const mainObjectWrapper: HTMLDivElement = document.createElement('div');
                mainObjectWrapper.className = 'engineObject__wrapper mb--4'

                const image: HTMLDivElement = document.createElement('div');
                image.style.backgroundImage = `url(./src/sprites/${el.sprite.src})`;
                image.style.backgroundPosition = `-${el.sprite.position.x * spriteSize.cellWidth}px -${el.sprite.position.y * spriteSize.cellHeight}px`;
                image.style.width = `${16}px`;
                image.style.height = `${32}px`;

                const icon = document.createElement('i');
                icon.className = 'fa-solid fa-chevron-down';

                const title: HTMLParagraphElement = document.createElement('p');
                let objectTitle = el.name;
                if (el.stages?.length) {
                    objectTitle += ` (${el.stages.length})`;
                }
                title.innerText = objectTitle;
                title.className = 'text--white'

                mainObjectWrapper.appendChild(image);
                mainObjectWrapper.appendChild(title);
                wrapper.appendChild(mainObjectWrapper)
                // creating stages list
                const listId = `object-stages-list-${el.id}`
                const list = document.createElement('ul');
                list.className = 'pt--8 pb--8 pl--24';

                if (el.stages?.length) {
                    const stages = el.stages as Array<any>;

                    stages.forEach((stage, index) => {
                        const mainObjectWrapper: HTMLLIElement = document.createElement('li');
                        mainObjectWrapper.className = 'stageObject__listItem text flex flex__align--center pl--10 mb--6 text--whiteHover'

                        // create image positions
                        let imageYOffset: number = 0;
                        let imageXOffset: number = 0;


                        imageYOffset = (spriteSize.cellHeight * stage.sprite.position.y);
                        imageXOffset = (spriteSize.cellWidth * stage.sprite.position.x);

                        const image: HTMLDivElement = document.createElement('div');
                        image.style.backgroundPosition = `-${imageXOffset}px -${imageYOffset}px`;

                        image.style.backgroundImage = `url(./src/sprites/${stage.sprite.src})`;

                        image.style.width = `${16}px`;
                        image.style.height = `${32}px`;

                        const title: HTMLParagraphElement = document.createElement('p');

                        let innerText = `Stage ${stage.stage}`;
                        if (index === el.stages.length - 1) {
                            innerText += ' (Harvest)'
                        }
                        title.className = 'text--grey pl--10'
                        title.innerText = innerText;

                        mainObjectWrapper.appendChild(image);
                        mainObjectWrapper.appendChild(title);

                        mainObjectWrapper.addEventListener('click', () => {
                            this.main.setEngineObject(stage);
                            console.log('trees');
                        });

                        list.appendChild(mainObjectWrapper)
                    });

                    list.id = listId;
                    list.style.display = 'none';
                    wrapper.appendChild(list);


                    mainObjectWrapper.appendChild(icon)
                }

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

    private createSelect(): void {
        const onChange = ({value}: SelectOption) => {
            this.createObjectsList(value);
        }

        new Select('content-objects-select', GAME_OBJECTS_OPTIONS, onChange)
    }

    private init(): void {
        this.createSelect();
    }
}