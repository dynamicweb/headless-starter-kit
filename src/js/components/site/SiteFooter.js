import logo from '../../../../public/dw_logo.svg?raw';

const template = document.createElement('template');
template.innerHTML = `
	
	<footer class="site-footer bg-n-3 p-y-6">
		<div class="container">
			<div class="grid">
				<div class="flow">
					${logo}
					<p>It showed a lady fitted out with a fur hat and fur viewer.</p>
				</div>
				<div class="flow">
					
				</div>
				<div class="flow">
					<p>the whole of her lower arm towards the viewer.</p>
				</div>
				<div class="flow">
					<p>Upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer.</p>
				</div>
				<div class="flow">
					<p>It showed a lady fitted out with a fur hat and fur the whole of her lower arm towards the viewer.</p>
				</div>
			</div>
		</div>
	</footer>
`;

export class SiteFooter extends HTMLElement {

	connectedCallback() {
		this.appendChild(template.content);
	}
}

customElements.define('site-footer', SiteFooter);