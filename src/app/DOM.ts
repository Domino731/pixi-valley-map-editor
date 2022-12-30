/** Class which is holding data about DOM tree */
export class DOM {
    public currentSprite: HTMLDivElement;
    public map: HTMLDivElement;
    public panelCellSize: HTMLSpanElement;
    public panelCellPosition: HTMLSpanElement;
    public panelCellImage: HTMLDivElement;
    public selectSprite: HTMLDivElement;
    public panelCellAmount: HTMLSpanElement;
    public panelSpriteSheetWidth: HTMLSpanElement;
    public panelSpriteSheetHeight: HTMLSpanElement;
    public panelSpriteSheetType: HTMLSpanElement;
    public selectList: any
    public selectSpriteSheetButton: HTMLButtonElement;
    public hoverObject: HTMLButtonElement;

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