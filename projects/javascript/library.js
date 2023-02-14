// export default function double(number) {
// 	return number * 2;
// }

function double(number) {
	return number * 2;
}

function triple(number) {
	return number * 3;
}

function render(where, what) {
	where.innerHTML = what;
}

function addElement(element, text) {
	document.createElement(element);
	var newEl = document.body.appendChild(element);
	newEl.innerHTML = text;
}
export {
	double,
	triple,
	render,
	addElement
}