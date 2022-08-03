import BlockBase from "./BlockBase";

const template = document.createElement('template');
template.innerHTML = `
	<div class="section">
		<div class="container" style="--max-width: 60rem">
		</div>
	</div>
`;
export default class ImageBlock extends BlockBase {
	constructor(paragraph) {
		super(paragraph);
	}

	connectedCallback() {
        const node = template.content.firstElementChild.cloneNode(true);
        const container = node.querySelector('.container');
        const img = document.createElement('img');
        img.src = this.getImageUrl(this.getFieldValue('Image')[0].Path, 1200, 0);
        img.alt = this.paragraph.name;
        container.append(img);
        this.append(node);
	}
}

customElements.define('image-block', ImageBlock);