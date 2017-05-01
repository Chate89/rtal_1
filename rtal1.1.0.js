var modules = [];
var numMod = 6;
function preload() {
  ampera = loadFont('data/Ampera.ttf');
  metadata = loadStrings('data/metadata.txt');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < numMod; i++) {
    modules[i] = new Module();
  }
  textFont("ampera");

}
function draw() {
  background(10,16,22);
    for (var i = 0; i < 3; i++) {
      modules[i].display();
      modules[i].x = 50;
      modules[i].y = 50+i*10+(i*moduleheight);
      modules[i].modNum = i;
    }
    for (var i = 3; i < modules.length; i++) {
      modules[i].display();
      modules[i].x = 100+modulewidth;
      modules[i].y = 50+(i-3)*10+((i-3)*moduleheight);
      modules[i].modNum = i;
    }
    console.log((modules[1].metavol));

}
