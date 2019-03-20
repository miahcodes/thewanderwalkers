(function($) {

$('.card-container.mobile').flickity({
	autoPlay:'true',
	adaptiveHeight: 'true'
});
$('.open a').click(function(e){
	e.preventDefault();
	var $this = $('.main-nav').slideToggle();
	console.log($this);
});
$(window).scroll(function(event) {
			let $navBg = $('.masthead');
			if($(window).scrollTop() > 20){
				$navBg.addClass('active');
				$('.desktop-logo').addClass('hide');
				$('.mobile-logo').addClass('show');
				$('.open').addClass('change');
			} else {
				
				$navBg.removeClass('active');
				$('.open').removeClass('change');
				$('.desktop-logo').removeClass('hide');
				$('.mobile-logo').removeClass('show');
				
			}
			
		});

$('.close-btn').click(function(e){
	$('#popin-container').fadeOut();
});

})(jQuery);