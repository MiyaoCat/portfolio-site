<script setup>
	import { ref, computed, watch } from 'vue';
	
	const title = ref("Printing Quotes")
	const quote = ref("");
	const author = ref("");
	const output = ref("");
	
	const message = computed( function() {
		if (quote.value == "" && author.value == "") {
			return `Who said what?`
		} 
		if (quote.value == "" && author.value != "") {
			return `What did ${author.value} say?`
		}
		if (quote.value != "" && author.value == "") {
			return `Who said ${quote.value}?`
		}
		else {
			return `${author.value} once said ${quote.value}.`;
		}
		
	});
	
	function createMessage() {
		output.value = message;
	};
	
	watch(quote, function(newquote, oldquote) {
		if (newquote != oldquote) {
			output.value = "";
		}
	})
	
	watch(author, function(newAuthor, oldAuthor) {
		if (newAuthor != oldAuthor) {
			output.value = "";
		}
	})
</script>

<template>
	<h1 class='title'>{{title}}</h1>
	<form @submit.prevent="createMessage()">
		<label for="quote">What is the quote?</label>
		<input id="quote" type="text" v-model="quote">
		
		<label for="author">Who said it?</label>
		<input id="author" type="text" v-model="author">
		
		<button type="submit">Get Quote</button>
	</form>
	
	<output v-if="output">
		{{output}}
	</output>
</template>

<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
<style>
body {
	background-color: #370088;
}

form {
	display: grid;
	flex-direction: column;
	max-width: 500px;
	margin: 25px;
	margin-bottom: 40px;
	gap: 8px;
	font-size: 16px;
	font-family: Anton, helvetica;
	border: 3px solid black;
	border-radius: 10px;
	padding: 40px 20px 75px 20px;
	background-color: #ddd5e9;
	box-shadow: 0 0 30px hotpink;
}

.title {
	margin: 20px;
	letter-spacing: .05em;
}
	
h1 {
	font-size: 38px;
	font-weight: 700;
	text-shadow: 2px 2px 3px limegreen;
	font-family: Clash Display;
	margin-bottom: 7px;
}

.instructions {
	line-height: 1.2em;
}

li {
	list-style: bullets;
	list-style-position: inside;
}

h2 {
	font-weight: 700;
	font-size: 20px;
}

form {
	display: flex;
	flex-direction: column;
	gap: 5px;
	border: 3px solid black;
	border-radius: 6px;
	padding: 10px; 
	background-color: hsla(263, 6%, 55%, 0.85);
	margin: 20px;
}

label {
	margin-top: 10px;
	font-weight: 700;
}

.whisper-voice {
	font-size: 12px;
	margin-top: 3px;
	font-weight: 500;
}

[name ="state"] {
	max-width: 200px;
}
span {
	font-weight: 700;
	color: hsla(306, 92%, 61%, 1.00);
}

input {
	padding: 5px;
	border: 3px solid black;
	border-radius: 5px;
	max-width: 80px;
}
button {
	border: none;
	background-color: hsla(306, 92%, 61%, 1.00);
	padding: 7px 5px;
	border-radius: 6px;
	font-size: 17px;
	max-width: 150px;
}

output {
	background-color: black;
	color: limegreen;
	font-family: Monospace;
	padding: 15px;
	border-radius: 6px;
	margin-left: 20px;
	line-height: 1.5em;
}

output:empty {
/* 	display: none; */
}

.bad {
	color: red;
}

.error {
	background-color: red;
}

.style {
	border: 3px solid red;
}

</style>