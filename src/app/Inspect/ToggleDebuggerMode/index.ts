import {hide, show} from "../../../utils/toggleElementVisibility";

/**
 * Responsible for button by which user can toggle inspect section
 * */
export class ToggleDebuggerMode {
    // buttons to toggle section
    private readonly buttons: {
        objects: HTMLButtonElement;
        world: HTMLButtonElement;
        saveLoad: HTMLButtonElement;
    }
    // content sections (down)
    private readonly sections: {
        objects: HTMLDivElement;
        world: HTMLDivElement;
    }
    // overview panels  (up)
    private readonly panels: {
        objects: HTMLDivElement;
        world: HTMLDivElement;
        saveLoad: HTMLDivElement;
    }

    constructor() {
        this.buttons = {
            objects: document.querySelector('#toggle-debugger-sections-button-objects'),
            world: document.querySelector('#toggle-debugger-sections-button-world'),
            saveLoad: document.querySelector('#toggle-debugger-sections-button-save-load')
        }
        this.sections = {
            objects: document.querySelector('#inspect-objects-section'),
            world: document.querySelector('#inspect-world-section')
        }
        this.panels = {
            objects: document.querySelector('#inspect-object-overview'),
            world: document.querySelector('#inspect-world-overview'),
            saveLoad: document.querySelector('#inspect-save-load-overview')
        }

        this.init();
    }

    /**
     * Method to set active button
     * @Param buttonKeyName - key of button that you want to set active
     * */
    private setButtonActive(buttonKeyName: 'objects' | 'world' | 'saveLoad'): void {
        Object.entries(this.buttons).forEach(([key, value]) => {
            let className = `inspect__panelButton `
            if (key === buttonKeyName) {
                className += `inspect__panelButton inspect__panelButton--active`;
            } else {
                className += `inspect__panelButton inspect__panelButton--disabled`;
            }
            value.className = className;
        })
    }

    /**
     * Apply click event on each button to give ability to toggle section
     * */
    private buttonEvents(): void {
        this.buttons.world.addEventListener('click', () => {
            this.setButtonActive('world');
            show(this.sections.world)
            show(this.panels.world)
            hide(this.panels.saveLoad);
            hide(this.sections.objects)
            hide(this.panels.objects)
        });
        this.buttons.objects.addEventListener('click', () => {
            this.setButtonActive('objects');
            show(this.sections.objects);
            show(this.panels.objects)
            hide(this.panels.saveLoad);
            hide(this.sections.world);
            hide(this.panels.world)
        });
        this.buttons.saveLoad.addEventListener('click', () => {
            this.setButtonActive('saveLoad');
            hide(this.panels.world);
            hide(this.panels.objects);
            hide(this.sections.world);
            hide(this.sections.objects);
            show(this.panels.saveLoad)
        })
    }

    /** Initialise class functionality */
    private init(): void {
        this.buttonEvents();
    }
}