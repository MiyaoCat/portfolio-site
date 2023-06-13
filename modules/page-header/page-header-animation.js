var titleOneTimeline = gsap.timeline();
var titleTwoTimeline = gsap.timeline();

var genericText = gsap.timeline();

titleOneTimeline
	.from('.title1', {
		x: 400,
		duration: 2,
		ease: "elastic.out(1.5, .5)"
	})

titleTwoTimeline
	.from('.title2', {
		x: -600,
		duration: 2,
		ease: "elastic.out(1.5, .5)"
	}, "<50%")

