<?php  
	if ( isset($_POST["submitted"]) ) {

	echo "<pre>";
		print_r($_POST);
	echo "</pre>";

	$email = $_POST['inputEmail'];
	$subject = $_POST['inputSubject'];
	$message = $_POST['inputMessage'];

	$to = "dftwjohn@gmail.com";
	$body = "";

	$body .= "Email: " . $email . "\r\n";
	$body .= "Subject: " . $subject . "\r\n";
	$body .= "Message: " . $message . "\r\n";


	mail($to, $subject, $body);
}
?>

<form action="email-form.php" method="POST">
	
	<label for="inputEmail">Email</label>
	<input type="email" name="inputEmail" placeholder="youremail@email.com">
	<label for="inputSubject">Subject</label>
	<input type="text" name="inputSubject">

	<label for="inputMessage">Message</label>
	<textarea rows="10" columns="8" name="inputMessage">
	</textarea>

	<button type="submit" name="submitted">Submit</button>

</form>
