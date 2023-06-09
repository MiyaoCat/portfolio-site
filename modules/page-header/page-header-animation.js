var titleOneTimeline = gsap.timeline();
var titleTwoTimeline = gsap.timeline();

// titleOneTimeline
// 	.from('.title1', {
// 		duration: 2.5,
// 		ease: "bounce.out", 
// 		y: -200
// 	})



titleTwoTimeline
	.from('.title2', {
		x: -600,
		duration: 2,
		ease: "elastic.out(1, .5)"
	})