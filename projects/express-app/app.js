import playerData from './playerData.json' assert { type: 'json' };

import { URL } from 'node:url';
const __dirname = new URL ('.', import.meta.url).pathname;

import express from 'express';
const PORT = 1950;


const app = express();

app.set('view engine', 'ejs');

// SERVE STATIC FILES
app.use(express.static('public'));

// PAGE ROUTING
app.get('/', function(request, response) {
	response.render('home', { playerData } );
});

app.get('/about', function(request, response) {
	response.sendFile('example.html', { root: __dirname });
});

app.get('/contact', function(request, response) {
	response.send("<h1>CONTACT</h1>");
});

app.get('/api', function(request, response) {
	response.send({ "name": "John" });
});

app.use( function(request, response) {
	response.status(404).send("<h1>Sorry! Can't find that page!</h1>")
});

app.listen(PORT, function() {
	console.log('App listening on port ' + PORT);
});
