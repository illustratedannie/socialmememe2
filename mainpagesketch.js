var input;//variable to save  input from keyboard
var button; //variable to create a button object
let font;
let heart;
let redheart;
let comment;
let greencomment;
let share;
let blueshare;
let error;
let prints;
let escape;
let second;
let moth;
let bee;
let creek;
let fall;
let food;
let sun;
let veges;
let username;
let photos = [];
var captions = ['enjoying the sunshine today ☀️✨','stuffing myself w delicious food for the lunar new year 🌙✨','creekside reflections 🍂☀️','🌺🐝✨🌊 #savethebees','proofing some fall themed prints 🍂','veges from @peoplesmarketbtown 💚💚💚','Escape Velocity, diptych, 2020','second layer goin alright','moth friend keeping us company 🦋💛','leaving my prints all over the place 💋'];
var index = 0;

function preload(){
  font=loadFont('mpassets/TGH.otf')
}


function setup() {
  createCanvas(900, 500);
  username = loadImage('mpassets/username.png');
  bee=loadImage('mpassets/bee.png');
  creek=loadImage('mpassets/creek.png');
  fall=loadImage('mpassets/fall.png');
  food=loadImage('mpassets/food.png');
  sun=loadImage('mpassets/sun.png');
  veges=loadImage('mpassets/veges.png');
  prints=loadImage('mpassets/prints.png');
  escape=loadImage('mpassets/escape.png');
  second=loadImage('mpassets/second.png');
  moth=loadImage('mpassets/moth.png');
  heart=loadImage('mpassets/heart.png');
  redheart=loadImage('mpassets/redheart.png');
  comment=loadImage('mpassets/comment.png');
  greencomment=loadImage('mpassets/greencomment.png');
  share=loadImage('mpassets/share.png');
  blueshare=loadImage('mpassets/blueshare.png');
  error=loadSound('mpassets/error.wav');
  
  
  photos = [bee, creek, fall, food, sun, veges, prints, escape, second, moth];
  
    input = createInput();//determining what info the variable input will hold
  input.position(625, 560);
  button = createButton("comment");//button
  button.position(800, 562);//x,y location of input
  button.mouseReleased(drawComment); //action for pressing the button object
}

function drawComment() {
  textSize(13);//size of  font
  var name = input.value();//what did the user enter
  for (var i=0; i < 30; i++) {
   noStroke();
    fill(0);//text color
    text(name, 525, 175);//text placement
  
  }
  }


function draw() {
  
//errorsoundoverusername  
  if(mouseX>501 && mouseX<900 && mouseY<86 && mouseY>0){
  error.play();
  }

image(username,501,0,400,86);

image(heart, 525, 410, 25,25);  
image(comment, 580, 412, 22, 22);
image(share, 633, 412, 22, 22);

  //showredheart
  if(mouseX>525 && mouseX<550 && mouseY>410 && mouseY<435){
image(redheart,525,410,25,25);
  }  

 //showgreencommentbubble 
if(mouseX>580 && mouseX<602 && mouseY>412 && mouseY<434){
  image(greencomment,580, 412, 22, 22)
}   
  
  //shownblueshareplane
  if(mouseX>633 && mouseX<655 && mouseY>412 && mouseY<434){
    image(blueshare,633, 412, 22, 22)
  }
  
//border
noFill();
stroke(66,73,77);
strokeWeight(2);
rect(1,1,898,498);

  
//dividerline
noFill();
rect(501,0,399,499);

  //commentbox

noFill();
rect(501, 150, 399, 250);

  
}

function mousePressed() {
background(255);
 
  
//captions 
  index = floor(random(captions.length));
  console.log(index);

  if (index == captions.length) {
    index = 0;
  }

  noStroke();
  fill(0);
  textSize(14);
  text(captions[index], 515, 125);

//photos
  let r = random(photos);
  image(r,0,0,500,500); 
}

 

