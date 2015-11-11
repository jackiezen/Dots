function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
}

var dot = {
	x: 0,
	y: 5
}

var colors = {
	r: 255,
	g: 255,
	b: 255,
	a: 100
}

var xspeed = 10;


function draw() {
	noCursor();
	noStroke();

	fill(colors.r, colors.g, colors.b, colors.a);

	ellipse(dot.x, dot.y, 5, 5);

	if (dot.x > width || dot.x < 0) {
		xspeed = -xspeed;
		dot.y = dot.y + 10;
	}
	
	dot.x = dot.x + xspeed;
}

function mouseMoved() {
	colors.r = random(50, 200);
	colors.g = random(50, 200);
	colors.b = random(50, 200);
	colors.a = random(200, 255);
}

function mousePressed() {
	background(0);
}