const template = document.createElement('template');
template.innerHTML = `
	<div class="section">
		<div class="container" style="--max-width: 55rem;">
			<div class="card d-flex">
				<img src="" alt="Avatar">
				<div class="ml-3">
					<h4>
						“The team were only too happy to help me getting started.”
					</h4>
					<div class="avatar-author d-block">
					  <h6>Anil Kumar</h6>
					  <span>Designer</span>
					</div>
				</div>
			</div>
		</div>
	</div>
`;
export default class StatementBlock extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.appendChild(template.content);
	}
}

customElements.define('statement-block', StatementBlock);