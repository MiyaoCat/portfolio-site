Multi-state Tax
1. Fetch data
- function to populate states for a dropdown list
	- Dropdown includes label (not required), select & options. 
	- Options are nested in select tags

	Function to create states as options in the dropdown list
	- Loop through states with a forEach method.
	- create the option (createElement)
	- set the option value 
	- set the textContent or innerHTML of the option with the state name
	- Append the option element

	Function to create counties as options in the dropdown list
	- set textContent/innerHTML to blank as default
	- create a default option so anytime a new state is selected, the county starts with the default
	- set the default value to blank
	- set the textContent to "select" or something similar
	- append the default option to the list

	- Now loop through the counties
	- create the option (createElement)
	- set the textContent to the county name
	- append the option

	Function to display counties AFTER a state is selected
	- Listen for a 'change' with the state drop down list
	- set variable for the value of the selected state
	- Use find method to look through the states to match one of the states in the array with the state that's been selected in the state dropdown list.
	- IF a state is selected 
	- THEN display the county section/div
	- Run the Function to display/create the counties as options

	After state and county are selected, get their appropriate tax data and calculate taxes AFTER submit button is clicked

	- Listen for the form submit button
	- prevent the normal behavior of sending data to a server
	- Find the selected state from the dropdown with the state in the array and give it a reference name
	- Find the selected county from the dropdown with the county in the array and give it a reference name
	- Now we can get the state and county object info with their reference name
	- Do calculations
	