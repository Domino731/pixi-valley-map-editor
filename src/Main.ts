import {ExtendedEngineObject, SPRITE_NAMES, SpriteNamesUnion, Vector} from "./types";
import {SPRITE_TYPES, SpriteData} from "./const/types";
import {DOM} from "./app/DOM";
import {Map} from "./app/Map/Map";
import {Content} from "./app/Content";
import {tiles} from "./data/tiles/tiles";
import {EngineObject, EngineObjectTypesUnion, GameMapData, GameMapTileData, SpriteSize} from "./data/types";
import {SpritesConfig} from "./data/spritesConfig";
import {LeftPanel} from "./app/Inspect/LeftPanel";
import {CropObject} from "./data/crops/types";
import {Inspect} from "./app/Inspect/Inspect";
import {InspectWorld} from "./app/Inspect/InspectWorld";
import {ToggleDebuggerMode} from "./app/Inspect/ToggleDebuggerMode";
import {SaveAndLoad} from "./app/Inspect/SaveAndLoad";
import {CONTENT_TYPE} from "./app/Map/const";

export class Main {
    dom: DOM;
    map: Map;
    public sprite: SpriteData | Array<EngineObject>;
    private currentSprite: SpriteNamesUnion;
    public mapSize: Vector;
    private rightPanel: Content;
    private spriteType: keyof typeof SPRITE_TYPES;
    private engineObject: EngineObject | CropObject | null;
    private data: GameMapData

    constructor() {
        this.dom = new DOM();
        this.currentSprite = SPRITE_NAMES.OUTDOOR_SPRING;
        this.sprite = tiles[0];
        this.map = new Map(this);
        this.rightPanel = new Content(this);
        this.spriteType = SPRITE_TYPES.GROUND_TILE;
        this.engineObject = null;
        this.data = {
            objects: [],
            tiles: []
        }

        new Inspect();
        new InspectWorld();
        new ToggleDebuggerMode();
        new SaveAndLoad(this);

        this.init();
    }

    public pushToDataTiles(tile: GameMapTileData): void {
        const index: number = this.data.tiles.findIndex(({cords}) => tile.cords.x === cords.x && tile.cords.y === cords.y);
        if (index !== -1) {
            this.data.tiles[index] = tile;
        } else {
            this.data.tiles.push(tile);
        }
    }

    public pushToDataObjects(object: ExtendedEngineObject): void {
        this.data.objects.push(object);
    }

    //
    // Getters
    //

    public getDataObjects(type?: EngineObjectTypesUnion): Array<ExtendedEngineObject> {
        if (type) {
            return this.data.objects.filter((el) => el.type === type);
        }
        return this.data.objects;
    }

    public getDataTiles(): Array<GameMapTileData> {
        return this.data.tiles;
    }

    public getEngineObject(): EngineObject | null {
        return this.engineObject;
    }

    public setEngineObject(payload: EngineObject | CropObject | null): void {
        this.map.setContentType(CONTENT_TYPE.OBJECTS);
        this.spriteType = SPRITE_TYPES.OBJECT;
        this.engineObject = payload;
        Inspect.addImage(this.engineObject.id);
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