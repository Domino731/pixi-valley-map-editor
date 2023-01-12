import {CropObject} from "../types";
import {CROPS_NAMES} from "../const";
import {ENGINE_OBJECT_GROUPS, ENGINE_OBJECTS_TYPES, SPRITE_SRC} from "../../types";

export const Grape: CropObject = {
    id: CROPS_NAMES.GRAPE,
    name: CROPS_NAMES.GRAPE,
    hp: 100,
    sprite: {
        src: SPRITE_SRC.CROPS,
        position: {x: 40, y: 2}
    },
    spriteOffset: {
        x: 0,
        y: 0
    },
    currentStage: 1,
    spriteIndex: {x: 0, y: 0},
    stages: [
        {
            stage: 1,
            nextStageByDays: 1,
            nextStageByWater: null,
            spritePosition: {x: 5, y: 2}
        },
        {
            stage: 2,
            nextStageByDays: 2,
            nextStageByWater: null,
            spritePosition: {x: 12, y: 2}
        },
        {
            stage: 3,
            nextStageByDays: 2,
            nextStageByWater: null,
            spritePosition: {x: 19, y: 2}
        },
        {
            stage: 4,
            nextStageByDays: 2,
            nextStageByWater: null,
            spritePosition: {x: 26, y: 2}
        },
        {
            stage: 5,
            nextStageByDays: null,
            nextStageByWater: null,
            spritePosition: {x: 33, y: 2}
        },
        {
            stage: 6,
            nextStageByDays: null,
            nextStageByWater: null,
            spritePosition: {x: 40, y: 2}
        },
    ],
    soilHydrationLevel: [0, 100],
    tools: [],
    destroyable: true,
    checkboxes: [],
    items: [],
    group: ENGINE_OBJECT_GROUPS.ENVIROMENT,
    type: ENGINE_OBJECTS_TYPES.CROPS
}