"use strict"


document.querySelectorAll('.team').forEach(e => {
	e.addEventListener("click", e => {
		const listPlayer = e.currentTarget.dataset.path;
		console.log(listPlayer);
		document.querySelectorAll('.js__button').forEach(e => {
			if (!document.querySelector(`[data-target=${listPlayer}]`).classList.contains('open')) {
				document.querySelector(`[data-target=${listPlayer}]`).classList.add('active');
			}
		});
	});
});
