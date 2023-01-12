import {CropObject} from "../types";
import {CROPS_NAMES} from "../const";
import {ENGINE_OBJECT_GROUPS, ENGINE_OBJECTS_TYPES, SPRITE_SRC} from "../../types";

export const SweetGemBerry: CropObject = {
    id: CROPS_NAMES.SWEET_GEM_BERRY,
    name: CROPS_NAMES.SWEET_GEM_BERRY,
    hp: 100,
    sprite: {
        src: SPRITE_SRC.CROPS,
        position: {x: 41, y: 4}
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
            spritePosition: {x: 6, y: 4}
        },
        {
            stage: 2,
            nextStageByDays: 2,
            nextStageByWater: null,
            spritePosition: {x: 13, y: 4}
        },
        {
            stage: 3,
            nextStageByDays: 2,
            nextStageByWater: null,
            spritePosition: {x: 20, y: 4}
        },
        {
            stage: 4,
            nextStageByDays: 2,
            nextStageByWater: null,
            spritePosition: {x: 27, y: 4}
        },
        {
            stage: 5,
            nextStageByDays: null,
            nextStageByWater: null,
            spritePosition: {x: 34, y: 4}
        },
        {
            stage: 6,
            nextStageByDays: null,
            nextStageByWater: null,
            spritePosition: {x: 41, y: 4}
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