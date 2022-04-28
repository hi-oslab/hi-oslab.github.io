let o, s, l;
let gravity = 1.0;
let mass = 5.0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  // 입력: x, y, mass(질량), gravity(중력)
  o = new Spring2D(0.0, width / 2, mass, gravity, 0,width);
  s = new Spring2D(0.0, width / 2, mass, gravity, 1,width);
  l = new Spring2D(0.0, width / 2, mass, gravity, 2,width);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  fill(255, 150);
  rect(0, 0, width, height);
}

function draw() {
  fill(255, 150);
  rect(0, 0, width, height);

  // drawO(createVector(width / 2, height / 2));
  // drawS(createVector(width / 2, height / 2));
  // drawL(createVector(width / 2, height / 2));
  o.update(mouseX, mouseY);
  o.display(mouseX, mouseY);
  s.update(o.x, o.y);
  s.display(o.x, o.y);
  l.update(s.x, s.y);
  l.display(s.x, s.y);
}

function Spring2D(xpos, ypos, m, g, val,w) {
  this.x = xpos; // x 와 y 좌표
  this.y = ypos;
  this.vx = 0; // x축과 y축 속도
  this.vy = 0;
  this.mass = m;
  this.gravity = g;
  this.radius = 0.0008 * w;
  this.stiffness = 0.2;
  this.damping = 0.7;
  this.val = val;

  this.update = function (targetX, targetY) {
    let forceX = (targetX - this.x) * this.stiffness;
    let ax = forceX / this.mass;
    this.vx = this.damping * (this.vx + ax);
    this.x += this.vx;
    let forceY = (targetY - this.y) * this.stiffness;
    forceY += this.gravity;
    let ay = forceY / this.mass;
    this.vy = this.damping * (this.vy + ay);
    this.y += this.vy;
  };

  this.display = function (nx, ny) {
    if (this.val == 0) {
      noStroke();
      fill(0);
      push();
      translate(this.x - 128 * this.radius, this.y - 128 * this.radius);
      scale(this.radius);
      beginShape();
      // 1// /
      vertex(127.6, 259.6);
      bezierVertex(57.3, 259.6, 0.0, 202.3, 0.0, 131.9);
      bezierVertex(0.0, 61.5, 57.3, 4.3, 127.6, 4.3);
      bezierVertex(198.0, 4.3, 255.3, 61.5, 255.3, 131.9);
      bezierVertex(255.3, 202.3, 198.0, 259.6, 127.6, 259.6);
      // 1// /
      beginContour();
      vertex(127.6, 18.3);
      bezierVertex(65.0, 18.3, 14.0, 69.3, 14.0, 131.9);
      bezierVertex(14.0, 194.6, 65.0, 245.6, 127.6, 245.6);
      bezierVertex(190.3, 245.6, 241.3, 194.6, 241.3, 131.9);
      bezierVertex(241.3, 69.3, 190.3, 18.3, 127.6, 18.3);
      endContour();
      endShape();
      pop();
    } else if (this.val == 1) {
      push();
      translate(this.x - 128 * this.radius, this.y - 128 * this.radius);
      scale(this.radius);
      //control shape scale
      beginShape();
      // 1// /
      vertex(540.6, 254.7);
      vertex(246.5, 254.7);
      vertex(393.6, 0.0);
      vertex(540.6, 254.7);
      // 1// /
      beginContour();
      vertex(270.8, 240.7);
      vertex(516.4, 240.7);
      vertex(393.6, 28.0);
      vertex(270.8, 240.7);
      endContour();
      endShape();
      pop();
    } else if (this.val == 2) {
      push();
      translate(this.x - 128 * this.radius, this.y - 128 * this.radius);
      scale(this.radius);

      //control shape scale
      // 1/ 3rd Shape
      beginShape();
      // 1/// /
      vertex(791.8, 254.0);
      vertex(570.4, 254.0);
      vertex(570.4, 184.3);
      vertex(791.8, 184.3);
      vertex(791.8, 254.0);
      // 1/// /
      beginContour();
      vertex(584.4, 240.0);
      vertex(777.8, 240.0);
      vertex(777.8, 198.3);
      vertex(584.4, 198.3);
      vertex(584.4, 240.0);
      endContour();
      endShape();

      // 1/// 3rd Shape
      beginShape();
      // 1/// /
      vertex(791.8, 166.0);
      vertex(570.4, 166.0);
      vertex(570.4, 96.3);
      vertex(791.8, 96.3);
      vertex(791.8, 166.0);
      // 1/// /
      beginContour();
      vertex(584.4, 152.0);
      vertex(777.8, 152.0);
      vertex(777.8, 110.3);
      vertex(584.4, 110.3);
      vertex(584.4, 152.0);
      endContour();
      endShape();

      // 1// 3rd Shape
      beginShape();
      // 1/// /
      vertex(791.8, 78.1);
      vertex(570.4, 78.1);
      vertex(570.4, 8.3);
      vertex(791.8, 8.3);
      vertex(791.8, 78.1);
      // 1/// /
      beginContour();
      vertex(584.4, 64.1);
      vertex(777.8, 64.1);
      vertex(777.8, 22.3);
      vertex(584.4, 22.3);
      vertex(584.4, 64.1);
      endContour();
      endShape();
      pop();
    }
  };
}
