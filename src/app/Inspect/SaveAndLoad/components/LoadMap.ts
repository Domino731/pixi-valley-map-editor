import {Map} from "../../../Map/Map";
import {EngineObjectTypesUnion, GameMapDataJson, GameMapTileData} from "../../../../data/types";
import {TileSets} from "../../../../data/tileSets";
import {TILE_SIZE} from "../../../../const";
import {Main} from "../../../../Main";
import {ExtendedEngineObject} from "../../../../types";

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

    private loadMap({tiles, objects}: GameMapDataJson): void {
        // TODO: remove all objects before load
        this.loadTiles(tiles);
        this.loadObjects(objects);
    }

    private loadTiles(tiles: Array<GameMapTileData>): void {
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

    private loadObjects(objects: Record<EngineObjectTypesUnion, Array<ExtendedEngineObject>>): void {
        const allObjects: Array<ExtendedEngineObject> = Object.values(objects).flat();
        allObjects.forEach(({
                                group, type, id,
                                hp, name, sprite,
                                tools, destroyable, checkboxes,
                                items, map
                            }) => {
            this.main.map.createObject({
                group,
                type,
                id,
                name,
                sprite,
                hp,
                tools,
                destroyable,
                checkboxes,
                items
            }, map.cord, false);
        })
    }

    private inputOnChange(): void {
        const onLoad = (event: ProgressEvent<FileReader>) => {
            if (typeof event.target.result === "string") {
                this.loadMap(JSON.parse(event.target.result));
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