"use strict"

window.addEventListener('load', windowLoad);

function windowLoad() {
	document.addEventListener('click', documentActions);
}

function documentActions(e) {
	const targetElement = e.target;

	// Scroll To...
	if (targetElement.hasAttribute('data-goto')) {
		const gotoElement = document.querySelector('${targetElement.dataset.goto}');
		const headerHeight = document.querySelector('.header').offsetHeight;

		if (gotoElement) {
			window.scrollTo({
				top: gotoElement.offsetTop - headerHeight,
				behavior: "smooth"
			});
		}

		e.preventDefault();
	}
}