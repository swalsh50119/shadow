$(function() {
 
var bodies = [];
var dt = 0.01

var worldElement = $("#world")
var world = {
	width:worldElement.css("width"),
	height:worldElement.css("height"),
	x:0,
	y:0,
	gravity:9.81
}

function body(id,w,h, x, y, xv, yv, xa, ya) {
	this.id = id;
	this.width = w;
	this.height = h;
	this.x = x;
	this.y = y;
	this.xv = xv;
	this.yv = yv;
	this.xa = xa;
	this.ya = ya;
	this.updateCSS = function() {
		$("#body"+id).css({top:this.y,left:this.x})
	}
}

function createBody(id,w,h,x,y,xv,yv,xa,ya) {
	var o = $("<div id=body"+id+"></div>")
	$("#world").append(o)
	o.css({height:h,width:w,top:y,left:x,background:"#00FF00",position:"absolute"});
	bodies.push(new body(id,w,h,x,y,xv,yv,xa,ya));
}

function gravity(b){
	var g = world.gravity;
	b.ya = g;
	b.yv = g*dt+b.yv;
	b.y = b.ya*(dt^2) + b.yv*dt+b.y;
	b.updateCSS();
}

function frame() {
 	for(var i = 0; i < bodies.length;i++) {
 		var bd = bodies[i];
 		gravity(bd);

 	}
}

function simulate() {
	createBody(0,50,50,0,0,0,0,0,0);
	var animationId = setInterval(frame, dt*1000);
}
simulate();


});

