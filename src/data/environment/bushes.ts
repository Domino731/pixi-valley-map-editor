import {EngineObject, FOOD_ITEMS} from "../types";
import {BUSHES_NAMES, TREE_ITEMS, TREE_NAMES} from "./types";
import {TOOLS} from "../tools/types";

const bushesHp: Record<string, number> = {
    lg: 200
}

export const bushesLg: Array<EngineObject> = [
    {
        id: BUSHES_NAMES.SUMMER_LG,
        name: BUSHES_NAMES.SUMMER_LG,
        hp: bushesHp.lg,
        sprite: {
            src: 'bushes_lg.png',
            position: {
                x: 0,
                y: 0,
            }
        },
        tools: [TOOLS.GARDEN_SCISSORS],
        destroyable: true,
        checkboxes: [
            {
                x: 0,
                y: 0,
                width: 40,
                height: 40
            }
        ],
        items: [FOOD_ITEMS.STRAWBERRY]
    },
    {
        id: BUSHES_NAMES.AUTUMN_LG,
        name: BUSHES_NAMES.AUTUMN_LG,
        hp: bushesHp.lg,
        sprite: {
            src: 'bushes_lg.png',
            position: {
                x: 1,
                y: 0,
            }
        },
        tools: [TOOLS.GARDEN_SCISSORS],
        destroyable: true,
        checkboxes: [
            {
                x: 0,
                y: 0,
                width: 40,
                height: 40
            }
        ],
        items: [FOOD_ITEMS.STRAWBERRY]
    }, {
        id: BUSHES_NAMES.WINTER_LG,
        name: BUSHES_NAMES.WINTER_LG,
        hp: bushesHp.lg,
        sprite: {
            src: 'bushes_lg.png',
            position: {
                x: 1,
                y: 0,
            }
        },
        tools: [TOOLS.GARDEN_SCISSORS],
        destroyable: true,
        checkboxes: [
            {
                x: 0,
                y: 0,
                width: 40,
                height: 40
            }
        ],
        items: [FOOD_ITEMS.STRAWBERRY]
    },
    {
        id: BUSHES_NAMES.SPRING_LG,
        name: BUSHES_NAMES.SPRING_LG,
        hp: bushesHp.lg,
        sprite: {
            src: 'bushes_lg.png',
            position: {
                x: 1,
                y: 1,
            }
        },
        tools: [TOOLS.GARDEN_SCISSORS],
        destroyable: true,
        checkboxes: [
            {
                x: 0,
                y: 0,
                width: 40,
                height: 40
            }
        ],
        items: [FOOD_ITEMS.STRAWBERRY]
    },
];

export const bushesMd: Array<EngineObject> = [
    {
        id: BUSHES_NAMES.SUMMER_MD,
        name: BUSHES_NAMES.SUMMER_MD,
        hp: bushesHp.lg,
        sprite: {
            src: 'bushes_md.png',
            position: {
                x: 0,
                y: 0,
            }
        },
        tools: [TOOLS.GARDEN_SCISSORS],
        destroyable: true,
        checkboxes: [
            {
                x: 0,
                y: 0,
                width: 40,
                height: 40
            }
        ],
        items: [FOOD_ITEMS.STRAWBERRY]
    },
    {
        id: BUSHES_NAMES.AUTUMN_MD,
        name: BUSHES_NAMES.AUTUMN_MD,
        hp: bushesHp.lg,
        sprite: {
            src: 'bushes_md.png',
            position: {
                x: 1,
                y: 0,
            }
        },
        tools: [TOOLS.GARDEN_SCISSORS],
        destroyable: true,
        checkboxes: [
            {
                x: 0,
                y: 0,
                width: 40,
                height: 40
            }
        ],
        items: [FOOD_ITEMS.STRAWBERRY]
    }, {
        id: BUSHES_NAMES.WINTER_MD,
        name: BUSHES_NAMES.WINTER_MD,
        hp: bushesHp.lg,
        sprite: {
            src: 'bushes_md.png',
            position: {
                x: 1,
                y: 2,
            }
        },
        tools: [TOOLS.GARDEN_SCISSORS],
        destroyable: true,
        checkboxes: [
            {
                x: 0,
                y: 0,
                width: 40,
                height: 40
            }
        ],
        items: [FOOD_ITEMS.STRAWBERRY]
    },
    {
        id: BUSHES_NAMES.SPRING_MD,
        name: BUSHES_NAMES.SPRING_MD,
        hp: bushesHp.lg,
        sprite: {
            src: 'bushes_md.png',
            position: {
                x: 1,
                y: 0,
            }
        },
        tools: [TOOLS.GARDEN_SCISSORS],
        destroyable: true,
        checkboxes: [
            {
                x: 0,
                y: 0,
                width: 40,
                height: 40
            }
        ],
        items: [FOOD_ITEMS.STRAWBERRY]
    },
];


export const bushesSm: Array<EngineObject> = [
    {
        id: BUSHES_NAMES.SUMMER_SM,
        name: BUSHES_NAMES.SUMMER_SM,
        hp: bushesHp.lg,
        sprite: {
            src: 'bushes_sm.png',
            position: {
                x: 0,
                y: 0,
            }
        },
        tools: [TOOLS.GARDEN_SCISSORS],
        destroyable: true,
        checkboxes: [
            {
                x: 0,
                y: 0,
                width: 40,
                height: 40
            }
        ],
        items: [FOOD_ITEMS.STRAWBERRY]
    },
    {
        id: BUSHES_NAMES.AUTUMN_SM,
        name: BUSHES_NAMES.AUTUMN_SM,
        hp: bushesHp.lg,
        sprite: {
            src: 'bushes_sm.png',
            position: {
                x: 0,
                y: 2,
            }
        },
        tools: [TOOLS.GARDEN_SCISSORS],
        destroyable: true,
        checkboxes: [
            {
                x: 0,
                y: 0,
                width: 40,
                height: 40
            }
        ],
        items: [FOOD_ITEMS.STRAWBERRY]
    }, {
        id: BUSHES_NAMES.WINTER_SM,
        name: BUSHES_NAMES.WINTER_SM,
        hp: bushesHp.lg,
        sprite: {
            src: 'bushes_sm.png',
            position: {
                x: 3,
                y: 0,
            }
        },
        tools: [TOOLS.GARDEN_SCISSORS],
        destroyable: true,
        checkboxes: [
            {
                x: 0,
                y: 0,
                width: 40,
                height: 40
            }
        ],
        items: [FOOD_ITEMS.STRAWBERRY]
    },
    {
        id: BUSHES_NAMES.SPRING_SM,
        name: BUSHES_NAMES.SPRING_SM,
        hp: bushesHp.lg,
        sprite: {
            src: 'bushes_sm.png',
            position: {
                x: 1,
                y: 0,
            }
        },
        tools: [TOOLS.GARDEN_SCISSORS],
        destroyable: true,
        checkboxes: [
            {
                x: 2,
                y: 0,
                width: 40,
                height: 40
            }
        ],
        items: [FOOD_ITEMS.STRAWBERRY]
    },
]