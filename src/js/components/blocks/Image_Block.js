import BlockBase from "./BlockBase";

export default class ImageBlock extends BlockBase {
	constructor(paragraph) {
		super(paragraph);
	}

	connectedCallback() {
        const img = document.createElement('img');
        img.src = this.getImageUrl(this.getFieldValue('Image')[0].Path, 1200, 50);
        img.alt = this.paragraph.name;
		img.style.aspectRatio = '16/9';
		img.style.objectFit = 'cover';
        this.append(img);
	}
}

customElements.define('image-block', ImageBlock);