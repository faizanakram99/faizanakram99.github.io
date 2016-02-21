$(document).ready(function () {
    var slideTimeout;
            $('#fullpage').fullpage({
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
                    },


                    onLeave: function (index, direction) {
                        //after leaving section 1 (home) and going anywhere else, whether scrolling
                    }
            });

                if ($(window).width() < 800) {
                    $.fn.fullpage.setAutoScrolling(false);
                }


                $("#mobile-dropdown ul li a").on("click", function () {
                    $("#mobile-dropdown ul li a").removeClass("active");
                    $(this).addClass("active");
                });
            });
