//Jquery

//Shrinks headder size when the document is scrolled down by 80 pixels
$(document).on("scroll", function () {
    //When the webpage is scrolled down from the top by 80 px this if statement will trigger
    if ($(document).scrollTop() > 50) {
        //Once the 50 px requirement has been met add the nav shrink class selector to the same html element that has the nav class
        $("nav").addClass("nav-shrink");
        //Adjust the position of the mobile drop menu to accomodate the new height decrease
        $("div.navbar-collapse").css("margin-top","-6px")
    } else {
        //if the web page has been scrolled down or is back at the top the nav-shrink class selector is removed from the HTML element with the nav class selector
        $("nav").removeClass("nav-shrink");
        //The margin for the drop down menu is returned to its original amount
        $("div.navbar-collapse").css("margin-top","14px");
    }
});

//close mobile menu when a navigation link is clicked
$(document).ready(function () {
    //on click when end element contains just the nav-link class and not the dropdown-toggle and then also close when an element with the class.dropdown item (each movie link) has been clicked
    $(".navbar-nav").on('click', '.nav-link:not(".dropdown-toggle"), .dropdown-item,', function () {
    $(".navbar-collapse").collapse('hide');})
});