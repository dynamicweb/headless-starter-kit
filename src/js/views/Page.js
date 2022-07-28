import Base from "./Base";
import { Articles } from "../helpers/Articles";

export default class extends Base {
	constructor(params) {
		super(params);
		Articles.GetArticles()
	}

	async getHtml() {
		return `
			<div class="section" style="--padding: 8rem;">
				<div class="container">
					<div class="grid">
						<div class="flow">
							<h1 class="fs-6">Headless Starter Kit</h1>
							<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde officiis perspiciatis possimus officia beatae
								dignissimos maxime blanditiis vitae id voluptatem ipsam a magnam laborum aut odio esse, aperiam nostrum
								modi.</p>
							<a href="#" class="btn shadow" data-type="primary">Get Started</a>
							<a href="#" class="btn shadow" data-type="primary-soft">Get Started</a>
						</div>
						<div></div>
					</div>
				</div>
			</div>
			<div class="section">
				<div class="container">
					<div class="grid">
						<div class="flow">
							<h1>One morning, when Gregor Samsa woke from troubled
								dreams.</h1>
							<p>One morning, when Gregor Samsa woke from troubled
								dreams, he found himself transformed in his bed into
								a horrible vermin. He lay on his armour-like back,
								and if he lifted his head a little he could see his
								brown belly, slightly domed and divided by arches into
								stiff sections. The bedding was hardly able to cover
								<strong>strong</strong> it and seemed ready to slide
								off any moment. His many legs, pitifully thin
								compared with the size of the rest of him,
								<a class="external ext" href="#">link</a> waved about
								helplessly as he looked. "What's happened to me? " he
								thought. It wasn't a dream. His room, a proper human
								room although a little too small, lay peacefully
								between its four familiar walls.
							</p>
						</div>
						<div class="flow">
							<h1>One morning, when Gregor Samsa woke from troubled
								dreams.</h1>		
							<h2>The bedding was hardly able to cover it.</h2>
							<p>It showed a lady fitted out with a fur hat and fur
								boa who sat upright, raising a heavy fur muff that
								covered the whole of her lower arm towards the
								viewer.</p>
						</div>
					</div>
				</div>
			</div>

			<div class="section bg-n-3">
				<div class="container">
					<div id="articles-list" class="grid"></div>
				</div>
			</div>
			
			<div class="section">
				<div class="container">
					<div class="grid">
						<div class="flow">
							<h2>The bedding was hardly able to cover it.</h2>
							<p>Man bun offal meggings polaroid raclette small batch pabst, shoreditch biodiesel asymmetrical yes plz chia yr fingerstache. Polaroid slow-carb tote bag plaid mixtape next level meggings farm-to-table vexillologist deep v narwhal. Enamel pin lyft microdosing normcore tousled squid fanny pack iceland woke brunch sartorial. 90's yes plz thundercats fingerstache flannel. Tacos keytar kinfolk, cloud bread kitsch tote bag banh mi actually waistcoat lo-fi sriracha flexitarian live-edge bespoke. DIY post-ironic taiyaki twee.</p>
						</div>
						<div class="flow">
							<h1>Tousled hoodie tattooed</h1>
							<p>Selfies knausgaard praxis, humblebrag cardigan tilde succulents quinoa shoreditch whatever meditation keytar man bun. Tousled venmo pop-up DIY unicorn, vaporware you probably haven't heard of them poke butcher hoodie hammock kickstarter stumptown gastropub.</p>
						</div>

						<div class="flow">
							<h1>Everyday carry williamsburg heirloom</h1>
							<p>Health goth pour-over praxis fam godard. Knausgaard 8-bit 3 wolf moon hexagon portland authentic. Mumblecore pour-over cardigan bicycle rights, gentrify single-origin coffee roof party health goth listicle. Artisan vexillologist street art, cred letterpress master cleanse jianbing offal scenester raclette cold-pressed hammock messenger bag disrupt. Paleo locavore keffiyeh man bun mumblecore chicharrones heirloom kogi taxidermy.</p>
						</div>
					</div>
				</div>
			</div>
		`;
	}

}