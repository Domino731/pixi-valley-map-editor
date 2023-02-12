import {hide, show} from "../../utils/toggleElementVisibility";

export class ToggleDebuggerMode {
    private readonly buttons: {
        objects: HTMLButtonElement;
        world: HTMLButtonElement;
        saveLoad: HTMLButtonElement;
    }
    private readonly inspectSections: {
        objects: HTMLDivElement;
        world: HTMLDivElement;
    }
    private readonly inspectOverview: {
        objects: HTMLDivElement;
        world: HTMLDivElement;
        saveLoad: HTMLDivElement;
    }


    // inspect-object-overview
    constructor() {
        this.buttons = {
            objects: document.querySelector('#toggle-debugger-sections-button-objects'),
            world: document.querySelector('#toggle-debugger-sections-button-world'),
            saveLoad: document.querySelector('#toggle-debugger-sections-button-save-load')
        }
        this.inspectSections = {
            objects: document.querySelector('#inspect-objects-section'),
            world: document.querySelector('#inspect-world-section')
        }
        this.inspectOverview = {
            objects: document.querySelector('#inspect-object-overview'),
            world: document.querySelector('#inspect-world-overview'),
            saveLoad: document.querySelector('#inspect-save-load-overview')
        }

        this.init();
    }

    private buttonEvents(): void {
        this.buttons.world.addEventListener('click', () => {
            this.inspectSections.world.classList.remove('hide');
            this.inspectOverview.world.classList.remove('hide');
            this.inspectSections.objects.classList.add('hide');
            this.inspectOverview.objects.classList.add('hide');
        });
        this.buttons.objects.addEventListener('click', () => {
            this.inspectSections.objects.classList.remove('hide');
            this.inspectOverview.objects.classList.remove('hide');
            this.inspectSections.world.classList.add('hide');
            this.inspectOverview.world.classList.add('hide');
        });
        this.buttons.saveLoad.addEventListener('click', () => {
            hide(this.inspectOverview.world);
            hide(this.inspectOverview.objects);
            show(this.inspectOverview.saveLoad)
        })
    }

    private init(): void {
        this.buttonEvents();
    }
}