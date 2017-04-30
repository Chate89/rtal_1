var x1 = Math.floor((Math.random() * 10) + 1);
var x2 = Math.floor((Math.random() * 10) + 1);
var x3 = Math.floor((Math.random() * 10) + 1);
var m1l = 0;
var m2l = 0;
var m3l = 0;
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
var upi;
var cnv;
var mv = 1;
var syM = 350;
var mrm = 300;



// data/Pruebas de frecuencias/constantes/1.0/400.mp3
// "data/Module01/00_" + x2 + '.mp3'

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  cnv.mouseWheel(changeYpos);
  upi = 50;

  module01 = loadSound("data/Module01/00_" + x1 + '.mp3', loaded1, null, loading1);
  module02 = loadSound("data/Module01/00_" + x2 + '.mp3', loaded2, null, loading2);
  module03 = loadSound("data/Module01/00_" + x3 + '.mp3', loaded3, null, loading3);
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
  sx1=435, sx2=435, sx3=683, sx4=643, sx5=931, sx6=891;



}

function loaded1() {
  console.log("loaded");
  loadComp++;
  return false;
}
function loading1(total1) {
  m1l = total1;
}
function loaded2() {
  console.log("loaded");
  loadComp++;
}
function loading2(total2) {
  m2l = total2;
}
function loaded3() {
  console.log("loaded");
  loadComp++;
}
function loading3(total3) {
  m3l = total3;
}

function draw() {
  background(90, 120, 200);

  sy1=medy+19-upi, sy2=medy-20-upi, sy3=medy+19-upi, sy4=medy-20-upi,
  sy5=medy+19-upi, sy6=medy-20-upi, sxM = medx+400-5;
  slix1=435, slix2=435, slix3=683, slix4=683, slix5=931, slix6=931;
  sliy1=medy+19-upi, sliy2=medy-20-upi, sliy3=medy+19-upi,
  sliy4=medy-20-upi, sliy5=medy+19-upi, sliy6=medy-20-upi;
  // masterVolume(mv);


  rectMode(CENTER);
  // Base rectangle
  fill(30, 50, 70);
  rect(medx, medy+27-upi, 866, 406, 20, 20, 20, 20)
  fill(10,16,22);
  rect(medx, medy+27-upi, 860, 400, 20, 20, 20, 20);
  console.log(((m1l+m2l+m3l)*100+3)/3);

  // first module
  fill(20,40,50);
  rect(medx-244, medy+22-upi, boxsizex+15, boxsizey+130, 10, 10, 10, 10);
  fill(20,40,50);
  rect(medx-244, medy-60-upi, boxsizex+15, boxsizey+30, 10, 10, 10, 10);
  fill(39,60,81);
  rect(medx-248, medy+17-upi, boxsizex+15, boxsizey+130, 10, 10, 10, 10);
  fill(50, 82, 115);
  rect(medx-248, medy-upi, boxsizex, boxsizey, 0, 0, 10, 10);
  rect(medx-323, medy-70-upi, 50, 40, 10, 0, 0, 0);
  fill(30, 50, 70);
  rect(medx-219, medy-74-upi, 142, 32, 0, 10, 0, 0);
  fill(10,16,22);
  textAlign(CENTER);
  textStyle(BOLD);
  textSize(30);
  if (loaded1) {
    text(x1, medx-boxsizex/2-250+25+2, medy-upi-boxsizey/2-10+2);
    fill(150)
    textAlign(CENTER);
    textStyle(BOLD);
    textSize(30);
    text(x1, medx-boxsizex/2-250+25, medy-upi-boxsizey/2-10);
  } else {
    text("loading", medx-boxsizex/2-250+25+2, medy-upi-boxsizey/2-10+2);
  }

  // second module
  fill(20,40,50);
  rect(medx+4, medy+5+17-upi, boxsizex+15, boxsizey+130, 10, 10, 10, 10);
  fill(39,60,81);
  rect(medx, medy+17-upi, boxsizex+15, boxsizey+130, 10, 10, 10, 10);
  fill(50, 82, 115);
  rect(medx, medy-upi, boxsizex, boxsizey, 0, 0, 10, 10);
  rect(medx-75, medy-70-upi, 50, 40, 10, 0, 0, 0);
  fill(30, 50, 70);
  rect(medx+29, medy-74-upi, 142, 32, 0, 10, 0, 0);
  fill(10,16,22);
  textAlign(CENTER);
  textStyle(BOLD);
  textSize(30);
  text(x2, medx-boxsizex/2+25+2, medy-upi-boxsizey/2-10+2);
  fill(150)
  textAlign(CENTER);
  textStyle(BOLD);
  textSize(30);
  text(x2, medx-boxsizex/2+25, medy-upi-boxsizey/2-10);

  // third module
  fill(20,40,50);
  rect(medx+248+4, medy+5+17-upi, boxsizex+15, boxsizey+130, 10, 10, 10, 10);
  fill(39,60,81);
  rect(medx+248, medy+17-upi, boxsizex+15, boxsizey+130, 10, 10, 10, 10);
  fill(50, 82, 115);
  rect(medx+248, medy-upi, boxsizex, boxsizey, 0, 0, 10, 10);
  rect(medx+173, medy-70-upi, 50, 40, 10, 0, 0, 0);
  fill(30, 50, 70);
  rect(medx+277, medy-74-upi, 142, 32, 0, 10, 0, 0);
  fill(10,16,22);
  textAlign(CENTER);
  textStyle(BOLD);
  textSize(30);
  text(x3, medx-boxsizex/2+275+2, medy-upi-boxsizey/2-10+2);
  fill(150)
  textAlign(CENTER);
  textStyle(BOLD);
  textSize(30);
  text(x3, medx-boxsizex/2+275, medy-upi-boxsizey/2-10);


    // ruleH = medy-74;
    // stroke(0);
    // line(0, ruleH, windowWidth, ruleH);
    // ruleV = 530;
    // line(ruleV, 0, ruleV, windowHeight);
    // noStroke();

    //  MASTER SLIDER

    fadePosxM = sxM

    fill(15,25,35);
    rect(medx+400-5, medy+27-upi, 30, 280, 15, 15, 15, 15);
    fill(30,50,70);
    rect(medx+400-5+2, medy+27-upi+2, 26, 276, 15, 15, 15, 15);
    strokeWeight(2);
    stroke(10,16,22);
    line(fadePosxM+2, medy-upi-102, fadePosxM+2, medy+164-upi)
    strokeWeight(1);
    noStroke();
    slixM = medx+400-5;
    sliyM = medy+27-upi;
    syM = 320;
    if (mouseIsPressed && mouseY>=sliyM-135 && mouseY<=sliyM+135 &&
    mouseX>=slixM-15 && mouseX<=slixM+15) {
      mrm = mouseY;
      fill(15,25,35);
      rect(fadePosxM+2, mrm+2, 35, 15, 10, 10, 10, 10);
      fill(79, 105, 132);
      rect(fadePosxM, mrm, 35, 15, 10, 10, 10, 10);
    } else {
      fill(15,25,35);
      rect(fadePosxM+2, mrm+2, 35, 15, 10, 10, 10, 10);
      fill(39, 72, 104);
      rect(fadePosxM, mrm, 35, 15, 10, 10, 10, 10);
    }
    fill(30,50,70);
    rect(medx+390, 176-upi, 64, 40, 0, 20, 0, 20);
    nMas = (sliyM+136-mrm)*100/270;
    nMasF = nMas.toFixed(0);
    mv = nMasF/100
    masterVolume(mv);
    textSize(30);
    fill(10,16,22);
    text(nMasF, slixM-4+2, 188-upi+2);
    fill(150);
    text(nMasF, slixM-4, 188-upi);





    // sliderPan1
    fadePosx1 = sx1
    fadePosy1 = sy1
    noStroke();
    rectMode(CENTER);
    fill(10,16,22);
    rect(slix1, sliy1, 94, 10, 6, 6, 6, 6)
    fill(30, 50, 70);
    rect(slix1+1, sliy1+1, 92, 8, 6, 6, 6, 6)
    textSize(40);
    textAlign(CORNER);
    fill(10,16,22);
    text(Math.floor((fadePosx1-395)*1.25)-50, slix1-55+2, 420+2-upi);
    if ((Math.floor((fadePosx1-395)*1.25)-50) == 0) {
      fill(30, 50, 70);
    } else {
      fill(150);
    }
    text(Math.floor((fadePosx1-395)*1.25)-50, slix1-55, 420-upi);
    if (mouseIsPressed && mouseX>=slix1-40 && mouseX<=slix1+40 &&
    mouseY>=sliy1-10 && mouseY<=sliy1+10) {
      sx1 = mouseX;
      fill(15, 25, 35);
      rect(fadePosx1, fadePosy1, 10, 18, 6, 6, 6, 6);
      fill(79, 105, 132);
      rect(fadePosx1-1, fadePosy1-1, 8, 16, 6, 6, 6, 6);
    } else {
      fill(15, 25, 35);
      rect(fadePosx1, fadePosy1, 10, 18, 6, 6, 6, 6);
      fill(39, 72, 104);
      rect(fadePosx1-1, fadePosy1-1, 8, 16, 6, 6, 6, 6);
    }


    module01.pan((Math.floor((fadePosx1-395)*1.25)-50)*0.02);

    // sliderVol2
    fadePosx2 = sx2
    fadePosy2 = sy2
    noStroke();
    rectMode(CENTER);
    fill(15, 25, 35);
    rect(slix2, sliy2, 94, 10, 6, 6, 6, 6)
    fill(30, 50, 70);
    rect(slix2+1, sliy2+1, 92, 8, 6, 6, 6, 6)
    textSize(40);
    textAlign(CENTER);
    fill(10,16,22);
    text(Math.floor((fadePosx2-395)*1.25), slix2+55+2, 420+2-upi);
    if ((Math.floor((fadePosx2-395)*1.25) == 0)) {
      fill(30, 50, 70);
    } else {
      fill(150);
    }
    text(Math.floor((fadePosx2-395)*1.25), slix2+55, 420-upi);
    if (mouseIsPressed && mouseX>=slix2-40 && mouseX<=slix2+40 &&
    mouseY>=sliy2-10 && mouseY<=sliy2+10) {
      sx2 = mouseX;
      fill(15, 25, 35);
      rect(fadePosx2, fadePosy2, 10, 18, 6, 6, 6, 6);
      fill(79, 105, 132);
      rect(fadePosx2-1, fadePosy2-1, 8, 16, 6, 6, 6, 6);
    } else {
      fill(15, 25, 35);
      rect(fadePosx2, fadePosy2, 10, 18, 6, 6, 6, 6);
      fill(39, 72, 104);
      rect(fadePosx2-1, fadePosy2-1, 8, 16, 6, 6, 6, 6);
    }
    module01.setVolume(Math.floor((fadePosx2-395)*1.25)/100);
    //mutebutton


    // sliderPan3
    fadePosx3 = sx3
    fadePosy3 = sy3
    noStroke();
    rectMode(CENTER);
    fill(15, 25, 35);
    rect(slix3, sliy3, 94, 10, 6, 6, 6, 6)
    fill(30, 50, 70);
    rect(slix3+1, sliy3+1, 92, 8, 6, 6, 6, 6)
    textSize(40);
    textAlign(CORNER);
    fill(10,16,22);
    text(Math.floor((fadePosx3-603)*1.25)-100, slix3-57+2, 420+2-upi);
    if ((Math.floor((fadePosx3-603)*1.25)-100) == 0) {
      fill(30, 50, 70);
    } else {
      fill(150);
    }
    text(Math.floor((fadePosx3-603)*1.25)-100, slix3-57, 420-upi);
    if (mouseIsPressed && mouseX>=slix3-40 && mouseX<=slix3+40 &&
    mouseY>=sliy3-10 && mouseY<=sliy3+10) {
      sx3 = mouseX;
      fill(15, 25, 35);
      rect(fadePosx3, fadePosy3, 10, 18, 6, 6, 6, 6);
      fill(79, 105, 132);
      rect(fadePosx3-1, fadePosy3-1, 8, 16, 6, 6, 6, 6);
    } else {
      fill(15, 25, 35);
      rect(fadePosx3, fadePosy3, 10, 18, 6, 6, 6, 6);
      fill(39, 72, 104);
      rect(fadePosx3-1, fadePosy3-1, 8, 16, 6, 6, 6, 6);
    }
    module02.pan((Math.floor((fadePosx3-603)*1.25)-100)*0.02);

    // sliderVol4
    fadePosx4 = sx4
    fadePosy4 = sy4
    noStroke();
    rectMode(CENTER);
    fill(15, 25, 35);
    rect(slix4, sliy4, 94, 10, 6, 6, 6, 6)
    fill(30, 50, 70);
    rect(slix4+1, sliy4+1, 92, 8, 6, 6, 6, 6)
    textSize(40);
    textAlign(CENTER);
    fill(10,16,22);
    text(Math.floor((fadePosx4-603)*1.25)-50, slix4+53+2, 420+2-upi);
    if ((Math.floor((fadePosx4-603)*1.25)-50) == 0 ) {
      fill(30, 50, 70);
    } else {
      fill(150);
    }
    text(Math.floor((fadePosx4-603)*1.25)-50, slix4+53, 420-upi);
    if (mouseIsPressed && mouseX>=slix4-40 && mouseX<=slix4+40 &&
    mouseY>=sliy4-10 && mouseY<=sliy4+10) {
      sx4 = mouseX;
      fill(15, 25, 35);
      rect(fadePosx4, fadePosy4, 10, 18, 6, 6, 6, 6);
      fill(79, 105, 132);
      rect(fadePosx4-1, fadePosy4-1, 8, 16, 6, 6, 6, 6);
    } else {
      fill(15, 25, 35);
      rect(fadePosx4, fadePosy4, 10, 18, 6, 6, 6, 6);
      fill(39, 72, 104);
      rect(fadePosx4-1, fadePosy4-1, 8, 16, 6, 6, 6, 6);
    }
    module02.setVolume((Math.floor((fadePosx4-603)*1.25)-50)/100);


    // sliderPan5
    fadePosx5 = sx5
    fadePosy5 = sy5
    noStroke();
    rectMode(CENTER);
    fill(15, 25, 35);
    rect(slix5, sliy5, 94, 10, 6, 6, 6, 6)
    fill(30, 50, 70);
    rect(slix5+1, sliy5+1, 92, 8, 6, 6, 6, 6)
    textSize(40);
    textAlign(CORNER);
    fill(10,16,22);
    text(Math.floor((fadePosx5-851)*1.25)-100, slix5-59+2, 420+2-upi);
    if ((Math.floor((fadePosx5-851)*1.25)-100) == 0) {
      fill(30, 50, 70);
    } else {
      fill(150);
    }
    text(Math.floor((fadePosx5-851)*1.25)-100, slix5-59, 420-upi);
    if (mouseIsPressed && mouseX>=slix5-40 && mouseX<=slix5+40 &&
    mouseY>=sliy5-10 && mouseY<=sliy5+10) {
      sx5 = mouseX;
      fill(15, 25, 35);
      rect(fadePosx5, fadePosy5, 10, 18, 6, 6, 6, 6);
      fill(79, 105, 132);
      rect(fadePosx5-1, fadePosy5-1, 8, 16, 6, 6, 6, 6);
    } else {
      fill(15, 25, 35);
      rect(fadePosx5, fadePosy5, 10, 18, 6, 6, 6, 6);
      fill(39, 72, 104);
      rect(fadePosx5-1, fadePosy5-1, 8, 16, 6, 6, 6, 6);
    }
    module03.pan((Math.floor((fadePosx5-851)*1.25)-100)*0.02);

    // sliderVol6
    fadePosx6 = sx6
    fadePosy6 = sy6
    noStroke();
    rectMode(CENTER);
    fill(15, 25, 35);
    rect(slix6, sliy6, 94, 10, 6, 6, 6, 6)
    fill(30, 50, 70);
    rect(slix6+1, sliy6+1, 92, 8, 6, 6, 6, 6)
    textSize(40);
    textAlign(CENTER);
    fill(10,16,22);
    text(Math.floor((fadePosx6-851)*1.25)-50, slix6+51+2, 420+2-upi);
    if ((Math.floor((fadePosx6-851)*1.25)-50) == 0) {
      fill(30, 50, 70);
    } else {
      fill(150);
    }
    text(Math.floor((fadePosx6-851)*1.25)-50, slix6+51, 420-upi);
    if (mouseIsPressed && mouseX>=slix6-40 && mouseX<=slix6+40 &&
    mouseY>=sliy6-10 && mouseY<=sliy6+10) {
      sx6 = mouseX;
      fill(15, 25, 35);
      rect(fadePosx6, fadePosy6, 10, 18, 6, 6, 6, 6);
      fill(79, 105, 132);
      rect(fadePosx6-1, fadePosy6-1, 8, 16, 6, 6, 6, 6);
    } else {
      fill(15, 25, 35);
      rect(fadePosx6, fadePosy6, 10, 18, 6, 6, 6, 6);
      fill(39, 72, 104);
      rect(fadePosx6-1, fadePosy6-1, 8, 16, 6, 6, 6, 6);
    }
    module03.setVolume((Math.floor((fadePosx6-851)*1.25)-50)/100);


    // --------------- VUMETROS --------------- //

    // vumetro 1

    vol1 = amp1.getLevel();
    vol1hist.push(vol1/(7-(upi/35)));
    stroke(255);
    noFill();
    beginShape();
    for (var i = 0; i < vol1hist.length; i++) {
      var y = map(vol1hist[i], 0, 1, medy-65-upi, 0);
      vertex(i+396, y);
    }
    endShape();
    if (vol1hist.length > 135) {
      vol1hist.splice(0, 1);
    }
    // vumetro 2
    vol2 = amp2.getLevel();
    vol2hist.push(vol2/(7-(upi/35)));
    stroke(255);
    noFill();
    beginShape();
    for (var i = 0; i < vol2hist.length; i++) {
      var y = map(vol2hist[i], 0, 1, medy-65-upi, 0);
      vertex(i+644, y);
    }
    endShape();
    if (vol2hist.length > 135) {
      vol2hist.splice(0, 1);
    }
    // vumetro 3
    vol3 = amp3.getLevel();
    vol3hist.push(vol3/(7-(upi/35)));
    stroke(255);
    noFill();
    beginShape();
    for (var i = 0; i < vol3hist.length; i++) {
      var y = map(vol3hist[i], 0, 1, medy-65-upi, 0);
      vertex(i+892, y);
    }
    endShape();
    if (vol3hist.length > 135) {
      vol3hist.splice(0, 1);
    }
    noStroke();

    // --------------- VUMETRO GENERAL --------------- //

    fill(50,82,115);
    rect(medx, medy+200-upi, 600, 80, 10, 10, 10, 10);
    fill(30,50,70);
    rect(medx, medy+200-upi, 596, 76, 10, 10, 10, 10);
    fill(15,25,35);
    rect(medx, medy+200-upi, 580, 60, 10, 10, 10, 10);
    // vumetro 1
    vol1 = amp1.getLevel();
    vol1histM.push(vol1/(6-(upi/100)));
    stroke(255, nMasF*2.55);
    noFill();
    beginShape();
    for (var i = 0; i < vol1histM.length; i++) {
      var y = map(vol1histM[i], 0, 1, medy+220-upi, 0);
      vertex(i+400, y);
    }
    endShape();
    if (vol1histM.length > 566) {
      vol1histM.splice(0, 1);
    }
    // vumetro 2
    vol2 = amp2.getLevel();
    vol2histM.push(vol2/(6.3-(upi/100)));
    stroke(255, nMasF*2.55);
    noFill();
    beginShape();
    for (var i = 0; i < vol2histM.length; i++) {
      var y = map(vol2histM[i], 0, 1, medy+218-upi, 0);
      vertex(i+400, y);
    }
    endShape();
    if (vol2histM.length > 566) {
      vol2histM.splice(0, 1);
    }
    // vumetro 3
    vol3 = amp3.getLevel();
    vol3histM.push(vol3/(6.3-(upi/100)));
    stroke(255, nMasF*2.55);
    noFill();
    beginShape();
    for (var i = 0; i < vol3histM.length; i++) {
      var y = map(vol3histM[i], 0, 1, medy+216-upi, 0);
      vertex(i+400, y);
    }
    endShape();
    if (vol3histM.length > 566) {
      vol3histM.splice(0, 1);
    }
    noStroke();


    // console.log((upi/110));

      // BOTON DE PLAY GENERAL
    if (module01.isPlaying() ||  module02.isPlaying() || module03.isPlaying)


    if (mouseX >= medx-100 && mouseX <= medx+100 &&
      mouseY >= medy-187-upi && mouseY <= medy-137-upi && mouseIsPressed) {
        ovPr = 10;
    } else if (mouseX >= medx-100 && mouseX <= medx+100 &&
      mouseY >= medy-187-upi && mouseY <= medy-137-upi) {
      ovPr = 20;
    } else {
      ovPr = 0;
    }
  rectMode(CENTER);
  fill(50,82,115);
  rect(medx, medy-162-upi, 200, 50, 10, 10, 10, 10);
  fill(ovPr, 90);
  rect(medx, medy-162-upi, 192, 42, 8, 8, 8, 8);
  fill(10,16,22);
  textSize(30);
  if (module01.isPlaying() ||  module02.isPlaying() || module03.isPlaying()) {
    ps = "pause";
  } else {
    ps = "play";
  }
  fill(10,16,22);
  if (loadComp == 3) {
    text("click to " + ps, medx+2, medy+2-153-upi);
  } else {
    fill(10,16,22);
    text("loading", medx+2, medy+2-153-upi);
  }
  fill(150, 255);
  if (loadComp == 3) {
    text("click to " + ps, medx, medy-153-upi);
  } else {
    fill(150, 255);
    text("loading", medx, medy-153-upi);
  }
}
function changeYpos(event) {
  if (event.deltaY > 0) {
    upi = upi + 4;
    mrm = mrm - 4
  } else {
    upi = upi - 4;
    mrm = mrm + 4
  }
}

function mouseReleased() {
  if (mouseY>=sliyM-135 && mouseY<=sliyM+135 &&
  mouseX>=slixM-15 && mouseX<=slixM+15) {
    mrm = mouseY;
  } else if (mouseIsPressed) {
    mrm = syM;
  } else {
  }


}

function mousePressed() {
 if ((module01.isPlaying() ||  module02.isPlaying() || module03.isPlaying()) &&
 mouseX >= medx-100 && mouseX <= medx+100 && mouseY >= medy-187-upi && mouseY <= medy-137-upi) {
   module01.pause();
   module02.pause();
   module03.pause();
 } else if (mouseX >= medx-100 && mouseX <= medx+100 &&
   mouseY >= medy-187-upi && mouseY <= medy-137-upi) {
   module01.play();
   module02.play();
   module03.play();
 } else {
 }
 }
