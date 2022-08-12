import { swiffyslider } from 'swiffy-slider';
import "swiffy-slider/css";
import BlockBase from "./BlockBase";

export default class ProductGroupsSliderLargeBlock extends BlockBase {
    constructor(paragraph) {
        super(paragraph);
    }

    connectedCallback() {
        
        this.render();
        swiffyslider.init();
    }

    render() {
        const groups = this.getFieldValue('ProductGroups');
		
		const slider = document.createRange().createContextualFragment(`
			<div class="swiffy-slider slider-item-show4 slider-nav-round slider-nav-dark slider-nav-scrollbar slider-nav-sm"></div>
		`).firstElementChild;

		const sliderContainer = document.createRange().createContextualFragment(`
			<ul class="slider-container"></ul>
		`).firstElementChild;

		groups.forEach(group => {
            const assets = group.Assets;
            console.log(assets)
            const image = assets.find(f => f.Name === 'SmallImage')?.Value;
			const slideItem = document.createRange().createContextualFragment(`
				<li>
                    <div class="d-flex flex-column flex-between mb-3 rnd-1">
						<div class="rnd-1"><img src="${this.getImageUrl(image, 400)}" style="aspect-ratio: 3/4; object-fit: cover;"></div>
                        <div class=""><h4 class="fs-5">${group.Name}</h4></div>
                    </div>
                </li>
			`);
			const button = document.createRange().createContextualFragment(`
				<button type="button"></button>
			`);
			sliderContainer.append(slideItem);
		});

		const sliderNavigation = document.createRange().createContextualFragment(`
			<button type="button" class="slider-nav"></button>
			<button type="button" class="slider-nav slider-nav-next"></button>
		`);

		slider.append(sliderContainer, sliderNavigation)

		this.append(slider)
    }
}

customElements.define('product-groups-slider-large-block', ProductGroupsSliderLargeBlock);