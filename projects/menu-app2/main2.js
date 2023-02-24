// DATA
import { menuItems } from './menu-items.js';

var appPrefix = "my_app"

function getData(key) {
	return JSON.parse( localStorage.getItem(`${appPrefix}${key}`))
}

function setData(key, value) {
	return localStorage.setItem(`${appPrefix}_${key}`, JSON.stringify(value));
}
// DATA - setting up menu in storage. If it exists, cool. Otherwise, set menu data into local storage. 
function initializeMenu() {
	if (localStorage.getItem(`${appPrefix}_menu`)) {
		console.log('Menu exists and was retreived');
	} else {
		setData('menu', menuItems);
		console.log('menu items stubbed');
	}
}

//SETUP - Setup app structure at first load
function setupAppInterface() {
	var menuName = 'Menu';

	var template = `
	<header>
		<h1 class='loud-voice'>${menuName} App</h1>
		<button data-page='menu'>${menuName}</button>
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
	} else {
		document.querySelector('error-message').innerHTML = 'more stuff';
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
	let clickArea = 'data-page="itemDetails"';
	return `
		<li class="menu-card ${menuItem.slug}">
			<h2 class='loud-voice' >${menuItem.name}</h2>
			<p class="price normal-voice">Price: $${menuItem.price}</p>
			<p class="normal-voice">${menuItem.description}</p>
			<picture><img src="${menuItem.image}" alt=""></picture>
			<button data-slug='${menuItem.slug}' ${clickArea}>See Details</button>
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

function renderItemDetails(item) {
	`<h1>${item.name}</h1>`
}

pages.menu = `
	<menu-item>
		<h1 class='loud-voice'>Menu List</h1>
	</menu-item>
	${renderMenu(menuItems)}
`;

pages.itemDetails = `
	<h1 class='loud-voice'>Item Details</h1>
`

window.addEventListener('click', function(event) {
	if (event.target.matches('[data-page="menu"]')) {
		screenChange(event.target.dataset.page);
		console.log(event.target.dataset.page);
	} 

	if (event.target.matches('[data-page="itemDetails"]')) {
		screenChange(event.target.dataset.page);
		var searchedSlug = event.target.dataset.slug;

		var found = menuItems.find(function (item) {
			return item.slug == searchedSlug;
			renderItemDetails(searchedSlug);
		})
		console.log(searchedSlug);
		
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