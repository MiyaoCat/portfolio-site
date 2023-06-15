<?php  
	$submitted = isset($_POST["submitted"]);

	if ($submitted) {
		$email = $_POST['inputEmail'];
		$subject = $_POST['inputSubject'];
		$name = $_POST['inputName'];
		$message = $_POST['inputMessage'];
	}	

	if ( $submitted && $_POST["inputMessage"] != "" ) {

		

		$to = "dftwjohn@gmail.com";

		$body = "";

		$body = "Email: " . $email . "\r\n" . 
			"Name: " . $name . "\r\n" . 
			"Message: " . $message . "\r\n";

		$senderBody = 
			"You've sent an email to dftwjohn@gmail.com through their website. Do not reply to this email." . "\r\n" .  
			"Message: " . $message;

		mail($to, $subject, $body);
		mail($email, $subject, $senderBody);
	} 

	function removeForm() {

		if ( isset($_POST["submitted"]) && isset($_POST['inputEmail']) && isset($_POST['inputName']) ) {
			
			$email = $_POST['inputEmail'];
			$subject = $_POST['inputSubject'];
			$name = $_POST['inputName'];
			$message = $_POST['inputMessage'];

			if (	!empty($email) && !ctype_space($email) && 
					!empty($name) && !ctype_space($name) && 
					!empty($message) && !ctype_space($message) ) {	

						echo "style='display:none'"; 
			}	
		}			
	}
	
	function emptyName($inputName) {
		if( isset($_POST['submitted']) && isset($inputName) && (empty($inputName) || ctype_space($inputName)) ) {
			return "I'd like to know how to address you.";
		}
	}

	function emptyEmail($inputEmail) {
		if( isset($_POST['submitted']) && isset($inputEmail) ) {
			if ( empty($inputEmail) or ctype_space($inputEmail) ) {
				echo "How can I get back to you?";
			}
		}
	}

	function emptyMessage($inputMessage) {
		if( isset($_POST['submitted']) && isset($inputMessage) && (empty($inputMessage) || ctype_space($inputMessage)) ) {
			echo "Surely you have something to tell me.";
		}
	}

?>


<form class="contact" method="POST" <?php removeForm() ?>>
	
	<div class="name">
		<label for="inputName">*Name</label>
		<input type="text" name="inputName">

		<p class="calm-voice warning">
			<?php 
				if (isset($_POST["inputName"])) {
     				echo emptyName($_POST["inputName"]);
    			} 
			?>	
		</p>
	</div>

	<div class="email">
		<label for="inputEmail">* Email</label>
		<input type="email" name="inputEmail" >
		
		<p class="calm-voice warning">
			<?php if (isset($_POST["inputEmail"])) {
     				emptyEmail($_POST["inputEmail"]);
    			} 
			?>	
		</p>
	</div>

	<div class="subject">
		<label for="inputSubject">Subject</label>
		<input type="text" name="inputSubject">
	</div>

	<div class="message">
		<label for="inputMessage">* Message</label>
		<textarea rows="6" columns="10" name="inputMessage" placeholder="Hey John, I love your work. Let's collab!" ></textarea>

		<p class="calm-voice warning">
			<?php if (isset($_POST["inputMessage"])) {
     				emptyMessage($_POST["inputMessage"]);
    			} 
			?>	
		</p>
	</div>

	<button class="normal-voice contact-form" type="submit" name="submitted">
		Send Message
	</button>

	<p class="calm-voice">*Required fields</p>
</form>


<?php  
	if ( isset($_POST["submitted"]) && isset($_POST["inputEmail"]) && isset($_POST["inputName"]) ) {
			
			$email = $_POST['inputEmail'];
			$subject = $_POST['inputSubject'];
			$name = $_POST['inputName'];
			$message = $_POST['inputMessage'];

		if (	!empty($email) && !ctype_space($email) && 
				!empty($name) && !ctype_space($name) && 
				!empty($message) && !ctype_space($message) ) {	
?>	
			<p class="output alert-voice">Thank you! Your message has been received and I will get back to you ASAP! Usually within 2 business days. </p>

			<p class="output alert-voice">I also sent a copy of your message to the email address you provided.</p>

			<button class="normal-voice contact-form">
				<a href="?page=contact">Send another Message</a>
			</button>

			
		<?php } ?> 		
	<?php } ?> 