<?php  
	if ( isset($_POST["submitted"]) && $_POST["inputMessage"] != "" ) {

		$email = $_POST['inputEmail'];
		$subject = $_POST['inputSubject'];
		$name = $_POST['inputName'];
		$message = $_POST['inputMessage'];

		$to = "dftwjohn@gmail.com";

		$body = "";

		$email = "Email: " . $email . "\r\n";
		$subject = "Subject: " . $subject . "\r\n";
		$name = "Name: " . $name . "\r\n";
		$message = "Message: " . $message . "\r\n";


		mail($to, $subject, $email, $name, $message);

	}
?>

<div class="form" <?php if(isset($_POST['submitted'])){ echo "style='display:none'"; } ?>>   
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
			<p class="normal-voice">Thank you! Your message has been received and I will get back to you ASAP!</p>

			<?php } ?>
		
		<?php } ?>

<?php } ?> 