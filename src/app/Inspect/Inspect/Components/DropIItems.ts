import {DropItemInterface} from "../../../../data/types";
import {Inspect} from "../index";
import {findObject} from "../../../../utils/EngineObjects";

export class DropItems {
    private readonly tableBodyElement: HTMLTableSectionElement;

    constructor() {
        this.tableBodyElement = document.querySelector('#inspect-sections-drop-items-table-body')
    }

    private createTableRow({id, chance, amount}: DropItemInterface): void {
        let tableBodyHTML = this.tableBodyElement.innerHTML;
        const {name} = findObject(id) ?? {};

        tableBodyHTML += `
           <tr>
             <td>${id}</td>
             <td>${name ?? ''}</td>                       
             <td>${amount}</td>   
             <td>${typeof chance === 'number' ? `${chance}%` : `${chance[0]}% - ${chance[1]}%`}</td>                                                                
           </tr>
        `;
        this.tableBodyElement.innerHTML = tableBodyHTML;
    }

    private clearTableBodyHTML(): void {
        this.tableBodyElement.innerHTML = '';
    }

    public build(items: Array<DropItemInterface>): void {
        this.clearTableBodyHTML();
        items.map((item: DropItemInterface) => this.createTableRow(item))
    }
}