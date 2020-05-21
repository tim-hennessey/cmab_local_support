var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var t = TweenMax;
	var tl = new TimelineMax();
	// var tl = new TimelineMax({paused:true});
	// var tl2 = new TimelineMax({paused:true});

	var txt1 = document.getElementById('txt1');
	var txt2 = document.getElementById('txt2');
	// var ryPath = document.getElementById('ryPath');
	// var aiPath = document.getElementById('aiPath');
	var dot = document.getElementById('dot');
	var cta = document.getElementById("cta");
	var buttonExit = document.getElementById('button-exit');

	
	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
		// DO NOT EDIT: reveals banner once loaded
		t.set(banner, {opacity:1});
		t.set(txt1, {x:300});
		t.set(txt2, {x:300});

		buttonExit.addEventListener('mouseover', function () {
            t.to(cta, .4, {scale: 1.1, ease:Expo.easeOut});
        });

        buttonExit.addEventListener('mouseout', function () {
            t.to(cta, .2, {scale: 1, ease:Expo.easeIn});
        });

		
	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {

		// t.from(bg, 10, {scale:1.1, ease:Sine.easeOut});

		tl.to(txt1, 1, {x:"-=300", ease:Expo.easeOut}, "+=.1")
		.to(txt2, 1, {x:"-=300", ease:Expo.easeOut}, "-=.9")
		.to(cta, .5, {opacity:1});

		
	}

	// --------------------------------------------------------------------------------------
	// Stops the animation
	function stop() {
		console.log("stopping animation");
	}

	// --------------------------------------------------------------------------------------
	// Publicly accessible methods and properties
	return {
		initialize:initialize,
		start:start,
		stop:stop
	}

})();
