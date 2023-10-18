let asteroidArray = [];
let maxAsteroids = 16;

class Asteroid {
  constructor(){
    //this.x means that each asteroid will have an x parameter, this is how you give parameters inside a class
    this.x = 0;
    this.y = random(30, height - 30);
    this.v = random(2, 4);
    this.r = random(15, 40);
  }
  update(){
    this.x += this.v;
    if (this.x > width + this.r) {
      this.r = random(15, 40);
      this.x = 0 - this.r;
      }

  }
}
function setup() {
  createCanvas(800, 600);
  for (let i = 0; i < asteroidArray; i++) {
    let anAsteroid = new Asteroid();
    asteroidArray.push(anAsteroid);
    }
  }

function draw() {
  background("lightblue");
  fill(220, 10, 100);

  for (let i = 0; i < asteroidArray.length; i += 1) {
    let anAsteroid = asteroidArray[i];
    anAsteroid.update
    // draw circles
    ellipse(this.x, this.y, 2 * this.r, 2 * this.r);

  
  }
}
