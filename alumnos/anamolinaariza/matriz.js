let w = 600;
let n = 10;
let i = 0;
let datos = [];
let m = w/n;


function setup() {
  createCanvas(w, w);
  colorMode(HSB); //  -> H 0-360  S 0-100, B 0-100
  angleMode(DEGREES);
  creaDatos();

  console.log(datos); // pone los datos en la consola
}

function draw() {
  background(0,0,90);
  let m = w/n;

  stroke(0);
 

   for(let fila= 0; fila<n; fila++){
    
     noStroke();
     line(0, (fila*m), w, (fila*m));
     line((fila*m), 0, (fila*m), w);

     for(col = 0; col<n; col++){
      let x = col*m;
      let y = fila*m;
      // centro
      let xc = x + (m/2); 
      let yc = y + (m/2);
      //indice - numero de cada casilla
      let index = (fila*n) + col;

      // el dato
      let d = datos[index];
      fill(0,0,100)
      noStroke();
      circle(xc, yc, m*0.9);
      stroke (1)
        
        if(d == 1){
          line (xc,yc,xc, (yc - 20)); // en punto
 
        }
        else if(d == 2){
            line (xc,yc,xc, (yc + 20)); // y media
            line (xc,yc,xc + 20, yc); // y cuarto
  
         }
        else if(d == 3){
            line (xc,yc,xc, (yc - 20)); // en punto
            line (xc,yc,xc + 20, yc); // y cuarto
          }
        else if(d == 4){
            line (xc,yc,xc, (yc - 20)); // en punto
            line (xc,yc,xc - 20, yc); // menos cuarto
    
         }
        else if(d == 5){
            line (xc,yc,xc, (yc - 20)); // en punto
            line (xc,yc,xc, (yc + 20)); // y media
          }
        else if(d == 6){
            line (xc,yc,xc, (yc + 20)); // y media
            line (xc,yc,xc - 20, yc); // menos cuarto
          }
        else if(d == 7){
            line (xc,yc,xc, (yc + 20)); // en punto
   
          }
         else{
          line (xc,yc,xc + 20, yc);
          line (xc,yc,xc - 20, yc);
  
         }
      

      
      //line (xc,yc,xc + fila,(yc - 20)+ col);
      //line(xc, yc, xc + t, (yc) + t);
      //line(xc, yc, xc - t, (yc) - t);
       }
      }
    
   }

  


function keyTyped(){
  creaDatos();
 // console.log(key);
}

function creaDatos(){
  datos = []; // limpia los datos
  // n*n valores nuevos
  for(let i = 0; i < n*n; i++){
      datos.push(floor(random(8))); // añade un valor nuevo
  }
  // imprime los datos en la consola
  console.log(datos);
}