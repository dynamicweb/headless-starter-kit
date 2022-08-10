import BlockBase from "./BlockBase";

export default class StatementBlock extends BlockBase {
	constructor(paragraph) {
		super(paragraph);
	}

	connectedCallback() {
		const node = document.createRange().createContextualFragment(`
			<div class="card d-flex shadow">
				<img class="avatar" src="${this.getImageUrl(this.getFieldValue('Image')[0].Path, 100, 75)}" alt="Avatar" style="aspect-ratio: 1/1; object-fit: cover;">
				<div class="d-flex flex-column">
					<h4 class="quote fs-5 fw-bold">${this.getFieldValue('Text')}</h4>
					<div>
						<h6 class="fs-4">${this.getFieldValue('Title')}</h6>
						<div class="cite text-p-4 fs-3">${this.getFieldValue('Cite')}</div>		
					</div>
				</div>
			</div>
		`);

        this.append(node);
	}
}

customElements.define('statement-block', StatementBlock);