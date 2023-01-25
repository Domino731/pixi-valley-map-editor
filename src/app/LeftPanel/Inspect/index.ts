import {GAME_DATA} from "../../../data";
import {EngineObject, SpriteSize} from "../../../data/types";
import {SpritesConfig} from "../../../data/spritesConfig";

export class Inspect {
    constructor() {
    }


    /**
     * find object's size
     * @param objectSpriteSrc - object sprite source needed to find the specific size
     * */
    private static findObjectSize(objectSpriteSrc: string): SpriteSize {
        return SpritesConfig.find(({sprite}) => sprite === objectSpriteSrc)?.size;
    }

    /**
     * Find game object by id
     * @param objectId - object id
     * */
    public static findEngineObjectById(objectId: string): EngineObject {
        return Object.values(GAME_DATA.objects).flat().find(({id}: { id: string }) => id === objectId);
    }

    public static addImage(objectId: string): void {
        const {sprite}: EngineObject = this.findEngineObjectById(objectId);
        const {cellWidth, cellHeight}: SpriteSize = this.findObjectSize(sprite.src);
        const blueprint: HTMLDivElement = document.querySelector('#inspect-blueprint');

        blueprint.style.width = `${cellWidth}px`;
        blueprint.style.height = `${cellHeight}px`;
        blueprint.style.backgroundImage = `url(./src/sprites/${sprite.src})`;
        blueprint.style.backgroundPosition = `-${sprite.position.x * cellWidth}px -${sprite.position.y * cellHeight}px`;
    }

}
