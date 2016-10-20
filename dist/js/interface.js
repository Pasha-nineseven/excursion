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
	    // return false
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

	$(".fb-image").fancybox({
    	openEffect	: 'elastic',
    	closeEffect	: 'elastic',

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
		$('.page-header--index')
			.css('background','url('+$(this).data("background-url")+') no-repeat');
    });


    //INPUT FILE
	$('.input-file').on('change', function (event) {
	    var file = this.files[0];
	    if(file){
			$('.remove').remove();
			$('.button').remove();
	        $(this).siblings('.input-file-text').html(this.value).after("<a href='#' class='remove'></a>").addClass('active');
	    }else{
	        $(this).siblings('.input-file-text').html('').removeClass('active');
	        $('.remove').remove();
	        $(this).after('<div class="button" >Выбрать<span>(до 5 мб)</span></div>');
	    }
	});
	$( 'body' ).on( 'click', '.remove', function(){
		$('.input-file-text').html('');
		$('.remove').remove();
		$('.input-file-text').html('').removeClass('active');
		$('.input-file').after('<div class="button" >Выбрать<span>(до 5 мб)</span></div>');
		return false
	});

	//SLIDER COUNT
	if ($( ".slider-count-slider" ).length>0) {
		$( ".slider-count-slider" ).slider({
	    	animate: true,
	        range: "min",
	        value: 1,
	        min: 1,
	        max: 10,
	        step: 1,
	        slide: function( event, ui ) {
	            $( "#slider-count-input" ).val( ui.value );
	        },
		});
	};

	//TEXT-TRUNCATE
	if ($('.toggle-text').length>0) {
		$('.toggle-text').jTruncate({
			length: 300,
			moreText: 'Читать полностью',
			lessText: 'Скрыть',
			moreAni: 100,
			lessAni: 100
		});
	};

	//TEXT-TOGGLE
	$( 'body' ).on( 'click', '.text-hidden__toggle', function(){
        $(this).toggleClass('active');
        $(this).parents('.text-hidden__toggle-wrap').next('.text-hidden').slideToggle();
        if ( $(this).hasClass("active") ) {
            $(this).text("Скрыть подробности");
        }
        else {
            $(this).text("Показать подробности");
        }
        return false
    });

    //PHONE-MASK
    if ($('.phone-mask').length>0) {
    	$('.phone-mask').inputmask("+7999 999−99−99");
    };

    //SHOW-PASSWORD
	$( 'body' ).on( 'click', '.pass-toggle', function( event ) {
	    $(this).toggleClass('active');
	    if( $(this).is('.active') ){
	        $(this).prev().attr('type','text');
	    }else{
	        $(this).prev().attr('type','password');
	    }
	    return false;
	});

	//MULTIPLE-SELECT
	if ($('.multiple-select').length>0) {
		$('.multiple-select').multipleSelect({
			placeholder: "+ Добавить язык",
			selectAll: false
		});
	};

	if ($('.multiple-select-theme').length>0) {
		$('.multiple-select-theme').multipleSelect({
			placeholder: " ",
			selectAll: false
		});
	};

	//IMG-CHANGE
	if ($(".imgInp").length>0) {
		$(".imgInp").change(function(){
	        readURL(this);
	    });
	};
	if ($(".galleryInp").length>0) {
		$(".galleryInp").change(function(){
			$('.gallery-img').show();
	        readURL(this);
	    });
	};
});


 

$(window).resize(function () {

});

$(window).load(function(){
	//Check File API support
    if(window.File && window.FileList && window.FileReader)
    {
        var filesInput = document.getElementById("files");
        filesInput.addEventListener("change", function(event){
            var files = event.target.files;
            var output = document.getElementById("result");
            for(var i = 0; i< files.length; i++)
            {
                var file = files[i];
                if(!file.type.match('image'))
                  continue;
                var picReader = new FileReader();
                picReader.addEventListener("load",function(event){
                    var picFile = event.target;
                    var div = document.createElement("div");
                    div.className = 'photo-list__item';
                    div.innerHTML = "<img class='thumbnail' src='" + picFile.result + "'" +
                            "title='" + picFile.name + "'/><a href='#' class='del'></a>";
                    output.insertBefore(div,null);            
                });
                picReader.readAsDataURL(file);
            }                               
           
        });
    }
    else
    {
        console.log("Your browser does not support File API");
    }
});

// functions
function isTouchDevice() {
	return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
}

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('.blah').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
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
		<li><a href="excursions.html">Excursions</a></li> \
		<li><a href="excursions-in.html">Excursions-in</a></li> \
		<li><a href="registration-gid.html">Registration-gid</a></li> \
		<li><a href="recovery-password.html">Recovery-password</a></li> \
		<li><a href="cabinet-excursions.html">Cabinet-excursions</a></li> \
		<li><a href="cabinet-data.html">Cabinet-data</a></li> \
		<li><a href="create-excursion.html">Create-excursion</a></li> \
		<li><a href="edit-excursion.html">Edit-excursion</a></li> \
	</ol> \
</div>');
