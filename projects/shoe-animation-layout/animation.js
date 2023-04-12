var headerTimeline = gsap.timeline();
var quadrantTimeline = gsap.timeline();
// var shoeGridTimeline = gsap.timeline();

headerTimeline 
	.from('.savings', {
		x: 50,
		rotation: 50,
		duration: .5,
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
		duration: 1.5,
		opacity: 0,
		ease: "elastic.out(1, 0.5)",
	})
	.fromTo('.explore', {
  	 	y: -300,
   	opacity: 0,
  	}, 
  	{
   	y: 0,
   	duration: 1,
   	opacity: 1,
   	ease: "elastic.out(1, 0.5)",
  	}, "<50%")
  	.from('.shoe-grid', {
		x: 750,
		duration: 2,
		ease: "back.out(1.7)",
	})
  .to('.explore', {
   	rotation: 360,
   	duration: 5,
   	repeat: -1,
   	ease: "linear"
  })
  


// shoeGridTimeline
// 	.from('.shoe-grid', {
// 		x: 5,
// 		duration: 1,
// 		opacity: 0,
// 		ease: "elastic.out(1, 0.5)",
// 	});



var parentTimeline = gsap.timeline();

parentTimeline.add(headerTimeline);
parentTimeline.add(quadrantTimeline);
parentTimeline.add(shoeGridTimeline);

