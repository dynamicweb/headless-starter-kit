import logo from '../../../../public/dw_logo.svg?raw';

export class SiteFooter extends HTMLElement {

	connectedCallback() {
		
		const footer = document.createRange().createContextualFragment(`
			<footer class="site-footer bg-n-7 text-n-4 p-y-6">
				<div class="container p-y-6">
					<div class="grid">
						<div class="flow">
							<div class="text-p-3" style="max-width:120px;">${logo}</div>
							<p>It showed a lady fitted out with a fur hat and fur viewer.</p>
						</div>
						<div class="flow">
							
						</div>
						<div class="flow">
							<h4>Contact</h4>
							<p>the whole of her lower arm towards the viewer.</p>
						</div>
						<div class="flow">
							<h4>Contact</h4>

							<div class="d-flex">
								<svg class="bi" width="24" height="24" fill="currentColor">
									<use xlink:href="bootstrap-icons.svg#geo-alt-fill"/>
								</svg>
								<div>
									<span>Bjoernholms Allé 30, </br> 8260 Viby J</span>
								</div>
							</div>

							<div class="d-flex">
								<svg class="bi" width="24" height="24" fill="currentColor">
									<use xlink:href="bootstrap-icons.svg#telephone-fill"/>
								</svg>
								<div>
									<span>+45 7025 2090</span>
								</div>
							</div>

							<div class="d-flex">
								<svg class="bi" width="24" height="24" fill="currentColor">
									<use xlink:href="bootstrap-icons.svg#envelope-fill"/>
								</svg>
								<div>
									<span>info@dynamicweb.dk</span>
								</div>
							</div>
						</div>
						<div class="flow">
							<h4>Contact</h4>
							<p>It showed a lady fitted out with a fur hat and fur the whole of her lower arm towards the viewer.</p>
						</div>
					</div>
				</div>
				<div class="container p-y-6 ta-c">
					<span class="fs-2">©2022 All Rights Reserved. Your Brand® is a registered trademark of Your Company</span>
				</div>
			</footer>
		`);

		this.appendChild(footer);
	}
}

customElements.define('site-footer', SiteFooter);