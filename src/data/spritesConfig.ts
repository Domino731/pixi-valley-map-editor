import {SPRITE_SRC, SpriteConfig} from "./types";

export const SpritesConfig: Array<SpriteConfig> = [
    {
        sprite: SPRITE_SRC.BUSHES_DOUBLE_SM_PNG,
        size: {
            height: 32,
            width: 128,
            cellHeight: 32,
            cellWidth: 128 / 8
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
            height: 96,
            width: 192,
            cellHeight: 96,
            cellWidth: 192 / 4
        }
    },
    {
        sprite: SPRITE_SRC.MAPLE_STAGE_5,
        size: {
            height: 96,
            width: 192,
            cellHeight: 96,
            cellWidth: 192 / 4
        }
    },
    {
        sprite: SPRITE_SRC.OAK_STAGE_5,
        size: {
            height: 96,
            width: 194,
            cellHeight: 96,
            cellWidth: 194 / 4
        }
    },
    {
        sprite: SPRITE_SRC.PINE_STAGE_5,
        size: {
            height: 96,
            width: 192,
            cellHeight: 96,
            cellWidth: 192 / 4
        }
    },

    // tree stages
    {
        sprite: SPRITE_SRC.TREE_STAGE_4,
        size: {
            height: 32,
            width: 64,
            cellHeight: 32,
            cellWidth: 64 / 4
        }
    },
    {
        sprite: SPRITE_SRC.OUTDOORS_SPRING,
        size: {
            height: 1264,
            width: 400,
            cellHeight: 16,
            cellWidth: 16
        }
    },
    {
        sprite: SPRITE_SRC.RESOURCES_32,
        size: {
            height: 32,
            width: 224,
            cellHeight: 32,
            cellWidth: 224 / 7
        }
    },
    {
        sprite: SPRITE_SRC.RESOURCES_16,
        size: {
            height: 32,
            width: 400,
            cellHeight: 32 / 2,
            cellWidth: 400 / 25
        }
    },
    {
        sprite: SPRITE_SRC.FENCES,
        size: {
            height: 128,
            width: 192,
            cellHeight: 128 / 4,
            cellWidth: 192 / 12
        }
    },
    {
        sprite: SPRITE_SRC.FLOORING,
        size: {
            height: 256,
            width: 256,
            cellHeight: 256 / 16,
            cellWidth: 256 / 16
        }
    },
    {
        sprite: SPRITE_SRC.DIRT_HOED,
        size: {
            height: 128,
            width: 128,
            cellHeight: 128 / 8,
            cellWidth: 128 / 8
        }
    }
]