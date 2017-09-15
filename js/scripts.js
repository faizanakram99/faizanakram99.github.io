$(function () {
     /**
     * @type {Element}
     * Cache DOM
     */
    const $window = $(window),
          $document = $(document),
          $fullpage = $document.find("#fullpage"),
          $navbar = $document.find("#mobile-dropdown"),
          $menuitem = $navbar.find("ul li a");
    
    /** @function */    
    const afterRender = function () {
        setInterval(function () {
            $.fn.fullpage.moveSlideRight();
        }, 2700);
    };

    /** 
     * @type {Object} 
     * Object containing options to be passed fullpage() method
     */
    const fullpageOptions = {
        menu: '#mobile-dropdown',
        sectionsColor: ['#006495', '#F2635F', '#333', '#39a4aa'],
        anchors: ['home', 'portfolio', 'about', 'contact'],
        paddingTop: '80px',
        paddingBottom: '30px',
        afterRender: afterRender
    };

    /** 
     * @function
     * Click Event Listener of $menuitem,
     * makes clicked link active 
     */
    const makeItemActive = function () {
        $menuitem.removeClass("active");
        $(this).addClass("active");
    };

    /** 
     * @function
     * Click Event Listener of $document,
     * closes navbar
     */
    const closeNavbar = function (event) {
        const clickover = $(event.target);
        if ($navbar.hasClass("in") && !clickover.hasClass("navbar-toggle")) {      
            $navbar.collapse('hide');
        }
    }    

    /**
     * Bind Event Listeners
     */
    $menuitem.on("click", makeItemActive);
    $document.on("click", closeNavbar);
    $fullpage.fullpage(fullpageOptions);    
    if($window.width() < 800) $.fn.fullpage.setAutoScrolling(false);
});
