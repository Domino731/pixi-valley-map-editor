import {TREE_ITEMS, TREE_NAMES, TreeObject} from "./types";
import {TOOLS} from "../tools/types";
import {EngineObject} from "../types";

const defaultHp: number = 700;

export const trees: Array<TreeObject> = [
    {
        id: TREE_NAMES.OAK_SUMMER,
        name: TREE_NAMES.OAK_SUMMER,
        hp: defaultHp,
        sprite: {
            src: 'oak_stage_5.png',
            position: {
                x: 0,
                y: 0,
            }
        },
        tools: [TOOLS.AXE],
        destroyable: true,
        checkboxes: [
            {
                x: 0,
                y: 0,
                width: 40,
                height: 40
            }
        ],
        items: [TREE_ITEMS.WOOD]
    },
    {
        id: TREE_NAMES.OAK_AUTUMN,
        name: TREE_NAMES.OAK_AUTUMN,
        hp: defaultHp,
        sprite: {
            src: 'oak_stage_5.png',
            position: {
                x: 2,
                y: 0,
            }
        },
        tools: [TOOLS.AXE],
        destroyable: true,
        checkboxes: [
            {
                x: 0,
                y: 0,
                width: 40,
                height: 40
            }
        ],
        items: [TREE_ITEMS.WOOD]
    },
    {
        id: TREE_NAMES.OAK_WINTER,
        name: TREE_NAMES.OAK_WINTER,
        hp: defaultHp,
        sprite: {
            src: 'oak_stage_5.png',
            position: {
                x: 3,
                y: 0,
            }
        },
        tools: [TOOLS.AXE],
        destroyable: true,
        checkboxes: [
            {
                x: 0,
                y: 0,
                width: 40,
                height: 40
            }
        ],
        items: [TREE_ITEMS.WOOD]
    },
    {
        id: TREE_NAMES.OAK_SPRING,
        name: TREE_NAMES.OAK_SPRING,
        hp: defaultHp,
        sprite: {
            src: 'oak_stage_5.png',
            position: {
                x: 1,
                y: 0,
            }
        },
        tools: [TOOLS.AXE],
        destroyable: true,
        checkboxes: [
            {
                x: 0,
                y: 0,
                width: 40,
                height: 40
            }
        ],
        items: [TREE_ITEMS.WOOD]
    },


    {
        id: TREE_NAMES.MAHOGANY_SUMMER,
        name: TREE_NAMES.MAHOGANY_SUMMER,
        hp: defaultHp,
        sprite: {
            src: 'mahogany_stage_5.png',
            position: {
                x: 0,
                y: 0,
            }
        },
        tools: [TOOLS.AXE],
        destroyable: true,
        checkboxes: [
            {
                x: 0,
                y: 0,
                width: 40,
                height: 40
            }
        ],
        items: [TREE_ITEMS.WOOD]
    },
    {
        id: TREE_NAMES.MAHOGANY_AUTUMN,
        name: TREE_NAMES.MAHOGANY_AUTUMN,
        hp: defaultHp,
        sprite: {
            src: 'mahogany_stage_5.png',
            position: {
                x: 2,
                y: 0,
            }
        },
        tools: [TOOLS.AXE],
        destroyable: true,
        checkboxes: [
            {
                x: 0,
                y: 0,
                width: 40,
                height: 40
            }
        ],
        items: [TREE_ITEMS.WOOD]
    },
    {
        id: TREE_NAMES.MAHOGANY_WINTER,
        name: TREE_NAMES.MAHOGANY_WINTER,
        hp: defaultHp,
        sprite: {
            src: 'mahogany_stage_5.png',
            position: {
                x: 3,
                y: 0,
            }
        },
        tools: [TOOLS.AXE],
        destroyable: true,
        checkboxes: [
            {
                x: 0,
                y: 0,
                width: 40,
                height: 40
            }
        ],
        items: [TREE_ITEMS.WOOD]
    },
    {
        id: TREE_NAMES.MAHOGANY_SPRING,
        name: TREE_NAMES.MAHOGANY_SPRING,
        hp: defaultHp,
        sprite: {
            src: 'mahogany_stage_5.png',
            position: {
                x: 1,
                y: 0,
            }
        },
        tools: [TOOLS.AXE],
        destroyable: true,
        checkboxes: [
            {
                x: 1,
                y: 0,
                width: 40,
                height: 40
            }
        ],
        items: [TREE_ITEMS.WOOD]
    },

    {
        id: TREE_NAMES.PINE_SUMMER,
        name: TREE_NAMES.PINE_SUMMER,
        hp: defaultHp,
        sprite: {
            src: 'pine_stage_5.png',
            position: {
                x: 0,
                y: 0,
            }
        },
        tools: [TOOLS.AXE],
        destroyable: true,
        checkboxes: [
            {
                x: 0,
                y: 0,
                width: 40,
                height: 40
            }
        ],
        items: [TREE_ITEMS.WOOD]
    },
    {
        id: TREE_NAMES.PINE_AUTUMN,
        name: TREE_NAMES.PINE_AUTUMN,
        hp: defaultHp,
        sprite: {
            src: 'pine_stage_5.png',
            position: {
                x: 2,
                y: 0,
            }
        },
        tools: [TOOLS.AXE],
        destroyable: true,
        checkboxes: [
            {
                x: 0,
                y: 0,
                width: 40,
                height: 40
            }
        ],
        items: [TREE_ITEMS.WOOD]
    },
    {
        id: TREE_NAMES.PINE_WINTER,
        name: TREE_NAMES.PINE_WINTER,
        hp: defaultHp,
        sprite: {
            src: 'pine_stage_5.png',
            position: {
                x: 3,
                y: 0,
            }
        },
        tools: [TOOLS.AXE],
        destroyable: true,
        checkboxes: [
            {
                x: 0,
                y: 0,
                width: 40,
                height: 40
            }
        ],
        items: [TREE_ITEMS.WOOD]
    },
    {
        id: TREE_NAMES.PINE_SPRING,
        name: TREE_NAMES.PINE_SPRING,
        hp: defaultHp,
        sprite: {
            src: 'pine_stage_5.png',
            position: {
                x: 1,
                y: 0,
            }
        },
        tools: [TOOLS.AXE],
        destroyable: true,
        checkboxes: [
            {
                x: 0,
                y: 0,
                width: 40,
                height: 40
            }
        ],
        items: [TREE_ITEMS.WOOD]
    },

    {
        id: TREE_NAMES.MAPLE_SUMMER,
        name: TREE_NAMES.MAPLE_SUMMER,
        hp: defaultHp,
        sprite: {
            src: 'maple_stage_5.png',
            position: {
                x: 0,
                y: 0,
            }
        },
        tools: [TOOLS.AXE],
        destroyable: true,
        checkboxes: [
            {
                x: 0,
                y: 0,
                width: 40,
                height: 40
            }
        ],
        items: [TREE_ITEMS.WOOD]
    },
    {
        id: TREE_NAMES.MAPLE_AUTUMN,
        name: TREE_NAMES.MAPLE_AUTUMN,
        hp: defaultHp,
        sprite: {
            src: 'maple_stage_5.png',
            position: {
                x: 2,
                y: 0,
            }
        },
        tools: [TOOLS.AXE],
        destroyable: true,
        checkboxes: [
            {
                x: 0,
                y: 0,
                width: 40,
                height: 40
            }
        ],
        items: [TREE_ITEMS.WOOD]
    },
    {
        id: TREE_NAMES.MAPLE_WINTER,
        name: TREE_NAMES.MAPLE_WINTER,
        hp: defaultHp,
        sprite: {
            src: 'maple_stage_5.png',
            position: {
                x: 3,
                y: 0,
            }
        },
        tools: [TOOLS.AXE],
        destroyable: true,
        checkboxes: [
            {
                x: 0,
                y: 0,
                width: 40,
                height: 40
            }
        ],
        items: [TREE_ITEMS.WOOD]
    },
    {
        id: TREE_NAMES.MAPLE_SPRING,
        name: TREE_NAMES.MAPLE_SPRING,
        hp: defaultHp,
        sprite: {
            src: 'maple_stage_5.png',
            position: {
                x: 1,
                y: 0,
            }
        },
        tools: [TOOLS.AXE],
        destroyable: true,
        checkboxes: [
            {
                x: 0,
                y: 0,
                width: 40,
                height: 40
            }
        ],
        items: [TREE_ITEMS.WOOD]
    }
]