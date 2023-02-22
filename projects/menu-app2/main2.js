// DATA
// * USER: username, CART, POST-ORDERS
// * ITEM: title, price, description, image, (possible options)
// * GENERAL STATE OF THINGS? is there a user logged in? or not... are there things in the cart?
import { menuItems } from './menu-items.js';

function getData(key) {
	return JSON.parse( localStorage.getItem(key))
}

function setData(key, value) {
	return localStorage.setItem(key, JSON.stringify(value));
}
function initializeMenu() {
	if (localStorage.getItem('Johns Menu')) {
		console.log('menu retreived');
	} else {
		setData('Johns Menu', menuItems);
		console.log('menu items stubbed');
	}
}
// GLOBAL APP INTERFACE
// * header with logo, login button, cart
// * main / outlet for "pages" / each page screen
// * footer with checkout button or something... (might change)
function setupAppInterface() {
	var menuName = 'Menu';

	var template = `
	<header>
		<h1>${menuName} App</h1>
		<button>${menuName}</button>
		<button>Sign In</button>
	</header>

	<main>
		Main Content
	</main>

	<footer>
		Footer
	</footer>
	`

	document.querySelector('body').innerHTML = template;
}

// INITIAL (landing) SCREEN
// basic screen (maybe some logo)
// button to enter the app {click enter button} (listen for when that button is clicked)
// change to login screen

// LOGIN SCREEN
// show login form {click login button} (listen for when that button is clicked)
// go to menu screen

function loginScreen() {
	var template = `
	<h1 class="loud-voice">Login</h1>

	<form class="login" data-action='login'>
		<form-field>
			<label>Username</label>
			<input type="text">
		</form-field>

		<button type='submit'>Submit</button>
	</form>
	`;

	document.querySelector('main').innerHTML = template;
}

function login(username) {
	if (username.length >= 3) {
		setData('user', username);
	}
}

window.addEventListener('submit', function(submitEvent) {
	submitEvent.preventDefault;

	if (submitEvent.target.matches('[data-action="login"]')) {
		var $username = submitEvent.target.querySelector('input');
		login($username.value);
		// $username.value = "";
	}
});


function initializeApp() {
	setupAppInterface();
	initializeMenu();
	loginScreen();
}

initializeApp();

// MENU SCREEN
// show menu of items MENU COMPONENT (get the data and iterate over it to create a list of menu items)
// (users can scroll through menu)
// on each MENU ITEM COMPONENT you can {click details button} (listen for when that button is clicked)

// MENU ITEM DETAIL SCREEN
// shows more details of the item
// items might have options like size or a selection of protein etc.
// has add-to-cart option {click add-to-cart button} (listen for when that button is clicked) (add to CART)
// offer a {click close-detail button} (returns to menu) 
// (note that this would scroll you all the way back to the top)
// (maybe we can keep track of that position and use it to put them back in the right spot)
// (Or - whould this be a modal window that is a pop-over instead... )

// CART SCREEN
// get items that are in the CART
// display them
// calculate total price (and maybe tax?)
// update items (maybe quantity) {click increment/decrement/remove buttons}
// possible pickup or delivery options
// prompt for address and include delivery fee
// (could be a good place to try the geolocation api and ask user for their location)
// { click cancel-order button }
// { click add-more button } (back to the menu page)
// { click check-out button } (enter credit card) (good example of fake asynchronous / waiting for card to be run)
// (what happens if it fails? / what happens when it succeeds?)
// (good place to try a little loading animation and success message)
// add order to a PAST ORDERS array

// START UP APP
// add initial screen