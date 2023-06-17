// import myLibrary from './library.js';

// const outlet = document.querySelector('output');

// outlet.innerHTML = myLibrary(10); 

import { double, triple, render, addElement } from './library.js';

const outlet = document.querySelector('output');

// var tripleNum = library.triple(10);

// var doubleNum = library.double(6);

outlet.innerHTML = `Triple: ${double(2)} & Double: ${triple(2)}`;

render( document.querySelector('p'), 'hello' );

addElement('p', 'new text');


//NOTES
//<button id="goTONextPage">Change</button>

wondow.addEventListener("click", function(event) {
	console.log(event.target.id); //tells you what element you're clicking on the window

	if ( event.target.matches("#goTONextPage")) {
		//delegate events...
		console.log("you clicked the button");
	}
});