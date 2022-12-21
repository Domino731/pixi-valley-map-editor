import {Sprites} from "./const/sprites";
import {SPRITE_NAMES, SpriteDim, SpriteNamesUnion, Vector} from "./types";
import {SpriteData} from "./const/types";
import {DOM} from "./app/DOM";
import {Map} from "./app/Map";
import {RightPanel} from "./app/RightPanel";

export class Main {
    dom: DOM;
    map: Map;
    private spriteData: SpriteDim;
    public sprite: SpriteData;
    private currentSprite: SpriteNamesUnion;
    public mapSize: Vector;
    private selectedSpriteCell: Vector;
    private rightPanel: RightPanel;
    readonly mapCellSize: Vector;


    constructor() {
        this.dom = new DOM();
        this.currentSprite = SPRITE_NAMES.OUTDOOR_SPRING;
        this.sprite = Sprites[0];
        this.map = new Map(this);
        this.rightPanel = new RightPanel(this);
        this.init();
    }

    public changeSprite(spriteName: SpriteNamesUnion): void {
        const sprite: SpriteData | undefined = Sprites.find((el) => el.spriteName === spriteName);
        if (sprite) {
            this.sprite = sprite;
            this.rightPanel.setSpriteBgImage();
            this.rightPanel.renderEditorSpriteGrid();
        }
    }


    init(): void {
        this.rightPanel.setSpriteBgImage();
        this.rightPanel.renderEditorSpriteGrid();
        this.map.init();
        this.rightPanel.initSpriteSelect();
    }
}