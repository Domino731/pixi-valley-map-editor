import {SpritesConfig} from "../data/spritesConfig";
import {EngineObject, SpriteConfig} from "../data/types";

export const findObjectSprite = (object: EngineObject): SpriteConfig | null => {
    return SpritesConfig.find(({sprite}) => sprite === object.sprite.src) ?? null;
}