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
			<div class="product-page__images">
				{ product.assetCategories.find(x => x.systemName === 'Images').assets.map(image => {
					const url = `${baseUrl}/Admin/Public/GetImage.ashx?Image=${image.value}&Width=500&Quality=70&Format=webp`;
					return <img src={url} />
				})}
			</div>
			<div class="product-page__summary">
				<h3>{ product.number }</h3>
				{longDescription}
			</div>
			<div class="product-page__buy-block">
				<h1>{ product.price.priceFormatted }</h1>
				<p>{ product.name }</p>
				{ shortDescription }
				<div>{ product.height }x{ product.depth }x{ product.width }cm</div>

				<div>
					<button type="button" class="btn" data-type="primary">Add to basket</button>
					<button type="button" class="btn" data-type="secondary">
						<svg class="bi" width="24" height="24" fill="currentColor">
							<use xlink:href="/bootstrap-icons.svg#box-arrow-in-right"/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	)
}