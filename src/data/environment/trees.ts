import {TREE_ITEMS, TREE_NAMES, TreeObject} from "./types";
import {TOOLS} from "../tools/types";
import {EngineObject} from "../types";

const defaultHp: number = 700;

export const trees: Array<TreeObject> = [
    {
        id: TREE_NAMES.OAK,
        name: TREE_NAMES.OAK,
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
        id: TREE_NAMES.MAHOGANY,
        name: TREE_NAMES.MAHOGANY,
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
        id: TREE_NAMES.PINE,
        name: TREE_NAMES.PINE,
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
        id: TREE_NAMES.MAPLE,
        name: TREE_NAMES.MAPLE,
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
    }
]