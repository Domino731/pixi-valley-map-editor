import {TREE_ITEMS, TREE_NAMES} from "./environment/types";
import {TOOLS} from "./tools/types";

export interface Checkbox {
    x: number,
    y: number,
    width: number,
    height: number
}


export interface EngineObject {
    id: string,
    name: string,
    hp: number,
    sprite: {
        src: string,
        position: {
            x: number,
            y: number,
        }
    },
    tools: Array<keyof typeof TOOLS>,
    destroyable: boolean,
    checkboxes: Array<Checkbox>,
    items: Array<string>
}

export enum FOOD_ITEMS {
    STRAWBERRY = "STRAWBERRY"
}