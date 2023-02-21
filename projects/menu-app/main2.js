window.addEventListener('click', function(event) {
	if ( event.target.matches('[data-screen]') ) {
		document.querySelector('main').style.backgroundColor = event.target.dataset.color;

		console.log(event.target);
	}

	if (event.target.matches('[data-screen="menu"]') ) {
		var $main = document.querySelector('main');
		var mainText = $main.innerHTML;
		 mainText = 'menu!!';

	}
})