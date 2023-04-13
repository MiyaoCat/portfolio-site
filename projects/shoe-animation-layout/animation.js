var headerTimeline = gsap.timeline();
var quadrantTimeline = gsap.timeline();


headerTimeline 
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
	.add(headerTimeline)
	.from(['.search', '.title1', '.title2'], {
		y: -100,
		duration: 1.5,
		opacity: 0,
		ease: "elastic.out(1, 0.5)",
	})
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
	.to('.explore', {
   	rotation: 360,
   	duration: 5,
   	repeat: -1,
   	ease: "linear"
	})
	.from('.shoe-detail', {
		y: 600,
	}, ">0.02")







