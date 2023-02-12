// - - - - HELLO - - - - - - - - - - - - - - - - - 
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

// - - - - SIMPLE MATH - - - - - - - - - - - - - - 
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


// - - - - SIMPLE INTEREST - - - - - - - - - - - - - - 
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

// - - - - PASSWORD VALIDATION - - - - - - - - - - - 
// var $password = document.querySelector('form');

// var $fruit = document.querySelector("[name='fruit']");
// var $number = document.querySelector("[name='number']");

// $password.addEventListener('submit', function(event) {
// 	event.preventDefault();

// 	let fruitInput = $fruit.value;
// 	let numberInput = $number.value;
// 	let passwordInput = fruitInput + numberInput;	

// 	if (!fruitInput) {
// 		var $warning = document.querySelector('.calm-voice.warning');

// 		$warning.innerHTML = 'No fruit entered';
// 	} else {
// 		var $passwordDiv = document.querySelector('.password-create');

// 		$passwordDiv.insertAdjacentHTML('afterend', '<div class="password-output"></div>');

// 		var $passwordOutput = document.querySelector('.password-output');

// 		$passwordOutput.innerHTML = `<p class="normal-voice">You entered:</p> <span class="alert-voice">${passwordInput}</span> <p class="normal-voice">This will be your password.</p>`;

// 		var $passwordEnter = document.createElement('password-enter');
// 		// document.body.appendChild($passwordEnter);
		
// 		console.log(passwordInput);
// 		}
		
// });

// - - - - COUNT CHARACTERS - - - - - - - - - - - - - - 
// var $countChar = document.querySelector('form');

// var $string = document.querySelector("[name='string']");

// $countChar.addEventListener('submit', function(event) {
// 	event.preventDefault();

// 	let stringInput = $string.value;
// 	let stringLength = stringInput.length;
// 	let stringNoSpace = stringInput.replace(/ /g, "");
// 	let stringNoSpaceLength = stringNoSpace.length;

// 	function wordCount(string){
// 		return string.split(" ").length;
// 	}

// 	let words = wordCount(stringInput);

// 	let $output = document.createElement("output");
// 	document.body.appendChild($output);

// 	$output.innerHTML = `<p class="normal-voice">You entered: "<span id="words">${stringInput}</span>".</p> 

// 		<p class="normal-voice">Total characters: ${stringLength}</p>

// 		<p class="normal-voice">Total characters without spaces: ${stringNoSpaceLength}</p>

// 		<p class="normal-voice">Total words: ${words}</p>`

// });

// - - - - SELF-CHECKOUT - - - - - - - - - - - - - - 
// var $selfCheckout = document.querySelector("form");

// var $quantity1 = document.querySelector("[name='quantity']");
// var $price1 = document.querySelector("[name='price']");

// var $quantity2 = document.querySelector("[name='quantity2']");
// var $price2 = document.querySelector("[name='price2']");

// var $quantity3 = document.querySelector("[name='quantity3']");
// var $price3 = document.querySelector("[name='price3']");

// var $quantity4 = document.querySelector("[name='quantity4']");
// var $price4 = document.querySelector("[name='price4']");

// $selfCheckout.addEventListener('submit', function(myEvent) {
// 	myEvent.preventDefault();
// 	console.log("button pushed");

// 	let quantity1 = $quantity1.value;
// 	let price1 = $price1.value;

// 	let quantity2 = $quantity2.value;
// 	let price2 = $price2.value;

// 	let quantity3 = $quantity3.value;
// 	let price3 = $price3.value;

// 	let quantity4 = $quantity4.value;
// 	let price4 = $price4.value;

// 	let subTotal = (quantity1 * price1) + (quantity2 * price2) + (quantity3 * price3) + (quantity4 * price4);
// 	const subTotalFormatted = subTotal.toLocaleString('en-US');

// 	const taxRate = .1025;

// 	const taxTotal = (subTotal * taxRate).toFixed(2).toLocaleString('en-US');
// 	const taxTotalFormatted = taxTotal.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

// 	const grandTotal = parseFloat(subTotal) + parseFloat(taxTotal);
// 	const grandTotalFormatted = grandTotal.toLocaleString('en-US');

// 	const $output = document.createElement("output");
// 	document.body.appendChild($output);

// 	$output.innerHTML = 
// 		`<p class="normal-voice">Sub-total: $${subTotalFormatted}</p> 
// 		 <p class="normal-voice">Tax total: $${taxTotalFormatted}</p> 
// 		 <p class="normal-voice">Grand total: $${grandTotalFormatted}</p> 
// 		`;
// });

// - - - - TIP CALCULATOR - - - - - - - - - - - - - - 
// var $form = document.querySelector('form');
// var $subTotal = document.querySelector("[name='subtotal']");
// var $tip = document.querySelector("input[name='tip']");

// $form.addEventListener('submit', function(event) {
// 	event.preventDefault();

// 	var subTotal = parseInt($subTotal.value);
// 	var subTotalFormatted = subTotal.toLocaleString('en-US');

// 	var tip = document.querySelector("input[name='tip']:checked").value;

// 	console.log(tip);
	
// 	var tipTotal = (subTotal * tip).toFixed(2);
// 	var tipTotalFormatted = tipTotal.toLocaleString('en-US');

// 	var grandTotal = parseFloat(subTotal) + parseFloat(tipTotal);
// 	var grandTotalFormatted = grandTotal.toLocaleString('en-US');


// 	console.log(tipTotal + " " + subTotal);
// 	let $output = document.createElement("output");
// 	document.body.appendChild($output);

// 	$output.innerHTML = `
// 		<p class="normal-voice">Sub-total: $${subTotalFormatted}</p> 
// 		 <p class="normal-voice">Tip total: $${tipTotalFormatted}</p> 
// 		 <p class="normal-voice">Grand total: $${grandTotalFormatted}</p> `;

// });


// - - - - PIZZA PARTY - - - - - - - - - - - - - - 
// var $form = document.querySelector('form');

// var $people = document.querySelector("[name='people']");
// var $pizza = document.querySelector("[name='pizza']");

// $form.addEventListener('submit', function(event) {
// 	event.preventDefault() 

// 	let people = $people.value;
// 	let pizza = $pizza.value;
// 	let slices = pizza * 8;

// 	let slicesPerPerson = Math.floor(slices / people);
// 	let remainder = (slices % people);

// 	console.log("people: " + people + " pizzas: " + pizza + " slices: " + slices + " slicesPP: " + slicesPerPerson + " remainder: " + remainder);

// 	let $output = document.createElement('output');
// 	document.body.appendChild($output);
// 	$output.innerHTML = `
// 		<p class="normal-voice">With ${people} people attending, there will be ${slicesPerPerson} slices per person with ${remainder} slices left over.</p>`

// });

// - - - - DRIVING AGE - - - - - - - - - - - - - - 
// $form = document.querySelector('form');
// $age = document.querySelector("[name='age']");

// $form.addEventListener('submit', function(event) {
// 	event.preventDefault();

// 	age = $age.value;

// 	let $output = document.createElement('output');
// 	document.body.appendChild($output);

// 	if (age == null || age == "" || age == 0) {
// 		$output.innerHTML = 
// 			`<p class="normal-voice">You are unborn. So no, You can't drive.</p>`
// 	} 

// 	if (0 < age && age < 21) {
// 		$output.innerHTML = 
// 			`<p class="normal-voice">Sorry, you're too young, kiddo!</p>`
// 	} 

// 	if (21 <= age && age < 85) {
// 		$output.innerHTML = 
// 			`<p class="normal-voice">You may drive</p>`
// 	} 

// 	if (85 <= age && age < 110) {
// 		$output.innerHTML = 
// 			`<p class="normal-voice">We may need to take your driver's license away.</p>`
// 	}

// 	if (110 <= age) {
// 		$output.innerHTML = 
// 			`<p class="normal-voice">How are you even alive?!?!</p>`
// 	}

// 	console.log(age);
// })

// - - - - TEMPERATURE CONVERTER - - - - - - - - - - - - - - 
var $form = document.querySelector('form');
var $temp = document.querySelector("[name='temp']");


$form.addEventListener('submit', function(event) {
	event.preventDefault();

	var tempType = document.querySelector("[name='temp-type']:checked").value;
	var temp = $temp.value;

	console.log(tempType + " " + temp);

	function convertToCelsius(temp) {
		return (temp - 32) * 5 / 9;
	}

	function convertToFahrenheit(temp) {
		return (temp * 9 / 5) + 32;
	}

	let $output = document.createElement('output');
	document.body.appendChild($output);


	if (tempType == 'celsius') {
		let celsius = convertToCelsius(temp).toFixed(2);

		$output.innerHTML = `<p class="normal-voice">That will be ${celsius} degrees Celsius.</p>`;
	} else {
		let fahrenheit = convertToFahrenheit(temp).toFixed(2);

		$output.innerHTML = `<p class="normal-voice">That will be ${fahrenheit} degrees Fahrenheit.</p>`;
	};

})











































