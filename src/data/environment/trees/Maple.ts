import {TREE_ITEMS, TREE_NAMES, TreeObject, TreeStageObject} from "../types";
import {ENGINE_OBJECT_GROUPS, ENGINE_OBJECTS_TYPES, SPRITE_SRC} from "../../types";
import {TOOLS} from "../../tools/types";

const MapleTreeStage5: TreeStageObject = {
    group: ENGINE_OBJECT_GROUPS.ENVIROMENT,
    type: ENGINE_OBJECTS_TYPES.TREES,
    id: TREE_NAMES.MAPLE_SUMMER,
    name: TREE_NAMES.MAPLE_SUMMER,
    hp: 800,
    sprite: {
        src: SPRITE_SRC.MAHOGANY_STAGE_5,
        position: {
            x: 0,
            y: 0,
        }
    },
    tools: [TOOLS.AXE],
    destroyable: true,
    checkboxes: [],
    items: [TREE_ITEMS.WOOD],
    stage: 5
}

const MapleTreeStage4: TreeStageObject = {
    group: ENGINE_OBJECT_GROUPS.ENVIROMENT,
    type: ENGINE_OBJECTS_TYPES.TREES,
    id: TREE_NAMES.MAPLE_SUMMER,
    name: TREE_NAMES.MAPLE_SUMMER,
    hp: 800,
    sprite: {
        src: SPRITE_SRC.TREE_STAGE_4,
        position: {
            x: 1,
            y: 0,
        }
    },
    tools: [TOOLS.AXE],
    destroyable: true,
    checkboxes: [],
    items: [TREE_ITEMS.WOOD],
    stage: 4
}

const MapleTreeStage3: TreeStageObject = {
    group: ENGINE_OBJECT_GROUPS.ENVIROMENT,
    type: ENGINE_OBJECTS_TYPES.TREES,
    id: TREE_NAMES.MAPLE_SUMMER,
    name: TREE_NAMES.MAPLE_SUMMER,
    hp: 800,
    sprite: {
        src: SPRITE_SRC.TREE_STAGE_3,
        position: {
            x: 1,
            y: 0,
        }
    },
    tools: [TOOLS.AXE],
    destroyable: true,
    checkboxes: [],
    items: [TREE_ITEMS.WOOD],
    stage: 3
}

const MapleTreeStage2: TreeStageObject = {
    group: ENGINE_OBJECT_GROUPS.ENVIROMENT,
    type: ENGINE_OBJECTS_TYPES.TREES,
    id: TREE_NAMES.MAPLE_SUMMER,
    name: TREE_NAMES.MAPLE_SUMMER,
    hp: 800,
    sprite: {
        src: SPRITE_SRC.TREE_STAGE_2,
        position: {
            x: 1,
            y: 0,
        }
    },
    tools: [TOOLS.AXE],
    destroyable: true,
    checkboxes: [],
    items: [TREE_ITEMS.WOOD],
    stage: 2
}

const MapleTreeStage1: TreeStageObject = {
    group: ENGINE_OBJECT_GROUPS.ENVIROMENT,
    type: ENGINE_OBJECTS_TYPES.TREES,
    id: TREE_NAMES.MAPLE_SUMMER,
    name: TREE_NAMES.MAPLE_SUMMER,
    hp: 800,
    sprite: {
        src: SPRITE_SRC.TREE_STAGE_1,
        position: {
            x: 1,
            y: 0,
        }
    },
    tools: [TOOLS.AXE],
    destroyable: true,
    checkboxes: [],
    items: [TREE_ITEMS.WOOD],
    stage: 1
}

export const MapleTree: TreeObject = {
    group: ENGINE_OBJECT_GROUPS.ENVIROMENT,
    type: ENGINE_OBJECTS_TYPES.TREES,
    id: TREE_NAMES.OAK_SUMMER,
    name: TREE_NAMES.OAK_SUMMER,
    hp: 800,
    sprite: {
        src: SPRITE_SRC.OAK_STAGE_5,
        position: {
            x: 0,
            y: 0,
        }
    },
    tools: [TOOLS.AXE],
    destroyable: true,
    checkboxes: [],
    items: [TREE_ITEMS.WOOD],
    stages: [MapleTreeStage5, MapleTreeStage4, MapleTreeStage3, MapleTreeStage2, MapleTreeStage1]
}
