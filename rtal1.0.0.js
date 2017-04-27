var x1 = Math.floor((Math.random() * 10) + 1);
var x2 = Math.floor((Math.random() * 10) + 1);
var x3 = Math.floor((Math.random() * 10) + 1);
var sx1=435, sx2=435, sx3=685, sx4=645, sx5=935, sx6=895;
var sy1=322, sy2=283, sy3=322, sy4=283, sy5=322, sy6=283;
var slix1=435, slix2=435, slix3=685, slix4=685, slix5=935, slix6=935;
var sliy1=322, sliy2=283, sliy3=322, sliy4=283, sliy5=322, sliy6=283;
var boxsizex = 200;
var boxsizey = 100;
var overRectstart = 1;
var ovPr;
var medx, medy;
var loadComp = 0;
function preload() {
  ampera = loadFont('data/Ampera.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  module01 = loadSound("data/Module01/00_" + x1 + '.mp3', loaded1);
  module02 = loadSound("data/Module01/00_" + x2 + '.mp3', loaded2);
  module03 = loadSound("data/Module01/00_" + x3 + '.mp3', loaded3);
  noStroke();
  medx = width/2;
  medy = height/2;
  textFont("Ampera");

}

function loaded1() {
  console.log("loaded");
  loadComp++;
  textSize(12);
  fill(255, 100);
  text("Ready", width/2-315, height/2-24)
}
function loaded2() {
  console.log("loaded");
  loadComp++;
  textSize(12);
  fill(255, 100);
  text("Ready", width/2-65, height/2-24)
}
function loaded3() {
  console.log("loaded");
  loadComp++;
  textSize(12);
  fill(255, 100);
  text("Ready", width/2+185, height/2-24)
}


function draw() {
  background(50, 100, 150);
  // console.log(loadComp);


  rectMode(CORNER);
  // first module
  fill(39,60,81);
  rect(medx-boxsizex/2-250-8, medy-boxsizey/2-50, boxsizex+15, boxsizey+130, 10, 10, 10, 10);
  fill(50, 82, 115);
  rect(medx-boxsizex/2-250, medy-boxsizey/2, boxsizex, boxsizey, 0, 10, 10, 10);
  rect(medx-boxsizex/2-250, medy-boxsizey/2-40, 50, 40, 10, 10, 0, 0);
  fill(150)
  textAlign(CENTER);
  textStyle(BOLD);
  textSize(30);
  text(x1, medx-boxsizex/2-250+25, medy-boxsizey/2-10);

  // second module
  fill(39,60,81);
  rect(medx-boxsizex/2-8, medy-boxsizey/2-50, boxsizex+15, boxsizey+130, 10, 10, 10, 10);
  fill(50, 82, 115);
  rect(medx-boxsizex/2, medy-boxsizey/2, boxsizex, boxsizey, 0, 10, 10, 10);
  rect(medx-boxsizex/2, medy-boxsizey/2-40, 50, 40, 10, 10, 0, 0);
  fill(150)
  textAlign(CENTER);
  textStyle(BOLD);
  textSize(30);
  text(x2, medx-boxsizex/2+25, medy-boxsizey/2-10);

  // third module
  fill(39,60,81);
  rect(medx-boxsizex/2+250-8, medy-boxsizey/2-50, boxsizex+15, boxsizey+130, 10, 10, 10, 10);
  fill(50, 82, 115);
  rect(medx-boxsizex/2+250, medy-boxsizey/2, boxsizex, boxsizey, 0, 10, 10, 10);
  rect(medx-boxsizex/2+250, medy-boxsizey/2-40, 50, 40, 10, 10, 0, 0);
  fill(150)
  textAlign(CENTER);
  textStyle(BOLD);
  textSize(30);
  text(x3, medx-boxsizex/2+275, medy-boxsizey/2-10);

  if (mouseX >= width/2-65 && mouseX <= width/2+65 &&
     mouseY >= 130 && mouseY <= 130+30 && mouseIsPressed) {
       ovPr = 0;
    } else if (mouseX >= width/2-65 && mouseX <= width/2+65 &&
      mouseY >= 130 && mouseY <= 130+30) {
        ovPr = 30;
    } else {
       ovPr = 20;
    }


    // sliderPan1
    fadePosx1 = sx1
    fadePosy1 = sy1
    noStroke();
    rectMode(CENTER);
    fill(30, 50, 70);
    rect(slix1, sliy1, 94, 20, 6, 6, 6, 6)
    textSize(50);
    textAlign(CORNER);
    if ((Math.floor((fadePosx1-395)*1.25)-50) == 0) {
      fill(30, 50, 70);
    } else {
      fill(150);
    }
    text(Math.floor((fadePosx1-395)*1.25)-50, slix1-60, 420);
    if (mouseIsPressed && mouseX>=slix1-40 && mouseX<=slix1+40 &&
    mouseY>=sliy1-10 && mouseY<=sliy1+10) {
      sx1 = mouseX;
      fill(79, 105, 132);
      rect(fadePosx1, fadePosy1, 10, 18, 6, 6, 6, 6);
    } else {
      fill(39, 72, 104);
      rect(fadePosx1, fadePosy1, 10, 18, 6, 6, 6, 6);
    }
    module01.pan((Math.floor((fadePosx1-395)*1.25)-50)*0.02);

    // sliderVol2
    fadePosx2 = sx2
    fadePosy2 = sy2
    noStroke();
    rectMode(CENTER);
    fill(30, 50, 70);
    rect(slix2, sliy2, 94, 20, 6, 6, 6, 6)
    textSize(50);
    textAlign(CENTER);
    if ((Math.floor((fadePosx2-395)*1.25) == 0)) {
      fill(30, 50, 70);
    } else {
      fill(150);
    }
    text(Math.floor((fadePosx2-395)*1.25), slix2+60, 420);
    if (mouseIsPressed && mouseX>=slix2-40 && mouseX<=slix2+40 &&
    mouseY>=sliy2-10 && mouseY<=sliy2+10) {
      sx2 = mouseX;
      fill(79, 105, 132);
      rect(fadePosx2, fadePosy2, 10, 18, 6, 6, 6, 6);
    } else {
      fill(39, 72, 104);
      rect(fadePosx2, fadePosy2, 10, 18, 6, 6, 6, 6);
    }
    module01.setVolume(Math.floor((fadePosx2-395)*1.25)/100);

    // sliderPan3
    fadePosx3 = sx3
    fadePosy3 = sy3
    noStroke();
    rectMode(CENTER);
    fill(30, 50, 70);
    rect(slix3, sliy3, 94, 20, 6, 6, 6, 6)
    textSize(50);
    textAlign(CORNER);
    if ((Math.floor((fadePosx3-605)*1.25)-100) == 0) {
      fill(30, 50, 70);
    } else {
      fill(150);
    }
    text(Math.floor((fadePosx3-605)*1.25)-100, slix3-60, 420);
    if (mouseIsPressed && mouseX>=slix3-40 && mouseX<=slix3+40 &&
    mouseY>=sliy3-10 && mouseY<=sliy3+10) {
      sx3 = mouseX;
      fill(79, 105, 132);
      rect(fadePosx3, fadePosy3, 10, 18, 6, 6, 6, 6);
    } else {
      fill(39, 72, 104);
      rect(fadePosx3, fadePosy3, 10, 18, 6, 6, 6, 6);
    }
    module02.pan((Math.floor((fadePosx3-605)*1.25)-100)*0.02);

    // sliderVol4
    fadePosx4 = sx4
    fadePosy4 = sy4
    noStroke();
    rectMode(CENTER);
    fill(30, 50, 70);
    rect(slix4, sliy4, 94, 20, 6, 6, 6, 6)
    textSize(50);
    textAlign(CENTER);
    if ((Math.floor((fadePosx4-605)*1.25)-50) == 0 ) {
      fill(30, 50, 70);
    } else {
      fill(150);
    }
    text(Math.floor((fadePosx4-605)*1.25)-50, slix4+60, 420);
    if (mouseIsPressed && mouseX>=slix4-40 && mouseX<=slix4+40 &&
    mouseY>=sliy4-10 && mouseY<=sliy4+10) {
      sx4 = mouseX;
      fill(79, 105, 132);
      rect(fadePosx4, fadePosy4, 10, 18, 6, 6, 6, 6);
    } else {
      fill(39, 72, 104);
      rect(fadePosx4, fadePosy4, 10, 18, 6, 6, 6, 6);
    }
    module02.setVolume((Math.floor((fadePosx4-605)*1.25)-50)/100);

    // sliderPan5
    fadePosx5 = sx5
    fadePosy5 = sy5
    noStroke();
    rectMode(CENTER);
    fill(30, 50, 70);
    rect(slix5, sliy5, 94, 20, 6, 6, 6, 6)
    textSize(50);
    textAlign(CORNER);
    if ((Math.floor((fadePosx5-855)*1.25)-100) == 0) {
      fill(30, 50, 70);
    } else {
      fill(150);
    }
    text(Math.floor((fadePosx5-855)*1.25)-100, slix5-60, 420);
    if (mouseIsPressed && mouseX>=slix5-40 && mouseX<=slix5+40 &&
    mouseY>=sliy5-10 && mouseY<=sliy5+10) {
      sx5 = mouseX;
      fill(79, 105, 132);
      rect(fadePosx5, fadePosy5, 10, 18, 6, 6, 6, 6);
    } else {
      fill(39, 72, 104);
      rect(fadePosx5, fadePosy5, 10, 18, 6, 6, 6, 6);
    }
    module03.pan((Math.floor((fadePosx5-855)*1.25)-100)*0.02);

    // sliderVol6
    fadePosx6 = sx6
    fadePosy6 = sy6
    noStroke();
    rectMode(CENTER);
    fill(30, 50, 70);
    rect(slix6, sliy6, 94, 20, 6, 6, 6, 6)
    textSize(50);
    textAlign(CENTER);
    if ((Math.floor((fadePosx6-855)*1.25)-50) == 0) {
      fill(30, 50, 70);
    } else {
      fill(150);
    }
    text(Math.floor((fadePosx6-855)*1.25)-50, slix6+60, 420);
    if (mouseIsPressed && mouseX>=slix6-40 && mouseX<=slix6+40 &&
    mouseY>=sliy6-10 && mouseY<=sliy6+10) {
      sx6 = mouseX;
      fill(79, 105, 132);
      rect(fadePosx6, fadePosy6, 10, 18, 6, 6, 6, 6);
    } else {
      fill(39, 72, 104);
      rect(fadePosx6, fadePosy6, 10, 18, 6, 6, 6, 6);
    }
    module03.setVolume((Math.floor((fadePosx6-855)*1.25)-50)/100);

      // BOTON DE PLAY GENERAL

  fill(50, 100, 150);
  rectMode(CORNER);
  fill(50, 90);
  rectMode(CORNER);
  rect(medx-100, 115, 200, 50, 10, 10, 10, 10);
  fill(ovPr, 90);
  rect(medx-100+4, 115+4, 192, 42, 8, 8, 8, 8);
  fill(150, 255)
  textAlign(CENTER);
  textSize(30);
  if (loadComp == 3) {
    text("click to play", medx, 150);
  } else {
    text("loading", medx, 150);
  }
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
