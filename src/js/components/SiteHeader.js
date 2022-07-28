const template = document.createElement('template');
template.innerHTML = `
	
	<header class="site-header bg-n-1">
		<div class="container d-flex ai-c flex-between p-y-4">
			<a href="/" data-link="" class="logo fw-bold fs-4">
				<span class="text-p-4">👋 Headless Starter Kit</span>
			</a>
		
			<nav id="main-nav" data-active="" class="nav text-n-4 fw-semi"></nav>

			<button class="btn shadow" data-type="primary">Get Started</button>
			
			<div class="hamburger hidden-lg">
				<button id="toggleMenu">
					<span>Menu</span>
				</button>
			</div>
		</div>
	</header>
`;

class SiteHeader extends HTMLElement {

	toggleMenu() {
		console.log('toggle');
	}

	connectedCallback() {
	
		this.appendChild(template.content);
		this.querySelector('#toggleMenu').addEventListener('click', () => {
			this.toggleMenu();
		})
	}

	disconnectedCallback() {
		this.querySelector('#toggleMenu').removeEventListener();
	}

}

window.customElements.define('site-header', SiteHeader);