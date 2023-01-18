// var $form = document.querySelector('#hello');
// var $nameInput = document.querySelector("[name='name']");

// $form.addEventListener('submit', function(myEvent) {
// 	myEvent.preventDefault();

// 	console.log("You clicked submit");

// 	var myText = $nameInput.value;
// 	console.log("The input says " + myText);
	

// 	var $output = document.createElement("output");
// 	document.body.appendChild($output);

// 	$output.innerHTML = `<p class="normal-voice"> Hello, ${myText}. Nice to meet ya. </p>`;
// });

// - - - - SIMPLE MATH - - - - - - - - 
var $simpleMath = document.querySelector('#simple-math');

// //get the number from input one
var number1 = document.querySelector("[name='number1']");

// //get the number from input two
var number2 = document.querySelector("[name='number2']");

// //Listen for the submit button to click
$simpleMath.addEventListener('submit', function(myEvent) {
	myEvent.preventDefault();

	let numberOne = Number(number1.value);
	let numberTwo = Number(number2.value);

	var add = numberOne + numberTwo;
	var subtract = numberOne - numberTwo;
	var multiply = numberOne * numberTwo;
	var divide = (numberOne / numberTwo).toFixed(2);

	var $output2 = document.createElement("output");
	document.body.appendChild($output2);

	$output2.innerHTML = `<p class="normal-voice"> Add: ${add}</p> 
		<p class="normal-voice"> Subtract: ${subtract}</p>
		<p class="normal-voice"> Multiplied: ${multiply}</p>
		<p class="normal-voice"> Divide: ${divide}</p>`;		
});


// <p class="normal-voice"> Multiplied: ${multiply}.</p>
		// <p class="normal-voice"> Divide: ${divide}.</p>;