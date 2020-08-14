/* *** main.js - Contains jQuery that adds interactivity and styles the website's HTML *** */

$(document).ready(
  function ()   {
    discoverURLVariables();
    
    setTimeout(
      function () {
        adjustBackground();
      }, 250
    );
  }
);

$(window).resize(
  function () {
    setTimeout(
      function () {
        adjustBackground();
      }, 150
    );
  }
);

/* ****** EVENT HANDLERS ****** */

var why_eadc_button_selector = "";

why_eadc_button_selector = ".homepage-benefit_listing-button";

$(why_eadc_button_selector).click(
  function () {
    var button_id_value = "";

    button_id_value = $(this).attr("id");

    var button_id_value_Array = [];

    button_id_value_Array = button_id_value.split("-");

    button_id_value = button_id_value_Array[2];

    displayWeContent(button_id_value);
  }
);

var talk_to_eadc_submit_selector = "";

talk_to_eadc_submit_selector = "#tte-submit";


$(talk_to_eadc_submit_selector).click(
  function () {
    var talk_to_eadc_form_selector = "";

    talk_to_eadc_form_selector = "#tte-contact_form";

    $(talk_to_eadc_form_selector).submit();
  }
);

var form_fields_selector = "";

form_fields_selector = "#input-text-first_name, #input-text-last_name, #input-text-email_address, #input-textarea-message"

$(form_fields_selector).focusin(
  function () {
    var input_element = this;

    verifyFields(input_element, "focus");
  }
);

$(form_fields_selector).focusout(
  function () {
    var input_element =  this;

    verifyFields(input_element, "blur");
  }
);



/* ****** FUNCTIONS ****** */

function adjustBackground() {
  /* @params ********************************************************
     Name: adjustBackground
     Purpose: Positions the 'background circles' near the footer 
              of each section page.

  **************************************************************** */

  // A String variable is initialized that will hold the URL of the 
  // recently loaded webpage.
  var url_string = "";

  // The URL of the recently loaded webpage is passed on.
  url_string = window.location.pathname;
  
  // An Array that will hold two Strings that match URL's for webpages 
  // that contain background circles that will not be adjusted 
  // is initialized.
  var urls_to_ignore_Array = [];

  // The URL's for webpages that contain background circles that will 
  // not be adjusted are passed on.
  urls_to_ignore_Array[0] = "index.htm";
  urls_to_ignore_Array[1] = "search.htm";
  urls_to_ignore_Array[2] = "blog.htm"

  // A Boolean flag that will be set to 'true' if the recenly loaded 
  // webpage is not the homepage or the 'Search' page is initialized.
  var is_a_valid_page;

  // The value, 'false', is passed on to 'is_a_valid_page'.
  is_a_valid_page = true;

  // A Number variable that will contain the number of elements within 
  // the Array, 'urls_to_ignore_Array', is initialized.
  var num_elements_in_array;

  // The number of elements contained within 'urls_to_ignore_Array' is 
  // passed on.
  num_elements_in_array = urls_to_ignore_Array.length;
  
  // A Number variable that will serve as a loop incrementer is 
  // initialized.
  var inc;

  // FOR loop that will cycle through the values of 'urls_to_ignore_Array' 
  // and search for those values within, 'url_string'. If one of the 
  // values matches the URL, 'is_a_valid_page', will be set to 'false'.
  for (inc = 0; inc < num_elements_in_array; inc++) {
    
    // IF/ELSE statement that will adjust the background circles of the 
    // recently loaded webpage if that page is *not* the homepage or 
    // the 'Search' page.
    if (url_string.indexOf(urls_to_ignore_Array[inc]) >= 0 || 
        url_string === "/") {
      is_a_valid_page = false;
    }
  }

  // IF statement that will adjust the location of the 'background circles' 
  // that appear above the footer.
  if (is_a_valid_page === true) {
    // String variables that will contain the CSS selectors for the 
    // the 'background circles' above the footer, the '<html>' DOM 
    // element, and the footer are initialized.
    var background_circles_selector = "";
    var html_selector = "";
    var footer_selector = "";

    // Object variables that will contain the jQuery objects that 
    // refer to the 'background circles' above the footer, the <html> 
    // DOM element and the footer are initialized.
    var background_circles_element = {};
    var html_element = {};
    var footer_element = {};

    // CSS selectors that refer to the HTML DOM elements' metadata that will 
    // be used to adjust the 'background circles' above the footer are passed on.
    background_circles_selector = ".circles-bottom";
    html_selector = "html";
    footer_selector = "footer";
    // jQuery objects that refer to the HTML DOM elements' metadata that will 
    // be used to adjust the 'background circles' above the footer are passed on. 
    background_circles_element = $(background_circles_selector);
    html_element = $(html_selector);
    footer_element = $(footer_selector);
 
    // Number variables that will hold the height for the 'background circles', 
    // webpage and the footer are initialized.
    var background_circles_height;
    var html_height;
    var footer_height;

    // The values of the CSS property 'height' for the 'background circles', webpage 
    // and the footer are passed on.
    background_circles_height = $(background_circles_element).height();
    html_height = $(html_element).height();
    footer_height = $(footer_element).height();
    
    // A Number that will hold the vertical position on the webpage to place 
    // the 'background circles' is initialized.
    var background_circles_vertical_position_value;

    // The vertical position of the 'background circles' is calculated 
    // by subtracting the height of the footer from the height of the webpage 
    // and a constant equal to the height of the 'background circles'. 
    // That value is passed on.
    background_circles_vertical_position_value = Math.round(html_height - footer_height - background_circles_height);

    // The 'background circles' are positioned right above the footer.
    $(background_circles_element).css("top", background_circles_vertical_position_value);
  } 

  if (url_string !== "/index.htm") {
    var hero_background_circles_selector = "";

    if (url_string === "/blog.htm") {
      hero_background_circles_selector = "#sp-blog-background-hero";
    } else if (url_string !== "/search.htm") {
      hero_background_circles_selector = "#sp-background-hero";
    }
    
    var carousel_selector = "";
    
    carousel_selector = ".carousel";

    var carousel_height;

    carousel_height = $(carousel_selector).height();

    var hero_background_circles_vertical_position_value;

    hero_background_circles_vertical_position_value = carousel_height - 277;

    $(hero_background_circles_selector).css("top", hero_background_circles_vertical_position_value);

  }
} // END OF adjustBackground



function swapGalleryContent(gallery_value, content_value) {
  /* @params ********************************************************
     Name:      swapGalleryContent

     Purpose:   Displays content within a 'gallery' that is refered 
                to by the value of 'content_value'.

     Variables: 
                gallery_value 
                  - Holds the stem of a string that refers to the 
                    specific gallery that called this function.

                content_value 
                  - Holds a character that refers to the 'child number' 
                    of the link and content that called this 
                    function.

  **************************************************************** */

  // String variables that will hold CSS selectors that refer to the 
  // HTML elements that contain content within a 'gallery' are initialized.
  var visible_gallery_selector = "";
  var all_gallery_selector = "";

  // Object variables that will contain the jQuery objects that refer 
  // to the HTML elements that contain content within a gallery 
  // are initialized.
  var visible_content_element = {};
  
  // CSS selectors that refer to the HTML elements that contain content 
  // within a gallery are passed on.
  visible_gallery_selector = "#" + gallery_value + "-" + content_value;
  all_gallery_selector = "." + gallery_value;

  // jQuery objects that refer to the HTML elements that contain content within 
  // a gallery are passed on.
  visible_content_element = $(visible_gallery_selector);

  // An Array that will hold the contents of the string contained 
  // by 'gallery_value' after the string has been seperated into 
  // chunks is initialized.
  var gallery_value_strings_Array = [];
  
  // A String variable that will hold the stem of a string that 
  // defines the specific gallery that called this function 
  // is initialized.
  var gallery_stem = "";

  // The stem of a string that defines the specific gallery that 
  // called this function is passed on. That stem is determined 
  // by extracting the first two segments of 'gallery_value' that 
  // are seperated by the characted '-'.
  gallery_value_strings_Array = gallery_value.split("-");

  // The first two values of 'gallery_value_strings_Array' are cocatenated 
  // and passed on.
  gallery_stem = gallery_value_strings_Array[0] + "-" + gallery_value_strings_Array[1] + "-gallery";

  // IF statement that will change the value of 'gallery_stem' 
  // that corresponds with the gallery that called this function.
  if (gallery_stem === "homepage-we-gallery" || 
      gallery_stem === "sp-we-gallery")  {
    
    var gallery_category_value = gallery_value_strings_Array[gallery_value_strings_Array.length - 1];

    // IF/ELSE statement that appands a value to 'gallery_stem' 
    // if the gallery that called this function includes 
    // multiple categories.
    if (gallery_category_value === "img") {
      gallery_stem = gallery_stem + "-photos";
    } else if (gallery_category_value === "video") {
      gallery_stem = gallery_stem + "-videos";
    }

    setTimeout(
      function () {
        swapGalleryLinks(gallery_stem, content_value);
      }, 450
    );
  } else {
    swapGalleryLinks(gallery_stem, content_value);
  }

  // All of the HTML elements container within the gallery are dimmed 
  // from view.
  $(all_gallery_selector).fadeOut(150);
 
  // The content the visitor wished to view is faded into view.
  
  setTimeout(
    function () {
      $(visible_content_element).fadeIn(350);
    }, 150
  );
} // END OF swapGalleryContent



function swapGalleryCategories(gallery_value, category_value) {
  /* @params ********************************************************
     Name:      swapGalleryCategories

     Purpose:   Position the content within a gallery to appear 
                at the same vertical position.

     Variables: 
                gallery_value 
                  - Holds the stem of a string that refers to the 
                    specific gallery that called this function.

                category_value 
                  - Holds a string that refers to the new category 
                    to display.

  **************************************************************** */


  // String variables that refer to the HTML elements that will 
  // be toggled visible or not visible are initialized.
  var all_categories_selector = "";
  var visible_category_selector = "";
  var other_category_selector = "";

  // CSS selectors that refer to the HTML elements that will be 
  // toggled visible or not visible are passed on.
  all_categories_selector = "." + gallery_value + "-gallery-category";
  visible_category_selector = "#" + gallery_value + "-gallery-category-" + category_value;

  if (category_value === "photos")  {
    other_category_selector = "#" + gallery_value + "-gallery-category-video";
  } else {
    other_category_selector = "#" + gallery_value + "-gallery-category-photos";    
  }

  // All of the HTML elements container within the gallery are dimmed 
  // from view.
  $(all_categories_selector).fadeOut(150);
  $(all_categories_selector).css("display", "none");
  $(other_category_selector).css("display", "none");
  $(other_category_selector).removeClass("content-visible");
  // The content the visitor wished to view is faded into view.
  
  setTimeout(
    function () {
      $(visible_category_selector).fadeIn(350);
    }, 150
  );
}


function adjustGalleryElements() {
  /* @params ********************************************************
     Name:      adjustGalleryElements

     Purpose:   Position the content within a gallery to appear 
                at the same vertical position.
   *************************************************************** */

  var all_elements_selectors_Array = [];

  all_elements_selectors_Array = [
    ".homepage-ylo-photo", 
    ".homepage-we-gallery-category", 
    ".homepage-we-gallery-img", 
    ".homepage-we-gallery-video", 
    ".sp-ylo-days-description", 
    ".sp-we-gallery-category", 
    ".sp-we-gallery-img", 
    ".sp-we-gallery-video"
  ];

  var all_gallery_selector = "";

  var vertical_position_value = 0;

  all_elements_selectors_Array.forEach(
    function (value, index) {
      
      all_gallery_selector = value;

      $(all_gallery_selector).each(
        function () {
          current_content = this;

        if (vertical_position_value !== 0)  {
          $(current_content).css("top",  vertical_position_value);
        } 
        
        vertical_position_value = parseInt(-1 * $(current_content).height()) + vertical_position_value;
        }
      );
    
      vertical_position_value = 0;
    }
  );
}


function swapGalleryLinks(gallery_value, content_value) {
  /* @params ********************************************************
     Name:      swapGalleryLinks

     Purpose:   Matches the <a> element within the set of links 
                for galleries to the corresponding visible content.

     Variables: 
                gallery_value
                  - A string that refers to the links within the 
                    specific gallery that called this function.
                    
                content_value
                  - A character that refers to the <a> element 
                    that will have its appearance changed 
                    to sync with the visible content 
                    of the gallery.

  **************************************************************** */

  // String variables that will hold the CSS selector that refer 
  // to the HTML element that holds the links that trigger 
  // the visibility of content and the HTML element 
  // that holds the link that will have its appearance change
  // are initialized.
  var visible_link_selector = "";
  var all_links_selector = "";

  // An Object variable that will hold the jQuery object that refers 
  // to the HTML element that holds the link that trigger the visibility 
  // of content is initialized.
  var visible_link_element = {};

  // A String variable that will hold the stem of a string that 
  // is a prefix for the CSS selectors for the HTML element that holds 
  // the links that trigger the visibility of content and the link 
  // that corresponds with the visible content is initialized.
  var gallery_selector_stem = "";

  gallery_selector_stem = "#" + gallery_value + "-nav";
  
  // The CSS selectors of the HTML element that holds the links that 
  // trigger the visibility of content, the HTML element that holds 
  // the link that corresponds with the visible content are passed on.
  visible_link_selector = gallery_selector_stem + " .gallery-nav-a:nth-child(" + content_value + ")";
  all_links_selector = gallery_selector_stem + " .gallery-nav-a";

  // The jQuery object that refers to the link that corresponds 
  // with the visible content is passed on.
  visible_link_element = $(visible_link_selector);

  // A String variable that will hold the CSS class that marks the 
  // link that corresponds with the visible content is initialized.
  var visible_link_class_value = "";

  // The CSS class that marks the link that corresponds with the 
  // visibile content is passed on.
  visible_link_class_value = "gallery-a-visible";

  // The links that trigger the visibility of the content of the gallery 
  // are reset to their default state.
  $(all_links_selector).removeClass(visible_link_class_value);

  // The link that corresponds with the visible content has its 
  // appearance changed.
  $(visible_link_element).addClass(visible_link_class_value);
} // END OF swapGalleryLinks



function displayWeContent(content_value) {
  /* @params ********************************************************
     Name:      displayWeContent

     Purpose:   Toggle the visibility of content with the 'Why EADC?' 
                content located on the homepage.

     Variables: 
                content_value 
                  - Holds a string that refers to the content to be 
                    toggled visible.
  
  **************************************************************** */

  // String variables that refer to the HTML elements that contain 
  // the content to be toggled visible and the <button> element 
  // that triggered this function.
  var all_buttons_selector = "";
  var visible_button_selector = "";
  var all_content_selector = "";
  var visible_content_selector = "";
  
  // CSS selectors that refer to the HTML elements as they were 
  // described above are passed on.
  all_buttons_selector = ".homepage-benefit_listing-button";
  visible_button_selector = "#homepage-benefit_listing-" + content_value;
  all_content_selector = ".homepage-benefit-copy-div";
  visible_content_selector = "#homepage-benefit-copy-" + content_value;

  // A String variable that will hold a CSS selector that refers 
  // to the <button> element that corresponds with the visible content 
  // is initialized.
  var benefit_listing_visible = "";

  // The CSS selector that was described above is passed on.
  benefit_listing_visible = "homepage-benefit_listing-visible";
  
  // All of the HTML elements referring to the content are dimmed from view.
  $(all_content_selector).fadeOut(150);
  $(all_buttons_selector).removeClass(benefit_listing_visible);

  // The content the visitor wished to view is faded into view.  
  setTimeout(
    function () {
      $(visible_button_selector).addClass(benefit_listing_visible);
      $(visible_content_selector).fadeIn(350);
    }, 150
  );
} // END OF displayWeContent



function displayMobileMenu() {
  /* @params ********************************************************
     Name:      displayMobileMenu

     Purpose:   Toggle the visibility of mobile menu. 
  
  **************************************************************** */

  var main_menu_selector = "";

  main_menu_selector = "#content-container-menu";

  var html_selector = "";

  html_selector = "html";

  var html_class_name = "";

  html_class_name = "overflow-hidden-html";

  $(main_menu_selector).fadeToggle(250);

  $(html_selector).toggleClass(html_class_name);
} // END of displayMobileMenu 



function toggleTabletMenu() {
  /* @params ********************************************************
     Name:      toggleTabletMenu

     Purpose:   Toggle the visibility of tablet menu. 
  
  **************************************************************** */

  var menu_icon_selector = "";
  var menu_link_selector = "";
  var nav_selector = "";
  var container_selector = "";
  var body_selector = "";
  var html_selector = "";
  var logo_selector = "";

  menu_icon_selector = "#tablet-nav-icon-img";
  menu_link_selector = "#tablet-nav-a-menu"
  nav_selector = "#desktop-header-nav";
  container_selector = ".sp-container-main, .carousel, .container, footer";
  body_selector = "body";
  html_selector = "html";
  logo_selector = ".sp-header-nav #header-nav-link-logo, #header-desktop-small-nav-logo";

  var nav_visibility_value = "";

  nav_visibility_value = $(nav_selector).css("display");

  var visible_menu_nav_class_name = "";
  var visible_menu_content_class_name = "";
  var visible_menu_body_class_name = "";
  var visible_menu_position_class_name = "";
  var visible_menu_html_class_name = "";
  var visible_menu_logo_class_name = "";

  visible_menu_nav_class_name = "visible-menu-nav";
  visible_menu_content_class_name = "visible-menu-content";
  visible_menu_body_class_name = "visible-menu-body";
  visible_menu_position_class_name = "visible-menu-position-fixed";
  visible_menu_html_class_name = "visible-menu-html";
  visible_menu_logo_class_name = "visible-menu-logo";

  if (nav_visibility_value === "none") {
    $(menu_icon_selector).attr("src", "/assets/img/common/icons/menu-desktop-close.svg");
  } else {
    $(menu_icon_selector).attr("src", "/assets/img/common/icons/menu-desktop.svg");
  }

  $(nav_selector).toggleClass(visible_menu_nav_class_name);
  $(nav_selector).toggleClass(visible_menu_position_class_name);
  $(container_selector).toggleClass(visible_menu_content_class_name);
  $(body_selector).toggleClass(visible_menu_body_class_name);
  $(menu_link_selector).toggleClass(visible_menu_position_class_name);
  $(html_selector).toggleClass(visible_menu_html_class_name);
  $(logo_selector).toggleClass(visible_menu_logo_class_name);
} // END of toggleTabletMenu



function discoverURLVariables() {
  /* @params ********************************************************
     Name: discoverURLVariables

     Purpose: Locates the presence of GET variables located 
              in the URL.

  **************************************************************** */

  var url_string = window.location.href;

  var search_char_value = "=";

  var search_char_location = url_string.indexOf(search_char_value);

  if (search_char_location >= 0)  {
    parseURLData();
  }
} // END of discoverURLVariables



function parseURLData() {
  /* @params ********************************************************
     Name:      parseURLData

     Purpose:   Parses GET variables in the URL.

  **************************************************************** */

  var url_string = window.location.href;

  search_string_value = ".htm";

  var end_of_hostname_value = url_string.indexOf(search_string_value);

  var raw_url_string_data = "";

  if (end_of_hostname_value >= 0)  {
    raw_url_string_data = url_string.slice(end_of_hostname_location_value) + 5;

  } else {
    search_string_value = "/";

    var end_of_hostname_location_value = url_string.lastIndexOf(search_string_value) + 2;

    raw_url_string_data = url_string.slice(end_of_hostname_location_value);
  }

  var split_variable_values_Array = [];
  var parsed_get_variables_Array = [];

  search_string_value = "&";

  error_variables_location_value = raw_url_string_data.indexOf(search_string_value);

  if (error_variables_location_value >= 0)  {
    var get_data_variables_Array = raw_url_string_data.split(search_string_value);
  
    var inc;

    var get_data_variables_Array_length = get_data_variables_Array.length;

    search_string_value = "=";
    
    for (inc = 0; inc < get_data_variables_Array_length; inc++) {
      split_variable_values_Array = get_data_variables_Array[inc].split(search_string_value);

      if (inc === 4)  {
        search_string_value = "#";

        var message_variable_Array = split_variable_values_Array[1].split(search_string_value);

        parsed_get_variables_Array[inc] = message_variable_Array[0];  
      } else {
        parsed_get_variables_Array[inc] = split_variable_values_Array[1];
      }
      
    }
  } else {
    search_string_value = "=";

    get_data_variables_Array = raw_url_string_data.split(search_string_value);

    search_string_value = "#";

    split_variable_values_Array = get_data_variables_Array[1].split(search_string_value);

    parsed_get_variables_Array[0] = split_variable_values_Array[0]; 
  }

  displayMessageContent(parsed_get_variables_Array);
} // END OF parseURLData




function displayMessageContent(get_data_variables_Array) {
  /* @params ********************************************************
     Name: displayMessageContent
     Purpose: Swaps out form fields with copy after a visitor 
              sends a message.

  **************************************************************** */

  var url_string = window.location.href;

  var get_data_variables_Array_length = get_data_variables_Array.length;

  var copy_for_message = "";

  var form_container_selector = "";

  if (get_data_variables_Array_length === 5)  {
    var search_string_value = ",";

    var fields_in_error_Array = get_data_variables_Array[0].split(search_string_value);

    var fields_in_error_value = "";

    var num_fields_in_error = 0;

    var error_class_name = "error-form_field";
    var valid_class_name = "valid-form_field";

    fields_in_error_Array.forEach(
      function (item, index, array) {
        switch (index)  {
          case 0:
            var first_name_selector = "#input-text-first_name";

            if (item === "e") {
              $(first_name_selector).addClass(error_class_name);
              $(first_name_selector).val("Please enter your first name");

              fields_in_error_value = "first name";
              
              num_fields_in_error++;
            } else {
              $(first_name_selector).addClass(valid_class_name);
              $(first_name_selector).val(get_data_variables_Array[1]);
            }
            
          break;

          case 1:
            var last_name_selector = "#input-text-last_name";

            if (item === "e") {
              $(last_name_selector).addClass(error_class_name);
              $(last_name_selector).val("Please enter your last name");

              if (fields_in_error_value !== "") {
                fields_in_error_value = fields_in_error_value + ", last name";
              } else {
                fields_in_error_value = fields_in_error_value + "last name";
              }
              
              num_fields_in_error++;
            } else {
              $(last_name_selector).addClass(valid_class_name);
              $(last_name_selector).val(get_data_variables_Array[2]);
            }
            
          break;

          case 2:
            var email_address_selector = "#input-text-email_address";

            if (item === "e") {
              $(email_address_selector).addClass(error_class_name);
              $(email_address_selector).val("Please retype your email address");

              if (fields_in_error_value !== "") {
                fields_in_error_value = fields_in_error_value + ", email address";
              } else {
                fields_in_error_value = fields_in_error_value + "email address";
              }
              
              num_fields_in_error++;
            } else {
              $(email_address_selector).addClass(valid_class_name);
              $(email_address_selector).val(get_data_variables_Array[3]);
            }
            
          break;

          case 3:
            var message_selector = "#input-textarea-message";

            if (item === "e") {
              $(message_selector).addClass(error_class_name);
              $(message_selector).val("Please enter your message");

              if (fields_in_error_value !== "") {
                fields_in_error_value = fields_in_error_value + ", message";
              } else {
                fields_in_error_value = fields_in_error_value + "message";
              }
              
              num_fields_in_error++;
            } else {
              $(message_selector).addClass(valid_class_name);
              $(message_selector).val(get_data_variables_Array[4]);
            }
            
          break;
        }
      }
    );

    search_string_value = ".htm";

    var end_of_hostname_value = url_string.indexOf(search_string_value);

    if (end_of_hostname_value === -1)  {
      if (num_fields_in_error > 1)  {
        search_string_value = ",";

        var field_names_Array = fields_in_error_value.split(",");

        if (num_fields_in_error === 2)  {
          fields_in_error_value = "fields for the " + field_names_Array[0] + " and " + field_names_Array[1];
        } else if (num_fields_in_error === 3) {
          fields_in_error_value = "fields for the " + field_names_Array[0] + ", " + field_names_Array[1] + ", and " + field_names_Array[2];
        } else {
          fields_in_error_value = "fields for the " + field_names_Array[0] + ", " + field_names_Array[1] + ", " + field_names_Array[2], ", and " + field_names_Array[3];
        }

        fields_in_error_value = fields_in_error_value + " were";
      } else {
        fields_in_error_value = "field for the " + fields_in_error_value + " was";
      }


      copy_for_message = "<p>" + 
                        "  Unfortunately, you'll need to change some of the information you tried to send EADC." + 
                        "  <br><br>" + 
                        "  The form  " + fields_in_error_value + " not completed correctly." +  
                        "  <br><br>" + 
                        "  Please correct your information." + 
                        "</p>";

      form_container_selector = "#tte-copy-div";

      $(form_container_selector).html(copy_for_message);
    } 
  } else {
    var first_name_value = get_data_variables_Array[0];

    copy_for_message = "<p>" + 
                    "  Hello " + first_name_value + "," + 
                    "  <br><br>" + 
                    "  Thank you for your interest in Emmanuel Adult Day Center's services." + 
                    "  <br>" + 
                    "  I will read your message and get back to you no later than one business day from today." + 
                    "  <br><br>" + 
                    "  I look forward to talking to you soon." + 
                    "  <br><br>" + 
                    "  Mirinda Johnson" + 
                    "  <br>" + 
                    "  Director of Operations" + 
                    "</p>";

    form_container_selector = "tte-form-div";

    search_string_value = ""

    search_string_value = "talk-to-eadc.htm";

    var search_string_location = url_string.indexOf(search_string_value);

    if (search_string_location >= 0)  {
      form_container_selector = "#sp-" + form_container_selector;
    } else {
      form_container_selector = "#" + form_container_selector;
    }

    $(form_container_selector).html(copy_for_message);  
  }
  
  

  

} // END of displayMessageContent



function verifyFields(input_element, field_status) {
  /*  @params ********************************************************
      Name:       verifyFields

      Purpose:    Clears out data from the contact form if a given 
                  form field includes an error message. If the 
                  form field does not include an error message, the 
                  data is sent off for validation by, 'validateData'.

      Variables:  input_element
                    - An object containing DOM information about the 
                    form field calling this function

                  field_status
                    - A String that changes the appearance of the 
                      form depending if the visitor has begun.
                      to enter information into a given form field 
                      or has moved onto another point on the webpage.

  **************************************************************** */

  var field_selector;
  var field_value;
  
  field_selector = $(input_element).attr("id");
  field_value = $(input_element).val();
  
  var default_value_string;
  var error_value_string;

  switch (field_selector) {
    case "input-text-first_name":
      default_value_string = "";
      error_value_string = "Please enter your first name";
      
      if (field_value === error_value_string && 
          field_status === "focus")	{

        clearData(input_element);

      } else if (field_status === "blur")	{

        validateData(input_element, error_value_string);
      }
    break; 

    case "input-text-last_name":
      default_value_string = "";
      error_value_string = "Please enter your last name";
      
      if (field_value === error_value_string && 
        field_status === "focus")	{

        clearData(input_element);

      } else if (field_status === "blur")	{

        validateData(input_element, error_value_string);
      }
    break; 

    case "input-text-email_address":
      default_value_string = "";
      error_value_string = "Please retype your email address";
      
      if (field_value === error_value_string && 
          field_status === "focus") {

        clearData(input_element);

      } else if (field_status === "blur") {
        validateData(input_element, error_value_string);
      } 
    break;

    case "input-textarea-message":
      default_value_string = "";
      
      if (field_value !== default_value_string) {
        var valid_class_name = "valid-form_field";

        $(input_element).addClass(valid_class_name);
      }
    break;
  }
}
  
  
function validateData(input_element, error_value_string)	{
    /*  @params ********************************************************
      Name:       validateData

      Purpose:    This function will verify the integrity 
                  of data entered into a given form field.

      Variables:  input_element
                    - An object containing DOM information about the 
                    form field calling this function

                  field_status
                    - A String that changes the appearance of the 
                      form depending if the visitor has begun.
                      to enter information into a given form field 
                      or has moved onto another point on the webpage.

  **************************************************************** */

  var field_value;
  
  field_value = $(input_element).val();

  var valid_form_field_class_name = "valid-form_field";
  var error_form_field_class_name = "error-form_field";
  
  switch ($(input_element).attr("id"))	{
    case "input-text-first_name": 
      var field_value_length = field_value.length;

      if (field_value_length > 1 && 
          field_value !== "Please enter your first name")	{
        $(input_element).addClass(valid_form_field_class_name);
      }	else {
        $(input_element).removeClass(valid_form_field_class_name);
        $(input_element).addClass(error_form_field_class_name);
        $(input_element).val(error_value_string);
      }
    break;

    case "input-text-last_name": 
      var field_value_length = field_value.length;
  
      if (field_value_length > 1 && 
        field_value !== "Please enter your last name")	{
        $(input_element).addClass(valid_form_field_class_name);
      }	else {
        $(input_element).removeClass(valid_form_field_class_name);
        $(input_element).addClass(error_form_field_class_name);
        $(input_element).val(error_value_string);
      }
    break;

    case "input-text-email_address": 
      var search_string_Array;
      var email_string;

      search_string_Array = [
        "@", 
        ".", 
        "com", 
        "net", 
        "org", 
        "mil", 
        "edu", 
        ".co"
      ];

      email_string = field_value;

      var is_valid_results_Array;

      is_valid_results_Array = [];

      search_string_Array.forEach(
        function (item, index)	{
          var search_string;
          var search_result_num;

          search_string = item;


          search_result_num = email_string.indexOf(search_string);

          if (search_result_num > -1)	{
            is_valid_results_Array[index] = true;
          } else {
            is_valid_results_Array[index] = false;
          }
        }
      );
            
      var is_valid;
      
      is_valid = false;
      
      if (is_valid_results_Array[0] === true &&  
          is_valid_results_Array[1] === true)	{
        var i;
      
        for (i = 2; i < is_valid_results_Array.length; i++)	{
          if (is_valid_results_Array[i] === true)	{
            is_valid = true;
          }
        }	
      }	else {
        is_valid = false;
      }

      if (is_valid === true)	{
        $(input_element).addClass(valid_form_field_class_name);
      }	else {
        $(input_element).addClass(error_form_field_class_name);
        $(input_element).val(error_value_string);
      }
      
    break;      
  }
}


  
function clearData(input_element)	{
  $(input_element).val("");
  
  var error_class_name = "error-form_field";
  var valid_class_name = "valid-form_field";

  $(input_element).removeClass(error_class_name);
  $(input_element).removeClass(valid_class_name);
}
  


function resetData(input_element, default_value_string) {
  var error_class_name = "error-form_field";
  var valid_class_name = "valid-form_field";

  $(input_element).removeClass(error_class_name);
  $(input_element).removeClass(valid_class_name);

  $(input_element).val(default_value_string);	
}
