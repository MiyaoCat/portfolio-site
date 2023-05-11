var headerTimeline = gsap.timeline();
var pageTimeline = gsap.timeline();
var beaconsTimelineFirst = gsap.timeline();
var beaconsRepeat = gsap.timeline();

headerTimeline 
	.from('.logo', {
		y: -200,
		duration: 1,
		ease: "elastic.out(.7, .5)",
	})
	.from('nav', {
		y: -200,
		duration: 1,
		ease: "elastic.out(.7, .5)",
	}, "<50%")
	.from('.model', {
		y: -200,
		duration: 1,
		ease: "elastic.out(.7, .5)",
	}, "<50%")
	.from('.bag-icon', {
		y: -200,
		duration: 1,
		ease: "elastic.out(.7, .5)",
	}, "<50%")		

	
beaconsTimelineFirst
	.from('.beacon', {
		duration: .8,
		scale: 0,
		opacity: 0,	 
		delay: 1,
		transformOrigin: '50% 50%',
		ease: 'back.out(1.7)',
	})
	.fromTo(['.pop-up', '.beacon.one'], {
		opacity: 0,
		scale: 0,
	},
	{	
		delay: .5,
		opacity: 1,
		scale: 1,
		ease: 'back.out(1.7)',
	}, "<80%") 
	.to('.pop-up', {
		opacity: 0,
		scale: 0,
		delay: 2,
	})
	.fromTo(['.pop-up-two', '.beacon.two'], {
		opacity: 0,
		scale: 0,
	},
	{
		opacity: 1,
		scale: 1,
		transformOrigin: '50% 50%',
	})	
	.to('.pop-up-two', {
		delay: 2,
		opacity: 0,
		scale: 0
	})
	.fromTo(['.pop-up', '.beacon.one'], {
		opacity: 0,
		scale: 0,
	},
	{	
		delay: .5,
		opacity: 1,
		scale: 1,
		ease: 'back.out(1.7)',
	}, "<80%") 
	.repeat(-1)
	.repeatDelay(5)

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
	.from('.explore', {
		y: -100,
		duration: 1,
		opacity: 0,
		ease: "elastic.out(1, 0.5)",
	})
  	.from('.shoe-detail', {
  		opacity: 0,
		y: 400,
	})
	.to('.explore', {
   	rotation: 360,
   	duration: 5,
   	repeat: -1,
   	ease: "linear"
	}, "<0%")
	.from('.shoe-card', {
		x: 750,
		duration: 2,
		stagger: .2,
		ease: "elastic.out(.2)",
		}, "<0%")
	.from('.main-image', {
		x: 750,
		duration: .8,
		opacity: 0,
	}, "<0%")
	.to('.pop-up-two', {
		opacity: 0
	}, "<0%")
	.from('.color-palette li', {
		x: 200,
		duration: .8,
		opacity: 0,
		stagger: .1,
	}, "<0%")
	.from('.page-buttons', {
		y: -40,
		opacity: 0,
		ease: "elastic.out(1, 0.5)",	
	}, "<0%")
	.add(beaconsTimelineFirst)
	.delay(1)




