<?php  
	if ( isset($_POST["submitted"]) && $_POST["inputMessage"] != "" ) {

		$email = $_POST['inputEmail'];
		$subject = $_POST['inputSubject'];
		$name = $_POST['inputName'];
		$message = $_POST['inputMessage'];

		$to = "dftwjohn@gmail.com";

		$body = "";

		$body = "Email: " . $email . "\r\n" . 
			"Name: " . $name . "\r\n" . 
			"Message: " . $message . "\r\n";

		$senderBody = 
			"You've sent an email to dftwjohn@gmail.com through their website with the following message" . "\r\n" .  
			"Message: " . $message . "\r\n";
			
		mail($to, $subject, $body);
		mail($email, $subject, $body);
	}
?>


<form class="contact" method="POST" <?php if(isset($_POST['submitted'])){ echo "style='display:none'"; } ?>>
	
	<div class="name">
		<label for="inputName">Name</label>
		<input type="text" name="inputName">
	</div>

	<div class="email">
		<label for="inputEmail">* Email</label>
		<input type="email" name="inputEmail" required>
	</div>

	<div class="subject">
		<label for="inputSubject">Subject</label>
		<input type="text" name="inputSubject">
	</div>

	<div class="message">
		<label for="inputMessage">* Message</label>
		<textarea rows="6" columns="10" name="inputMessage" placeholder="Hey John, I love your work. Let's collab!" required></textarea>
	</div>

	<button class="normal-voice contact-form" type="submit" name="submitted">Send Message</button>

</form>


<?php  
	if ( isset($_POST["submitted"]) ) {

		if ( isset($email) ) {
			if ( isset($message) && $message > "0") {	
?>	
			<p class="alert-voice">Thank you! Your message has been received and I will get back to you ASAP! Usually within 2 business days. </p>
			<button class="normal-voice contact-form"><a href="?page=contact">Send 	another Message</a>
			</button>

			<?php } ?>
		
		<?php } ?>

<?php } ?> 