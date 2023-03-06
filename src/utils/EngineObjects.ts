import {GAME_DATA} from "../data";
import {EngineObject} from "../data/types";

/**
 * Find game object by id
 * @param objectId - object id
 * */
export const findObject = (objectId: string | number): EngineObject | null => Object.values(GAME_DATA.objects).flat().find(({id}: { id: string }) => id === objectId) ?? null