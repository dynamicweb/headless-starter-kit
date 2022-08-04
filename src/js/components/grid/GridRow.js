import GridRowColumn from "./GridRowColumn";

export default class GridRow extends HTMLDivElement {
    constructor(row) {
        super()
        this.row = row;
    }

    connectedCallback() {
        this.classList.add('section');
        this.setAttribute('data-row', this.row.id)
        const container = document.createElement('div');
        container.classList.add('container');
        const grid = document.createElement('div');
        grid.classList.add('grid');
        this.append(container);
        container.append(grid)

        this.row.columns.forEach(column => {
            const gridColumn = new GridRowColumn(column);
            grid.append(gridColumn);
        });
    }
}

customElements.define('grid-row', GridRow, {extends: 'div'});