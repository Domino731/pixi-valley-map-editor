import {Sprites} from "./const/sprites";
import {SPRITE_NAMES, SpriteDim, SpriteNamesUnion, Vector} from "./types";
import {SPRITE_TYPES, SpriteData} from "./const/types";
import {DOM} from "./app/DOM";
import {Map} from "./app/Map";
import {RightPanel} from "./app/RightPanel";
import {Debugger} from "./app/debugger";
import {tiles} from "./data/tiles/tiles";
import {EngineObject} from "./data/types";

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

    constructor() {
        this.dom = new DOM();
        this.currentSprite = SPRITE_NAMES.OUTDOOR_SPRING;
        this.sprite = tiles[0];
        this.map = new Map(this);
        this.rightPanel = new RightPanel(this);
        this.spriteType = SPRITE_TYPES.GROUND_TILE;
        this.init();
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