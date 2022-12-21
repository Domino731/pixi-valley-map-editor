/** Class which is holding data about DOM tree */
export class DOM {
    public currentSprite: HTMLDivElement;
    public map: HTMLDivElement;
    public panelCellSize: HTMLSpanElement;
    public panelCellPosition: HTMLSpanElement;
    public panelCellImage: HTMLDivElement;
    public selectSprite: HTMLDivElement;

    constructor() {
        this.currentSprite = document.querySelector('.editor__currentSprite');
        this.map = document.querySelector('#map');
        this.panelCellSize = document.querySelector('#panel-cell-size span');
        this.panelCellPosition = document.querySelector('#panel-cell-position span');
        this.panelCellImage = document.querySelector('.editor__panelCellImage div');
        this.selectSprite = document.querySelector('#select-sprite');
    }

}