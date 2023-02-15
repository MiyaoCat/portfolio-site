var $outlet = document.querySelector("[data-outlet='main']");

function setScreen(name) {
	$outlet.innerHTML = pages[name];

	console.log("Show: ", name);
}

var pages = {};
pages.home = `
	<h1>Home Page</h1>

	<button>Login</button>
`;

pages.menu = `
	<h1>Menu Page</h1>
`

export { setScreen, $outlet };