import { swiffyslider } from 'swiffy-slider';
import "swiffy-slider/css";
import BlockBase from './BlockBase';

export default class SliderBlock extends BlockBase {
	constructor(paragraph) {
		super(paragraph);
	}

	connectedCallback() {
		this.render()
		swiffyslider.init();
	}

	render() {
		const slides = this.getFieldValue('Slides');
		
		const slider = document.createRange().createContextualFragment(`
			<div class="swiffy-slider"></div>
		`).firstElementChild;

		const sliderContainer = document.createRange().createContextualFragment(`
			<ul class="slider-container"></ul>
		`).firstElementChild;
		
		const sliderIndicators = document.createRange().createContextualFragment(`
			<div class="slider-indicators">
			</div>
		`).firstElementChild;

		slides.forEach(slide => {
			const path = slide.Fields.find(f => f.Name == "Image").Value[0].Path;
			const slideItem = document.createRange().createContextualFragment(`
				<li><img src="${this.getImageUrl(path, 1200)}" style="aspect-ratio: 16 / 9; object-fit: cover;"></li>
			`);
			const button = document.createRange().createContextualFragment(`
				<button></button>
			`);
			sliderContainer.append(slideItem);
			sliderIndicators.append(button)
		});

		const sliderNavigation = document.createRange().createContextualFragment(`
			<button type="button" class="slider-nav"></button>
			<button type="button" class="slider-nav slider-nav-next"></button>
		`);

		slider.append(sliderContainer, sliderNavigation, sliderIndicators)

		this.append(slider)
	}
}

customElements.define('slider-block', SliderBlock);