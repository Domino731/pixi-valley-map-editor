import {SPRITE_NAMES, SpriteDim, SpriteNamesUnion, Vector} from "./types";
import {SPRITE_TYPES, SpriteData} from "./const/types";
import {DOM} from "./app/DOM";
import {Map} from "./app/Map/Map";
import {RightPanel} from "./app/RightPanel/RightPanel";
import {tiles} from "./data/tiles/tiles";
import {EngineObject, SpriteSize} from "./data/types";
import {SpritesConfig} from "./data/spritesConfig";
import {LeftPanel} from "./app/LeftPanel/LeftPanel";
import {CropObject} from "./data/crops/types";

export class Main {
    dom: DOM;
    map: Map;
    public sprite: SpriteData | Array<EngineObject>;
    private currentSprite: SpriteNamesUnion;
    public mapSize: Vector;
    private rightPanel: RightPanel;
    private spriteType: keyof typeof SPRITE_TYPES;

    private engineObject: EngineObject | CropObject | null;

    constructor() {
        this.dom = new DOM();
        this.currentSprite = SPRITE_NAMES.OUTDOOR_SPRING;
        this.sprite = tiles[0];
        this.map = new Map(this);
        this.rightPanel = new RightPanel(this);
        this.spriteType = SPRITE_TYPES.GROUND_TILE;
        this.engineObject = null;
        this.init();
    }

    public getEngineObject(): EngineObject | null {
        return this.engineObject;
    }

    public setEngineObject(payload: EngineObject | CropObject | null): void {
        this.spriteType = SPRITE_TYPES.OBJECT;
        this.engineObject = payload;
        console.log(SpritesConfig, this.engineObject);
        const spriteSize: SpriteSize | undefined = SpritesConfig.find(({sprite}) => sprite === this.engineObject.sprite.src)?.size
        if (spriteSize) {
            this.dom.hoverObject.dataset.objectName = this.engineObject.name;
            this.dom.hoverObject.style.position = "absolute";
            this.dom.hoverObject.style.width = `${spriteSize.cellWidth}px`;
            this.dom.hoverObject.style.height = `${spriteSize.cellHeight}px`;
            this.dom.hoverObject.style.left = `16px`;
            this.dom.hoverObject.style.top = `16px`;
            this.dom.hoverObject.style.backgroundImage = `url(./src/sprites/${this.engineObject.sprite.src})`;
            this.dom.hoverObject.style.backgroundPosition = `-${this.engineObject.sprite.position.x * spriteSize.cellWidth}px -${this.engineObject.sprite.position.y * spriteSize.cellHeight}px`;
            this.dom.hoverObject.style.backgroundRepeat = 'no-repeat'

        }
    }

    public getSpriteType(): keyof typeof SPRITE_TYPES {
        return this.spriteType;
    }

    public setSpriteType(type: keyof typeof SPRITE_TYPES): void {
        this.spriteType = type;
    }

    init(): void {
        this.map.init();
        new LeftPanel();
    }
}