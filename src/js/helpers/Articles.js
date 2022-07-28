const Articles = function() {

	return {
		GetArticles: async () => {

			fetch(
				'./src/js/data/Articles.json',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json',
					}
				}
			)
			.then((res) => {
				if (!res.ok) return Promise.reject(response);
				return res.json();
			})
			.then((res) => {
				console.log(res);
				const list = document.querySelector('#articles-list');
				list.innerHTML = "";

				res.map((article) => {
					const card = document.createElement('div');
					const header = document.createElement('h3');
					const text = document.createElement('p');
					const link = document.createElement('a');
					card.classList.add('article-card', 'p-4', 'bg-n-1', 'shadow', 'flow');
					header.textContent = article.Name;
					text.textContent = article.CreatedDate;
					link.textContent = article.Item.Link;
					link.setAttribute("href", article.Item.Link);
					card.append(header);
					card.append(text);
					card.append(link);
					list.appendChild(card);

				});
			});    
		}
	}

}();

export {Articles};