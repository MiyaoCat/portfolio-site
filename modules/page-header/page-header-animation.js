var titleOneTimeline = gsap.timeline();
var titleTwoTimeline = gsap.timeline();

var $title1 = document.querySelector('.title1');
var initialY = 0;

titleOneTimeline
	//Animate .title1 to move into position from screen left.
	.from('.title1', {
		x: 400,
		duration: 1.5,
		ease: "elastic.out(1.5, .5)",
		onComplete: function() {
			//Listen for screen width. If > 700, y value changes.
	      var screenWidth = window.innerWidth || document.documentElement.clientWidth;
	      var yValue = -18;

	      if (screenWidth >= 700) {
	        yValue = 20; 
      }
      //title1 tilts down
      gsap.to('.title1', {
			rotation: -9,
			y: yValue,
			duration: 1,
			ease: "bounce.out"
      });
    }
  });

titleTwoTimeline
  .from('.title2', {
		x: -600,
		duration: 1.5,
		ease: "elastic.out(1.5, .5)"
  }, "<50%");


//Listen for mousover on title1 to untilt it and make horizontal again
document.querySelector('.title1').addEventListener('mouseover', function() {
  gsap.to(this, {
    rotation: 0,
    y: 0,
    duration: 0.3,
    ease: "power1.inOut"
  });
});

//Listen for mouseout event on title1 and tilt back to original
document.querySelector('.title1').addEventListener('mouseout', function() {
	var screenWidth = window.innerWidth || document.documentElement.clientWidth;
	   var yValue = -18;

	   if (screenWidth >= 700) {
	   	yValue = 20;
	   }
	//tilt back to original place
	gsap.to(this, {
		rotation: -9,
		y: yValue,
		duration: .4,
		ease: "elastic.out(1.2, .6)"
	});
});

//Listen for screen width to ensure title stays in place 
function updateTitle1Position() {
	var screenWidth = window.innerWidth || document.documentElement.clientWidth;

	// Adjust the y value based on the screen width
	if (screenWidth >= 700) {
		$title1.style.transform = 'translateY(20px)';
	} else {
		$title1.style.transform = 'translateY(' + initialY + 'px)';
	}
}

// Update the position initially
updateTitle1Position();

// Listen for the window resize event
window.addEventListener('resize', updateTitle1Position);