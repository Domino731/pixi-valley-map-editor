import {CollisionComponentProps} from "./types";
import {CollisionColors} from "./const";

export class Collision {
    private readonly collisionElement: HTMLElement;
    private readonly parentElement: HTMLElement;
    private readonly props: CollisionComponentProps;
    private readonly objectImageElement: HTMLElement;
    private readonly color: string;
    private collisionAreaElement: HTMLElement | null;

    constructor(parentSelector: string, props: CollisionComponentProps) {
        this.parentElement = document.querySelector(parentSelector)
        this.collisionElement = document.querySelector('#example-inspect-collision').cloneNode(true) as HTMLElement
        this.objectImageElement = document.querySelector('#inspect-blueprint');
        this.collisionAreaElement = null;
        this.color = CollisionColors[props.index];
        this.props = props;

        this.init();
    }

    private setCollisionArea(): void {
        const area: HTMLElement = document.createElement('div');
        area.style.position = 'absolute';
        area.style.width = `${this.props.width}px`;
        area.style.height = `${this.props.height}px`;
        area.style.left = `${this.props.xPosition}px`;
        area.style.top = `${this.props.yPosition}px`;
        area.style.border = `1px solid ${this.color}`;

        this.collisionAreaElement = area;
        this.objectImageElement.appendChild(area);
    }

    private setIndexBox(): void {
        const indexBoxElement: HTMLElement = this.collisionElement.querySelector('.inspectCollision__numberBox');
        indexBoxElement.innerText = `${this.props.index}`;
    }

    private setTitle(): void {
        const titleElement: HTMLElement = this.collisionElement.querySelector('.inspectCollision__coordinates');
        titleElement.innerText = `w: ${this.props.width}; h: ${this.props.height}; x: ${this.props.xPosition}; y: ${this.props.yPosition};`;
    }

    private setStyles(): void {
        const numberBox: HTMLElement = this.collisionElement.querySelector('.inspectCollision__numberBox');
        numberBox.style.backgroundColor = this.color;
        this.collisionElement.style.border = `1px solid ${this.color}`;
    }

    private collisionInputEvent(input: HTMLInputElement, dimensionStyleProperty: 'width' | 'height' | 'top' | 'left'): void {
        input.addEventListener('input', (event) => {
            const target = event.target as HTMLInputElement;
            if (this.collisionAreaElement) {
                this.collisionAreaElement.style[dimensionStyleProperty] = `${target.value}px`;
            }
        })
    }

    private setWidthInput(): void {
        const input: HTMLInputElement = this.collisionElement.querySelector('input[data-inspect-collision-width]');
        this.collisionInputEvent(input, 'width');
        input.value = `${this.props.width}`;
    }

    private setHeightInput(): void {
        const input: HTMLInputElement = this.collisionElement.querySelector('input[data-inspect-collision-height]');
        this.collisionInputEvent(input, 'height');
        input.value = `${this.props.height}`;
    }

    private setXPositionInput(): void {
        const input: HTMLInputElement = this.collisionElement.querySelector('input[data-inspect-collision-xPosition]');
        this.collisionInputEvent(input, 'left');
        input.value = `${this.props.xPosition}`;
    }

    private setYPositionInput(): void {
        const input: HTMLInputElement = this.collisionElement.querySelector('input[data-inspect-collision-yPosition]');
        this.collisionInputEvent(input, 'top');
        input.value = `${this.props.yPosition}`;
    }

    private setInputs(): void {
        this.setWidthInput();
        this.setHeightInput();
        this.setXPositionInput();
        this.setYPositionInput();
    }

    private setButton(): void {
        const button: HTMLElement = this.collisionElement.querySelector('.inspectCollision__panelButton');
        const panel: HTMLElement = this.collisionElement.querySelector('.inspectCollision__inputs');
        const icon: HTMLElement = button.querySelector('i');

        button.addEventListener('click', () => {
            if (panel.classList.contains('hide')) {
                panel.classList.remove('hide');
                icon.classList.add('stageObject__iconActive');
                this.collisionElement.style.border = `1px solid ${this.color}`;
            } else {
                panel.classList.add('hide');
                icon.classList.remove('stageObject__iconActive');
                this.collisionElement.style.border = `none`;
            }
        })
    }

    private build(): void {
        this.setTitle();
        this.setStyles();
        this.setIndexBox();
        this.setInputs();
        this.setCollisionArea();
        this.setButton();
        this.parentElement.appendChild(this.collisionElement);
    }

    private init(): void {
        this.build();
    }

}