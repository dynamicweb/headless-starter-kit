export default class ErrorBlock extends HTMLElement {

    constructor(paragraph) {
        super()

        this.paragraph = paragraph
    }

    connectedCallback() {

        this.innerHTML = `Block not found (${this.paragraph?.item?.systemName})`;

    }
}

customElements.define('error-block', ErrorBlock);