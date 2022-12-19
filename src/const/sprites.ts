import {SpriteData} from "./types";
import {SPRITE_NAMES} from "../types";

export const Sprites: Array<SpriteData> = [
    {
        label: 'Outside',
        src: 'sprites/outdoors_spring.png',
        size: {
            cellHeight: 16,
            cellWidth: 16,
            spriteHeight: 1264,
            spriteWidth: 400
        },
        spriteName: SPRITE_NAMES.OUTDOOR_SPRING
    }
]