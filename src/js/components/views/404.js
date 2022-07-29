export default class Dw404 extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = '404 not found';
    }
}

customElements.define('dw-404', Dw404);