import BlockBase from "./BlockBase";

export default class TextBlock extends BlockBase {
    constructor(paragraph) {
        super(paragraph);
    }

    connectedCallback() {
		this.classList.add('flow');
        this.innerHTML = this.getFieldValue('Text');
    }
}

customElements.define('text-block', TextBlock);