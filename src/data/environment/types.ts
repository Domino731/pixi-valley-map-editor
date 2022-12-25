import {EngineObject} from "../types";

export interface TreeObject extends EngineObject {
};

export enum TREE_NAMES {
    MAPLE_SUMMER = 'MAPLE_SUMMER',
    MAPLE_AUTUMN = 'MAPLE_AUTUMN',
    MAPLE_WINTER = 'MAPLE_WINTER',
    MAPLE_SPRING = 'MAPLE_SPRING',

    OAK_SUMMER = 'OAK_SUMMER',
    OAK_AUTUMN = 'OAK_AUTUMN',
    OAK_WINTER = 'OAK_WINTER',
    OAK_SPRING = 'OAK_SPRING',

    PINE_SUMMER = 'PINE_SUMMER',
    PINE_AUTUMN = 'PINE_AUTUMN',
    PINE_WINTER = 'PINE_WINTER',
    PINE_SPRING = 'PINE_SPRING',

    MAHOGANY_SUMMER = 'MAHOGANY_SUMMER',
    MAHOGANY_AUTUMN = 'MAHOGANY_AUTUMN',
    MAHOGANY_WINTER = 'MAHOGANY_WINTER',
    MAHOGANY_SPRING = 'MAHOGANY_SPRING',
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

    SUMMER_SM = 'SUMMER_SM',
    AUTUMN_SM = 'AUTUMN_SM',
    SPRING_SM = 'SPRING_SM',
    WINTER_SM = 'WINTER_SM',

    SUMMER_SM_DB = 'SUMMER_SM_DB',
    AUTUMN_SM_DB = 'AUTUMN_SM_DB',
    SPRING_SM_DB = 'SPRING_SM_DB',
    WINTER_SM_DB = 'WINTER_SM_DB',
}

export enum TREE_ITEMS {
    WOOD = 'WOOD'
}
