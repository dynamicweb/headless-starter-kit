import { h, Fragment } from 'start-dom-jsx';
import { baseUrl } from '../../../../../../config';

export default (product) => {

	const longDescription = Object.assign(
		document.createElement('div'), 
		{
			innerHTML: product.longDescription
		}
	)

	const shortDescription = Object.assign(
		document.createElement('div'), 
		{
			innerHTML: product.shortDescription
		}
	)
	
	return (
		<div class="product-page-grid">
			
			<div class="product-page__images grid" data-type="product" style="--grid-column-count: 2;">
				{ product.assetCategories.find(x => x.systemName === 'Images').assets.map(image => {
					const url = `${baseUrl}/Admin/Public/GetImage.ashx?Image=${image.value}&Width=500&Quality=80&Format=webp`;
					return <img src={url} alt={image.name} />
				})}
			</div>
			
			<aside class="product-page__buy-block">
				<div class="sticky">
					<div class="flow">
						<h1>{ product.price.priceFormatted }</h1>
						<p>{ product.name }</p>
						<div>
							{ shortDescription }
						</div>
						<div>{ product.height }x{ product.depth }x{ product.width }cm</div>
					</div>

					<div>
						<button type="button" class="btn" data-type="primary">Add to basket</button>
					</div>
				</div>
			</aside>

			<div class="product-page__summary">
				<span class="fs-1 d-block mb-1">Article number</span>
				<h3 class="d-inline-block p-1 bg-n-7 text-n-3 mb-2 fs-3">{ product.number }</h3>
				<div class="text-n-5 fs-4">
				{longDescription}
				</div>
			</div>
			
		</div>
	)
}