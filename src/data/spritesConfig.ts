import {SPRITE_SRC, SpriteConfig} from "./types";

export const SpritesConfig: Array<SpriteConfig> = [
    {
        sprite: SPRITE_SRC.BUSHES_DOUBLE_SM_PNG,
        size: {
            height: 32,
            width: 128,
            cellHeight: 32,
            cellWidth: 128 / 6
        }
    },
    {
        sprite: SPRITE_SRC.BUSHES_LG,
        size: {
            height: 96,
            width: 96,
            cellHeight: 96 / 2,
            cellWidth: 96 / 2
        }
    },
    {
        sprite: SPRITE_SRC.BUSHES_MD,
        size: {
            height: 96,
            width: 128,
            cellHeight: 96 / 2,
            cellWidth: 128 / 4
        }
    },
    {
        sprite: SPRITE_SRC.BUSHES_SM,
        size: {
            height: 32,
            width: 128,
            cellHeight: 32,
            cellWidth: 128 / 4
        }
    },
    {
        sprite: SPRITE_SRC.MAHOGANY_STAGE_5,
        size: {
            height: 182,
            width: 420,
            cellHeight: 182,
            cellWidth: 420 / 4
        }
    },
    {
        sprite: SPRITE_SRC.MAPLE_STAGE_5,
        size: {
            height: 190,
            width: 382,
            cellHeight: 190,
            cellWidth: 382 / 4
        }
    },
    {
        sprite: SPRITE_SRC.OAK_STAGE_5,
        size: {
            height: 188,
            width: 397,
            cellHeight: 188,
            cellWidth: 397 / 4
        }
    },
    {
        sprite: SPRITE_SRC.PINE_STAGE_5,
        size: {
            height: 182,
            width: 405,
            cellHeight: 182,
            cellWidth: 405 / 4
        }
    }
]