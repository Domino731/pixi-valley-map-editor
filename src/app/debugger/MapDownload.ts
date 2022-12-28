import {GroundData} from "../../data/types";
import {getSpriteSrc} from "../utils/getSpriteSrc";
import {Vector} from "../../types";

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

    private createMap(): void {
        const groundCells: Array<HTMLDivElement> = document.querySelectorAll('#map .cell') as unknown as Array<HTMLDivElement>;
        const groundData: Array<GroundData> = []
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
        })

        console.log(groundData);

    }

    private buttonClickEvent(): void {
        this.DOM.button.addEventListener('click', this.createMap)
    }

    private init(): void {
        this.buttonClickEvent();
        console.log(1);
    }
}