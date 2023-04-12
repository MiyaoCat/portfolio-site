var headerTimeline = gsap.timeline();
var quadrantTimeline = gsap.timeline();

headerTimeline 
		.from('.savings', {
		x: 200,
		rotation: -45,
		duration: 1,
	})
	.from('.logo', {
		y: -200,
		duration: .4,
		ease: "bounce.out(2.5, 1)",
	})
	.from('nav', {
		y: -200,
		duration: .4,
	})
	.from('.model', {
		y: -200,
		duration: .4,
	})
	.from('.bag-icon', {
		y: -200,
		duration: .4,
	})		

quadrantTimeline
	.from(['.search', '.title1', '.title2'], {
		y: -300,
		duration: 1,
		opacity: 0,
	})
	.fromTo('.explore', {
  	 	y: -300,
   	opacity: 0,
  	}, 
  	{
   	y: 0,
   	duration: 0.6,
   	opacity: 1,
  }, "<50%")
  .to('.explore', {
   	rotation: 360,
   	duration: 5,
   	repeat: -1,
   	ease: "linear"
  });

	// .from('.explore', {
	// 	y: -300,
	// 	duration: .6,
	// 	opacity: 0,
	// 	delay: -0.4,
	// 	onComplete: function() {
	// 		gsap.to('.explore', {
	// 			rotation: 360,
	// 			duration: 5,
	// 			repeat: -1,
	// 			ease: "linear"
	// 		})
	// 	}
	// })




var parentTimeline = gsap.timeline();

parentTimeline.add(headerTimeline);
parentTimeline.add(quadrantTimeline);

