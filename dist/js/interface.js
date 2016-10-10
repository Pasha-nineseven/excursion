$(document).ready(function() {

	// detect touch device
	if (isTouchDevice() === true) {
		$('body').addClass('touch');
	} else {
		$('body').addClass('no-touch');
	}

	if ($('.text-slider').length>0) {
		var $status = $('.pagingInfo');
	    var $slickElement = $('.text-slider');

	    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
	        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
	        var i = (currentSlide ? currentSlide : 0) + 1;
	        $status.text(i + '/' + slick.slideCount);
	    });

	    $slickElement.slick({
	        dots: false,
	         fade: true,
	    });
	};


	//POPUP
    $('.fb-inline').fancybox({
		openEffect	: 'fade',
		closeEffect	: 'fade',
		maxWidth: 680,
		padding:0,
		beforeShow: function(){
		    $("body").css({'overflow-y':'hidden'});
		    if($(window).width() > 700){
		    	$("html").css({'padding-right':'17px'});
		    }
		    if($(window).width() < 700){
		    	$("body").css({'position': 'fixed'});
		    }
		},
		afterClose: function(){
		    $("body").css({'overflow-y':'auto'});
		    if($(window).width() > 700){
			    $("html").css({'padding-right':'0'});
			}
		    if($(window).width() < 700){
		    	$("body").css({'position': 'static'});
		    }
		},
		helpers : {
	        overlay : {
	            locked: false,
	        }
	    }
	});

	//SELECT
    if ($('.fs').length>0) {
		$('.fs').styler();
    };
});


$(window).resize(function () {

});

$(window).load(function(){
	
});

// functions
function isTouchDevice() {
	return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
}

// links pages
// $('body').append(
// 	'<div style="position: fixed; z-index: 1005; bottom: 0; right: 0; background: #fff; border: solid 1px #828286; width: 200px;"> \
// 		<a href="javascript:void(0);" style="float: right;background:#ccc; color:#000; padding: 5px 10px; text-decoration: none; font-size: 16px" onclick="$(this).parent().hide()">Close X</a> \
// 	<style> \
// 		#pages { padding: 10px 20px 0 50px; font-size: 18px; } \
// 		#pages a { text-decoration: none; } \
// 		#pages li { margin: 5px 0; } \
// 	</style> \
// 	<ol id="pages"> \
// 		<li><a href="#"></a></li> \
// 		<li><a href="#"></a></li> \
// 		<li><a href="#"></a></li> \
// 		<li><a href="#"></a></li> \
// 		<li><a href="#"></a></li> \
// 		<li><a href="#"></a></li> \
// 	</ol> \
// </div>');
