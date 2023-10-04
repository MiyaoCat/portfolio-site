import express from 'express';
import { URL } from 'url';
import path from 'path';
import http from 'https';

import contentful from 'contentful';
import {documentToHtmlString} from '@contentful/rich-text-html-renderer';
import richTextTypes from '@contentful/rich-text-types';

import axios from 'axios';

const apiUrl = 'https://www.balldontlie.io/api/v1/players/';

const __dirname = new URL('.', import.meta.url).pathname;

//CONTENTFUL CLIENT
const client = contentful.createClient({
  space: 'ckkj5gusaa5k',
  environment: 'master', // defaults to 'master' if not set
  accessToken: '0G_DFxzx2x0FlcHjvdXnsIeigNFzEMH7N93cyE86TkA'
})


const { MARKS, BLOCKS } = richTextTypes;

const app = express();
const PORT = 2009;

//Set EJS
app.set('view engine', 'ejs');

// Automatically serve up static files in public and css directories
app.use( express.static('public') );
app.use( express.static('styles') );

//Render Rich Text Fields
const options = {
	renderMark: {
   	[MARKS.BOLD]: function(text) {
   		return `<strong>${text}</strong>`;
   	}
	},
	renderNode: {
  		[BLOCKS.PARAGRAPH]: function(node, nodeContent) { 
  			return `<p class='normal-voice'>${nodeContent(node.content)}</p>`;
  		}
  }
}

//PAGE ROUTING
app.get('/', function(request, response) {
	response.render('home');
});


app.get('/athletes', function(request, response) {
	client.getEntries({
		content_type: 'proHuskies'
	})
	.then( function(data) {
		const athleteData = data.items.map( function(item) {
			//Get actionShot array. If actionShot is empty or does not have an array, use default value of empty array
			const actionShots = item.fields.actionShots || [];
			const imageUrls = actionShots.map(function(asset) {
				return asset.fields.file.url;
			})

			return {
				name: item.fields.name,
				headshot: item.fields.headshot.fields.file.url,
				height: item.fields.height,
				weight: item.fields.weight,
				sport: item.fields.sport,
				position: item.fields.position,
				actionShots: imageUrls[1],
				yearStarted: item.fields.yearStarted,
				yearEnded: item.fields.yearEnded
			}
		})
		console.log("ATHLETE athleteData: ", athleteData);
		console.log("SPORT: ", athleteData.sport);
		response.render('athletes', { athletes: athleteData })
	})
	.catch(console.error)
});

app.get('/details', function(request, response) {
	response.render('details');
})

app.get('/api', function(request, response) {
  axios.get(apiUrl)
  	.then( function(res) {
  		const nbaStats = res.data;

  		const playerData = nbaStats.data.map(function(player) {
  			return {
  				id: player.id,
  				fname: player.first_name,
  				lname: player.last_name,
  				team: player.team
  			}
  		})
  		response.render('api', { players: playerData });
  		console.log(nbaStats);
  	})
  	.catch( function(error) {
  		console.error('Error:', error.message);
  		response.status(500).send('Internal Server Error');
  	})
})

app.use( function(request, response) {
	response.status(404).render('404', { query: request.url });
})

app.listen(PORT, function() {
	console.log("server started at http://localhost:2009");
});