var captions = ['Am I good enough?','Do you love me?','Please please please follow me','I am beautiful and cool and you want to be me','I am horrible and embarrassing and you cant look away','Cringe Paradigm','Women want me, fish fear me','I exist for you','Posting machine broke','I post therefore I am','You are very very special I promise','HateMeHateMeHateMe','RIP Narcissus he would have loved social media','Consume me'];

var index = 0;


var r, b;
function setup() {
  createCanvas(900, 700);
  r = color(100,255,150);

  b = color(100,100,255);
}

function draw() {
  //background(255);
  var t = map(mouseX,0,width,0,1.0);
  var c = lerpColor(r,b,t);

  //if(mouseX>120 && mouseX<220 && mouseY>80 && mouseY<160){ 
    //fill(random(255),random(255),random(255))}
  stroke(66,73,77);
  strokeWeight(2);
  ellipse(170,110,100);
  fill(c)
 
    if(mouseX>100 && mouseX<250 && mouseY>250 && mouseY<400){
    fill(random(255),random(255),random(255))}
  rect(100, 250, 150);
  fill(c);
  
   if(mouseX>375 && mouseX<525 && mouseY>250 && mouseY<400){
    fill(random(255),random(255),random(255))}
  rect(375, 250, 150);
  fill(c);
  
     if(mouseX>650 && mouseX<800 && mouseY>250 && mouseY<400){
    fill(random(255),random(255),random(255))}
  rect(650, 250, 150);
  fill(c);
  
    if(mouseX>100 && mouseX<250 && mouseY>450 && mouseY<600){
    fill(random(255),random(255),random(255))}
  rect(100, 450, 150);
  fill(c);
  
   if(mouseX>375 && mouseX<525 && mouseY>450 && mouseY<600){
    fill(random(255),random(255),random(255))}
  rect(375, 450, 150);
  fill(c);
  
   if(mouseX>650 && mouseX<800 && mouseY>450 && mouseY<600){
    fill(random(255),random(255),random(255))}
  rect(650, 450, 150);
  fill(c);
  
  noStroke();
  fill(66,73,77)
  textSize(15);
  text('524 posts', 300, 100);
  text('134 followers', 400, 100);
  text('246 following', 520, 100);
  
  
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
  fill(66,73,77);
  textSize(14);
  text(captions[index], 300, 150);

 

}



