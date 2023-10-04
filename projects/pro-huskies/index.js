import express from 'express';
import { URL } from 'url';
import path from 'path';
import http from 'https';

import contentful from 'contentful';
import {documentToHtmlString} from '@contentful/rich-text-html-renderer';
import richTextTypes from '@contentful/rich-text-types';

const __dirname = new URL('.', import.meta.url).pathname;



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
  //RAPID API
  const optionsAPI = {
    method: 'GET',
    hostname: 'free-nba.p.rapidapi.com',
    port: null,
    path: '/players?page=0&per_page=25',
    headers: {
      'X-RapidAPI-Key': 'f80c7fbedcmsh437fdc5890bce8dp15b57bjsne6ed63a690ca',
      'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
    }
  };
  
  const apiRequest = http.request(optionsAPI, function (apiResponse) {
    const chunks = [];
  
    apiResponse.on('data', function (chunk) {
      chunks.push(chunk);
    });
  
    apiResponse.on('end', function () {
      const body = Buffer.concat(chunks);
      const nbaStatsResponse = JSON.parse(body.toString()); // Parse the API response
      
      // Check if the API response contains a 'data' property with an array
      if (nbaStatsResponse && Array.isArray(nbaStatsResponse.data)) {
        const nbaPlayerData = nbaStatsResponse.data.map(function(player) {
          return {
            id: player.id,
            name: player.first_name + ' ' + player.last_name,
            position: player.position,
            team: player.team // You can customize this based on your needs
          };
        });
        
        console.log(nbaPlayerData);
        response.render('home', { nbaPlayerData }); // Render 'home' with nbaPlayerData
      } else {
        console.error('API response does not have the expected format.');
        // Handle the error or provide a default response
        response.status(500).send('Internal Server Error');
      }
    });
  });
  
  apiRequest.end();
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
	response.send({ "name": "John"});
})

app.use( function(request, response) {
	response.status(404).render('404', { query: request.url });
})

app.listen(PORT, function() {
	console.log("server started at http://localhost:2009");
});