import {SPRITE_NAMES} from "../../types";
import {SPRITE_TYPES} from "../../const/types";
import {TilesSpriteSheet} from "./types";

export const tiles: Array<TilesSpriteSheet> = [
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
]