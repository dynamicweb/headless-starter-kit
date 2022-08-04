import { makeBlock } from "../../api/blocks";

export default class GridRowColumn extends HTMLDivElement {
    constructor(column) {
        super()
        this.column = column;
    }

    async connectedCallback() {
        const block = await makeBlock(this.column.paragraph);
        this.classList.add('grid-column');
        this.append(block);
    }
}

customElements.define('grid-row-column', GridRowColumn, {extends: 'div'});