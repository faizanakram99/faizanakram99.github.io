<<<<<<< HEAD

$(document).ready(function () {
    $('#fullpage').fullpage({
        menu: '#mobile-dropdown',
        sectionsColor: ['#006495', '#F2635F', '#A2E9EC', '#F4D00C'],
        anchors:['home', 'portfolio', 'about','contact'],
        css3: true
    });


    $("#mobile-dropdown ul li a").on("click", function () {
        $("#mobile-dropdown ul li a").removeClass("active");
        $(this).addClass("active");
    });


});


=======

$(document).ready(function () {
    $('#fullpage').fullpage({
        menu: '#mobile-dropdown',
        sectionsColor: ['#006495', '#F2635F', '#A2E9EC', '#F4D00C'],
        anchors:['home', 'portfolio', 'about','contact'],
        css3: true
    });


    $("#mobile-dropdown ul li a").on("click", function () {
        $("#mobile-dropdown ul li a").removeClass("active");
        $(this).addClass("active");
    });


});


>>>>>>> faizanakram99.github.io/master
