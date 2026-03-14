<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = "garciagirlie2002@gmail.com";

$subject = "Portfolio Contact Message";

$body = "Name: $name\nEmail: $email\nMessage:\n$message";

mail($to,$subject,$body);

echo "Message Sent Successfully";

?>
