const Navigation = function() {

	return {
		GetNavigation: async () => {
			fetch(
				'./src/js/data/MainNavigation.json',
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
				const nav = document.querySelector('#main-nav');
				nav.innerHTML = "";

				res.map((page) => {
					const link = document.createElement('a');
					link.textContent = page.Name;
					link.setAttribute("href", page.Item.Link);
					link.setAttribute("data-link",'');
					nav.appendChild(link);
				});
			});
		}
	}

}();

export {Navigation};