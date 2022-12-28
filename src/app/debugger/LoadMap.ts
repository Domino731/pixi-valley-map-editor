import {EngineObject, MapJsonData, MapObjectData, SpriteSize} from "../../data/types";
import {Map} from "../Map";
import {GAME_DATA} from "../../data";
import {SpritesConfig} from "../../data/spritesConfig";

export class LoadMap {
    private DOM: {
        input: HTMLInputElement;
        map: HTMLDivElement;
    }

    constructor() {
        this.DOM = {
            input: document.querySelector('#json-map-input'),
            map: document.querySelector('#map')
        }
        this.init();
    }

    private loadMap(map: MapJsonData): void {
        const currentObjects: Array<HTMLDivElement> = document.querySelectorAll('#map div[data-object-name]') as unknown as Array<HTMLDivElement>;
        const mapContainer = document.querySelector('#map')
        // clear map from objects
        currentObjects.forEach((el: HTMLDivElement) => el.remove());

        const createObject = (data: MapObjectData) => {
            const objectConfig: EngineObject = Object.values(GAME_DATA.objects).flat().find(({id}: { id: string }) => id === data.id);
            const spriteSize: SpriteSize = SpritesConfig.find(({sprite}) => sprite === objectConfig.sprite.src).size
            const object: HTMLDivElement = document.createElement('div');

            object.dataset.objectName = objectConfig.name;
            object.style.position = "absolute";
            object.dataset.spriteSrc = objectConfig.sprite.src;
            object.dataset.spritePositionX = String(objectConfig.sprite.position.x);
            object.dataset.spritePositionY = String(objectConfig.sprite.position.y);
            object.dataset.objectPositionX = `${data.positionCords.x}`;
            object.dataset.objectPositionY = `${data.positionCords.y}`;
            object.dataset.objectGroup = objectConfig.group;
            object.dataset.objectType = objectConfig.type;

            object.style.width = `${spriteSize.cellWidth}px`;
            object.style.height = `${spriteSize.cellHeight}px`;
            object.style.left = `${16 * data.positionCords.x}px`;
            object.style.top = `${16 * data.positionCords.y}px`;
            object.style.backgroundImage = `url(./src/sprites/${objectConfig.sprite.src})`;
            object.style.backgroundPosition = `-${objectConfig.sprite.position.x * spriteSize.cellWidth}px -${objectConfig.sprite.position.y * spriteSize.cellHeight}px`;
            object.style.backgroundRepeat = 'no-repeat';

            mapContainer.appendChild(object)
        }

        // render environment - trees
        map.objects.environment.trees.map((el: MapObjectData) => createObject(el));


    }

    private inputChangeEvent(): void {
        const load = this.loadMap;

        function onChange(event: any) {
            const reader = new FileReader();
            reader.onload = onReaderLoad;
            reader.readAsText(event.target.files[0]);
        }

        function onReaderLoad(event: any) {
            load(JSON.parse(event.target.result));
        }


        this.DOM.input.addEventListener('change', onChange);
    }

    private init(): void {
        this.inputChangeEvent();
    }

}