let a = 100
let g = 50
let c = 96
let ea = 0
let eu = 0
let ei = 0
let eo = 1
let h = 43
let d = 0 

function setup() {
  createCanvas(800, 800);
  colorMode(HSB);
}

function draw() {
  background(0,0,99);
  d = (d + 0.5)%360;
  strokeWeight(g)
  stroke(0,0,0);
  line(a,5*a,a + eu,2*a);
  stroke(d,80,80);
  line(a,5*a,3*a,a + ea); // linea A 1
  stroke(0,0,0);
  line(a + eu,2*a,3*a,4*a + eo);
  line(3*a,4*a + eo,5*a + ei,2*a);
  stroke(d,80,80);
  line(3*a,a + ea,5*a,5*a); // linea A 2
  stroke(0,0,0);
  line(5*a + ei,2*a,5*a,5*a);
  
}
  
function keyTyped(){
  g = random(20,100)
  ea = random (-100,200) // pico A
  eo = random (-100,100) // pico M
  eu = random (-100,100) // inicio A y M
  ei = random (-100,100)
  c = random(360)
  h = random (360)

}