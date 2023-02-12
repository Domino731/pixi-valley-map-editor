import {ActionCollisionProps, CollisionComponentProps} from "./types";
import {CollisionColors} from "./const";
import {GameActions} from "../../../../data/actions";
import {GameActionsUnion} from "../../../../data/actions/const";

export class Collision {
    private readonly collisionElement: HTMLElement;
    private readonly parentElement: HTMLElement;
    private readonly props: CollisionComponentProps | ActionCollisionProps;
    private readonly objectImageElement: HTMLElement;
    private readonly color: string;
    private readonly isActionCollision: boolean;
    private collisionAreaElement: HTMLElement | null;

    constructor(parentSelector: string, props: CollisionComponentProps, isActionCollision?: boolean) {
        this.parentElement = document.querySelector(parentSelector)
        this.collisionElement = document.querySelector('#example-inspect-collision').cloneNode(true) as HTMLElement
        this.objectImageElement = document.querySelector('#inspect-blueprint');
        this.collisionAreaElement = null;
        this.color = CollisionColors[props.index];
        this.isActionCollision = isActionCollision ?? false;
        this.props = props;
    }

    private setCollisionArea(): void {
        const area: HTMLElement = document.createElement('div');
        area.style.position = 'absolute';
        area.style.width = `${this.props.width}px`;
        area.style.height = `${this.props.height}px`;
        area.style.left = `${this.props.xPosition}px`;
        area.style.top = `${this.props.yPosition}px`;
        area.style.border = `1px solid ${this.color}`;
        area.dataset.collisionIndex = `${this.props.index}`;

        this.collisionAreaElement = area;
        this.objectImageElement.appendChild(area);
    }

    private setIndexBox(): void {
        const indexBoxElement: HTMLElement = this.collisionElement.querySelector('.inspectCollision__numberBox');
        indexBoxElement.innerText = `${this.props.index}`;
    }

    private setTitle(): void {
        const titleElement: HTMLElement = this.collisionElement.querySelector('.inspectCollision__coordinates');

        let title: string = '';

        // @ts-ignore
        if (this.isActionCollision && this.props.actionId) {
            // @ts-ignore
            const actionName: string | undefined = GameActions.find(({id}: { id: GameActionsUnion }) => id === this.props.actionId)?.name;
            title = `${actionName ?? 'None'}`;
        } else {
            title = `w: ${this.props.width}; h: ${this.props.height}; x: ${this.props.xPosition}; y: ${this.props.yPosition};`
        }

        titleElement.innerText = title;
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

    private getCollisionAreaElement(): HTMLElement {
        return this.objectImageElement.querySelector(`div[data-collision-index="${this.props.index}"]`);
    }

    private setVisibleCheckbox(): void {
        const checkbox: HTMLInputElement = this.collisionElement.querySelector('input[data-inspect-collision-visible]');
        const collisionArea: HTMLElement = this.getCollisionAreaElement();

        checkbox.addEventListener('input', (event: Event) => {
            const target = event.target as HTMLInputElement;
            if (target.checked) {
                collisionArea.classList.remove('hide');
            } else {
                collisionArea.classList.add('hide');
            }
        });
    }

    private setFulfilledCheckbox(): void {
        const checkbox: HTMLInputElement = this.collisionElement.querySelector('input[data-inspect-collision-fulfilled]');
        const collisionArea: HTMLElement = this.getCollisionAreaElement();

        checkbox.addEventListener('input', (event: Event) => {
            const target = event.target as HTMLInputElement;
            if (target.checked) {
                collisionArea.style.backgroundColor = this.color;
                collisionArea.style.opacity = '0.7';
            } else {
                collisionArea.style.backgroundColor = 'transparent';
                collisionArea.style.opacity = '1';
            }
        });
    }


    private setInputs(): void {
        this.setWidthInput();
        this.setHeightInput();
        this.setXPositionInput();
        this.setYPositionInput();
        this.setVisibleCheckbox();
        this.setFulfilledCheckbox();
    }

    private setButton(): void {
        const button: HTMLElement = this.collisionElement.querySelector('.inspectCollision__panelButton');
        const panel: HTMLElement = this.collisionElement.querySelector('.inspectCollision__inputs');
        const icon: HTMLElement = button.querySelector('i');

        const hidePanel = (): void => {
            panel.classList.add('hide');
            icon.classList.remove('stageObject__iconActive');
            this.collisionElement.style.border = `none`;
        }
        hidePanel();

        button.addEventListener('click', () => {
            if (panel.classList.contains('hide')) {
                panel.classList.remove('hide');
                icon.classList.add('stageObject__iconActive');
                this.collisionElement.style.border = `1px solid ${this.color}`;
            } else {
                hidePanel();
            }
        })
    }

    public buildActionCollision(): void {
        this.setTitle();
        this.setStyles();
        this.setIndexBox();
        this.setCollisionArea();
        this.setButton();
        this.setInputs();
        this.parentElement.appendChild(this.collisionElement);
    }

    public build(): void {
        this.setTitle();
        this.setStyles();
        this.setIndexBox();
        this.setCollisionArea();
        this.setButton();
        this.setInputs();
        this.parentElement.appendChild(this.collisionElement);
    }
}