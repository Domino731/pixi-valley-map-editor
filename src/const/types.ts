import {SpriteDim, SpriteNamesUnion} from "../types";

export interface SpriteData {
    label: string;
    src: string;
    size: SpriteDim;
    spriteName: SpriteNamesUnion;
    type: SpriteTypesUnion;
}

export enum SPRITE_TYPES {
    GROUND_TILE = 'GROUND_TILE',
    OBJECT = 'OBJECT'
}

export type SpriteTypesUnion = keyof typeof SPRITE_TYPES;