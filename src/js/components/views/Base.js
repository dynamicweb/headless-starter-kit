export default class Base extends HTMLElement {
    constructor(page) {
        super()

        // Get the page object
        this.page = page;
    }

    connectedCallback() {

        // 1. get props from page object
        // 2. get paragraphs from page
        // 3. match blocks from paragraphs
        // 4. render blocks

    }
}

customElements.define('dw-main', Base);