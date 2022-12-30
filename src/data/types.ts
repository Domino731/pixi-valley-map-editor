import {TREE_ITEMS, TREE_NAMES} from "./environment/types";
import {TOOLS} from "./tools/types";
import {Vector} from "../types";

export interface Checkbox {
    x: number,
    y: number,
    width: number,
    height: number
}


export interface EngineObject {
    group: keyof typeof ENGINE_OBJECT_GROUPS,
    type: keyof typeof ENGINE_OBJECTS_TYPES,
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

export interface SpriteSize {
    cellWidth: number,
    cellHeight: number,
    height: number,
    width: number
}

export interface SpriteConfig {
    sprite: string,
    spriteContainerWidth?: number;
    size: SpriteSize
}

export const SPRITE_SRC = {
    BUSHES_DOUBLE_SM_PNG: 'bushes_double_sm.png',
    BUSHES_LG: 'bushes_lg.png',
    BUSHES_MD: 'bushes_md.png',
    BUSHES_SM: 'bushes_sm.png',
    MAHOGANY_STAGE_5: 'tree_stage_5_mahogany.png',
    MAPLE_STAGE_5: 'tree_stage_5_maple.png',
    OAK_STAGE_5: 'tree_stage_5_oak.png',
    PINE_STAGE_5: 'tree_stage_5_pine.png',
    OUTDOORS_SPRING: 'outdoors_spring.png',
    TREE_STAGE_1: 'trees-stage-1.png',
    TREE_STAGE_2: 'trees-stage-2.png',
    TREE_STAGE_3: 'trees-stage-3.png',
    TREE_STAGE_4: 'trees-stage-4.png',

    // resources
    RESOURCES_32: 'resources-32.png',
    RESOURCES_16: 'resources-16.png'
}

export interface GroundData {
    spriteSrc: string;
    spriteCords: Vector;
    groundCellCords: Vector;
}

export interface MapObjectData {
    id: string,
    spriteSrc: string;
    spriteCords: Vector;
    positionCords: Vector;
}

export enum ENGINE_OBJECT_GROUPS {
    ENVIROMENT = "ENVIROMENT"
}

export enum ENGINE_OBJECTS_TYPES {
    TREES = 'TREES',
    RESOURCES_32 = 'RESOURCES_32',
    RESOURCES_16 = 'RESOURCES_16'
}

export interface MapJsonData {
    ground: Array<GroundData>;
    objects: {
        environment: {
            trees: Array<MapObjectData>
        }
    }
}

export type EngineObjectsTypesUnion = keyof typeof ENGINE_OBJECTS_TYPES;