import BlockBase from "./BlockBase";

const template = document.createElement('template');
template.innerHTML = `
	<div class="section">
		<div class="container" style="--max-width: 50rem">
            <div class="flow">
            </div>
		</div>
	</div>
`;
export default class TextBlock extends BlockBase {
    constructor(paragraph) {
        super(paragraph);
    }

    connectedCallback() {
        const node = template.content.firstElementChild.cloneNode(true);
		node.querySelector('.flow').innerHTML = this.getFieldValue('Text');
        this.append(node);
    }
}

customElements.define('text-block', TextBlock);