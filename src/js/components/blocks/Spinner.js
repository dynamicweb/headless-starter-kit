const template = document.createElement('template');
template.innerHTML = `
	<div class="section" style="--padding: 10rem">
		<div class="container">
            <svg class="spinner" viewBox="0 0 50 50">
                <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
            </svg>
		</div>
	</div>
`;
export default class Spinner extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
		const node = template.content.firstElementChild.cloneNode(true);
        this.append(node);
    }
}

customElements.define('spinner-block', Spinner);