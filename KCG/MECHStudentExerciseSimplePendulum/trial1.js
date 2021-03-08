
let pendulum;

function setup() {
  createCanvas(640, 360);
  pendulum = new Pendulum(width / 2, 0, 175);

}

function draw() {
  background(51);
  pendulum.update();
  pendulum.display();

}
