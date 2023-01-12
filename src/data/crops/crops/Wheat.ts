import {CropObject} from "../types";
import {CROPS_NAMES} from "../const";
import {ENGINE_OBJECT_GROUPS, ENGINE_OBJECTS_TYPES, SPRITE_SRC} from "../../types";

export const Wheat: CropObject = {
    id: CROPS_NAMES.WHEAT,
    name: CROPS_NAMES.WHEAT,
    hp: 100,
    sprite: {
        src: SPRITE_SRC.CROPS,
        position: {x: 32, y: 0}
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
            spritePosition: {x: 4, y: 0}
        },
        {
            stage: 2,
            nextStageByDays: 2,
            nextStageByWater: null,
            spritePosition: {x: 11, y: 0}
        },
        {
            stage: 3,
            nextStageByDays: 2,
            nextStageByWater: null,
            spritePosition: {x: 18, y: 0}
        },
        {
            stage: 4,
            nextStageByDays: 2,
            nextStageByWater: null,
            spritePosition: {x: 25, y: 0}
        },
        {
            stage: 5,
            nextStageByDays: null,
            nextStageByWater: null,
            spritePosition: {x: 32, y: 0}
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