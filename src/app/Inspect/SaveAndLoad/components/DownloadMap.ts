import {Main} from "../../../../Main";
import {ENGINE_OBJECTS_TYPES, GameMapDataJson} from "../../../../data/types";
import {downloadJson} from "../../../../utils/downloadJson";
import {Trees} from "../../../../data/environment/trees";

export class DownloadMap {
    private readonly main: Main;
    private readonly elements: {
        button: HTMLButtonElement;
    }

    constructor(main: Main) {
        this.main = main;
        this.elements = {
            button: document.querySelector('#inspect-download-button')
        }
        this.init();
    }

    private createMapJson(): GameMapDataJson {
        return ({
            objects: {
                [ENGINE_OBJECTS_TYPES.TREES]: this.main.getDataObjects(ENGINE_OBJECTS_TYPES.TREES),
                [ENGINE_OBJECTS_TYPES.RESOURCES_32]: this.main.getDataObjects(ENGINE_OBJECTS_TYPES.RESOURCES_32),
                [ENGINE_OBJECTS_TYPES.RESOURCES_16]: this.main.getDataObjects(ENGINE_OBJECTS_TYPES.RESOURCES_16),
                [ENGINE_OBJECTS_TYPES.BUILDING]: this.main.getDataObjects(ENGINE_OBJECTS_TYPES.BUILDING),
                [ENGINE_OBJECTS_TYPES.CROPS]: this.main.getDataObjects(ENGINE_OBJECTS_TYPES.CROPS),
                [ENGINE_OBJECTS_TYPES.BUSHES]: this.main.getDataObjects(ENGINE_OBJECTS_TYPES.BUSHES)
            },
            tiles: this.main.getDataTiles().map(el => ({
                ...el,
                cords: {
                    x: el.cords.x,
                    // prefix for engine
                    y: this.main.map.size.x - el.cords.y - 1
                }
            })),
            mapSize: {
                width: this.main.map.size.x,
                height: this.main.map.size.y
            }
        })
    }

    private buttonOnClick(): void {
        this.elements.button.addEventListener('click', () => {
            console.log("MAP DATA: ", this.createMapJson());
            downloadJson(this.createMapJson(), 'pixi-valley-map');
        });
    }

    private init(): void {
        this.buttonOnClick();
    }
}