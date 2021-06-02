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
  blendMode(DIFFERENCE);
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
            let a = (((xc / w)* m ) + ((yc / w) * m)); // cambia de tamaña segun col y fill a*0.9
      fill(d,80,80);
      d = (d + 0.001)%360;
    
      noStroke();
      let z = noise(t + x,y);

      push();
      translate(xc,yc);
      rotate(col*5);
      square(0, 0, (a)*z);
      fill(0,100,100);
      circle(0,0,(a/2)*z);
      pop();
      
      
      
       
  
     
    }
  }
  t+= 0.01;
}