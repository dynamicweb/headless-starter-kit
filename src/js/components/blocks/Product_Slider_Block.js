import { Ecommerce } from "@dynamicweb/headless-api";
import { swiffyslider } from 'swiffy-slider';
import "swiffy-slider/css";
import { createClient } from "../../api/clientFactory";
import { ProductItem } from "../items/ProductItem";
import BlockBase from "./BlockBase";

export default class ProductSliderBlock extends BlockBase {
    constructor(paragraph) {
        super(paragraph);
    }

    async connectedCallback() {
        this.render();
    }
    
    async render() {
        
        const products = await this.getProucts();
		
		const slider = document.createRange().createContextualFragment(`
			<div class="swiffy-slider slider-item-show5 slider-nav-round slider-nav-dark slider-nav-scrollbar slider-nav-sm"></div>
		`).firstElementChild;

		const sliderContainer = document.createRange().createContextualFragment(`
			<div class="slider-container"></div>
		`).firstElementChild;

		products.products.forEach(product => {
            product.rootPath = this.getFieldValue('EcomRootPage').Url
			sliderContainer.append(new ProductItem(product));
		});

		const sliderNavigation = document.createRange().createContextualFragment(`
			<button type="button" class="slider-nav"></button>
			<button type="button" class="slider-nav slider-nav-next"></button>
		`);

		slider.append(sliderContainer, sliderNavigation)

		this.append(slider)

        swiffyslider.init()
    }

    async getProucts() {
        const client = createClient(Ecommerce.ProductsClient);
		const products = await client.search(null,null,this.getGroupId(),null,null,null,null,null,null,null,undefined,undefined,null,undefined,undefined,undefined,'DK',null,null);
        return products;
    }

    getGroupId() {
        return this.getFieldValue('ProductGroup')[0].Id;
    }
}

customElements.define('product-slider-block', ProductSliderBlock);