import {CropObject} from "../types";
import {CROPS_NAMES} from "../const";
import {ENGINE_OBJECT_GROUPS, ENGINE_OBJECTS_TYPES, SPRITE_SRC} from "../../types";
import {cropStagesFactory} from "../utils";
import {CROPS_DESCRIPTIONS} from "../../descriptions/crops";

export const TaroRoot: CropObject = {
    id: CROPS_NAMES.TARO_ROOT,
    name: CROPS_NAMES.TARO_ROOT,
    hp: 100,
    sprite: {
        src: SPRITE_SRC.CROPS,
        position: {x: 34, y: 3}
    },
    stages: cropStagesFactory(6, 3, 5, CROPS_NAMES.TARO_ROOT),
    tools: [],
    destroyable: true,
    checkboxes: [],
    items: [],
    group: ENGINE_OBJECT_GROUPS.ENVIROMENT,
    type: ENGINE_OBJECTS_TYPES.CROPS,
    description: CROPS_DESCRIPTIONS[CROPS_NAMES.TARO_ROOT]
}