/*
	Visualize by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

$(function() {

	// Vars.
		var	$window = $(window),
			$body = $('body'),
			$wrapper = $('#wrapper');

	// Breakpoints.
		skel.breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	// Disable animations/transitions until everything's loaded.
		$body.addClass('is-loading');

		$window.on('load', function() {
			$body.removeClass('is-loading');
		});

	// Poptrox.
		$window.on('load', function() {

			$('.thumbnails').poptrox({
				onPopupClose: function() { $body.removeClass('is-covered'); },
				onPopupOpen: function() { $body.addClass('is-covered'); },
				baseZIndex: 10001,
				useBodyOverflow: false,
				usePopupEasyClose: true,
				overlayColor: '#000000',
				overlayOpacity: 0.75,
				popupLoaderText: '',
				fadeSpeed: 500,
				usePopupDefaultStyling: false,
				windowMargin: (skel.breakpoint('small').active ? 5 : 50)
			});

		});

         
		function OpenInputDialog(sdt) {
            $("#inputDialog").dialog({
                autoOpen: false,
				width: 400,
				height: 300,
                modal: true,
                title: "Xin trả lời câu hỏi",
                closeOnEscape: true,
                buttons: [{
                    text: "Go",
                    click: function () {
						if($(".txtInput").val() === '180398') {
							$(sdt).html("<a href='tel:+84773749328' class='sdt-specific'> +84 773749328</a>") 
							$('.clickToKnowSDT').hide()
							$(this).dialog("close");
						} 
						else {
							$('.error').show();
							return false;
						}
                    }
                }],
                close: function () {
                    $(this).dialog("close");
                    $(".txtInput").val("");
                },
                show: { duration: 200 }
            });
            $("#inputDialog").dialog("open");
        };
		$(".clickToKnowSDT").click(function () {
			$('.error').hide();
			OpenInputDialog($('.sdt-anonymous'));
		})

});