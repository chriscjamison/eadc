<?php 
  $visitors_first_name = $_POST['first_name'];
  $visitors_last_name = $_POST['last_name'];
  $visitors_email_address = $_POST['email_address'];
  $visitors_message = $_POST['message'];

  $visitors_first_name_length = strlen($visitors_first_name);
  $visitors_last_name_length = strlen($visitors_last_name);
  $visitors_email_address_length = strlen($visitors_email_address);
  $visitors_message_length = strlen($visitors_message);

  $form_is_valid_Array = array();

  if ($visitors_first_name_length > 1 && 
      $visitors_first_name != "Please enter your first name")  {
    array_push($form_is_valid_Array, "true");
  } else {
    array_push($form_is_valid_Array, "first_name");
  }

  if ($visitors_last_name_length > 1 && 
      $visitors_last_name != "Please enter your last name") {
    array_push($form_is_valid_Array, "true");
  } else {
    array_push($form_is_valid_Array, "last_name");
  }

  $search_string_Array = [
    "@", 
    ".", 
    "com", 
    "net", 
    "org", 
    "mil", 
    "edu", 
    ".co"
  ];

  $inc = 0;

  $email_address_is_valid_Array = array();
  $invalid_data_Array = array();

  foreach($search_string_Array as $key => $val) {
    if ($key == 0) {
      if (strstr($visitors_email_address, $val) != false) {
        array_push($email_address_is_valid_Array, "true");
      } 
    } elseif ($key == 1) {
      if (strstr($visitors_email_address, $val) != false) {
        array_push($email_address_is_valid_Array, "true");
      } 
    } else {
      if (strstr($visitors_email_address, $val) == false) {
        array_push($invalid_data_Array, "false");
      }
    }
  }

  if (count($invalid_data_Array) < 6 && 
      count($email_address_is_valid_Array) == 2)  {
    array_push($form_is_valid_Array, "true");
  } else {
    array_push($form_is_valid_Array, "email_address");
  }

  if ($visitors_message_length > 0) {
    array_push($form_is_valid_Array, "true");
  } else {
    array_push($form_is_valid_Array, "message");
  }

  $valid_fields = 0;

  foreach($form_is_valid_Array as $val) {
   if ($val == "true") {
      $valid_fields++;
    }
  }


  $current_page = $_POST['referrer'];

  if ($current_page == "/") {
    $url_hash = "content-tte";
  } elseif ($current_page == "/talk-to-eadc.htm") {
    $url_hash = "sp-content-tte-bottom";
  }
?>

<?php
  if ($valid_fields == 4) {
    $to      = "info@myeadc-stl.com";
    $subject = "Message from " . $visitors_first_name . " " . $visitors_last_name . ", sent from myeadc-stl.com";
    $message = 
              "From: " . $visitors_first_name . " " . $visitors_last_name . "\n\n" . 
              "Email Address: " . $visitors_email_address . "\n" . 
              "Message: " . "\n" . $visitors_message;
    $headers = "From: no_reply@myeadc-stl.com" . "\r\n" . 
              "Reply-To: no_reply@myeadc-stl.com" . "\r\n" .
              "X-Mailer: PHP/" . phpversion();

    mail($to, $subject, $message, $headers);
    
    $to = $visitors_email_address;
    $subject = "Thanks for your message to Emmanuel Adult Day Center";
    $message = "Hello " . $visitors_first_name . ", \n\n" . "Thank you for your interest in Emmanuel Adult Day Center's services. \n\n" . 
              "I will read your message and get back to you no later than one business day from today. \n\n" . 
              "A copy of the message you sent to me is below.\n\n" . 
              "\"" . $visitors_message . "\"\n\n\n" . 
              "I look forward to talking to you soon. \n\n" .
              "Mirinda Johnson \n" . 
              "Director of Operations";
    $headers = "From: no_reply@myeadc-stl.com" . "\r\n" . 
              "Reply-To: no_reply@myeadc-stl.com" . "\r\n" .
              "X-Mailer: PHP/" . phpversion(); 

    mail($to, $subject, $message, $headers);

    $url_string = "http://test.myeadc-stl.com" . $current_page . "?first_name=" . $visitors_first_name;
  } else {
    reset($form_is_valid_Array);

    foreach($form_is_valid_Array as $key => $val) {
       if ($val == "true") {
        $fields_in_error = $fields_in_error . "v";
      } else {
        $fields_in_error = $fields_in_error . "e";
      }

      if ($key < 3) {
        $fields_in_error = $fields_in_error . ",";
      } 
    }

    $url_string = "http://test.myeadc-stl.com" . $current_page . "?fields_in_error=" . $fields_in_error . "&first_name=" . $_POST['first_name'] . "&last_name=" . $_POST['last_name'] . "&email_address=" . $_POST['email_address'] . "&message=" . $_POST['message'];
  }

  $url_string = $url_string . "#" . $url_hash;
?>

<?php if ($url_string != ""): ?>

<html>
  <script>window.location.href = "<?php echo $url_string; ?>";</script>
</html>

<?php endif; ?>