import {SpriteDim, SpriteNamesUnion} from "../types";

export interface SpriteData {
    label: string;
    src: string;
    size: SpriteDim;
    spriteName: SpriteNamesUnion;
}