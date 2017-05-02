var modules = [];
var numMod = 6;
var raTr = [];
var track = [];
var loadcomp = 0;
var act = "play";

function preload() {
  ampera = loadFont('data/Ampera.ttf');
  metadata = loadStrings('data/metadata.txt');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("ampera");
  for (var i = 0; i < numMod; i++) {
    modules[i] = new Module();
  }
  // modules
  for (var i = 0; i < numMod; i++) {
    raTr[i] = floor(random(0, 10))+1;
  }
  // Track load
  for (var i = 0; i < numMod; i++) {
    track[i] = loadSound("data/Module01/00_" + raTr[i] + '.mp3', loaded);
  }
  track[1].play;
}

function loaded() {
  // console.log("loaded");
  loadcomp++
}

function draw() {
  background(10,16,22);
  // console.log(but);

  // Main Button
  if (numMod <= 3) {
    fill(20,40,50);
    rect(500+4, windowHeight/2+4, 200, 50, 10, 10, 10);
    fill(39,60,81);
    rect(500, windowHeight/2, 200, 50, 10, 10, 10);
    if (loadcomp == numMod) {
      fill(20,40,50);
      text("click to " + act, 502, windowHeight/2+8);
      fill(150);
      text("click to " + act, 500, windowHeight/2+6);
    } else {
      fill(20,40,50);
      text(loadcomp + " of " + numMod, 502, windowHeight/2+8);
      fill(150);
      text(loadcomp + " of " + numMod, 500, windowHeight/2+6);
    }
  } else if (numMod <= 6) {
    fill(20,40,50);
    rect(modulewidth+500+4, windowHeight/2+4, 200, 50, 10, 10, 10);
    fill(39,60,81);
    rect(modulewidth+500, windowHeight/2, 200, 50, 10, 10, 10);
    if (loadcomp == numMod) {
      fill(20,40,50);
      text("click to " + act, modulewidth+502, windowHeight/2+8);
      fill(150);
      text("click to " + act, modulewidth+500, windowHeight/2+6);
    } else {
      fill(20,40,50);
      text(loadcomp + " of " + numMod, modulewidth+502, windowHeight/2+8);
      fill(150);
      text(loadcomp + " of " + numMod, modulewidth+500, windowHeight/2+6);
    }
  }

  if (numMod <= 3) {
    for (var i = 0; i < numMod; i++) {
      modules[i].display();
      modules[i].x = 50;
      modules[i].y = 50+i*10+(i*moduleheight);
      modules[i].modNum = i;
      modules[i].trackInModule = i
    }
  } else {
    for (var i = 0; i < 3; i++) {
      modules[i].display();
      modules[i].x = 50;
      modules[i].y = 50+i*10+(i*moduleheight);
      modules[i].modNum = i;
      modules[i].trackInModule = i

    }
    for (var i = 3; i < numMod; i++) {
      modules[i].display();
      modules[i].x = 100+modulewidth;
      modules[i].y = 50+(i-3)*10+((i-3)*moduleheight);
      modules[i].modNum = i;
      modules[i].trackInModule = i
    }
  }
}

function mousePressed() {
  if (numMod <= 3 && mouseX >= 400 && mouseX <= 600 &&
  mouseY <= windowHeight/2+25 && mouseY >= windowHeight/2-25) {
    if (track[0].isPlaying()) {
      act = "play";
      for (var i = 0; i < track.length; i++) {
        track[i].stop();
      }
    } else {
      act = "stop"
      for (var i = 0; i < track.length; i++) {
        track[i].play();
      }
    }
  } else if (numMod <= 6 && mouseX >= 400+modulewidth && mouseX <= 600+modulewidth &&
  mouseY <= windowHeight/2+25 && mouseY >= windowHeight/2-25) {
    if (track[0].isPlaying()) {
      act = "play";
      for (var i = 0; i < track.length; i++) {
        track[i].stop();
      }
    } else {
      act = "stop"
      for (var i = 0; i < track.length; i++) {
        track[i].play();
      }
    }
  }
}
