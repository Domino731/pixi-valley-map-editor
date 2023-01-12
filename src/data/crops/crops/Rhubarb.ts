import {CropObject} from "../types";
import {CROPS_NAMES} from "../const";
import {ENGINE_OBJECT_GROUPS, ENGINE_OBJECTS_TYPES, SPRITE_SRC} from "../../types";

export const Rhubarb: CropObject = {
    id: CROPS_NAMES.RHUBARB,
    name: CROPS_NAMES.RHUBARB,
    hp: 100,
    sprite: {
        src: SPRITE_SRC.CROPS,
        position: {x: 36, y: 2}
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
            spritePosition: {x: 1, y: 2}
        },
        {
            stage: 2,
            nextStageByDays: 2,
            nextStageByWater: null,
            spritePosition: {x: 8, y: 2}
        },
        {
            stage: 3,
            nextStageByDays: 2,
            nextStageByWater: null,
            spritePosition: {x: 15, y: 2}
        },
        {
            stage: 4,
            nextStageByDays: 2,
            nextStageByWater: null,
            spritePosition: {x: 22, y: 2}
        },
        {
            stage: 5,
            nextStageByDays: null,
            nextStageByWater: null,
            spritePosition: {x: 29, y: 2}
        },
        {
            stage: 6,
            nextStageByDays: null,
            nextStageByWater: null,
            spritePosition: {x: 36, y: 2}
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