import BlockBase from "./BlockBase";

const template = document.createElement('template');
template.innerHTML = `
	<div class="section">
		<div class="container" style="--max-width: 40rem;">
			<div class="card rnd-4 d-flex ai-c shadow">
				<img class="avatar rnd-circle" src="" alt="Avatar">
				<div class="p-x-6">
					<div class="flow">
						<h4 class="quote fs-6 fw-bold"></h4>
						<h6 class="fs-4"></h6>
						<cite></cite>
					</div>
				</div>
			</div>
		</div>
	</div>
`;
export default class StatementBlock extends BlockBase {
	constructor(paragraph) {
		super(paragraph);
	}

	connectedCallback() {
		const node = template.content.firstElementChild.cloneNode(true);

		const img = node.querySelector('.avatar');
		const header = node.querySelector('h6');
		const text = node.querySelector('.quote');
		const cite = node.querySelector('cite');

		img.src = this.getImageUrl(this.getFieldValue('Image')[0].Path, 100, 100, 75, 6);
		text.innerHTML = this.getFieldValue('Text');
		header.textContent = this.getFieldValue('Title');
		cite.textContent = this.getFieldValue('Cite');
        this.append(node);

	}
}

customElements.define('statement-block', StatementBlock);