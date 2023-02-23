function getData(key) {
	return JSON.parse(localStorage.getItem(key));
}

function setData(key, value) {
	return localStorage.setItem(key, JSON.stringify(value));
}

export { getData, setData };
