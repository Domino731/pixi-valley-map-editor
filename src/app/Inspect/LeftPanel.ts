import {MapDownload} from "./MapDownload";
import {LoadMap} from "./LoadMap";

// Responsible for left panel logic - map load & download
export class LeftPanel {
    constructor() {
        this.init();
    }

    // init other classes logic
    private init(): void {
        new MapDownload();
        new LoadMap();
    }
}