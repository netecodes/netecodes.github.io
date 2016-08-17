$(function() {
	smoothScroll(500);
	workBelt();
	workLoad();
	scrollMagic();
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

function scrollMagic() {

	var navbar = $('#nav'),
		intro_title = $('#intro-title'),
		intro_kicker = $('#intro-kicker')
		tl = new TimelineLite();

	//header intro animation

	tl
		.to(intro_title, 0.7, {autoAlpha:1, y: 20, ease: Power1.easeOut}, 0.2)
		.from(navbar, 1, {autoAlpha:0, x: 200})
		.to(intro_kicker, 1, {autoAlpha:1, y: 20}, 1)


	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	//Nav Scene
    var navScene = new ScrollMagic.Scene({
        triggerElement: '#about-me',
        triggerHook: 0.1,
   		})
	    .setClassToggle('.nav--container', 'is-dark')
	 //    .addIndicators({
		// 	name: 'Nav scene',
		// 	colorTrigger: 'black',
		// 	colorStart: 'green'
		// })
	    .addTo(controller);

	//About Scene
	var $about_title =$('#about-me').find('h3'),
		$face_lockup = $('.face-lockup'),
		$about = $('.about'),
		aboutTl = new TimelineMax();

		aboutTl
			.from($about_title, 1, {autoAlpha:0, y:-30, ease: Power2.easeOut})
			.from($face_lockup, 1, {autoAlpha:0, y:-30}, 0.2)
			.from($about, 1, {autoAlpha:0, y:30})

	var aboutScene = new ScrollMagic.Scene({
		triggerElement: '#about-me',
		triggerHook: 0.6,
	})
	.setTween(aboutTl)
	// .addIndicators({
	// 	name: 'About scene',
	// 	colorTrigger: 'black',
	// 	colorStart: 'green'
	// })
	.addTo(controller);


	//Skills Scene
	var $skill_bar = $('.skill-bar'),
		$skill_title =$('#skills').find('h3'),
		$skill_lockup = $('.skill-lockup'),
		skillTl = new TimelineMax();

		skillTl
			.from($skill_title, 0.4, {autoAlpha:0, y:-30, ease: Power2.easeOut})
			.from($skill_lockup, 1, {autoAlpha:0, y:10})
			.staggerFrom($skill_bar, 1, {autoAlpha:0, width:0, ease: Power2.easeInOut}, 0.1, 0.6)


	var aboutScene = new ScrollMagic.Scene({
		triggerElement: '#skills',
		triggerHook: 0.6,
	})
	.setTween(skillTl)
	// .addIndicators({
	// 	name: 'Skills scene',
	// 	colorTrigger: 'blue',
	// 	colorStart: 'green'
	// })
	.addTo(controller);

	//Work Scene
	var $thumb_unit = $('.thumb-unit'),
		$work_title = $('#work').find('h3'),
		workTl = new TimelineMax();

		workTl
			.staggerFrom($thumb_unit, 1, {autoAlpha: 0, ease: Power2.easeIn}, 0.1)
			.from($work_title, 1, {autoAlpha:0, y:-30, ease: Linear.easeOut}, '-=0.5')



	var aboutScene = new ScrollMagic.Scene({
		triggerElement: '#work',
		triggerHook: 0.6,
	})
	.setTween(workTl)
	// .addIndicators({
	// 	name: 'work scene',
	// 	colorTrigger: 'blue',
	// 	colorStart: 'green'
	// })
	.addTo(controller);

	//Contact Scene
		var $contact_title =$('#contact').find('h3'),
			$section_contact = $('.section-contact'),
			$section_form= $('.section-form'),
			$submit_btn= $('input[type="submit"]')
			contactTl = new TimelineMax();

		contactTl
			.from($contact_title, 0.4, {autoAlpha:0, y:-30, ease:Linear.easeOut})
			.from($section_contact, 0.4, {autoAlpha:0}, 0.5)
			.from($section_form, 0.4, {autoAlpha:0, y:30}, '-=0.3')
			.to($submit_btn, 0.2, {autoAlpha:1}, '-=0.2')
			.to($submit_btn, 0.05, {scale:1.2, repeat: 1, repeatDelay:0.2, yoyo:true}, '+=0.5')


	var aboutScene = new ScrollMagic.Scene({
		triggerElement: '#contact',
		triggerHook: 0.5,
	})
	.setTween(contactTl)
	// .addIndicators({
	// 	name: 'Contact scene',
	// 	colorTrigger: 'blue',
	// 	colorStart: 'green'
	// })
	.addTo(controller);

}
