export default class MenuButton extends HTMLElement {

	constructor() {
		super()
	}

	async connectedCallback() {
		this.render(false);
	}
	   
	render(isExpanded) {
		isExpanded ? this.renderClose() : this.renderOpen();
	}

	renderOpen() {
		const iconOpen = document.createRange().createContextualFragment(`
			<svg class="bi" width="24" height="24" fill="currentColor">
				<use xlink:href="bootstrap-icons.svg#list"/>
			</svg>
		`);
		this.dataset.type = 'neutral';
		this.classList.add('btn', 'hidden-lg');
		this.type = 'button';
		this.replaceChildren(iconOpen);
	}
	
	renderClose() {
		const iconClose = document.createRange().createContextualFragment(`
			<svg class="bi" width="24" height="24" fill="currentColor">
				<use xlink:href="bootstrap-icons.svg#x-lg"/>
			</svg>
		`);
		this.dataset.type = 'neutral';
		this.classList.add('btn', 'hidden-lg');
		this.type = 'button';
		this.replaceChildren(iconClose);
	}
}

customElements.define('menu-button', MenuButton);