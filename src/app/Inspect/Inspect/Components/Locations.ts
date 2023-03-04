import {ExtendedEngineObject} from "../../../../types";
import {getObjectNameById} from "../../../../utils/objectUtils";

export class Locations {
    constructor() {
    }

    public build(allObjects: Array<ExtendedEngineObject>, objectId: string): void {
        console.log(getObjectNameById(objectId));
    }
}