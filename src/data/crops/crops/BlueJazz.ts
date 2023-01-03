import {CropObject} from "../types";
import {ENGINE_OBJECT_GROUPS, ENGINE_OBJECTS_TYPES, SPRITE_SRC} from "../../types";
import {CROPS_NAMES} from "../const";
import {TREE_ITEMS} from "../../environment/types";
import {TOOLS} from "../../tools/types";

export const BlueJazz: CropObject = {
    id: CROPS_NAMES.BLUE_JAZZ,
    name: CROPS_NAMES.BLUE_JAZZ,
    hp: 100,
    sprite: {
        src: SPRITE_SRC.WELL,
        position: {
            x: 0,
            y: 0,
        }
    },
    stages: [
        {
            stage: 1,
            nextStageByDays: 1,
            nextStageByWater: null,
        },
        {
            stage: 2,
            nextStageByDays: 2,
            nextStageByWater: null,
        },
        {
            stage: 3,
            nextStageByDays: 2,
            nextStageByWater: null,
        },
        {
            stage: 4,
            nextStageByDays: 2,
            nextStageByWater: null,
        },
        {
            stage: 5,
            nextStageByDays: null,
            nextStageByWater: null,
        }
    ],
    soilHydrationLevel: [0, 100],
    tools: [],
    destroyable: true,
    checkboxes: [],
    items: [],
    group: ENGINE_OBJECT_GROUPS.ENVIROMENT,
    type: ENGINE_OBJECTS_TYPES.CROPS
}