import {Sprites} from "./const/sprites";
import {SPRITE_NAMES, SpriteDim, SpriteNamesUnion, Vector} from "./types";
import {SPRITE_TYPES, SpriteData} from "./const/types";
import {DOM} from "./app/DOM";
import {Map} from "./app/Map";
import {RightPanel} from "./app/RightPanel";
import {Debugger} from "./app/debugger";
import {tiles} from "./data/tiles/tiles";
import {EngineObject, SpriteSize} from "./data/types";
import {SpritesConfig} from "./data/spritesConfig";

export class Main {
    dom: DOM;
    map: Map;
    private spriteData: SpriteDim;
    public sprite: SpriteData | Array<EngineObject>;
    private currentSprite: SpriteNamesUnion;
    public mapSize: Vector;
    private selectedSpriteCell: Vector;
    private rightPanel: RightPanel;
    readonly mapCellSize: Vector;
    private spriteType: keyof typeof SPRITE_TYPES;

    private engineObject: EngineObject | null;

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

    public setEngineObject(payload: EngineObject | null): void {
        this.spriteType = SPRITE_TYPES.OBJECT;
        this.engineObject = payload;
        const spriteSize: SpriteSize | undefined = SpritesConfig.find(({sprite}) => sprite === this.engineObject.sprite.src)?.size
        if (spriteSize) {

            this.dom.hoverObject.dataset.objectName = this.engineObject.name;
            this.dom.hoverObject.style.position = "absolute";
            this.dom.hoverObject.style.width = `${spriteSize.cellWidth}px`;
            this.dom.hoverObject.style.height = `${spriteSize.cellHeight}px`;
            this.dom.hoverObject.style.left = `${16 * 0}px`;
            this.dom.hoverObject.style.top = `${16 * 0}px`;
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

    public changeSprite(spriteName: SpriteNamesUnion): void {
        const sprite: SpriteData | undefined = Sprites.find((el) => el.spriteName === spriteName);
        if (sprite) {
            this.sprite = sprite;
            this.rightPanel.setSpriteBgImage();
            this.rightPanel.renderEditorSpriteGrid();

            // update data in panel
            this.dom.panelSpriteSheetHeight.innerText = String(sprite.size.spriteHeight);
            this.dom.panelSpriteSheetWidth.innerText = String(sprite.size.spriteWidth);
            this.dom.panelSpriteSheetType.innerText = String(sprite.type);
            this.dom.panelCellSize.innerText = `${sprite.size.spriteWidth} / ${sprite.size.spriteHeight}`;
            this.dom.panelCellAmount.innerText = String((sprite.size.spriteHeight / sprite.size.cellHeight) * (sprite.size.spriteWidth / sprite.size.cellWidth));
        }
    }


    init(): void {
        this.rightPanel.setSpriteBgImage();
        this.rightPanel.renderEditorSpriteGrid();
        this.map.init();
        this.rightPanel.initSpriteSelect();
        const debbuger = new Debugger(this)
    }
}