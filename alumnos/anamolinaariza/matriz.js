let w = 600;
let n = 5;
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
      let a = (((xc / w)* m ) + ((yc / w) * m)); 
      
      fill(d,80,80);
      d = (d + 0.001)%360;
    
      noStroke();
      
      let z = noise(t + x,y);
      let zz = noise(t + x/2,y/2);
      
      push();
      translate(xc, yc);
      rotate(col*8);
      circle(0, 0, (a)*z);
      
       
      stroke(120,80,80);
      strokeWeight(5);
       
      let aa = zz *360;
      let xx = cos(aa)*a/4;
      let yy = sin(aa)*a/4
      line(0,0, xx,yy);
       
      let aaa = z *360;
      let xxx = -cos(aaa)*a/4;
      let yyy = -sin(aaa)*a/4
      line(0,0, xxx,yyy);
       
      pop();
       
     }
 
  }
  t+= 0.01;
}
