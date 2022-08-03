export default class ErrorView extends HTMLElement {

    constructor(page) {
        super()

        this.page = page
    }

    connectedCallback() {

        this.innerHTML = `View not found (${this.page.item.systemName})`;

    }

}

customElements.define('error-view', ErrorView);