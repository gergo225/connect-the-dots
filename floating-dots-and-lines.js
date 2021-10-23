const canvasSketch = require('canvas-sketch');

const p5 = require('p5');

new p5();

const settings = {
  dimensions: [2048, 2048],
  p5: true,
  animate: true
};

const sketch = ({ context, width, height }) => {
  const pointCount = 100;
  const maxVel = 3;
  const points = [];
  const circleStrokeWeight = 2;
  const circleRadius = 20;

  class Point {
    constructor(x, y, velX, velY, radius) {
      this.x = x;
      this.y = y;
      this.velX = velX;
      this.velY = velY;
      this.radius = radius;
    }

    update() {
      this.x += this.velX;
      this.y += this.velY;

      if (this.x < 0 || this.x > width) {
        this.velX *= -1;
      }
      if (this.y < 0 || this.y > height) {
        this.velY *= -1;
      }
    }
  }





  for (let i = 0; i < pointCount; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const velX = random(-1, 1) * maxVel;
    const velY = random(-1, 1) * maxVel;
    points.push(new Point(x, y, velX, velY, circleRadius * random(0.6, 1.1)));
  }


  return () => {
    fill('white');
    rect(0, 0, width, height);

    push();

    stroke('black');
    strokeWeight(circleStrokeWeight);
    for (let i = 0; i < points.length; i++) {
      circle(points[i].x, points[i].y, points[i].radius);
      points[i].update();
    }

    pop();

  };



}

canvasSketch(sketch, settings);
