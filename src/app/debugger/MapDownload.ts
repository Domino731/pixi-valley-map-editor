import {ENGINE_OBJECTS_TYPES, EngineObjectsTypesUnion, GroundData, MapObjectData} from "../../data/types";
import {getSpriteSrc} from "../utils/getSpriteSrc";
import {Vector} from "../../types";
import {Map} from "../Map";

export class MapDownload {
    private DOM: {
        button: HTMLButtonElement
    }

    constructor() {
        this.DOM = {
            button: document.querySelector('#download-map-btn')
        }
        this.init();
    }

    public static getObjectsData(objectType: EngineObjectsTypesUnion): Array<MapObjectData> {
        const objects: Array<HTMLDivElement> = document.querySelectorAll(`#map div[data-object-type = "${objectType}"]`) as unknown as Array<HTMLDivElement>;
        const data: Array<MapObjectData> = [];
        objects.forEach((el: HTMLDivElement) => {
            data.push({
                spriteSrc: el.dataset.spriteSrc,
                spriteCords: {
                    x: Number(el.dataset.spritePositionX),
                    y: Number(el.dataset.spritePositionY),
                },
                positionCords: {
                    x: Number(el.dataset.objectPositionX),
                    y: Number(el.dataset.objectPositionY),
                }
            })
        });
        return data;
    }

    public createMap(): void {
        const groundCells: Array<HTMLDivElement> = document.querySelectorAll('#map .cell') as unknown as Array<HTMLDivElement>;
        const groundData: Array<GroundData> = [];
        const trees: Array<MapObjectData> = MapDownload.getObjectsData(ENGINE_OBJECTS_TYPES.TREES)
        groundCells.forEach(el => {
            const bgPosition: Array<string> = el.style.backgroundPosition.split(' ');
            groundData.push({
                spriteSrc: getSpriteSrc(el.style.backgroundImage),
                spriteCords: {
                    x: parseInt(bgPosition[0]),
                    y: parseInt(bgPosition[1])
                },
                groundCellCords: {
                    x: parseInt(el.dataset.cordX),
                    y: parseInt(el.dataset.cordY),
                }
            });
        });


    }

    private buttonClickEvent(): void {
        this.DOM.button.addEventListener('click', this.createMap)
    }

    private init(): void {
        this.buttonClickEvent();
        console.log(1);
    }
}