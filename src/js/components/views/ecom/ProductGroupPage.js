import { createClient } from "../../../api/clientFactory";
import { Ecommerce } from "@dynamicweb/headless-api";
import { ProductItem } from "../../items/ProductItem";

export default class ProductGroupPage extends HTMLElement {
    constructor(productGroup) {
        super()
        this.productGroup = productGroup;
    }

    async connectedCallback() {
        const client = createClient(Ecommerce.ProductsClient);
		const products = await client.search(null,null,this.productGroup,null,null,null,null,null,null,null,undefined,undefined,null,undefined,undefined,undefined,'DK',null,null);

        const grid = document.createRange().createContextualFragment(`
			<div class="grid" data-type="product"></div>
		`).firstElementChild;

        products.products.forEach(product => {
            product.rootPath = 'products';
            const productItem = new ProductItem(product);

            grid.append(productItem);
        });

        this.append(grid);
    }
}

customElements.define('product-group-page', ProductGroupPage);