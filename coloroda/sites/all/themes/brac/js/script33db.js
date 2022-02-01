(function($) {
 "use strict";

	/* ==============================================
	LOADER
	=============================================== */

	jQuery(window).load( function() {
		setTimeout( function() {
	        jQuery("#loader").delay(400).fadeOut(500);
	        jQuery(".loader-logo");
	        jQuery(".loader-back-text");
	        jQuery(".loader");
	    }, 0 );
	}); 

    /* ==============================================
    PARALLAX
    =============================================== */

	$.stellar({
		horizontalScrolling: false,
		verticalOffset: 40
	});

    /* ==============================================
    TOOLTIP
    =============================================== */

     $('[rel="tooltip"]').tooltip();

    /* ==============================================
    WOW EFFECTS
    =============================================== */

	var wow = new WOW(
	  {
	    boxClass:     'wow',      // animated element css class (default is wow)
	    animateClass: 'animated', // animation css class (default is animated)
	    offset:       100,          // distance to the element when triggering the animation (default is 0)
	    mobile:       true,       // trigger animations on mobile devices (default is true)
	    live:         true        // act on asynchronously loaded content (default is true)
	  }
	);
	wow.init();


	/* ==============================================
	DROP HOVER
	=============================================== */

    //if( $(window).clientHeight > $('document').offsetHeight ){
    $(".menu-wrapper").affix({
        offset: {
            top: 200, 
            bottom: function () {
	            return (this.bottom = $('.footer').outerHeight(true));
            }
        }
    })
    //}

	/* ==============================================
	BACK TO TOP
	=============================================== */

    jQuery('.backtotop').click(function(){
        jQuery('html, body').animate({scrollTop: '0px'}, 800);
        return false;
    });

	/* ==============================================
	LIGHTBOX
	=============================================== */

	jQuery('a[data-gal]').each(function() {
		jQuery(this).attr('rel', jQuery(this).data('gal')); });     
	jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',slideshow:false,overlay_gallery: false,theme:'light_square',social_tools:false,deeplinking:false});


})(jQuery);



/*
	*
	*
	*
	*
	*
	*
*/

/*
'use strict';
$(document).ready(function(){
	var IDmenuParent = $( '#block-system-main-menu .menu li.expanded' );
	$.each($(IDmenuParent),function(i, parent){
		// $(parent).find( 'a' ).first().append($("<span class='icon-angle-down'></span>"));
		$(parent).find( 'a' ).first().on('click', function(){
			event.preventDefault();
			var topLeaf = $(this).next('ul.menu');
			$.each( $(IDmenuParent), function(g, sib){
				var sibLeaf = $(sib).find('ul.menu');
				var isCurrent = (topLeaf[0] === sibLeaf[0]);
				if( !isCurrent ){
					if( sibLeaf.hasClass( 'ID-active' ) ){
						sibLeaf.removeClass( 'ID-active' );
					}  return true;
				}
				else{
					sibLeaf.toggleClass('ID-active');
					sibLeaf.on( 'click', 'li.leaf a', function(){
						sibLeaf.removeClass('ID-active');
					});
					var closeTimer = window.setTimeout(function(sibLeaf){
						sibLeaf.removeClass('ID-active');
						clearTimeout(closeTimer);
					}, 8000, sibLeaf);
				}
			});
		});
	});
});
*/


var makeGrid = function( eleList ){

	
	var listHeights		= new Array(),
	listMaxHeight	= 300;

	for( var i = 0, n = eleList.length; i<n; i++ ){
		listHeights.push( eleList[i].offsetHeight );
	}
	listMaxHeight = Math.max.apply( Math, listHeights );
	
	for( var i = 0, n = eleList.length; i<n; i++ ){
		eleList[i].style.height = listMaxHeight + "px";
	}
} 


if( jQuery('document') !== null ){
	jQuery('document').ready(function(){
		if( jQuery(window).width() > 767 ){
			makeGrid( document.getElementsByClassName( 'id-event-list-inst' ) );
			makeGrid( document.getElementsByClassName( 'recent-news-inst' ) );
		}
		if( jQuery(window).width() < 767 ){
			// makeGrid( $('.row.clients .col-inst') );
		}
	});
	
	jQuery(window).resize(function(){
		if( jQuery(window).width() > 767 ){
			makeGrid( document.getElementsByClassName( 'id-event-list-inst' ) );
			makeGrid( document.getElementsByClassName( 'recent-news-inst' ) );
		}
	});
}