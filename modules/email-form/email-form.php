<?php  
	if ( isset($_POST["submitted"]) && $_POST["inputMessage"] != "" ) {

		$email = $_POST['inputEmail'];
		$subject = $_POST['inputSubject'];
		$name = $_POST['inputName'];
		$message = $_POST['inputMessage'];

		$to = "dftwjohn@gmail.com";

		$body = "";

		$body = "Email: " . $email . "\r\n" . 
			"Subject: " . $subject . "\r\n" . 
			"Name: " . $name . "\r\n" . 
			"Message: " . $message . "\r\n";


		mail($to, $subject, $body);

	}
?>

<div class="contact" <?php if(isset($_POST['submitted'])){ echo "style='display:none'"; } ?>>    
	<form method="POST">
		
		<label for="inputName">Name</label>
		<input type="text" name="inputName">

		<label for="inputEmail">* Email</label>
		<input type="email" name="inputEmail" required>

		<label for="inputSubject">Subject</label>
		<input type="text" name="inputSubject">

		<label for="inputMessage">* Message</label>
		<textarea rows="8" columns="10" name="inputMessage" placeholder="Hey John, I love your work. Let's collab!" required></textarea>

		<button class="normal-voice contact-form" type="submit" name="submitted">Send Message</button>

	</form>
</div>

<?php  
	if ( isset($_POST["submitted"]) ) {

		if ( isset($email) ) {
			if ( isset($message) && $message > "0") {	
?>	
			<p class="normal-voice">Thank you! Your message has been received and I will get back to you ASAP! Usually within 2 business days. </p>
			<button class="normal-voice contact-form"><a href="?page=contact">Send 	another Message</a>
			</button>

			<?php } ?>
		
		<?php } ?>

<?php } ?> 