// import playerData from './playerData.json';
import { URL } from 'url';
const __dirname = new URL ('.', import.meta.url).pathname;

import express from 'express';
const PORT = 1950;

//PLAYER DATA
const players = [
	{ 
  		"name": "De'Arron Fox", 
  		"position": "Point Guard",
      "number": 5,
      "college": "Kentucky",
      "image": "/assets/fox.jpeg"
  },
  { 
      "name": "Domantas Sabonis", 
      "position": "Power Forward",
      "number": 10,
      "college": "Gonzaga",
      "image": "./assets/sabonis.jpeg"
  },
  { 
      "name": "Damian Lillard", 
      "position": "Point Guard",
      "number": 5,
      "college": "Weber State",
      "image": "./assets/lillard.jpeg"
  },
  { 
      "name": "Steph Curry", 
      "position": "Point Guard",
      "number": 30,
      "college": "Davidson",
      "image": "./assets/curry.jpeg"
  }
];

const app = express();

app.set('view engine', 'ejs');

// SERVE STATIC FILES
app.use(express.static('public'));

// PAGE ROUTING
app.get('/', function(request, response) {
	response.render('home', { players } );
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
