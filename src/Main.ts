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
    private mapSize: Vector;
    private selectedSpriteCell: Vector;
    private rightPanel: RightPanel;
    readonly mapCellSize: Vector;

    constructor() {
        this.dom = new DOM();
        this.currentSprite = SPRITE_NAMES.OUTDOOR_SPRING;
        this.map = new Map({
            x: 65, y: 65
        }, Sprites.find(({spriteName}) => spriteName === this.currentSprite));
        this.sprite = Sprites[0];
        this.rightPanel = new RightPanel(this);
        this.init();
    }

    init(): void {
        this.rightPanel.setSpriteBgImage();
        this.rightPanel.renderEditorSpriteGrid();
        this.map.renderMapGrid();
        this.rightPanel.initSpriteSelect();
    }
}