$(document).ready(function () {
    $(".main-nav li a").on("click", function () {
        $(".main-nav li a").removeClass("active");
        $(this).addClass("active");
    });

    $("#mobile-nav").on("click", function () {
        $("#nav-menu").slideToggle();
    });


});



