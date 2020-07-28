<?php
  $to      = "chris@chriscjamison.com";
  $subject = "Message from " . $_POST['first_name'] . " " . $_POST['last_name'] . ", sent from myeadc-stl.com";
  $message = 
             "From: " . $_POST['first_name'] . " " . $_POST['last_name'] . "\n\n" . 
             "Email Address: " . $_POST['email_address'] . "\n" . 
             "Message: " . "\n" . $_POST['message'];
  $headers = "From: no_reply@myeadc-stl.com" . "\r\n" . 
             "Reply-To: no_reply@myeadc-stl.com" . "\r\n" .
             "X-Mailer: PHP/" . phpversion();

  mail($to, $subject, $message, $headers);
  
  $to = $_POST['email_address'];
  $subject = "Thanks for your message to Emmanuel Adult Day Center";
  $message = "Hello, " . $_POST['first_name'] . ", \n\n" . "Thank you for your interest in Emmanuel Adult Day Center's services. \n" . 
             "I will read your message and get back to you no later than one business day from today. \n\n" . 
             "A copy of the message you sent to me is below.\n\n" . 
             "\"" . $_POST['message'] . "\"\n\n\n" . 
             "I look forward to talking to you soon. \n\n" .
             "Mirinda Johnson \n" . 
             "Director of Operations";
  $headers = "From: no_reply@myeadc-stl.com" . "\r\n" . 
             "Reply-To: no_reply@myeadc-stl.com" . "\r\n" .
             "X-Mailer: PHP/" . phpversion(); 

  mail($to, $subject, $message, $headers);

  $url_string = "http://test.myeadc-stl.com" . $_POST['referrer'] . "?first_name=" . $_POST['first_name'] . "#tte-contact_form";
?>

<html>
  <script>window.location.href = "<?php echo $url_string; ?>";</script>
</html>