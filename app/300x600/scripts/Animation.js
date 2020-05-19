var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var t = TweenMax;
	var tl = new TimelineMax();
	var tl1 = new TimelineMax({paused:true});
	var tl2 = new TimelineMax({paused:true});

	var bPath = document.getElementById('bPath');
	var uyPath = document.getElementById('uyPath');
	var caPath = document.getElementById('caPath');
	var dPath = document.getElementById('dPath');
	var aiPath = document.getElementById('aiPath');
	var ryPath = document.getElementById('ryPath');
	var dot = document.getElementById('dot');

	var H01 = document.getElementById('H01');
	var H02 = document.getElementById('H02');
	var H03 = document.getElementById('H03');
	var H04 = document.getElementById('H04');
	var H05 = document.getElementById('H05');
	var H06 = document.getElementById('H06');
	var H07 = document.getElementById('H07');
	var H08 = document.getElementById('H08');
	var H09 = document.getElementById('H09');
	var H10 = document.getElementById('H10');
	var H11 = document.getElementById('H11');
	var H12 = document.getElementById('H12');
	var H13 = document.getElementById('H13');
	var H14 = document.getElementById('H14');
	var H15 = document.getElementById('H15');
	var H16 = document.getElementById('H16');
	var H17 = document.getElementById('H17');

	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
		// DO NOT EDIT: reveals banner once loaded
		t.set(banner, {opacity:1});

		
	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {

		tl.to(tl1, 3, {progress:1, ease:Sine.easeInOut})
		.to(tl2, 2, {progress:1, ease:Sine.easeInOut}, "+=.5");


		tl1.fromTo(bPath, .25,  {drawSVG:"0% 0%"}, {drawSVG:"0% 100%"})
		.fromTo(uyPath, .5,  {drawSVG:"0% 0%"}, {drawSVG:"0% 100%"}, "+=.25")
		.fromTo(caPath, .5,  {drawSVG:"0% 0%"}, {drawSVG:"0% 100%"}, "+=.25")
		.fromTo(dPath, .25,  {drawSVG:"0% 0%"}, {drawSVG:"0% 100%"}, "+=.25")
		.fromTo(aiPath, .5,  {drawSVG:"0% 0%"}, {drawSVG:"0% 100%"}, "+=.25")
		.fromTo(ryPath, .5,  {drawSVG:"0% 0%"}, {drawSVG:"0% 100%"})
		.from(dot, .01,  {opacity:0});

		tl2.set(H01, {display:"block"})
		.set(H02, {display:"block"}, "+=.15")
		.set(H03, {display:"block"}, "+=.15")
		.set(H04, {display:"block"}, "+=.15")
		.set(H05, {display:"block"}, "+=.15")
		.set(H06, {display:"block"}, "+=.15")
		.set(H07, {display:"block"}, "+=.15")
		.set(H08, {display:"block"}, "+=.15")
		.set(H09, {display:"block"}, "+=.15")
		.set(H10, {display:"block"}, "+=.15")
		.set(H11, {display:"block"}, "+=.15")
		.set(H12, {display:"block"}, "+=.15")
		.set(H13, {display:"block"}, "+=.15")
		.set(H14, {display:"block"}, "+=.15")
		.set(H15, {display:"block"}, "+=.15")
		.set(H16, {display:"block"}, "+=.15")
		.set(H17, {display:"block"}, "+=.15");

		
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
