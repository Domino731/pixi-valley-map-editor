import {Select} from "../../../../utils/Select";
import {SelectOption} from "../../../../utils/types";
import {TileSets as TileSetsArray} from "../../../../data/tileSets";
import {TileSetInterface} from "../../../../data/tileSets/types";
import {TILE_SIZE} from "../../../../const";
import {Vector} from "../../../../types";
import {Map} from "../../../Map/Map";

export class TileSets {
    public readonly map: Map;
    private readonly elements: {
        container: HTMLDivElement;
        currentTile: HTMLDivElement;
    }
    private cellPosition: Vector;
    private currentTileRect: DOMRect | null;
    private tileSetsSrc: string;
    private tileSpriteName: string;

    constructor(map: Map) {
        this.map = map;
        this.elements = {
            container: document.querySelector('#content-tile-sets-container'),
            currentTile: document.querySelector('#content-current-tile')
        }
        this.cellPosition = {
            x: 0,
            y: 0
        }
        this.currentTileRect = null;
        this.tileSetsSrc = TileSetsArray[0].src;
        this.tileSpriteName = TileSetsArray[0].name
        this.init();
    }

    private setTileSetsContainer(tileSet: TileSetInterface): void {
        const {size: {x, y}, src, name} = tileSet;
        this.tileSetsSrc = src;
        this.tileSpriteName = name;
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

    private tileOnClick(): void {
        this.elements.currentTile.addEventListener('click', () => {
            this.map.setTile(this.tileSetsSrc, this.cellPosition, this.tileSpriteName);
        })
    }

    private setCurrentTilePosition(): void {
        const {x, y} = this.cellPosition;
        this.elements.currentTile.style.transform = `translate(${x * TILE_SIZE}px, ${y * TILE_SIZE}px)`
    }

    private createSelect(): void {
        const onChange = ({value}: SelectOption) => {
            this.setTileSetsContainer(value);
        }

        const options: Array<SelectOption> = TileSetsArray.map((tileSet: TileSetInterface) => ({
            label: tileSet.name,
            value: tileSet
        }));

        new Select('content-tile-sets-select', options, onChange, 'Outdoors summer')
    }

    private init() {
        this.tileOnClick();
        this.setTileSetsContainer(TileSetsArray[0]);
        this.createSelect();
    }
}