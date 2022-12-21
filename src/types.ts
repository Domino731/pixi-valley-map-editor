export interface SpriteDim {
    cellWidth: number;
    cellHeight: number;
    spriteWidth: number;
    spriteHeight: number;
}

export enum SPRITE_NAMES {
    OUTDOOR_SPRING = 'OUTDOOR_SPRING',
    mahogany_stage_5 = 'mahogany_stage_5'
}

export type SpriteNamesUnion = keyof typeof SPRITE_NAMES;

export interface Vector {
    x: number;
    y: number;
}