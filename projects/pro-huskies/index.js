import express from 'express';
import { URL } from 'url';
const __dirname = new URL('.', import.meta.url).pathname;

import contentful from 'contentful';

const client = contentful.createClient({
  space: 'ckkj5gusaa5k',
  environment: 'master', // defaults to 'master' if not set
  accessToken: '0G_DFxzx2x0FlcHjvdXnsIeigNFzEMH7N93cyE86TkA'
})

const app = express();
const PORT = 2009;

//Set EJS
app.set('view engine', 'ejs');

// Automatically serve up static files in public and css directories
app.use( express.static('public') );
app.use( express.static('styles') );

//PAGE ROUTING
app.get('/', function(request, response) {
	response.render('home');
})

app.get('/about', function(request, response) {
	response.render('about');
})

app.get('/athletes', function(request, response) {
	response.render('atheletes');
})

app.get('/details', function(request, response) {
	response.render('details');
})

app.get('/api', function(request, response) {
	response.send({ "name": "John"});
})

app.use( function(request, response) {
	response.status(404).render('404', { query: request.url });
})

app.listen(PORT, function() {
	console.log("server started at http://localhost:2009");
});