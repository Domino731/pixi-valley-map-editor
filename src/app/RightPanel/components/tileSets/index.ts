import {Select} from "../../../utils/Select";
import {SelectOption} from "../../../utils/types";
import {TileSets as TileSetsArray} from "../../../../data/tileSets";
import {TileSetInterface} from "../../../../data/tileSets/types";

export class TileSets {
    private readonly elements: {
        container: HTMLDivElement;
    }

    constructor() {
        this.elements = {
            container: document.querySelector('#content-tile-sets-container')
        }
        this.init();
    }

    private setTileSetsContainer(): void {
        const {size: {x, y}, src} = TileSetsArray[0];
        this.elements.container.style.width = `${x}px`;
        this.elements.container.style.height = `${y}px`;
        this.elements.container.style.backgroundImage = `url("./src/sprites/${src}")`;
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