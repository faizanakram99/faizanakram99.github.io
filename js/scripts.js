$(function () {
    const $window = $(window);
    const $document = $(document);
    const $fullpage = $document.find("#fullpage");
    const $navbar = $document.find("#mobile-dropdown");    
    const $menuitem = $navbar.find("ul li a");
    
    var slideTimeout;

    $fullpage
        .fullpage({
            menu: '#mobile-dropdown',
            sectionsColor: ['#006495', '#F2635F', '#333', '#39a4aa'],
            anchors: ['home', 'portfolio', 'about', 'contact'],
            paddingTop: '80px',
            paddingBottom: '30px',
            afterRender: function () {
                //on page load, start the slideshow
                slideTimeout = setInterval(function () {
                    $.fn.fullpage.moveSlideRight();
                }, 2700);
            }
        })
    ;

    if ($window.width() < 800) {
        $.fn.fullpage.setAutoScrolling(false);
    }

    const makeItemActive = function () {
        $menuitem.removeClass("active");
        $(this).addClass("active");
    };

    const closeNavbar = function (event) {
        const clickover = $(event.target);
        if ($navbar.hasClass("in") && !clickover.hasClass("navbar-toggle")) {      
            $navbar.collapse('hide');
        }
    }

    $menuitem.on("click", makeItemActive);
    $document.on("click", closeNavbar);

});
