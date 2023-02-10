import {Map} from "../../../Map/Map";
import {Main} from "../../../../Main";
import {EngineObject} from "../../../../data/types";
import {ObjectsListBuilder} from "../../ObjectsListBuilder";
import {DOM} from "../../../DOM";
import {SelectOption} from "../../../utils/types";
import {TileSets as TileSetsArray} from "../../../../data/tileSets";
import {TileSetInterface} from "../../../../data/tileSets/types";
import {Select} from "../../../utils/Select";
import {GAME_DATA} from "../../../../data";
import {GAME_OBJECTS_OPTIONS} from "./const";

export class ObjectsContent {
    private dom: DOM;
    private map: Map;
    private main: Main;
    private objects: Array<EngineObject>;
    private objectsListBuilder: ObjectsListBuilder
    private DOM: {
        objectsContainer: HTMLDivElement;
    }

    constructor(main: Main) {
        this.dom = main.dom;
        this.map = main.map;
        this.main = main;
        this.DOM = {
            objectsContainer: document.querySelector('#current-sprite-container')
        }
        this.objectsListBuilder = new ObjectsListBuilder(this.main);
        this.objects = [];
        this.init();
    }


    private createSelect(): void {
        const onChange = ({value}: SelectOption) => {
            console.log(1);
        }

        new Select('content-objects-select', GAME_OBJECTS_OPTIONS, onChange)
    }

    private init(): void {
        this.createSelect();
    }
}