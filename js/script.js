$(document).ready(function() {
	var selectedPage = $('body').attr('class');
	$('#' + selectedPage + ' a').addClass('selected');
});
