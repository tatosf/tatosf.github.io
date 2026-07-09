var inc = 0.05;

var scl = 10;

var cols, rows;

var zoff = 0;

var particles = [];

var flowfield;

var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  cols = floor(width / scl);
  rows = floor(height / scl);

  flowfield = new Array(cols * rows);

  for (var i = 0; i < 200; i++) {
    particles[i] = new Particle();
  }
  background(32);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  cols = floor(width / scl);
  rows = floor(height / scl);
  flowfield = new Array(cols * rows);
  background(32);
}

function draw() {
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols;
      var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      flowfield[index] = v;
      xoff += inc;
    }
    yoff += inc;

    zoff += 0.0003;
  }
  for (var i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }
}
