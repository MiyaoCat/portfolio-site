const headerTimeline = gsap.timeline();

headerTimeline 
	.from('.logo', {
		y: -200,
		duration: 1,
	})
	.from('nav', {
		y: -200,
		duration: 1,
	})
	.from('.model', {
		y: -200,
		duration: 1,
	})
	.from('.bag-icon', {
		y: -200,
		duration: 1,
	})		