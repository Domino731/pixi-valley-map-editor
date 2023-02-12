export class DetectOutsideClick {
    constructor() {
        this.init();
    }

    private handleContextMenu({clientX, clientY}: MouseEvent): void {
        const menuElement = document.querySelector('#context-menu-portal ul');
        if (menuElement) {
            const {left, top, bottom, right} = menuElement.getBoundingClientRect();
            const leftFixed: number = Math.ceil(left);
            const topFixed: number = Math.ceil(top);
            const bottomFixed: number = Math.ceil(bottom);
            const rightFixed: number = Math.ceil(right);
            const isInside: boolean = clientX < rightFixed && leftFixed < clientX && topFixed < clientY && bottomFixed > clientY;

            if (!isInside) {
                menuElement.remove();
            }

        }

    }

    private documentClickEvent(): void {
        document.addEventListener('click', (e) => this.handleContextMenu(e))
    }

    init() {
        this.documentClickEvent()
    }

}