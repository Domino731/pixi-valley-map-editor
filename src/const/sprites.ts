import {SPRITE_TYPES, SpriteData} from "./types";
import {SPRITE_NAMES} from "../types";

export const Sprites: Array<SpriteData> = [
    {
        label: SPRITE_NAMES.OUTDOOR_SPRING,
        src: 'url(./src/sprites/outdoors_spring.png)',
        size: {
            cellHeight: 16,
            cellWidth: 16,
            spriteHeight: 1264,
            spriteWidth: 400
        },
        spriteName: SPRITE_NAMES.OUTDOOR_SPRING,
        type: SPRITE_TYPES.GROUND_TILE
    },
    //
    // trees stage 5
    //
    {
        label: 'mahogany_stage_5',
        src: 'url(./src/sprites/mahogany_stage_5.png)',
        size: {
            cellHeight: 182,
            cellWidth: 420 / 4,
            spriteHeight: 182,
            spriteWidth: 420
        },
        spriteName: SPRITE_NAMES.mahogany_stage_5,
        type: SPRITE_TYPES.OBJECT
    },
]