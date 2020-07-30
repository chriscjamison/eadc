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

  while (list($key, $val) = each($search_string_Array)) {
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

  while (list($key, $val) = each($form_is_valid_Array)) {
   if ($val == "true") {
      $valid_fields++;
    }
  }

  if ($valid_fields == 4) {
    echo "Form is Valid";
  } else {
    reset($form_is_valid_Array);

    while (list($key, $val) = each($form_is_valid_Array)) {
       if ($val == "true") {
        $fields_in_error = $fields_in_error . "v";
      } else {
        $fields_in_error = $fields_in_error . "e";
      }

      if ($key < 3) {
        $fields_in_error = $fields_in_error . ",";
      } 
    }

    echo $fields_in_error;
  }
?>