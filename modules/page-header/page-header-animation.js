// var titleOneTimeline = gsap.timeline();
// var titleTwoTimeline = gsap.timeline();

// var genericText = gsap.timeline();

// titleOneTimeline
// 	.from('.title1', {
// 		x: 400,
// 		duration: 2,
// 		ease: "elastic.out(1.5, .5)"
// 	})

// titleTwoTimeline
// 	.from('.title2', {
// 		x: -600,
// 		duration: 2,
// 		ease: "elastic.out(1.5, .5)"
// 	}, "<50%")

// gsap.to('.title1', {
//   rotation: -7,
//   y: 20,
//   duration: 1,
//   ease: "bounce.out"
// });

var titleOneTimeline = gsap.timeline();
var titleTwoTimeline = gsap.timeline();

var genericText = gsap.timeline();

titleOneTimeline
  .from('.title1', {
    x: 400,
    duration: 2,
    ease: "elastic.out(1.5, .5)",
    onComplete: function() {
      // Start the last animation after a 2-second delay
      gsap.to('.title1', {
        rotation: -7,
        y: 20,
        duration: 1,
        ease: "bounce.out"
      });
    }
  });

titleTwoTimeline
  .from('.title2', {
    x: -600,
    duration: 2,
    ease: "elastic.out(1.5, .5)"
  }, "<50%");