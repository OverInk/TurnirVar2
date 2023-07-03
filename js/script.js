"use strict"


document.querySelectorAll('.team').forEach(e => {
	e.addEventListener("click", e => {
		const listPlayer = e.currentTarget.dataset.path;
		console.log(listPlayer);
		document.querySelectorAll('.js__button').forEach(e => {
			if (!document.querySelector(`[data-target=${listPlayer}]`).classList.contains('open')) {
				document.querySelector(`[data-target=${listPlayer}]`).classList.add('active');
			}
			// window.onclick = e => {
			// 	if (e.target == document.querySelector(`[data-target=${listPlayer}]`)) {
			// 		return;
			// 	} else {
			// 		document.querySelector(`[data-target=${listPlayer}]`).classList.remove('active');
			// 	}
			// }
		});
	});
});

document.querySelectorAll('.btn-cancel').forEach(e => {
	e.addEventListener("click", e => {
		const close = e.currentTarget.dataset.close;
		console.log(close);
		document.querySelectorAll('.js__button').forEach(e => {
			if (!document.querySelector(`[data-target=${close}]`).classList.contains('open')) {
				document.querySelector(`[data-target=${close}]`).classList.remove('active');
			}
		});
	});
});
