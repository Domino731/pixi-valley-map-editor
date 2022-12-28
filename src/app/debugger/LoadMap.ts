export class LoadMap {
    private DOM: {
        input: HTMLInputElement;
    }

    constructor() {
        this.DOM = {
            input: document.querySelector('#json-map-input')
        }
        this.init();
    }

    private inputChangeEvent(): void {
        function onChange(event) {
            var reader = new FileReader();
            reader.onload = onReaderLoad;
            reader.readAsText(event.target.files[0]);
        }

        function onReaderLoad(event) {
            console.log(JSON.parse(event.target.result));
        }


        this.DOM.input.addEventListener('change', onChange);
    }

    private init(): void {
        this.inputChangeEvent();
    }

}