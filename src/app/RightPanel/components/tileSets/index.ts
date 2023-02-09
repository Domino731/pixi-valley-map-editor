import {Select} from "../../../utils/Select";
import {SelectOption} from "../../../utils/types";
import {TileSets as TileSetsArray} from "../../../../data/tileSets";
import {TileSetInterface} from "../../../../data/tileSets/types";
import {TILE_SIZE} from "../../../../const";
import {Vector} from "../../../../types";

export class TileSets {
    private readonly elements: {
        container: HTMLDivElement;
        currentTile: HTMLDivElement;
    }
    private cellPosition: Vector;
    private currentTileRect: DOMRect | null;

    constructor() {
        this.elements = {
            container: document.querySelector('#content-tile-sets-container'),
            currentTile: document.querySelector('#content-current-tile')
        }
        this.cellPosition = {
            x: 0,
            y: 0
        }
        this.currentTileRect = null;
        this.init();
    }

    private setTileSetsContainer(): void {
        const {size: {x, y}, src} = TileSetsArray[0];
        this.elements.container.style.width = `${x}px`;
        this.elements.container.style.height = `${y}px`;
        this.elements.container.style.backgroundImage = `url("./src/sprites/${src}")`;
        this.currentTileRect = this.elements.container.getBoundingClientRect();
        this.elements.container.addEventListener('mousemove', (e) => {
            if ((e.target as HTMLElement).id !== 'content-current-tile') {
                const {left, top} = (e.target as HTMLElement).getBoundingClientRect();
                const x = Math.floor((e.clientX - left) / TILE_SIZE); //x position within the element.
                const y = Math.floor((e.clientY - top) / TILE_SIZE);  //y position within the element.
                if (this.cellPosition.x !== x || this.cellPosition.y !== y) {
                    this.cellPosition = {x, y}
                    this.setCurrentTilePosition();
                }
            }

        })
    }

    private setCurrentTilePosition(): void {
        const {x, y} = this.cellPosition;
        this.elements.currentTile.style.transform = `translate(${x * TILE_SIZE}px, ${y * TILE_SIZE}px)`
    }

    private setHoverElement(): void {
//   // e = Mouse click event.
//       var rect = e.target.getBoundingClientRect();
//       var x = e.clientX - rect.left; //x position within the element.
//       var y = e.clientY - rect.top;  //y position within the element.
//       console.log("Left? : " + x + " ; Top? : " + y + ".");
    }

    private createSelect(): void {
        const onChange = ({value}: SelectOption) => {
            console.log(1);
        }

        const options: Array<SelectOption> = TileSetsArray.map(({src, name}: TileSetInterface) => ({
            label: name,
            value: src
        }));

        new Select('content-tile-sets-select', options, onChange)
    }

    private init() {
        this.setTileSetsContainer();
        this.createSelect();
    }
}