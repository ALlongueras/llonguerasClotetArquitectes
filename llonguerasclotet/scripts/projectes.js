$(function() {
    actualitzarAttr("height", $('#valorFilesImatges').val(), $('#idFilesImatges').val());
    var imatgePetitaAnterior = $('#imatgesProjectes .contenidorImatges img').attr('src');
    $('#imatgesProjectes .contenidorImatges li a').mouseover(function() {
        $('#imatgesProjectes .imatgeGran img').attr('src', $(this).find('img').attr('src'));
    });
    $('#imatgesProjectes a').mouseout(function() {
        $('#imatgesProjectes .imatgeGran img').attr('src', imatgePetitaAnterior);
    });

    //$('#menuProjectes').tinyscrollbar({ axis: 'x' });

    var imatgePreviaAnterior = $('#imatgesProjectes .contenidorImatges img').attr('src');
    var $imatgePrevia = $('#menuProjectes .petites');
    $imatgePrevia.find("a").mouseover(function() {
        var nodeId = $(this).attr('data-id');
        $('.descripcioProjecte').addClass("hide");
        $('.contenidorImatges').addClass("hide");
        $('#imatgesProjectes .imatgeGran img').attr('src', $("#menuProjectes .petites .hide a[data-id =" + nodeId + "]").find("img").attr('src'));
    });
    $('#menuProjectes .petites li').mouseleave(function() {
        $('.descripcioProjecte').removeClass("hide");
        $('.contenidorImatges').removeClass("hide");
        $('#imatgesProjectes .imatgeGran img').attr('src', imatgePreviaAnterior);
    });

    $(".fancybox-thumb").fancybox({
        prevEffect: 'none',
        nextEffect: 'none',
        helpers: {
            title: {
                type: 'outside'
            },
            overlay: {
                opacity: 0.8,
                css: {
                    'background-color': '#000'
                }
            },
            thumbs: {
                width: 50,
                height: 50
            }
        }
    });

});

function actualitzarAttr(nomAttr, valorAttr, layerAttr) {
    var heightPrimeraFila,
        heightSegonaFila,
        heightTerceraFila;
    if (valorAttr == 1) {
        valorAttr = 50;
        heightPrimeraFila = 0;
    } else if (valorAttr == 2) {
        valorAttr = 100;
        heightPrimeraFila = 49;
    } else {
        valorAttr = 150;
        heightPrimeraFila = 100;
        heightSegonaFila = 50;
        heightTerceraFila = 0;
        $(layerAttr + " .segonaFila").css("top", heightSegonaFila);
        $(layerAttr + " .terceraFila").css("top", heightTerceraFila);
    }
    $(layerAttr + " .primeraFila").css("top", heightPrimeraFila);
    $(layerAttr).css(nomAttr, valorAttr);
}