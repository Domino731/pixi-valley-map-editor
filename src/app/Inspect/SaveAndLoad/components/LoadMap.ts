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
        const allCells: Array<HTMLDivElement> = document.querySelectorAll('#map .cell') as unknown as Array<HTMLDivElement>;
        allCells.forEach((cell) => {
            const {dataset: {cordX, cordY}} = cell;
            const tileIndex: number = tiles.findIndex((el) => el.cords.x === Number(cordX) && el.cords.y === Number(cordY))
            if (tileIndex !== -1) {
                const {spriteCords, spriteName} = tiles[tileIndex];
                const spriteSrc: string | undefined = TileSets.find(({name}) => name === spriteName)?.src;
                cell.style.backgroundImage = `url("./src/sprites/${spriteSrc}")`;
                cell.style.backgroundPosition = `-${spriteCords.x * TILE_SIZE}px -${spriteCords.y * TILE_SIZE}px`;
            } else {
                cell.style.backgroundImage = 'url(./src/sprites/outdoors_spring.png)';
                cell.style.backgroundPosition = `-0px -112px`;
                cell.style.backgroundRepeat = 'no-repeat'
            }
        });
    }

    private loadObjects(objects: Record<EngineObjectTypesUnion, Array<ExtendedEngineObject>>): void {
        const allPrevObjects: Array<HTMLDivElement> = document.querySelectorAll('#map div[data-object-name]') as unknown as Array<HTMLDivElement>;
        allPrevObjects.forEach((el: HTMLDivElement) => el.remove())

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
