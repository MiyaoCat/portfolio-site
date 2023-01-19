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
//Query form
// var $simpleMath = document.querySelector('#simple-math');

// //Query the first input
// var $number1 = document.querySelector("[name='number1']");

// //Query the second input
// var $number2 = document.querySelector("[name='number2']");

// // //Listen for the submit button to click
// $simpleMath.addEventListener('submit', function(myEvent) {
// 	myEvent.preventDefault();

// 	console.log("You clicked submit");

// 	let numberOne = Number($number1.value);
// 	let numberTwo = Number($number2.value);

// 	console.log(numberOne + " and " + numberTwo);

// 	var add = numberOne + numberTwo;
// 	var subtract = numberOne - numberTwo;
// 	var multiply = numberOne * numberTwo;
// 	var divide = (numberOne / numberTwo).toFixed(2);

// 	//Create the output element
// 	var $output2 = document.createElement("output");
// 	document.body.appendChild($output2);

// 	//Output message
// 	$output2.innerHTML = `<p class="normal-voice>" Add: ${add}</p> 
// 		<p class="normal-voice"> Subtract: ${subtract}</p>
// 		<p class="normal-voice"> Multiplied: ${multiply}</p>
// 		<p class="normal-voice"> Divide: ${divide}</p>`;
// });


// - - - - SIMPLE INTEREST - - - - - - - - 
// var $form = document.querySelector("#simple-interest");

// var $principalInput = document.querySelector("[name='principal']");
// var $interestInput = document.querySelector("[name='interest']");
// var $yearsInput = document.querySelector("[name='years']");

// $form.addEventListener('submit', function(event) {
// 	event.preventDefault();

// 	let principal = $principalInput.value;
// 	let interest = $interestInput.value;
// 	let years = $yearsInput.value;

// 	let totalEarned = (principal * (1 + (interest * .01 * years))).toFixed(2);

// 	var $output = document.createElement("output");
// 	document.body.appendChild($output);

// 	$output.innerHTML = `<p class="normal-voice">You'll earn $${totalEarned} after ${years} at a ${interest}% interest rate.`;

// 	console.log(totalEarned);
// });

// - - - - PASSWORD VALIDATION - - - - - - - - 
var $password = document.querySelector('.password');

var $fruit = document.querySelector("[name='fruit']");
var $number = document.querySelector("[name='number']");

$password.addEventListener('submit', function(event) {
	event.preventDefault();

	let fruitInput = $fruit.value;
	let numberInput = $number.value;
	let passwordInput = fruitInput + numberInput;

	const $passwordDiv = document.querySelector('.password-create');

	$passwordDiv.insertAdjacentHTML('afterend', '<div class="password-output"></div>');

	const $passwordOutput = document.querySelector('.password-output');

	$passwordOutput.innerHTML = `<p class="normal-voice">You entered:</p> <span class="alert-voice">${passwordInput}</span> <p class="normal-voice">This will be your password.</p>`;

	let $passwordEnter = document.createElement('password-enter');
	document.body.appendChild($passwordEnter);
	
	console.log(passwordInput);
});





































































