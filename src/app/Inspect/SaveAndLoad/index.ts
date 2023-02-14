import {LoadMap} from "./components/LoadMap";
import {DownloadMap} from "./components/DownloadMap";
import {Main} from "../../../Main";


export class SaveAndLoad {
    constructor(main: Main) {
        new LoadMap(main);
        new DownloadMap(main);
    }
}