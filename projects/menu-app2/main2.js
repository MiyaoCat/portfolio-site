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
//SETUP - Setup app structure at first load (header - main - footer)
function setupAppInterface() {
	var menuName = 'Menu';

	var template = `
		<header>
			<h1 class='loud-voice'>${menuName} App</h1>
			<button data-page='menu'>${menuName}</button>
			<button data-action='logout'>Sign Out</button>
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
function logout(username) {
	removeData('user');
}

window.addEventListener('click', function(clickEvent) {

	if (clickEvent.target.matches('[data-action="logout"]')) {
		logout();
		setScreen('login');

		console.log(clickEvent.target.textContent)
	}
});


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//FUNCTIONS: Setup screens and menu rendering
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
				<item-card>
					<h3 class="attention-voice">${item.name}</h3>
					<p class="price normal-voice">Price: ${item.price}</p>
					<picture><img src="${item.image}" alt=""></picture></picture>
				</item-card>
			</li>
		`;
	});
	template += '</ul>';
	return template;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//PAGE SETUPS
var pages = {};

pages.menu = function() {
	var template = `
		<h2 class="loud-voice">Menu</h2>
		${renderMenu()};
	`;

	return template;
}

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

window.addEventListener('click', function(event) {
	if (event.target.matches('[data-page="menu"]')) {

		console.log(event.target.dataset.page);
	} 
});


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//START UP APP
function initializeApp() {
	setupAppInterface();
	initializeData();
	setScreen('login');
}

initializeApp();
