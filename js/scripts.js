$(document).ready(function () {
    $('#fullpage').fullpage({
        menu: '#mobile-dropdown',
        sectionsColor: ['#006495', '#F2635F', '#A2E9EC', '#F4D00C'],
        anchors:['home', 'portfolio', 'about','contact'],
        scrollBar: true,
        paddingTop: '80px',
        paddingBottom: '30px',
    });


    $("#mobile-dropdown ul li a").on("click", function () {
        $("#mobile-dropdown ul li a").removeClass("active");
        $(this).addClass("active");
    });


});
