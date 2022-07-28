const template = document.createElement('template');
template.innerHTML = `
	<div class="section" style="--padding: 8rem;">
		<div class="container">
			<div class="grid">
				<div class="flow">
					<h1 class="fs-6">Headless Starter Kit</h1>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde officiis perspiciatis possimus officia beatae
						dignissimos maxime blanditiis vitae id voluptatem ipsam a magnam laborum aut odio esse, aperiam nostrum
						modi.</p>
					<a href="#" class="btn shadow" data-type="primary">Get Started</a>
					<a href="#" class="btn shadow" data-type="primary-soft">Get Started</a>
				</div>
				<div></div>
			</div>
		</div>
	</div>
`;
export default class HeroBlock extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.appendChild(template.content);
    }
}

customElements.define('hero-block', HeroBlock);