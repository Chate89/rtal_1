var sliderVolume1, sliderPan1, sliderVolume2, sliderPan2, sliderVolume3, sliderPan3;
var x1 = Math.floor((Math.random() * 10) + 1);
var x2 = Math.floor((Math.random() * 10) + 1);
var x3 = Math.floor((Math.random() * 10) + 1);
var boxsizex = 200;
var boxsizey = 100;
var overRectstart = 1;
var ovPr;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50, 100, 150);
  module01 = loadSound("data/Module01/00_" + x1 + '.mp3', loaded1);
  module02 = loadSound("data/Module01/00_" + x2 + '.mp3', loaded2);
  module03 = loadSound("data/Module01/00_" + x3 + '.mp3', loaded3);
  var medx = width/2;
  var medy = height/2;
  textFont("Verdana");
  noStroke();

  // first player
  fill(50, 90);
  rect(medx-boxsizex/2-250, medy-boxsizey/2, boxsizex, boxsizey, 0, 10, 10, 10);
  rect(medx-boxsizex/2-250, medy-boxsizey/2-40, 50, 40, 10, 10, 0, 0);
  fill(20, 90);
  rect(medx-boxsizex/2-250+8, medy-boxsizey/2+8, boxsizex-15, boxsizey-75, 6, 6, 6, 6);
  sliderVolume1 = createSlider(0, 1, 0.5,  0.01);
  sliderVolume1.position(medx-340, medy),
  sliderPan1 = createSlider(-1, 1, 0,  0.01);
  sliderPan1.position(medx-340, medy+25);
  fill(200)
  textAlign(CENTER);
  textStyle(BOLD);
  textSize(18);
  text(x1, medx-boxsizex/2-250+25, medy-boxsizey/2-10);


  // second player
  fill(50, 90);
  rect(medx-boxsizex/2, medy-boxsizey/2, boxsizex, boxsizey, 0, 10, 10, 10);
  rect(medx-boxsizex/2, medy-boxsizey/2-40, 50, 40, 10, 10, 0, 0);
  fill(20, 90);
  rect(medx-boxsizex/2+8, medy-boxsizey/2+8, boxsizex-15, boxsizey-75, 6, 6, 6, 6);
  sliderVolume2 = createSlider(0, 1, 0,  0.01);
  sliderVolume2.position(medx-90, medy),
  sliderPan2 = createSlider(-1, 1, 0,  0.01);
  sliderPan2.position(medx-90, medy+25);
  fill(200)
  textAlign(CENTER);
  textStyle(BOLD);
  textSize(18);
  text(x2, medx-boxsizex/2+25, medy-boxsizey/2-10);


  // third player
  fill(50, 90);
  rect(medx-boxsizex/2+250, medy-boxsizey/2, boxsizex, boxsizey, 0, 10, 10, 10);
  rect(medx-boxsizex/2+250, medy-boxsizey/2-40, 50, 40, 10, 10, 0, 0);
  fill(20, 90);
  rect(medx-boxsizex/2+250+8, medy-boxsizey/2+8, boxsizex-15, boxsizey-75, 6, 6, 6, 6);
  sliderVolume3 = createSlider(0, 1, 0,  0.01);
  sliderVolume3.position(medx+160, medy),
  sliderPan3 = createSlider(-1, 1, 0,  0.01);
  sliderPan3.position(medx+160, medy+25);
  fill(200)
  textAlign(CENTER);
  textStyle(BOLD);
  textSize(18);
  text(x3, medx-boxsizex/2+275, medy-boxsizey/2-10);
}

function loaded1() {
  console.log("loaded");
  textSize(12);
  fill(255, 100);
  text("Ready", width/2-315, height/2-24)
}
function loaded2() {
  console.log("loaded");
  textSize(12);
  fill(255, 100);
  text("Ready", width/2-65, height/2-24)
}
function loaded3() {
  console.log("loaded");
  textSize(12);
  fill(255, 100);
  text("Ready", width/2+185, height/2-24)
}


function draw() {
  var medx = width/2;
  var medy = height/2;

  module01.setVolume(sliderVolume1.value());
  module01.pan(sliderPan1.value());
  module02.setVolume(sliderVolume2.value());
  module02.pan(sliderPan2.value());
  module03.setVolume(sliderVolume3.value());
  module03.pan(sliderPan3.value());

  if (mouseX >= width/2-65 && mouseX <= width/2+65 &&
     mouseY >= 130 && mouseY <= 130+30 && mouseIsPressed) {
       ovPr = 0;

    } else if (mouseX >= width/2-65 && mouseX <= width/2+65 &&
      mouseY >= 130 && mouseY <= 130+30) {
        ovPr = 30;
    } else {
       ovPr = 20;
    }


  // start button
  fill(50, 100, 150);
  rectMode(CORNER);
  rect(medx-65, 130, 130, 30, 10, 10, 10, 10);
  fill(50, 90);
  rectMode(CORNER);
  rect(medx-65, 130, 130, 30, 10, 10, 10, 10);
  fill(ovPr, 90);
  rect(medx-65+4, 134, 122, 22, 8, 8, 8, 8);
  fill(150, 255)
  textAlign(CENTER);
  textSize(11);
  text("click to play", medx, 149);


}

function mousePressed() {
 if (module01.isPlaying() && mouseX >= width/2-65 && mouseX <= width/2+65 &&
    mouseY >= 130 && mouseY <= 130+30) {
   module01.pause();
 } else if (mouseX > width/2-65 && mouseX <= width/2+65 &&
    mouseY >= 130 && mouseY <= 130+30){
   module01.play();
 }
 if (module02.isPlaying() && mouseX > width/2-65 && mouseX <= width/2+65 &&
    mouseY >= 130 && mouseY <= 130+30) {
   module02.pause();
 } else if (mouseX > width/2-65 && mouseX <= width/2+65 &&
    mouseY >= 130 && mouseY <= 130+30){
   module02.play();
 }
 if (module03.isPlaying() && mouseX > width/2-65 && mouseX <= width/2+65 &&
    mouseY >= 130 && mouseY <= 130+30) {
   module03.pause();
 } else if (mouseX > width/2-65 && mouseX <= width/2+65 &&
    mouseY >= 130 && mouseY <= 130+30){
   module03.play();
 }
}
