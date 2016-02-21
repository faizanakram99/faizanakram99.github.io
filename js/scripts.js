$(document).ready(function () {
    $('#fullpage').fullpage({
        menu: '#mobile-dropdown',
        sectionsColor: ['#006495', '#F2635F', '#333', '#39a4aa'],
        anchors: ['home', 'portfolio', 'about', 'contact'],
        paddingTop: '80px',
        paddingBottom: '30px',
    });

    if ($(window).width() < 800){
        $.fn.fullpage.setAutoScrolling(false);
    }


    $("#mobile-dropdown ul li a").on("click", function () {
        $("#mobile-dropdown ul li a").removeClass("active");
        $(this).addClass("active");
    });
});

