var x1 = Math.floor((Math.random() * 10) + 1);
var x2 = Math.floor((Math.random() * 10) + 1);
var x3 = Math.floor((Math.random() * 10) + 1);
var boxsizex = 200;
var boxsizey = 100;
var overRectstart = 1;
var ovPr;
var medx, medy;
var loadComp = 0;
function preload() {
  ampera = loadFont('data/Ampera.ttf');
}
var vol1hist = [];
var vol2hist = [];
var vol3hist = [];
var vol1histM = [];
var vol2histM = [];
var vol3histM = [];

var ps;

// data/Pruebas de frecuencias/constantes/1.0/400.mp3

function setup() {
  createCanvas(windowWidth, windowHeight);
  module01 = loadSound("data/Module01/00_" + x1 + '.mp3' , loaded1);
  module02 = loadSound("data/Module01/00_" + x2 + '.mp3', loaded2);
  module03 = loadSound("data/Module01/00_" + x3 + '.mp3', loaded3);
  noStroke();
  medx = width/2;
  medy = height/2;
  textFont("Ampera");
  amp1 = new p5.Amplitude();
  amp2 = new p5.Amplitude();
  amp3 = new p5.Amplitude();
  amp1.setInput(module01);
  amp2.setInput(module02);
  amp3.setInput(module03);
  sx1=435, sx2=435, sx3=685, sx4=645, sx5=935, sx6=895;
  sy1=medy+19, sy2=medy-20, sy3=medy+19, sy4=medy-20, sy5=medy+19, sy6=medy-20;
  slix1=435, slix2=435, slix3=685, slix4=685, slix5=935, slix6=935;
  sliy1=medy+19, sliy2=medy-20, sliy3=medy+19, sliy4=medy-20, sliy5=medy+19, sliy6=medy-20;

}

function loaded1() {
  console.log("loaded");
  loadComp++;
}
function loaded2() {
  console.log("loaded");
  loadComp++;
}
function loaded3() {
  console.log("loaded");
  loadComp++;
}

function draw() {
  background(50, 100, 150);
  // console.log(loadComp);
  rectMode(CENTER);

  // first module
  fill(39,60,81);
  rect(medx-248, medy+17, boxsizex+15, boxsizey+130, 10, 10, 10, 10);
  fill(50, 82, 115);
  rect(medx-248, medy, boxsizex, boxsizey, 0, 0, 10, 10);
  rect(medx-323, medy-70, 50, 40, 10, 0, 0, 0);
  fill(30, 50, 70);
  rect(medx-219, medy-74, 142, 32, 0, 10, 0, 0);
  fill(150)
  textAlign(CENTER);
  textStyle(BOLD);
  textSize(30);
  text(x1, medx-boxsizex/2-250+25, medy-boxsizey/2-10);

  // second module
  fill(39,60,81);
  rect(medx, medy+17, boxsizex+15, boxsizey+130, 10, 10, 10, 10);
  fill(50, 82, 115);
  rect(medx, medy, boxsizex, boxsizey, 0, 0, 10, 10);
  rect(medx-75, medy-70, 50, 40, 10, 0, 0, 0);
  fill(30, 50, 70);
  rect(medx+29, medy-74, 142, 32, 0, 10, 0, 0);
  fill(150)
  textAlign(CENTER);
  textStyle(BOLD);
  textSize(30);
  text(x2, medx-boxsizex/2+25, medy-boxsizey/2-10);

  // third module
  fill(39,60,81);
  rect(medx+248, medy+17, boxsizex+15, boxsizey+130, 10, 10, 10, 10);
  fill(50, 82, 115);
  rect(medx+248, medy, boxsizex, boxsizey, 0, 0, 10, 10);
  rect(medx+173, medy-70, 50, 40, 10, 0, 0, 0);
  fill(30, 50, 70);
  rect(medx+277, medy-74, 142, 32, 0, 10, 0, 0);
  fill(150)
  textAlign(CENTER);
  textStyle(BOLD);
  textSize(30);
  text(x3, medx-boxsizex/2+275, medy-boxsizey/2-10);


    // ruleH = medy-74;
    // stroke(0);
    // line(0, ruleH, windowWidth, ruleH);
    // ruleV = 530;
    // line(ruleV, 0, ruleV, windowHeight);
    // noStroke();


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
    text(Math.floor((fadePosx1-395)*1.25)-50, slix1-55, 420);
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
    text(Math.floor((fadePosx2-395)*1.25), slix2+55, 420);
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
    text(Math.floor((fadePosx3-605)*1.25)-100, slix3-57, 420);
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
    text(Math.floor((fadePosx4-605)*1.25)-50, slix4+53, 420);
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
    text(Math.floor((fadePosx5-855)*1.25)-100, slix5-59, 420);
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
    text(Math.floor((fadePosx6-855)*1.25)-50, slix6+51, 420);
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


    // --------------- VUMETROS --------------- //

    // vumetro 1

    vol1 = amp1.getLevel();
    vol1hist.push(vol1/7);
    stroke(255);
    noFill();
    beginShape();
    for (var i = 0; i < vol1hist.length; i++) {
      var y = map(vol1hist[i], 0, 1, medy-65, 0);
      vertex(i+396, y);
    }
    endShape();
    if (vol1hist.length > 135) {
      vol1hist.splice(0, 1);
    }
    // vumetro 2
    vol2 = amp2.getLevel();
    vol2hist.push(vol2/7);
    stroke(255);
    noFill();
    beginShape();
    for (var i = 0; i < vol2hist.length; i++) {
      var y = map(vol2hist[i], 0, 1, medy-65, 0);
      vertex(i+644, y);
    }
    endShape();
    if (vol2hist.length > 135) {
      vol2hist.splice(0, 1);
    }
    // vumetro 3
    vol3 = amp3.getLevel();
    vol3hist.push(vol3/7);
    stroke(255);
    noFill();
    beginShape();
    for (var i = 0; i < vol3hist.length; i++) {
      var y = map(vol3hist[i], 0, 1, medy-65, 0);
      vertex(i+892, y);
    }
    endShape();
    if (vol3hist.length > 135) {
      vol3hist.splice(0, 1);
    }
    noStroke();

    // --------------- VUMETRO GENERAL --------------- //

    fill(50,82,115);
    rect(medx, medy+200, 600, 80, 10, 10, 10, 10);
    fill(30,50,70);
    rect(medx, medy+200, 596, 76, 10, 10, 10, 10);
    fill(15,25,35);
    rect(medx, medy+200, 580, 60, 10, 10, 10, 10);
    // vumetro 1
    vol1 = amp1.getLevel();
    vol1histM.push(vol1/6.3);
    stroke(200, 200, 255);
    noFill();
    beginShape();
    for (var i = 0; i < vol1histM.length; i++) {
      var y = map(vol1histM[i], 0, 1, medy+220 , 0);
      vertex(i+400, y);
    }
    endShape();
    if (vol1histM.length > 566) {
      vol1histM.splice(0, 1);
    }
    // vumetro 2
    vol2 = amp2.getLevel();
    vol2histM.push(vol2/6.3);
    stroke(100, 100, 255);
    noFill();
    beginShape();
    for (var i = 0; i < vol2histM.length; i++) {
      var y = map(vol2histM[i], 0, 1, medy+218, 0);
      vertex(i+400, y);
    }
    endShape();
    if (vol2histM.length > 566) {
      vol2histM.splice(0, 1);
    }
    // vumetro 3
    vol3 = amp3.getLevel();
    vol3histM.push(vol3/6.3);
    stroke(255);
    noFill();
    beginShape();
    for (var i = 0; i < vol3histM.length; i++) {
      var y = map(vol3histM[i], 0, 1, medy+216, 0);
      vertex(i+400, y);
    }
    endShape();
    if (vol3histM.length > 566) {
      vol3histM.splice(0, 1);
    }
    noStroke();




      // BOTON DE PLAY GENERAL
    if (module01.isPlaying() ||  module02.isPlaying() || module03.isPlaying)


    if (mouseX >= medx-100 && mouseX <= medx+100 &&
      mouseY >= medy-187 && mouseY <= medy-137 && mouseIsPressed) {
        ovPr = 0;
    } else if (mouseX >= medx-100 && mouseX <= medx+100 &&
      mouseY >= medy-187 && mouseY <= medy-137) {
      ovPr = 30;
    } else {
      ovPr = 20;
    }
  rectMode(CENTER);
  fill(50,82,115);
  rect(medx, medy-162, 200, 50, 10, 10, 10, 10);
  fill(ovPr, 90);
  rect(medx, medy-162, 192, 42, 8, 8, 8, 8);
  fill(150, 255)
  textSize(30);
  if (loadComp == 3) {
    text("click to " + ps, medx, medy-153);
  } else {
    text("loading", medx, medy-153);
  }
  if (module01.isPlaying() ||  module02.isPlaying() || module03.isPlaying()) {
    ps = "stop";
  } else {
    ps = "play";
  }
}

function mousePressed() {
 if ((module01.isPlaying() ||  module02.isPlaying() || module03.isPlaying()) &&
 mouseX >= medx-100 && mouseX <= medx+100 && mouseY >= medy-187 && mouseY <= medy-137) {
   module01.pause();
   module02.pause();
   module03.pause();
 } else if (mouseX >= medx-100 && mouseX <= medx+100 &&
   mouseY >= medy-187 && mouseY <= medy-137) {
   module01.play();
   module02.play();
   module03.play();
 } else {

 }
 }
