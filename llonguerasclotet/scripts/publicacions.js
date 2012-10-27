$(window).load(function () {
    $('#publicacions .projecte').isotope({ filter: ".publicacionsPremis" });
    $('#publicacions .projecte div').each(function () {
        $(this).removeClass("hide");
    });
    $('#filters a').click(function () {
        var selector = $(this).attr('data-filter');
        $('#publicacions .projecte').isotope({ filter: selector });
        return false;
    });
    $(".publicacionsPremis a").click(function () {
//        $(".publicacionsPremis").hasClass(".publicacions-fancybox").removeClass("publicacions-fancybox");
        $(this).addClass("publicacions-fancybox");
        $(".publicacions-fancybox").fancybox({
        helpers: {
            title: {
                type: 'outside'
            }
        }
    });
    });
});

$(document).ready(function () {
    
    

    //    $("#single_2").fancybox({
    //        openEffect: 'elastic',
    //        closeEffect: 'elastic',

    //        helpers: {
    //            title: {
    //                type: 'inside'
    //            }
    //        }
    //    });

    //    $("#single_3").fancybox({
    //        openEffect: 'none',
    //        closeEffect: 'none',
    //        helpers: {
    //            title: {
    //                type: 'outside'
    //            }
    //        }
    //    });

    //    $("#single_4").fancybox({
    //        helpers: {
    //            title: {
    //                type: 'over'
    //            }
    //        }
    //    });
});
