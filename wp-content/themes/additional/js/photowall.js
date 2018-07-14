(function($){
$(window).load(function(){
	// reveal all items after init
	var $items = $('#photowall-container').find('.photowall-item');
	$('#photowall-container').addClass('is-showing-items');

	var i = 0;
	$('#photowall-container').each(function() {
	    $(this).children().each(function(counter) {
	        $(this)
	            .delay(++i * 300)
	            .animate({opacity:1}, 1500 );
	    });
	});

	});
})(jQuery);
jQuery(document).ready(function($){
	
	var $wallContainer = $('#photowall-container');
	var $wallWrap = $('.photowall-wrap');

    //variables to confirm window height and width
    var wall_lastWindowHeight = $(window).height();
    var wall_lastWindowWidth = $(window).width();

    $(window).resize(function() {

        //confirm window was actually resized
        if($(window).height()!=wall_lastWindowHeight || $(window).width()!=wall_lastWindowWidth){

            //set this windows size
            wall_lastWindowHeight = $(window).height();
            wall_lastWindowWidth = $(window).width();

            //call my function
            photoWallInit();
            $('.photowall-item').each(function(){
            	$(this).removeClass('animation-standby animated fadeInUp animation-action');
            });

        }
    });

	photoWallInit();

	function photoWallInit() {
		// initialize isotope photowall-container
		if ($.fn.isotope) {

			$wallContainer.imagesLoaded( function() {

				var photow_window_width = $(window).width();
				var wallContainer_w = $("#photowall-container").width();

				number_of_columns = 3;
				$('.photowall-item').css('width','33.333333333333333333%');

				if (photow_window_width < 1800 ) {
					number_of_columns = 3;
					$('.photowall-item').css('width','33.333333333333333333%');
				}

				if (photow_window_width < 1000 ) {
					number_of_columns = 2;
					$('.photowall-item').css('width','50%');
				}

				if (photow_window_width < 500 ) {
					number_of_columns = 1;
					$('.photowall-item').css('width','100%');
					$('.photowall-wrap').css('marginLeft','5px');
					$('.photowall-wrap').css('marginRight','0');
				}

				$wallContainer.isotope({
					layoutMode: 'masonry',
					resizable: false, // disable normal resizing
				  	masonry: {
				    	gutterWidth: 0,
				    	columnWidth: wallContainer_w / number_of_columns
					}
				});
			});
		}
	}

	$(window).load(function() {
		photoWallInit();
	});
	
});