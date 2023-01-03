import {EngineObject} from "../types";
import {Vector} from "../../types";


export interface CropObject extends EngineObject {
    soilHydrationLevel: Array<number>;
    stages: Array<CropStageObject>
}

export interface CropStageObject {
    nextStageByDays: number | null;
    nextStageByWater: number | null;
    stage: number;
}