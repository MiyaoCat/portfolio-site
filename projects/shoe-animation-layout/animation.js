var headerTimeline = gsap.timeline();
var pageTimeline = gsap.timeline();
var leftToRight = gsap.timeline();

headerTimeline 
	.from('.logo', {
		y: -200,
		duration: 1,
		ease: "bounce.out(1.5, 200)",
	})
	.from('nav', {
		y: -200,
		duration: 1,
		ease: "bounce.out(1.5, 2)",
	}, "<50%")
	.from('.model', {
		y: -200,
		duration: 1,
		ease: "bounce.out(1.5, 2)",
	}, "<50%")
	.from('.bag-icon', {
		y: -200,
		duration: 1,
		ease: "bounce.out(1.5, 2)",
	}, "<50%")		

pageTimeline
	.add(headerTimeline)
	.from(['.title1', '.title2'], {
		y: -100,
		duration: 1.5,
		opacity: 0,
		ease: "elastic.out(1, 0.5)",
	})
	.from('.search', {
		y: -10,
		duration: 1,
		opacity: 0,
		ease: "elastic.out(1, 0.5)",
	}, "<1%")
	.from('.savings', {
		x: 70,
		y: -500,
		rotation: 90,
		duration: 2,
		ease: "bounce.inOut",
	}, "<0%")
	.fromTo('.explore', {
  	 	y: -100,
   	opacity: 0,
  	}, 
  	{
   	y: 0,
   	duration: 1,
   	opacity: 1,
   	ease: "elastic.out(1, 0.5)",
  	}, "<20%")
  	.from('.shoe-detail', {
		y: 600,
	})
	.to('.explore', {
   	rotation: 360,
   	duration: 5,
   	repeat: -1,
   	ease: "linear"
	})
	.from('.shoe-card', {
		x: 750,
		duration: 2,
		stagger: .2,
		ease: "elastic.out(.5)",
		}, "<0%")
	.from(['.main-image', '.color-palette'], {
		x: 700,
		duration: .8,
	}, "<0%")
	.from('.page-buttons', {
		y: -40,
		opacity: 0,
		ease: "elastic.out(1, 0.5)",	
	}, "<0%")
	.from('.beacon', {
		duration: .2,
		scale: 0,
		opacity: 0,	 
		delay: 1,
		transformOrigin: '50% 50%',
		ease: 'back.out(1.7)',
	})
	.from('.beacon.one', {

	})

// leftToRight
// 	.add(pageTimeline) 
// 	.from('.shoe-card', {
// 		x: 750,
// 		duration: 5,
// 		stagger: .2,
// 		ease: "elastic.out(.5)",
// 	})





