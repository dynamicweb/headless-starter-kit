import { Ecommerce } from "@dynamicweb/headless-api";
import { createClient } from "../../../api/clientFactory";
import ProductPage from "./partials/ProductPage";

export default class ProductDetailPage extends HTMLElement {
    constructor(productId) {
        super()
        this.productId = productId;
    }

    async connectedCallback() {
        const client = createClient(Ecommerce.ProductsClient);
        const product = await client.getProduct(this.productId,undefined,null,null,null,null,null,null,null,null,null,null,undefined,true,null,'DK',undefined,undefined,undefined);
        this.append(ProductPage(product));
    }
}

customElements.define('product-detail-page', ProductDetailPage);