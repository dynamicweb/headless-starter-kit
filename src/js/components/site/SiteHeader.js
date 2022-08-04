import { getNavigation, navigate } from "../../api/navigation";
import LoginButton from "./LoginButton";

const template = document.createElement('template');
template.innerHTML = `
	
	<header class="site-header bg-n-1">
		<div class="container d-flex ai-c flex-between p-y-4">
			<a href="/" class="logo fw-bold fs-4">
				<span class="text-p-4">👋 Headless Starter Kit</span>
			</a>
			<nav id="main-nav" class="nav text-n-6 fw-semi"></nav>
		</div>
	</header>
`;

export class SiteHeader extends HTMLElement {

	connectedCallback() {
		const header = template.content;
		getNavigation().then(pages => {
			const nav = header.getElementById("main-nav");
			const container = header.querySelector('.container');
			container.append(new LoginButton());
			this.appendChild(header);
	
			pages.forEach(page => {
				const navItem = document.createElement('a');
				nav.append(navItem);
				navItem.href = page.link
				navItem.textContent = page.name
				navItem.onclick = (e) => {
					e.preventDefault();
					navigate(navItem, page.link);
				}
			})
		})
		
		const homeLink = header.querySelector('.logo');
		homeLink.onclick = (e) => {
			e.preventDefault();
			navigate(homeLink, homeLink.href);
		}
	}
}

customElements.define('site-header', SiteHeader);