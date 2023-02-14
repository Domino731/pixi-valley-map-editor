import {Map} from "../../../Map/Map";
import {GameMapDataJson, GameMapTileData} from "../../../../data/types";
import {TileSets} from "../../../../data/tileSets";
import {TILE_SIZE} from "../../../../const";
import {Main} from "../../../../Main";

export class LoadMap {
    private readonly elements: {
        input: HTMLInputElement;
    }
    public readonly main: Main;

    constructor(main: Main) {
        this.elements = {
            input: document.querySelector('#inspect-load-map-input')
        }
        this.main = main;
        this.init();
    }

    public loadMap({tiles}: GameMapDataJson) {
        this.loadTiles(tiles)
    }

    public loadTiles(tiles: Array<GameMapTileData>) {
        tiles.forEach((el: GameMapTileData) => {
            this.main.pushToDataTiles(el);
            const {cords, spriteCords, spriteName} = el;
            const spriteSrc: string | undefined = TileSets.find(({name}) => name === spriteName)?.src;
            const cell: HTMLDivElement | null = document.querySelector(`#map div[data-cord-x="${cords.x}"][data-cord-y="${cords.y}"]`)
            if (spriteName && spriteSrc) {
                cell.style.backgroundImage = `url("./src/sprites/${spriteSrc}")`;
                cell.style.backgroundPosition = `-${spriteCords.x * TILE_SIZE}px -${spriteCords.y * TILE_SIZE}px`;
            }
        })
    }


    private inputOnChange(): void {
        const onLoad = (event: ProgressEvent<FileReader>) => {
            try {
                if (typeof event.target.result === "string") {
                    this.loadMap(JSON.parse(event.target.result));
                }
            } catch (e) {
                console.error('An error occurred while trying to read the json file');
            }

        }

        const onChange = (event: InputEvent) => {
            const reader = new FileReader();
            reader.onload = onLoad;
            reader.readAsText((<HTMLInputElement>event.target).files[0]);
        }


        this.elements.input.addEventListener('change', onChange);
    }

    private init(): void {
        this.inputOnChange();
    }
}