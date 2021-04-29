
let hearteyes;

let x = 300;
let y = 400;
let xspeed = 7;
let yspeed = 4;

let r = 75;



function setup() {
   createCanvas(windowWidth, windowHeight);
    hearteyes=loadImage('lovemeassets/hearteyes.png');

}

function draw() {
  clear();
  image(hearteyes, x, y, r, r);
  x += xspeed;
  y += yspeed;
  if (x > width - r || x < r) {
    xspeed = -xspeed;
  }
  if (y > height - r || y < r) {
    yspeed = -yspeed;
  }

  
}