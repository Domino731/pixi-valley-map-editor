import {EngineObjectWithStages, SpriteSize} from "../../data/types";
import {SpritesConfig} from "../../data/spritesConfig";
import {Main} from "../../Main";
import {CropObject} from "../../data/crops/types";
import {CROPS_PER_PANEL} from "../../data/crops/const";

export class ObjectsListBuilder {
    private DOM: {
        objectsContainer: HTMLDivElement
    }
    private main: Main;

    constructor(main: Main) {
        this.DOM = {
            objectsContainer: document.querySelector('#current-sprite-container')
        }
        this.main = main;
    }

    public prepareObjectsContainerForList(): void {
        this.DOM.objectsContainer.style.flexWrap = 'no-wrap';
        this.DOM.objectsContainer.classList.add('objectContainer__objects');
        this.DOM.objectsContainer.innerHTML = "";
    }

    public objectsListWithStages(objects: Array<EngineObjectWithStages>): void {
        this.prepareObjectsContainerForList();
        console.log(objects);
        objects.forEach((e) => {
            const el = e as CropObject;

            const spriteSize: SpriteSize | undefined = SpritesConfig.find(({sprite}) => sprite === el.sprite.src)?.size
            if (spriteSize) {
                const {cellWidth, cellHeight} = spriteSize;

                const wrapper: HTMLDivElement = document.createElement('div');

                const mainObjectWrapper: HTMLDivElement = document.createElement('div');
                mainObjectWrapper.className = 'engineObject__wrapper'

                const image: HTMLDivElement = document.createElement('div');
                image.style.backgroundImage = `url(./src/sprites/${el.sprite.src})`;
                image.style.backgroundPosition = `-${el.sprite.position.x * spriteSize.cellWidth}px -${el.sprite.position.y * spriteSize.cellHeight}px`;
                image.style.width = `${16}px`;
                image.style.height = `${32}px`;

                const title: HTMLParagraphElement = document.createElement('p');
                let objectTitle = el.name;
                if (el.stages) {
                    objectTitle += ` (${el.stages.length})`;
                }
                title.innerText = objectTitle;

                mainObjectWrapper.appendChild(image);
                mainObjectWrapper.appendChild(title);
                wrapper.appendChild(mainObjectWrapper)
                // creating stages list
                const listId = `object-stages-list-${el.id}`
                const list = document.createElement('div');

                if (el.stages) {
                    const stages = el.stages as Array<any>;


                    stages.forEach((stage, index) => {
                        const mainObjectWrapper: HTMLDivElement = document.createElement('div');
                        mainObjectWrapper.className = 'engineObject__wrapper'

                        const image: HTMLDivElement = document.createElement('div');
                        image.style.backgroundImage = `url(./src/sprites/${el.sprite.src})`;
                        image.style.backgroundPosition = `-${(spriteSize.cellWidth * CROPS_PER_PANEL.x) * index}px -${0}px`;
                        image.style.width = `${16}px`;
                        image.style.height = `${32}px`;

                        const title: HTMLParagraphElement = document.createElement('p');

                        title.innerText = `Stage ${index}`;

                        mainObjectWrapper.appendChild(image);
                        mainObjectWrapper.appendChild(title);

                        list.appendChild(mainObjectWrapper)
                    });
                    list.id = listId;
                    list.style.display = 'none';
                    wrapper.appendChild(list);
                }

                mainObjectWrapper.addEventListener('click', () => {
                    if (!el.stages) {
                        this.main.setEngineObject(el);
                    } else {
                        list.style.display = list.style.display === 'block' ? 'none' : 'block';
                    }
                });

                this.DOM.objectsContainer.appendChild(wrapper);
            }
        })
    }

}