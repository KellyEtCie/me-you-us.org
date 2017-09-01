$(document).ready(function() {
	var selectedPage = $('body').attr('class');
	$('#' + selectedPage + ' a').addClass('selected');

	$('.showhide-button').on('click tap', function() {
		$(this).toggleClass('clicked');
		$(this).parent().find('.showhide').toggleClass('revealed');
		$(this).parent('.sublist').toggleClass('clicked');
	});

	$('a.anchor-link').on('click tap', function(event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 500);
	});
	
});
