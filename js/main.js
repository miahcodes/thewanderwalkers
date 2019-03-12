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
			} else {
				
				$navBg.removeClass('active');
			}
			
		});

$('.close-btn').click(function(e){
	$('#popin-container').fadeOut();
});

})(jQuery);