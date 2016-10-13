$(document).ready(function() {

	// detect touch device
	if (isTouchDevice() === true) {
		$('body').addClass('touch');
	} else {
		$('body').addClass('no-touch');
	}

	//TOP SELECT
	//$('.page-header__select > a')

	$("body").on("click", ".page-header__select > a", function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$(this).next('.page-header__select-list').fadeToggle(200);
	})

	$(".page-header__select-item a").bind("click", function() {
	    var src = $(this).find('img').attr('src');
	    //console.log(src);

	    $('.page-header__select > a').find('img').attr('src',src);
	    $('.page-header__select-item').removeClass('page-header__select-item--active');
	    $(this).parents('.page-header__select-item').addClass('page-header__select-item--active');
	    $('.page-header__select-list').fadeOut(200);
	    return false
	});

	//TEXT-SLIDER
	if ($('.text-slider').length>0) {
		var $gallery = $('.text-slider');
		var slideCount = null;

		$( document ).ready(function() {
		    $gallery.slick({
				dots: false,
		        fade: true,
		        useTransform: true,
				nextArrow: '<i class="arrow-right"></i>',
				prevArrow: '<i class="arrow-left"></i>',
		    });
		});

		$gallery.on('init', function(event, slick){
			slideCount = slick.slideCount;
			if (slideCount<=1) {
				$('.slide-count-wrap').hide();
			};
			setSlideCount();
			setCurrentSlideNumber(slick.currentSlide);
			$('.arrow-left').insertBefore('.slide-count-wrap__inner');
			$('.arrow-right').insertAfter('.slide-count-wrap__inner');
		});

		$gallery.on('beforeChange', function(event, slick, currentSlide, nextSlide){
		  	setCurrentSlideNumber(nextSlide);
		});

		function setSlideCount() {
		  var $el = $('.slide-count-wrap').find('.total');
		  $el.text(slideCount);
		}

		function setCurrentSlideNumber(currentSlide) {
		  var $el = $('.slide-count-wrap').find('.current');
		  $el.text(currentSlide + 1);
		}
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



	$("body").on("mouseover",".page-header--index__selecting-item ", function () {

        $('.page-header--index__selecting-item').removeClass('active');
		$(this).addClass('active');
		if ($(this).data("item")=="1") {
			$('.page-header--index').css('background','url(img/index-head-bg/index-head-bg1.jpg) no-repeat')
		}
		else if ($(this).data("item")=="2") {
			$('.page-header--index').css('background','url(img/index-head-bg/index-head-bg2.jpg) no-repeat')
		};
		if ($(this).data("item")=="3") {
			$('.page-header--index').css('background','url(img/index-head-bg/index-head-bg1.jpg) no-repeat')
		}
		else if ($(this).data("item")=="4") {
			$('.page-header--index').css('background','url(img/index-head-bg/index-head-bg2.jpg) no-repeat')
		};
    });
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
$('body').append(
	'<div style="position: fixed; z-index: 1005; bottom: 0; right: 0; background: #fff; border: solid 1px #828286; width: 200px;"> \
		<a href="javascript:void(0);" style="float: right;background:#ccc; color:#000; padding: 5px 10px; text-decoration: none; font-size: 16px" onclick="$(this).parent().hide()">Close X</a> \
	<style> \
		#pages { padding: 10px 20px 0 50px; font-size: 18px; } \
		#pages a { text-decoration: none; } \
		#pages li { margin: 5px 0; } \
	</style> \
	<ol id="pages"> \
		<li><a href="about.html">About</a></li> \
		<li><a href="news.html">News</a></li> \
		<li><a href="news-in.html">News-in</a></li> \
		<li><a href="index.html">Index</a></li> \
	</ol> \
</div>');
