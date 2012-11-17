$(window).load(function () {
    $('#publicacions .projecte').isotope({ filter: ".publicacionsPremis" });
    $("#loader").addClass("hide");
    $('#publicacions .projecte div').each(function () {
        $(this).removeClass("hide");
    });
    $('#filters a').click(function () {
        var selector = $(this).attr('data-filter');
        $('#publicacions .projecte').isotope({ filter: selector });
        return false;
    });
    $(".publicacionsPremis a").click(function () {
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
