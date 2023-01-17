import {TREE_NAMES} from "./const";
import {TREE_ITEMS, TreeObject, TreeStageObject} from "../types";
import {ENGINE_OBJECT_GROUPS, ENGINE_OBJECTS_TYPES, SPRITE_SRC} from "../../types";
import {TOOLS} from "../../tools/types";

const TREE_STAGES: number = 5;

export const treeFactory = (treeName: keyof typeof TREE_NAMES): TreeObject => {
    const Tree: TreeObject = {
        group: ENGINE_OBJECT_GROUPS.ENVIROMENT,
        type: ENGINE_OBJECTS_TYPES.TREES,
        id: treeName,
        name: treeName,
        hp: 800,
        sprite: {
            // @ts-ignore
            src: SPRITE_SRC[`${treeName.toUpperCase()}_STAGE_5` as keyof SPRITE_SRC],
            position: {
                x: 0,
                y: 0,
            }
        },
        tools: [TOOLS.AXE],
        destroyable: true,
        checkboxes: [],
        items: [TREE_ITEMS.WOOD],
        stages: []
    }

    for (let i = 1; i <= 4; i++) {
        const stageObject: TreeStageObject = {
            group: ENGINE_OBJECT_GROUPS.ENVIROMENT,
            type: ENGINE_OBJECTS_TYPES.TREES,
            id: TREE_NAMES.MAPLE_SUMMER,
            name: `${TREE_NAMES.MAPLE_SUMMER} stage ${i}`,
            hp: 800,
            sprite: {
                // @ts-ignore
                src: SPRITE_SRC[`TREE_STAGE_${i}`],
                position: {
                    x: 1,
                    y: 0,
                }
            },
            tools: [TOOLS.AXE],
            destroyable: true,
            checkboxes: [],
            items: [TREE_ITEMS.WOOD],
            stage: i
        }

        Tree.stages.push(stageObject)
    }

    Tree.stages.push({
        group: ENGINE_OBJECT_GROUPS.ENVIROMENT,
        type: ENGINE_OBJECTS_TYPES.TREES,
        id: treeName,
        name: treeName,
        hp: 800,
        sprite: {
            // @ts-ignore
            src: SPRITE_SRC[`${treeName.toUpperCase()}_STAGE_5` as keyof SPRITE_SRC],
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
    })
    return Tree;
}