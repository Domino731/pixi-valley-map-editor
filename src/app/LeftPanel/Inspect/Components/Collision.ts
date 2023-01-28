import {CollisionComponentProps} from "./types";

export class Collision {
    private readonly collisionElement: HTMLElement;
    private readonly parentElement: HTMLElement;
    private readonly props: CollisionComponentProps;

    constructor(parentSelector: string, props: CollisionComponentProps) {
        this.parentElement = document.querySelector(parentSelector)
        this.collisionElement = document.querySelector('#example-inspect-collision').cloneNode(true) as HTMLElement
        this.props = props;

        this.init();
    }

    private setIndexBox(): void {
        const indexBoxElement: HTMLElement = this.collisionElement.querySelector('.inspectCollision__numberBox');
        indexBoxElement.innerText = `${this.props.index}`;
    }

    private setTitle(): void {
        const titleElement: HTMLElement = this.collisionElement.querySelector('.inspectCollision__coordinates');
        titleElement.innerText = `w: ${this.props.width}; h: ${this.props.height}; x: ${this.props.xPosition}; y: ${this.props.yPosition};`;
    }

    private setWidthInput(): void {
        const input: HTMLInputElement = this.collisionElement.querySelector('input[data-inspect-collision-width]');
        input.value = `${this.props.width}`;
    }

    private setHeightInput(): void {
        const input: HTMLInputElement = this.collisionElement.querySelector('input[data-inspect-collision-height]');
        input.value = `${this.props.height}`;
    }

    private setXPositionInput(): void {
        const input: HTMLInputElement = this.collisionElement.querySelector('input[data-inspect-collision-xPosition]');
        input.value = `${this.props.xPosition}`;
    }

    private setYPositionInput(): void {
        const input: HTMLInputElement = this.collisionElement.querySelector('input[data-inspect-collision-yPosition]');
        input.value = `${this.props.yPosition}`;
    }

    private setInputs(): void {
        this.setWidthInput();
        this.setHeightInput();
        this.setXPositionInput();
        this.setYPositionInput();
    }

    private build(): void {
        this.setTitle();
        this.setIndexBox();
        this.setInputs();
        this.parentElement.appendChild(this.collisionElement);
    }

    private init(): void {
        this.build();
    }

}