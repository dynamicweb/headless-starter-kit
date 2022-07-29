import { swiffyslider } from 'swiffy-slider'
import '../../../../node_modules/swiffy-slider/dist/css/swiffy-slider.css'

const template = document.createElement('template');
template.innerHTML = `
	<div class="section">
		<div class="container">
			<div class="swiffy-slider">
				<ul class="slider-container">
					<li><img src="https://source.unsplash.com/49b9l_29ceA/1600x900" style="max-width: 100%;height: auto;"></li>
					<li><img src="https://source.unsplash.com/nKAglN6HBH8/1600x900" style="max-width: 100%;height: auto;"></li>
					<li><img src="https://source.unsplash.com/E9ZwWcMGzj8/1600x900" style="max-width: 100%;height: auto;"></li>
				</ul>

				<button type="button" class="slider-nav"></button>
				<button type="button" class="slider-nav slider-nav-next"></button>

				<div class="slider-indicators">
					<button class="active"></button>
					<button></button>
					<button></button>
				</div>
			</div>
		</div>
	</div>
`;
export default class SliderBlock extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.appendChild(template.content);
		swiffyslider.init();
	}
}

customElements.define('slider-block', SliderBlock);