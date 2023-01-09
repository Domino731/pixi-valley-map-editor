import {EngineObjectWithStages, SpriteSize} from "../../data/types";
import {SpritesConfig} from "../../data/spritesConfig";
import {Main} from "../../Main";

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
        objects.forEach((el) => {
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
                image.style.height = `${16}px`;

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
                if (el.stages) {
                    const stages = el.stages as Array<any>;
                    stages.forEach((stage, index) => {
                        const mainObjectWrapper: HTMLDivElement = document.createElement('div');
                        mainObjectWrapper.className = 'engineObject__wrapper'

                        const image: HTMLDivElement = document.createElement('div');
                        image.style.backgroundImage = `url(./src/sprites/${el.sprite.src})`;
                        image.style.backgroundPosition = `-${el.sprite.position.x * spriteSize.cellWidth}px -${el.sprite.position.y * spriteSize.cellHeight}px`;
                        image.style.width = `${16}px`;
                        image.style.height = `${16}px`;

                        const title: HTMLParagraphElement = document.createElement('p');

                        title.innerText = `Stage ${index}`;

                        mainObjectWrapper.appendChild(image);
                        mainObjectWrapper.appendChild(title);

                        wrapper.appendChild(mainObjectWrapper)
                    })
                }
                const div: HTMLDivElement = document.createElement('div');
                div.style.width = `${cellWidth}px`;
                div.style.height = `${cellHeight}px`;
                div.style.backgroundImage = `url(./src/sprites/${el.sprite.src})`;
                div.style.backgroundPosition = `-${el.sprite.position.x * spriteSize.cellWidth}px -${el.sprite.position.y * spriteSize.cellHeight}px`;
                div.style.backgroundRepeat = 'no-repeat';
                div.title = el.name

                mainObjectWrapper.addEventListener('click', () => {
                    this.main.setEngineObject(el);
                });

                this.DOM.objectsContainer.appendChild(wrapper);
            }
        })
    }

}