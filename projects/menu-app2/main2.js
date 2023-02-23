// DATA
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
		<button data-action='menu'>${menuName}</button>
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
			<input type="text" value="">
			<error-message></error-message>
		</form-field>

		<button type='submit'>Submit</button>
	</form>
	`;

	document.querySelector('main').innerHTML = template;
}


function login(username) {
	if (username.length >= 4) {
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


//PAGES 
var pages = {};
var $outlet = document.querySelector('main');

function screenChange(name) {
	console.log("screen:", name);

	$outlet.innerHTML = pages[name];
}

//MENU 

function renderMenuItems(menuItem) {
	return `
		<li class="menu-card ${menuItem.id}">
			<h2>${menuItem.name}</h2>
			<p className="price">Price: ${menuItem.price}</p>
			<p className="normal-voice">${menuItem.description}</p>
			<picture><img src="${menuItem.image}" alt=""></picture></picture>
		</li>
	`
}

function renderMenu(menuItems) {
	var template = '<ul class="menu-list">';
	
	menuItems.forEach( function(menuItem) {
		template += renderMenuItems(menuItem);
	});

	template += '</ul>';
	return template;

}

pages.menu = `
	<h1>Menu List</h1>
	${renderMenu(menuItems)}
`;

window.addEventListener('click', function(event) {
	if (event.target.matches('[data-action="menu"]')) {
		screenChange(event.target.dataset.action);
		console.log(event.target.dataset.action);
	}

});

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