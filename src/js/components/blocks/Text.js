const template = document.createElement('template');
template.innerHTML = `
	<div class="section">
		<div class="container">
            <div class="flow">
                <h2 class="fs-6">Lorem ipsum dolor</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde officiis perspiciatis possimus officia beatae dignissimos maxime blanditiis vitae id voluptatem ipsam a magnam laborum aut odio esse, aperiam nostrum modi.</p>
            </div>
		</div>
	</div>
`;
export default class TextBlock extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.appendChild(template.content);
    }
}

customElements.define('text-block', TextBlock);