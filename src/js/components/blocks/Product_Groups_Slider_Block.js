import { swiffyslider } from 'swiffy-slider';
import "swiffy-slider/css";
import { navigate } from '../../api/navigation';
import BlockBase from "./BlockBase";

export default class ProductGroupsSliderBlock extends BlockBase {
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
			<div class="swiffy-slider slider-item-show3 slider-item-reveal slider-nav-round slider-nav-dark slider-nav-scrollbar slider-nav-sm"></div>
		`).firstElementChild;

		const sliderContainer = document.createRange().createContextualFragment(`
			<ul class="slider-container"></ul>
		`).firstElementChild;

		groups.forEach(group => {
            const assets = group.Assets;
            const image = assets.find(f => f.Name === 'Icon')?.Value;
			const slideItem = document.createRange().createContextualFragment(`
				<li>
					<div class="bg-n-1 d-flex flex-between ai-c mb-3 rnd-1">
						<a href="${this.getFieldValue('EcomRootPage').Url}?GroupID=${group.Id}">
							<h5 class="fs-4 p-x-3">${group.Name}</h5>
						</a>
						<div><img src="${this.getImageUrl(image, 100)}" style="aspect-ratio: 1/1; object-fit: cover;"></div>
					</div>
                </li>
			`);
			
			const anchor = slideItem.querySelector('a');
            anchor.onclick = (e) => {
                e.preventDefault();
                navigate(anchor, anchor.href);
            };
			
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

customElements.define('product-groups-slider-block', ProductGroupsSliderBlock);