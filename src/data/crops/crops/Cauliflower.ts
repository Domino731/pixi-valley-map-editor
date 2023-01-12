import {CropObject} from "../types";
import {CROPS_NAMES} from "../const";
import {ENGINE_OBJECT_GROUPS, ENGINE_OBJECTS_TYPES, SPRITE_SRC} from "../../types";

export const Cauliflower: CropObject = {
    id: CROPS_NAMES.CAULIFLOWER,
    name: CROPS_NAMES.CAULIFLOWER,
    hp: 100,
    sprite: {
        src: SPRITE_SRC.CROPS,
        position: {
            x: 0,
            y: 0,
        }
    },
    spriteOffset: {
        x: 0,
        y: 1
    },
    currentStage: 1,
    spriteIndex: {x: 0, y: 1},
    stages: [
        {
            stage: 1,
            nextStageByDays: 1,
            nextStageByWater: null,
            spritePosition: {x: 0, y: 1},
        },
        {
            stage: 2,
            nextStageByDays: 2,
            nextStageByWater: null,
            spritePosition: {x: 7, y: 1},
        },
        {
            stage: 3,
            nextStageByDays: 2,
            nextStageByWater: null,
            spritePosition: {x: 14, y: 1},
        },
        {
            stage: 4,
            nextStageByDays: 2,
            nextStageByWater: null,
            spritePosition: {x: 21, y: 1},
        },
        {
            stage: 5,
            nextStageByDays: null,
            nextStageByWater: null,
            spritePosition: {x: 28, y: 1},
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