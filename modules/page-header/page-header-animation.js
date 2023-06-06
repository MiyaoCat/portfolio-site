var titleOneTimeline = gsap.timeline();
var titleTwoTimeline = gsap.timeline();

titleOneTimeline
	.from('.title1', {
		y: 700,
		duration: 2.5,
		ease: "elastic.out(2, .8)"
	})

titleTwoTimeline
	.from('.title2', {
		x: -600,
		duration: 2,
		ease: "elastic.out(1, .5)"
	})