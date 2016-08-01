$(function() {
	smoothScroll(300);
	workBelt();
	workLoad();
})

function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

		var target = $($(this).attr('href'));

		if (target.length) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, duration);
		}
	})
}

function workBelt() {

	$('.thumb-unit').click(function(e) {
		e.preventDefault();
		$('.work-belt').css('left', '-100%');
		$('.work-container').show();
	})

	$('.work-return').click(function(e) {
		e.preventDefault();
		$('.work-belt').css('left', '0px');
		$('.work-container').hide(800);
	})

}

function workLoad() {

	$.ajaxSetup ({ cache: true });

	$('.thumb-unit').click(function() {

		var $this = $(this),
			newTitle = $this.find('strong').text(),
			projectNumber = $this.data('project')
			spinner = '<div class="loader">Loading...</div>',
			newHTML = 'projects/work-'+ projectNumber +'.html';

		$('.project-load').html(spinner).load(newHTML);
		$('.project-title').text(newTitle);
		
	})
}
