import express from 'express';
import { URL } from 'node:url';
import path from 'path';
// import http from 'https';

import contentful from 'contentful';
import {documentToHtmlString} from '@contentful/rich-text-html-renderer';
import richTextTypes from '@contentful/rich-text-types';

// import axios from 'axios';
// const apiUrl = 'https://www.balldontlie.io/api/v1/players/';


//CONTENTFUL CLIENT
const client = contentful.createClient({
  space: 'ckkj5gusaa5k',
  environment: 'master', // defaults to 'master' if not set
  accessToken: '0G_DFxzx2x0FlcHjvdXnsIeigNFzEMH7N93cyE86TkA'
})

const { MARKS, BLOCKS } = richTextTypes;

const __dirname = new URL('.', import.meta.url).pathname;

const app = express();
//Set EJS
app.set('view engine', 'ejs');

const PORT = 2009;
app.listen(PORT, function() {
	console.log(`server started at http://localhost:${PORT}`);
});

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
  		},
  		[BLOCKS.TABLE]: function(node, nodeContent) {
			  const customTableStyles = `
			    <table class='stats-table'>
			      ${nodeContent(node.content)}
			    </table>
			  `;
			  return customTableStyles;
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

				const birthdate = item.fields.birthdate;
				const date = new Date(birthdate);

				const birthdateFormatted = date.toLocaleDateString('en-US', {
					year: 'numeric',
					month: '2-digit',
					day: '2-digit'
				});

	      //Function to get richTextField dynamically
	      function renderRichText(fieldName, options) {
	      	const richTextContent = item.fields[fieldName];
	      	if (richTextContent) {
	      		return documentToHtmlString(richTextContent, options);
	      	}
	      	return '';
	      }
				//Get actionShot array. If actionShot is empty or does not have an array, use default value of empty array
				const actionShots = item.fields.actionShots || [];
				const imageUrls = actionShots.map(function(asset) {
					return asset.fields.file.url;
				})

				const collegeRichText = renderRichText('collegeStats', options);
				const proRichText = renderRichText('proStats', options);
				const summaryRichText = renderRichText('summary', options);

				const awards = item.fields.awards2 || [];
				const awardsList = awards.map(function(rings) {
					return rings.fie
				})
				return {
					firstName: item.fields.firstName,
					lastName: item.fields.lastName,
					headshot: item.fields.headshot.fields.file.url,
					height: item.fields.height,
					weight: item.fields.weight,
					birthDate: birthdateFormatted,
					birthPlace: item.fields.birthPlace,
					highSchool: item.fields.highSchool,
					sport: item.fields.sport,
					position: item.fields.position,
					draftRound: item.fields.draftRound,
					draftPick: item.fields.draftPick,
					overrall: item.fields.overrall,
					draftYear: item.fields.draftYear,
					draftTeam: item.fields.draftTeam,
					actionShots: imageUrls[0],
					collegeStats: collegeRichText,
					collegeAccolades: item.fields.collegeAccolades,
					proStats: proRichText,
					activePlayer: item.fields.activePlayer,
					instagram: item.fields.instagram,
					tikTok: item.fields.tikTok,
					twitter: item.fields.twitter,
					yearStarted: item.fields.yearStarted,
					yearEnded: item.fields.yearEnded,
					summary: summaryRichText,
					awards2: item.fields.awards2,
				};
			});
			console.log("ATHLETE: ", athleteData);
			response.render('athletes', { athletes: athleteData })
		})
		.catch(console.error)
});

app.get('/details', function(request, response) {
	response.render('details');
})

app.get('/about', function(request, response) {
	response.render('about');
})

app.get('/api', function(request, response) {
  // axios.get(apiUrl)
  // 	.then( function(res) {
  // 		const nbaStats = res.data;

  // 		const playerData = nbaStats.data.map(function(player) {
  // 			return {
  // 				id: player.id,
  // 				fname: player.first_name,
  // 				lname: player.last_name,
  // 				team: player.team
  // 			}
  // 		})
  // 		response.render('api', { players: playerData });
  // 		console.log(nbaStats);
  // 	})
  // 	.catch( function(error) {
  // 		console.error('Error:', error.message);
  // 		response.status(500).send('Internal Server Error');
  // 	})
})

app.use( function(request, response) {
	response.status(404).render('404', { query: request.url });
})
