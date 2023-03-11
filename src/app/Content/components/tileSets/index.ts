import {Select} from "../../../../utils/Select";
import {SelectOption} from "../../../../utils/types";
import {TileSets as TileSetsArray} from "../../../../data/tileSets";
import {TileSetInterface} from "../../../../data/tileSets/types";
import {TILE_SIZE} from "../../../../const";
import {Vector} from "../../../../types";
import {Map} from "../../../Map/Map";
import {hide, isVisible, show} from "../../../../utils/toggleElementVisibility";

/** Class responsible for tile sets panel
 *  Display all available tile sets from assets and allow user to choose the specific tile and then add it to the map
 * */
export class TileSets {
    // map class
    public readonly map: Map;
    // html elements
    private readonly elements: {
        container: HTMLDivElement;
        currentTile: HTMLDivElement;
        selectedTile: HTMLDivElement;
    }
    // position of tile
    private tilePosition: Vector;
    // DOM rect of current tile
    private currentTileRect: DOMRect | null;
    // source of current tile set
    private tileSetsSrc: string;
    // name of current sprite sheet
    private tileSpriteName: string;

    /**
     * @Param map - Map class
     * */
    constructor(map: Map) {
        this.map = map;
        this.elements = {
            container: document.querySelector('#content-tile-sets-container'),
            currentTile: document.querySelector('#content-current-tile'),
            selectedTile: document.querySelector('#content-selected-tile')
        }
        this.tilePosition = {
            x: 0,
            y: 0
        }
        this.currentTileRect = null;
        this.tileSetsSrc = TileSetsArray[0].src;
        this.tileSpriteName = TileSetsArray[0].name
        this.init();
    }

    /** create container with tiles */
    private createTileSetsContainer(tileSet: TileSetInterface): void {
        // set attributes
        const {size: {x, y}, src, name} = tileSet;
        this.tileSetsSrc = src;
        this.tileSpriteName = name;
        // set container styles
        this.elements.container.style.width = `${x}px`;
        this.elements.container.style.height = `${y}px`;
        this.elements.container.style.backgroundImage = `url("./src/sprites/${src}")`;
        // add mousemove event for container so the "red box" will be moving with the mouse
        this.currentTileRect = this.elements.container.getBoundingClientRect();
        this.elements.container.addEventListener('mousemove', (e) => {
            if ((e.target as HTMLElement).id !== 'content-current-tile') {
                const isSelectedTileElement: boolean = (e.target as HTMLElement).id === 'content-selected-tile';
                if (isSelectedTileElement) {
                    if (isVisible(this.elements.currentTile)) {
                        hide(this.elements.currentTile)
                    }
                    return;
                } else {
                    if (!isVisible(this.elements.currentTile)) {
                        show(this.elements.currentTile)
                    }
                    const {left, top} = (e.target as HTMLElement).getBoundingClientRect();
                    const x = Math.floor((e.clientX - left) / TILE_SIZE); //x position within the element.
                    const y = Math.floor((e.clientY - top) / TILE_SIZE);  //y position within the element.
                    if (this.tilePosition.x !== x || this.tilePosition.y !== y) {
                        // set the position of the tile so that it is clear which tile has been selected
                        this.tilePosition = {x, y}
                        this.setCurrentTilePosition();
                    }
                }

            }

        })
    }

    /** add mouse leave event for container - hide current tile element  */
    private containerOnMouseLeave(): void {
        this.elements.container.addEventListener('mouseleave', () => {
            hide(this.elements.currentTile);
        })
    }

    /** select specific tile - use map.setTile() method, so it will be possible to add this tile on the map */
    private tileOnClick(): void {
        this.elements.currentTile.addEventListener('click', () => {
            const {x, y} = this.tilePosition;
            show(this.elements.selectedTile)
            this.elements.selectedTile.style.transform = `translate(${x * TILE_SIZE}px, ${y * TILE_SIZE}px)`
            this.map.setTile(this.tileSetsSrc, this.tilePosition, this.tileSpriteName);
        })
    }

    /**  set current tile (div) position */
    private setCurrentTilePosition(): void {
        const {x, y} = this.tilePosition;
        this.elements.currentTile.style.transform = `translate(${x * TILE_SIZE}px, ${y * TILE_SIZE}px)`
    }

    /** create select with all tile sets */
    private createSelect(): void {
        // on option click create new view with new tiles
        const onChange = ({value}: SelectOption) => {
            this.createTileSetsContainer(value);
        }
        // options for tile sets
        const options: Array<SelectOption> = TileSetsArray.map((tileSet: TileSetInterface) => ({
            label: tileSet.name,
            value: tileSet
        }));
        // create select logic
        new Select('content-tile-sets-select', options, onChange, 'Outdoors summer')
    }

    /** hide selected and current tile elements */
    private hideTileElements(): void {
        hide([this.elements.selectedTile, this.elements.currentTile])
    }

    /** invoke class logic */
    private init() {
        this.hideTileElements();
        this.tileOnClick();
        this.createTileSetsContainer(TileSetsArray[0]);
        this.createSelect();
        this.containerOnMouseLeave();
    }
}