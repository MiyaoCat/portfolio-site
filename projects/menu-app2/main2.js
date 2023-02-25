import { menuItems } from './menu-items.js';
console.clear();
// DATA: Functions to GET and SET data to local storage
var appPrefix = "my_app"

function getData(key) {
	return JSON.parse( localStorage.getItem(`${appPrefix}_${key}`))
}

function setData(key, value) {
	return localStorage.setItem(`${appPrefix}_${key}`, JSON.stringify(value));
}

function removeData(key) {
	localStorage.removeItem(`${appPrefix}_${key}`);
}
// DATA: Check to see if Menu exists in local storage, if not then set it
function initializeMenu() {
	if (localStorage.getItem(`${appPrefix}_menu`)) {
		return console.log('Menu exists and was retreived');
	} else {
		setData('menu', menuItems);
		return console.log('menu items stubbed');
	}
}

function initializeData() {
	initializeMenu();
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

//INITIAL STRUCTURE SETUP - Setup app structure at first load (header - main - footer)
var menuName = 'Menu';
function setupAppInterface() {
	

	var template = `
		<header>
			<h1 class='loud-voice'>${menuName} App</h1>
			<button data-view='menu'>${menuName}</button>
			<button data-action='logout'>Sign Out</button>
			<button data-action='clearStorage'>Clear</button>
			<button data-view='cart'>Cart</button>
		</header>

		<main>
			Main Content
		</main>

		<footer>
			Footer
		</footer>
	`;
	document.querySelector('body').innerHTML = template;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

//LOGIN & LOGOUT SETUP
function login(username) {
	setData('user', username);
}

function handleLogin() {
	var $usernameInput = document.querySelector('[data-input="username"]');

	if ($usernameInput.value.length >= 3) {
		login($usernameInput.value);
		$usernameInput = "";
		
		getData(`${appPrefix}_menu`);
		setData('menu', menuItems);
		setScreen('menu');

	}  else {
		document.querySelector('error-message').innerHTML = 'Minimumm of 3 characters required';
	}
}

//LOGIN BUTTON
window.addEventListener('submit', function(submitEvent) {
	submitEvent.preventDefault();

	if (submitEvent.target.matches('[data-action="login"]')) {
		handleLogin();
	}
});

//LOGOUT BUTTON
function logout() {
	removeData('user');
}

//CLEAR DATA
function resetData() {
	localStorage.clear()
	initializeData();
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

//EVENT LISTENERS
window.addEventListener('click', function(clickEvent) {

	if (clickEvent.target.matches('[data-page="menu"]')) {
		setScreen('menu');

		console.log('return to menu', clickEvent.target.matches('[data-page="menu"]'))
	}

	if (clickEvent.target.matches('[data-action="logout"]')) {
		logout();
		setScreen('login');

		console.log(clickEvent.target.textContent)
	}

	if (clickEvent.target.matches('[data-action="clearStorage"]')) {
		resetData();
		setScreen('login');
	}

	if (clickEvent.target.matches('[data-view]')) {
		var view = clickEvent.target.dataset.view;
		// console.log('view', clickEvent.target.dataset.view);
		if (view == 'itemDetail') {
			var itemSlug = clickEvent.target.closest('item-card').dataset.slug; 
			// console.log('slug: ', itemSlug);
			var foundItem = getData('menu').find(function (item) {
				return item.slug == itemSlug;
			});

			return setScreen('detail', foundItem);
		}

		return setScreen(view);
	}

	if (clickEvent.target.matches('[data-action="add-to-cart"]')) {
		var itemSlugToAdd = clickEvent.target.dataset.slug;
		console.log(itemSlugToAdd);

		// var itemToAdd = getData('menu').find(function (item) {
		// 	item.slug == itemSlugToAdd;
		// }); 

		var itemToAdd = getData('menu').find( (item)=> item.slug == itemSlugToAdd);

		var username = getData('user');
		console.log(username);

		var cartName = `cart_${username}`;

		//Check to see if there's a cart in memory
		if (getData(cartName)) { 
			//If so, get cart data
			var cart = getData(cartName)
			//Add new item to cart
			// cart.push(itemToAdd);
			//Save the cart in memory again
			// setData(cartName, cart);
		} else {
			//If no cart exists, create empty cart array
			var cart = [];
			//Add new item(s) to cart
			// cart.push(itemToAdd);
			// setData(cartName, cart);
		}
		cart.push(itemToAdd);
		setData(cartName, cart);
	}
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

//FUNCTIONS: Setup SCREENS, MENU, MENU OPTIONS
function setScreen(screen, options) {
	if(pages[screen]) {
		if (screen == 'login' && getData('user')) {
			setScreen('menu');
			return console.warn('User is logged in. Redirected to menu page')
		}
		document.querySelector('main').innerHTML = pages[screen](options);	
	} else {
		console.error( new Error('No page!!') );
	}
	console.log('optional Options: ', options);
}


function renderMenu() {
	var template = '<ul class="menu-list">';
	
	getData('menu').forEach( function(item) {
		template += `
			<li class="menu-item">
				<item-card data-slug='${item.slug}'>
					<h3 class="attention-voice">${item.name}</h3>
					<p class="price normal-voice">Price: $${item.price}</p>
					<button class='link' data-view='itemDetail'>View Details</button>
					<picture class='thumbnail'><img src="${item.image}" alt=""></picture>
				</item-card>
			</li>
		`;
	});
	template += '</ul>';
	return template;
}

function renderOptions(theOptions) {
	if (!theOptions) {
		return '';
	} else {
		var template = '<form><ul class="option-list">';
		theOptions.forEach(function (option) {
			template += `
				<li>
					<h3 class="attention-voice">${option.title}</h3>
					${renderChoices(option.choices, option.title)}
				</li>			
			`;
		});
		template += `</ul>`;
		template += `</form>`;
		}
	return template;
}

function renderChoices(theChoices, name) {
	var template = `<ol class='choice-list'>`;
	// if (theChoices) {
		
		theChoices.forEach(function(choice) {
		template += `
			<li class='choices'>
				<input type='radio' name='${name}' id='${choice.name}' value='${choice.name}' />
				<label for='${choice.name}'><p class='normal-voice'>${choice.name}</p> <p className="price"></p></label>
			</li>			
		`;	
	});
	template += `</ol>`;
	return template;
	// }
}

function renderCart(item) {
	if (!getData('user')) return;

	var username = getData('user');
	var cartName = `my_app_cart_${getData('user')}`;

	var template = '<ul class="item-list">';
	var cartItems = getData(cartName);

	if (cartItems) {
		cartItems.forEach(function (item, index) {
			template += `
			<p>${item.name}</p>`;
		})
		
	}
	return template;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

//PAGE SETUPS
var pages = {};

pages.login = function() {
	var template = `
		<h1 class='loud-voice'>Login Page</h1>

		<form class="login" data-action='login'>
			<form-field>
				<label>Username</label>
				<input data-input='username' type='text'/>
				<error-message data-validation='username'></error-message>
			</form-field>

			<button type='submit'>Submit</button>
		</form>
	`;

	return template;
}

pages.menu = function() {
	var template = `
		<h2 class="loud-voice">Menu</h2>
		${renderMenu()}
	`;

	return template;
}

pages.detail = function (item) {
	var template = `
		<picture><img src="${item.image}" alt=""></picture>
		
		<h2 class="loud-voice">${item.name}</h2>
		<h3 class="attention-voice">$${item.price}</h3>
		<p class="normal-voice">${item.description}</p>
		${renderOptions(item.options)}
		
		<button data-action='add-to-cart' data-slug=${item.slug}>Add to Cart</button>
		<button data-page='menu'>Back</button>
	`;
	return template;
}

pages.cart = function () {
	var template = `
		<div class='item-detail'>
			<h1 class="loud-voice">Cart</h1>

			${renderCart()}
		</div>
	`
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//START UP APP
function initializeApp() {
	setupAppInterface();
	initializeData();
	setScreen('login');
}

initializeApp();
