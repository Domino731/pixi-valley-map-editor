/** Class which is holding data about DOM tree */
export class DOM {
    public readonly currentSprite: HTMLDivElement;
    public readonly map: HTMLDivElement;
    public readonly panelCellSize: HTMLSpanElement;
    public readonly panelCellPosition: HTMLSpanElement;
    public readonly panelCellImage: HTMLDivElement;
    public readonly selectSprite: HTMLDivElement;
    public readonly panelCellAmount: HTMLSpanElement;
    public readonly panelSpriteSheetWidth: HTMLSpanElement;
    public readonly panelSpriteSheetHeight: HTMLSpanElement;
    public readonly panelSpriteSheetType: HTMLSpanElement;
    public readonly selectList: any
    public readonly selectSpriteSheetButton: HTMLButtonElement;
    public readonly hoverObject: HTMLButtonElement;

    constructor() {
        this.currentSprite = document.querySelector('.editor__currentSprite');
        this.map = document.querySelector('#map');
        this.panelCellSize = document.querySelector('#panel-cell-size span');
        this.panelCellPosition = document.querySelector('#panel-cell-position span');
        this.panelSpriteSheetWidth = document.querySelector('#panel-sprite-sheet-width span');
        this.panelSpriteSheetHeight = document.querySelector('#panel-sprite-sheet-height span');
        this.panelCellAmount = document.querySelector('#panel-cell-amount span');
        this.panelSpriteSheetType = document.querySelector('#panel-sprite-sheet-type span');
        this.panelCellImage = document.querySelector('.editor__panelCellImage div');
        this.selectSprite = document.querySelector('#select-sprite-list');
        this.selectList = document.querySelector('#select-sprite-sheet-list');
        this.selectSpriteSheetButton = document.querySelector('#select-sprite-sheet-button');
        this.hoverObject = document.querySelector('#container-hover-object')
    }

}