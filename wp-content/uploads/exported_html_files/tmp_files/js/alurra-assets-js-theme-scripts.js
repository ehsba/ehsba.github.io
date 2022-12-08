/**
 * Theme JS file.
 */
 
jQuery(document).ready(function($) {

    var $body = $('body');

    $('#nav-toggle').on( 'click', function(e) {
      e.preventDefault();
      $(this).next('.menu-container, .nav-menu').slideToggle(300);
    });

    $('#search-toggle').on( 'click', function(e) {
      e.preventDefault();
      $body.toggleClass('search-open');
    });

    $('#close-search-modal, #search-modal').on( 'click', function(e) {
      e.preventDefault();
      $body.removeClass('search-open');
    });

    $("#search-modal .search-wrap").click(function(event) {
      event.stopPropagation();
    });


	// Site branding scrolling effect
	$(window).scroll(function(e){
		if ($(window).width() > 800) {
			$('.fade-block').css({
				'bottom' : -($(this).scrollTop()/3)+"px",
			}); 
			var thisdist = $(this).scrollTop();
			var headerheight = $(".site-header").outerHeight();
			$('#site-title').css({
				'opacity' : (1 - thisdist/headerheight)
			}); 
		} else {
			$('.fade-block').css({'bottom' : 'auto'}); 	
			$('#site-title').css({'opacity' : "1" });
		}
	});
	

	// Smooth scroll to top
  	$('#back-to-top').click(function(){
        $("html, body").scrollTop(0);
        return false;
    });	
		
	
	// resize videos after container
	var vidSelector = ".post iframe, .post object, .post video, .widget-content iframe, .widget-content object, .widget-content iframe";	
	var resizeVideo = function(sSel) {
		$( sSel ).each(function() {
			var $video = $(this),
				$container = $video.parent(),
				iTargetWidth = $container.width();

			if ( !$video.attr("data-origwidth") ) {
				$video.attr("data-origwidth", $video.attr("width"));
				$video.attr("data-origheight", $video.attr("height"));
			}

			var ratio = iTargetWidth / $video.attr("data-origwidth");

			$video.css("width", iTargetWidth + "px");
			$video.css("height", ( $video.attr("data-origheight") * ratio ) + "px");
		});
	};

	resizeVideo(vidSelector);

	$(window).resize(function() {
		resizeVideo(vidSelector);
	});
	

});