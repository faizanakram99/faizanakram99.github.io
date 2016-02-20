$(document).ready(function () {
    $(".main-nav li a").on("click", function () {
        $(".main-nav li a").removeClass("active");
        $(this).addClass("active");
    });

    $("#mobile-nav").on("click", function () {
        $("#nav-menu").slideToggle();
    });

    $("#cart-anchor").hover(function () {
        $("#cart-list").fadeToggle();
    });

    $("#cart-anchor").click(function () {
        $("#cart-list").fadeToggle();
    });


    $('.item_Quantity').change(function () {

        if ($('.item_size').val() === "") {
            alert("Select model first and after selecting model change quantity to reflect changes!");
            $('.item_Quantity').val("");
        }
    });

    $('#bottom-block-1 .item_size').change(function () {
        var result1 = $('#bottom-block-1 .item_size option:selected');
        if (result1.val() === 'std') {

            $('#bottom-block-1 .item_Quantity').change(function () {
                var resultQty1 = $('#bottom-block-1 .item_Quantity option:selected');
                switch (resultQty1.val()) {
                case '1':
                    $('#bottom-block-1 .item_price').html('$180000');
                    $('#bottom-block-1 .priceOriginal').html('$200000');
                    break;
                case '2':
                    $('#bottom-block-1 .item_price').html('$360000');
                    $('#bottom-block-1 .priceOriginal').html('$400000');
                    break;
                case '3':
                    $('#bottom-block-1 .item_price').html('$540000');
                    $('#bottom-block-1 .priceOriginal').html('$600000');
                    break;
                case '4':
                    $('#bottom-block-1 .item_price').html('$720000');
                    $('#bottom-block-1 .priceOriginal').html('$800000');
                    break;
                case '5':
                    $('#bottom-block-1 .item_price').html('$900000');
                    $('#bottom-block-1 .priceOriginal').html('$1000000');
                    break;
                }
            });

        } else {
            $('#bottom-block-1 .item_Quantity').change(function () {
                var resultQty1 = $('#bottom-block-1 .item_Quantity option:selected');
                switch (resultQty1.val()) {
                case '1':
                    $('#bottom-block-1 .item_price').html('$250000');
                    $('#bottom-block-1 .priceOriginal').html('$280000');
                    break;
                case '2':
                    $('#bottom-block-1 .item_price').html('$500000');
                    $('#bottom-block-1 .priceOriginal').html('$560000');
                    break;
                case '3':
                    $('#bottom-block-1 .item_price').html('$750000');
                    $('#bottom-block-1 .priceOriginal').html('$840000');
                    break;
                case '4':
                    $('#bottom-block-1 .item_price').html('$1000000');
                    $('#bottom-block-1 .priceOriginal').html('$1120000');
                    break;
                case '5':
                    $('#bottom-block-1 .item_price').html('$1250000');
                    $('#bottom-block-1 .priceOriginal').html('$1400000');
                    break;
                }
            });
        }
    });




    $('#bottom-block-2 .item_size').change(function () {
        var result2 = $('#bottom-block-2 .item_size option:selected');
        if (result2.val() === 'std') {
            $('#bottom-block-2 .item_Quantity').change(function () {
                var resultQty2 = $('#bottom-block-2 .item_Quantity option:selected');
                switch (resultQty2.val()) {
                case '1':
                    $('#bottom-block-2 .item_price').html('$200000');
                    $('#bottom-block-2 .priceOriginal').html('$220000');
                    break;
                case '2':
                    $('#bottom-block-2 .item_price').html('$400000');
                    $('#bottom-block-2 .priceOriginal').html('$440000');
                    break;
                case '3':
                    $('#bottom-block-2 .item_price').html('$600000');
                    $('#bottom-block-2 .priceOriginal').html('$660000');
                    break;
                case '4':
                    $('#bottom-block-2 .item_price').html('$800000');
                    $('#bottom-block-2 .priceOriginal').html('$880000');
                    break;
                case '5':
                    $('#bottom-block-2 .item_price').html('$1000000');
                    $('#bottom-block-2 .priceOriginal').html('$1100000');
                    break;
                }
            });
        } else {
            $('#bottom-block-2 .item_Quantity').change(function () {
                var resultQty2 = $('#bottom-block-2 .item_Quantity option:selected');
                switch (resultQty2.val()) {
                case '1':
                    $('#bottom-block-2 .item_price').html('$220000');
                    $('#bottom-block-2 .priceOriginal').html('$250000');
                    break;
                case '2':
                    $('#bottom-block-2 .item_price').html('$440000');
                    $('#bottom-block-2 .priceOriginal').html('$500000');
                    break;
                case '3':
                    $('#bottom-block-2 .item_price').html('$660000');
                    $('#bottom-block-2 .priceOriginal').html('$750000');
                    break;
                case '4':
                    $('#bottom-block-2 .item_price').html('$880000');
                    $('#bottom-block-2 .priceOriginal').html('$1000000');
                    break;
                case '5':
                    $('#bottom-block-2 .item_price').html('$1100000');
                    $('#bottom-block-2 .priceOriginal').html('$1250000');
                    break;
                }
            });
        }
    });


    $('.item_add').click(function () {
        var cart = $('#cart-anchor'),
            imgtofly = $(this).parents().siblings('img');
        if (imgtofly) {
            var imgclone = imgtofly.clone()
                .offset({
                    top: imgtofly.offset().top,
                    left: imgtofly.offset().left
                })
                .css({
                    'opacity': '0.7',
                    'position': 'absolute',
                    'height': '150px',
                    'width': '150px',
                    'z-index': '1000'
                })
                .appendTo($('body'))
                .animate({
                    'top': cart.offset().top + 10,
                    'left': cart.offset().left + 30,
                    'width': 55,
                    'height': 55
                }, 1000, 'easeInElastic');
            imgclone.animate({
                'width': 0,
                'height': 0
            }, function () {
                $(this).detach();
            });
        }
    });

});
