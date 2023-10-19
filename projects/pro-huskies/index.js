import express from 'express';
import { URL } from 'node:url';
import path from 'path';
import http from 'https';

import contentful from 'contentful';
import {documentToHtmlString} from '@contentful/rich-text-html-renderer';
import richTextTypes from '@contentful/rich-text-types';

import axios from 'axios';
const apiUrl = 'https://www.balldontlie.io/api/v1/players/';

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

const PORT = 2020;
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

				// const awards = item.fields.awards2 || [];
				// const awardsList = awards.map(function(rings) {
				// 	return rings.file
				// })
				return {
					firstName: item.fields.firstName,
					lastName: item.fields.lastName,
					headshot: item.fields.headshot.fields.file.url,
					heightInFt: item.fields.heightInFeet,
					heightInIn: item.fields.heightInInches,
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
					seasons: item.fields.seasonsAtUw,
					proStats: proRichText,
					activePlayer: item.fields.activePlayer,
					instagram: item.fields.instagram,
					tikTok: item.fields.tikTok,
					twitter: item.fields.twitter,
					yearStarted: item.fields.firstSeason,
					yearEnded: item.fields.lastSeason,
					summary: summaryRichText,
					slug: item.fields.slug,
				};
			});
			// console.log("ATHLETE: ", athleteData);
			response.render('athletes', { athletes: athleteData })
		})
		.catch(console.error)
});

app.get('/athlete/:slug', function(request, response) {
	// Get athlete data from Contentful
	console.log("PARAMS: ", request.params)

	client.getEntries({
		content_type: 'proHuskies'
	})
		.then( function(data) {
			const foundAthlete = data.items.find( function(athlete) {
				return athlete.fields.slug === request.params.slug;
			})

			const birthdate = foundAthlete.fields.birthdate;
			const date = new Date(birthdate);

			const birthdateFormatted = date.toLocaleDateString('en-US', {
				year: 'numeric',
				month: '2-digit',
				day: '2-digit'
			});

      function renderRichText(fieldName, options) {
      	const richTextContent = foundAthlete.fields[fieldName];
      	if (richTextContent) {
      		return documentToHtmlString(richTextContent, options);
      	}
      	return '';
      }

			const actionShots = foundAthlete.fields.actionShots || [];
			const imageUrls = actionShots.map(function(asset) {
				return asset.fields.file.url;
			})

			const collegeRichText = renderRichText('collegeStats', options);
			const proRichText = renderRichText('proStats', options);
			const summaryRichText = renderRichText('summary', options);

			const athleteData = {
				firstName: foundAthlete.fields.firstName,
				lastName: foundAthlete.fields.lastName,
				headshot: foundAthlete.fields.headshot.fields.file.url,
				heightInFt: foundAthlete.fields.heightInFeet,
				heightInIn: foundAthlete.fields.heightInInches,
				// height: foundAthlete.fields.height,
				weight: foundAthlete.fields.weight,
				birthDate: birthdateFormatted,
				birthPlace: foundAthlete.fields.birthPlace,
				highSchool: foundAthlete.fields.highSchool,
				sport: foundAthlete.fields.sport,
				position: foundAthlete.fields.position,
				draftRound: foundAthlete.fields.draftRound,
				draftPick: foundAthlete.fields.draftPick,
				overrall: foundAthlete.fields.overrall,
				draftYear: foundAthlete.fields.draftYear,
				draftTeam: foundAthlete.fields.draftTeam,
				actionShots: imageUrls[0],
				collegeStats: collegeRichText,
				collegeAccolades: foundAthlete.fields.collegeAccolades,
				proStats: proRichText,
				activePlayer: foundAthlete.fields.activePlayer,
				instagram: foundAthlete.fields.instagram,
				tikTok: foundAthlete.fields.tikTok,
				twitter: foundAthlete.fields.twitter,
				yearStarted: foundAthlete.fields.yearStarted,
				yearEnded: foundAthlete.fields.yearEnded,
				summary: summaryRichText,
				slug: foundAthlete.fields.slug
			}
			console.log("FOUND SLUG: ", athleteData.slug)
			response.render('details', {athlete: athleteData});
		})
		.catch(console.error);
})

app.get('/about', function(request, response) {
	// Define the API endpoint URL
	const nbaApiUrl = 'https://free-nba.p.rapidapi.com/players?page=0&per_page=100';

	// Set the headers for the API request
	const headers = {
	  'X-RapidAPI-Key': 'f80c7fbedcmsh437fdc5890bce8dp15b57bjsne6ed63a690ca',
	  'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
	};

  // Make the API request
  axios.get(nbaApiUrl, { headers: headers })
    .then( function(apiResponse) {
      // Extract the data from the API response
      const apiData = apiResponse.data;

      const apiPlayerData = apiData.data.map(function(player) {
      	return {
      		fName: player.first_name,
      		lName: player.last_name,
      		id: player.id,
      	}
      })
      // Render your 'api' template and pass the data as a parameter
      response.render('about', { apiData: apiPlayerData });
    })
    
    .catch((error) => {
      // Handle any errors here
      console.error('API request failed:', error);
      response.status(500).send('API request failed');
    });	
})

const perPage = 25;
const totalPages = 1; //206 total pages

app.get('/api', async (req, res) => {
  try { //Using try instead of axios.get allows us to handle errors during the HTTP request 
    const allPlayers = [];

    for (let page = 1; page <= totalPages; page++) {
      const response = await axios.get(apiUrl, {
        params: {
          page,
          per_page: perPage,
        },
      });

      const nbaStats = response.data;
      const playerData = nbaStats.data.map((player) => {
        return {
          id: player.id,
          fname: player.first_name,
          lname: player.last_name,
          team: player.team,
        };
      });

      allPlayers.push(...playerData);
    }
    // console.log(playerData)
    res.render('api', { players: allPlayers });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

app.use( function(request, response) {
	response.status(404).render('404', { query: request.url });
})
