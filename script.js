$(document).ready(function() {
	$('#loading').hide();
})

var ctr = 0;
var noiseScale=0.02;

function setup() {
	width = window.innerWidth;
	height = window.innerHeight;
	createCanvas(width, height);

	$(document).click(function() {noiseSeed(random()*1000);})
}

function draw() {
	ctr += 2;
	background('#fff')

	for (var i = 0; i < width; i++) {	
		var noiseVal = noise((mouseX+i+ctr)*noiseScale, (mouseY+ctr)*noiseScale);
		colorMode(HSL,256);
		colorMode(HSB, 256);
		//var h = (i+ctr)%256
		var h = noise((mouseX+i+ctr/2)/200)*256
		var h2 = noise((i-ctr)/300)*256
		var s = mouseX /width * 255
		var l = mouseY / height * 255
		//if (i%2) h=h2;
		//s = 150*noise((mouseY+i+ctr)*0.008)
		s = 150
		l = 256 
		var c1 = color(h, s, l);
		var c2 = color(h2, s, l);
		var c = lerpColor(c1, c2,0.5)
		stroke(c)
		//rotate(.001);
		line(i, height*-10, i, height*10)
		// noise Line
		//line(i, 0+noiseVal*200, i, height-(2*noiseVal*200))
	}
}
