import {SpritesConfig} from "../data/spritesConfig";
import {EngineObject, SpriteConfig, SpriteSize} from "../data/types";

export const findObjectSprite = (object: EngineObject): SpriteConfig | null => {
    return SpritesConfig.find(({sprite}) => sprite === object.sprite.src) ?? null;
}

export const findObjectSpriteSize = ({sprite: {src}}: EngineObject): SpriteSize | null => {
    return SpritesConfig.find(({sprite}) => sprite === src)?.size ?? null;
}