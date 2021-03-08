function Pendulum(origin_, r_,m_) {
// Fill all variables
this.path = [];
this.origin = origin_.copy();
this.position = createVector();
this.r = r_;
this.angle = PI / 4;

this.aVelocity = 0.0;
this.aAcceleration = 0.0;
this.damping = 0.995 - 0.0005* m;
this.ballr = m_;

this.dragging = false;

this.go = function () {
this.update();
this.drag();
this.display();
};

// Function to update position
this.update = function () {
this.damping = 0.995 - 0.0003* m/3;
if (!this.dragging) {
var gravity = 0.1 * g;
this.aAcceleration = (-1 * gravity / this.r) * sin(this.angle);

this.aVelocity += this.aAcceleration;
this.aVelocity *= this.damping;
this.angle += this.aVelocity;
}
};

this.display = function () {
this.position.set(l * sin(this.angle), l*cos(this.angle), 0);
this.position.add(this.origin);

stroke(&#39;#e0ad16&#39;);
strokeWeight(2);
line(this.origin.x, this.origin.y, this.position.x, this.position.y);

ellipseMode(CENTER);

this.path.push(new Punto(this.position.x, this.position.y));
if(this.path.length &gt; 100){ this.path.splice(0,1);}
var c = 0;
for(i in this.path){
fill(color(25, 25+c++, 205));
stroke(color(25, 25+c++, 205));
ellipse(this.path[i].x, this.path[i].y, 5, 5);
}

stroke(&#39;#e0ad16&#39;);
fill(&#39;#9b9888&#39;);
if (this.dragging) fill(&#39;#c66a0d&#39;);
ellipse(this.position.x, this.position.y, m, m);

};
this.clicked = function (mx, my) {
var d = dist(mx, my, this.position.x, this.position.y);
if (d &lt; this.ballr) {
this.dragging = true;
}

};

this.stopDragging = function () {
this.aVelocity = 0;
this.dragging = false;
};

this.drag = function () {
if (this.dragging) {
var diff = p5.Vector.sub(this.origin, createVector(mouseX, mouseY));
this.angle = atan2(-1 * diff.y, diff.x) - radians(90);
}
};
}

function Punto(x,y) {
this.x = x;
this.y = y;
}
var p;

var g = 9.82;
var m = 50.0;
var l = 400.0;

function setup() {

createCanvas(1000,580);
var v = createVector(width/2,0);
p = new Pendulum(v, l, m);

}
goingup = false;
function draw() {

background(&#39;#1c2438&#39;);
p.go();
stroke(51);
fill(255);
text(&#39;fps: &#39; + getFrameRate().toFixed(2), width -80, 20);
text(&#39;g : &#39; + g.toFixed(2), width -80, 35);
text(&#39;L : &#39; + l.toFixed(2), width -80, 50);
text(&#39;m : &#39; + m.toFixed(2), width -80, 65);
text(&#39;You can Drag and Drop the pendulum&#39;, width -600, 570);

text(&#39;Angular Vel : &#39; + p.aVelocity.toFixed(2), width -120, 105);
text(&#39;Damping : &#39; + p.damping.toFixed(3), width -120, 120);
text(&#39;Copyright (c) 2017 Diego Vallejo&#39;, width -200, 620);

}

function mousePressed() {
p.clicked(mouseX,mouseY);
}

function mouseReleased() {
p.stopDragging();
}