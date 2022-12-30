import {TREE_ITEMS, TREE_NAMES, TreeObject} from "./types";
import {ENGINE_OBJECT_GROUPS, ENGINE_OBJECTS_TYPES, SPRITE_SRC} from "../types";
import {TOOLS} from "../tools/types";

const defaultHp: number = 700;
// maple, oak, pine, mahogany
export const treesStage4: Array<TreeObject> = [
    {
        id: TREE_NAMES.MAPLE_TREE_STAGE_4,
        name: TREE_NAMES.MAPLE_TREE_STAGE_4,
        hp: defaultHp,
        sprite: {
            src: SPRITE_SRC.TREE_STAGE_4,
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
        id: TREE_NAMES.OAK_TREE_STAGE_4,
        name: TREE_NAMES.OAK_TREE_STAGE_4,
        hp: defaultHp,
        sprite: {
            src: SPRITE_SRC.TREE_STAGE_4,
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
        id: TREE_NAMES.PINE_TREE_STAGE_4,
        name: TREE_NAMES.PINE_TREE_STAGE_4,
        hp: defaultHp,
        sprite: {
            src: SPRITE_SRC.TREE_STAGE_4,
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
        id: TREE_NAMES.MAHOGANY_TREE_STAGE_4,
        name: TREE_NAMES.MAHOGANY_TREE_STAGE_4,
        hp: defaultHp,
        sprite: {
            src: SPRITE_SRC.TREE_STAGE_4,
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
    }
].map(el => ({...el, group: ENGINE_OBJECT_GROUPS.ENVIROMENT, type: ENGINE_OBJECTS_TYPES.TREES}))