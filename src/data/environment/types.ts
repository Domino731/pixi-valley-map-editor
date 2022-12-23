import {EngineObject} from "../types";

export interface TreeObject extends EngineObject {
};

export enum TREE_NAMES {
    MAPLE = 'MAPLE',
    OAK = 'OAK',
    PINE = 'PINE',
    MAHOGANY = 'MAHOGANY'
}

export enum BUSHES_NAMES {
    SUMMER_LG = 'SUMMER_LG',
    AUTUMN_LG = 'AUTUMN_LG',
    SPRING_LG = 'SPRING_LG',
    WINTER_LG = 'WINTER_LG',

    SUMMER_MD = 'SUMMER_MD',
    AUTUMN_MD = 'AUTUMN_MD',
    SPRING_MD = 'SPRING_MD',
    WINTER_MD = 'WINTER_MD',
}

export enum TREE_ITEMS {
    WOOD = 'WOOD'
}
