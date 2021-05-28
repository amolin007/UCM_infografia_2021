let w = 600
let n = 60 // tamaño celda (incremento)
let d = 0
let t = 0

function setup() {
    createCanvas(w, w);
    colorMode(HSB);
    rectMode(CENTER);
  }
  
  function draw() {
    background(0);
    for (let y = 0; y < w; y = y + n) { // punto coordenada y
      for (let x = 0; x < w; x = x + n) { // punto coordeanda x
      
        let xc = (x / w) * n; //inicio (x=0) ; final (xc = 10) - tamaño completo celda
  
        let yc = (y / w) * n;
    
        noStroke();

        fill(d, 80 , 80);

        d = (d + 0.001)%360;

        let z = noise(t + x,y);
        //circle(x, y, z*n);
  
        rect(x, y, xc*z, yc*z);
      }
    }
    t+= 0.01;
  }
