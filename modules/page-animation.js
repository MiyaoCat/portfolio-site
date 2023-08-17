var background = gsap.timeline();
var pageHeader = gsap.timeline();

var bodyElement = document.body;
var childElements = Array.from(bodyElement.children);
var elementsToAnimate = childElements.slice(3, -3);
var footer = gsap.timeline();

pageHeader
	.from('.title1', {
		opacity: 0,
		x: -1000,
		duration: 1,
		ease: "back.out(.75)",
   }, .2)
	.from('.title2', {
		opacity: 0,
		x: 1000,
		duration: 1,
		ease: "back.out(.75)"
  }, .4);

gsap.from(elementsToAnimate, {
	opacity: 0,
	x: 1500,
	duration: 2,
	ease: "back.out(.75)",
	stagger: 0.2
}, .2)

if (window.innerWidth <= 700) {
	background
	.from('.background', {
		y: 0,
		duration: 0,
	})
	pageHeader
	.from('.title1', {
		x: -1000,
		duration: 1,
		ease: "back.out(.75)"
   }, .1)
	.from('.title2', {
		x: 1000,
		duration: 1,
		ease: "back.out(.75)"
  }, .2)

} else {
	background
	.from('.background', {
		x: -1000,
		duration: .75,
		ease: "power2.out"
	})
	pageHeader.delay(.5)
}

footer 
	.from("footer", {
		y: 500,
		duration: 1,
		ease: "back.out(1.7)"
	})

footer.delay(.5)
