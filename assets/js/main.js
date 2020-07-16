/* *** main.js - Contains jQuery that adds interactivity and styles the website's HTML *** */

$(document).ready(
  function ()   {
    setTimeout(
      function () {
        adjustBackground();
      }, 350
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

// console.log("button_id_value = " + button_id_value);
    displayWeContent(button_id_value);
  }
);

var menu_icon_selector = "";

menu_icon_selector = "#mobile-nav-a-menu";

$(menu_icon_selector).click(
  function () {
    displayMobileMenu();
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
  urls_to_ignore_Array[1] = "index.htm";
  urls_to_ignore_Array[2] = "search.htm";

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
    // console.log("background_circles_element.attr(\"id\") = " + $(background_circles_element).attr("id"));

 
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

  $(main_menu_selector).fadeToggle(250);
}
