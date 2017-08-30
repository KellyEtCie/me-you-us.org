$(document).ready(function() {
	var selectedPage = $('body').attr('class');
	$('#' + selectedPage + ' a').addClass('selected');

	$('.showhide-button').on('click tap', function() {
		$(this).toggleClass('clicked');
		$(this).parent().find('.showhide').toggleClass('revealed');
		$(this).parent('.sublist').toggleClass('clicked');
	});
});
