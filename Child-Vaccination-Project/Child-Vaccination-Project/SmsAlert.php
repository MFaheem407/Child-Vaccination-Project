<?php
 
if ( isset( $_REQUEST ) && !empty( $_REQUEST ) ) {
 if (
 isset( $_REQUEST['phoneNumber'], $_REQUEST['carrier'], $_REQUEST['smsMessage'] ) &&
  !empty( $_REQUEST['phoneNumber'] ) &&
  !empty( $_REQUEST['carrier'] )
 ) {
  $message = wordwrap( $_REQUEST['smsMessage'], 70 );
  $to = $_REQUEST['phoneNumber'] . '@' . $_REQUEST['carrier'];
  $result = @mail( $to, '', $message );
  print 'Message was sent to ' . $to;
 } else {
  print 'Not all information was submitted.';
 }

require 'class.phpmailer.php';
 

 
// Set up SMTP
$mail->IsSMTP();                // Sets up a SMTP connection
$mail->SMTPDebug  = 2;          // This will print debugging info
$mail->SMTPAuth = true;         // Connection with the SMTP does require authorization
$mail->SMTPSecure = "tls";      // Connect using a TLS connection
$mail->Host = "smtp.gmail.com";
$mail->Port = 587;
$mail->Encoding = '7bit';       // SMS uses 7-bit encoding
 
// Authentication
$mail->Username   = "email.address@gmail.com"; // Login
$mail->Password   = "password"; // Password
 
// Compose
$mail->Subject = "Testing";     // Subject (which isn't required)
$mail->Body = "Testing";        // Body of our message
 
// Send To
$mail->AddAddress( "##########@vtext.com" ); // Where to send it
var_dump( $mail->send() );      // Send!
}