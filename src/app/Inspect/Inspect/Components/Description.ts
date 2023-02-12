export class Description {
    private readonly descriptionElement: HTMLParagraphElement;

    constructor() {
        this.descriptionElement = document.querySelector('#inspect-description-text')
    }

    build(description: string) {
        this.descriptionElement.innerText = description.replace(/(\r\n|\n|\r)/gm, "");
    }
}