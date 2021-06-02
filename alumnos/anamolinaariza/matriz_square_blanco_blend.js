let w = 600;
let n = 10;
let d = 0;
let t = 0;

function setup() {
  createCanvas(w, w);
  colorMode(HSB); //  -> H 0-360  S 0-100, B 0-100
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
   blendMode(BLEND); // por defecto
  background(255);
  let m = w/n;
  blendMode(MULTIPLY);
  stroke(0);
 

   for(let fila= 0; fila<n; fila++){
    
     noStroke();
     line(0, (fila*m), w, (fila*m));
     line((fila*m), 0, (fila*m), w);

     for(col = 0; col<n; col++){
      let x = col*m;
      let y = fila*m;
      let xc = x + (m/2);
      let yc = y + (m/2);
      let h = map(fila,0,n-1,180,360)
      let b = map(col,0,n-1,80,100)
      let a = (((xc / w)* m ) + ((yc / w) * m)); // cambia de tamaña segun col y fill a*0.9
      fill(d,80,80);
      d = (d + 0.001)%360;
    
      noStroke();
      let z = noise(t + x,y);
      
      square(xc, yc, (a)*z);
      
      
      
       
  
     
    }
  }
  t+= 0.01;
}