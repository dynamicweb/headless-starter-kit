import { getNavigation, navigate } from "../../api/navigation";

const template = document.createElement('template');
template.innerHTML = `
	
	<header class="site-header bg-n-1">
		<div class="container d-flex ai-c flex-between p-y-4">
			<a href="/" data-link="" class="logo fw-bold fs-4">
				<span class="text-p-4">👋 Headless Starter Kit</span>
			</a>
			<nav id="main-nav" class="nav text-n-4 fw-semi"></nav>
			<button class="btn shadow" data-type="primary">Get Started</button>
		</div>
	</header>
`;

export class SiteHeader extends HTMLElement {

	async connectedCallback() {
		const header = template.content;
		const pages = await getNavigation();
		const nav = header.getElementById("main-nav");
		this.appendChild(header);

		pages.forEach(page => {
			const navItem = document.createElement('a');
			navItem.href = page.Item.Link
			navItem.textContent = page.Name
			navItem.onclick = (e) => {
				e.preventDefault();
				navigate(page.Item.Link);
			}
			nav.append(navItem);
		})
	}
}

customElements.define('site-header', SiteHeader);