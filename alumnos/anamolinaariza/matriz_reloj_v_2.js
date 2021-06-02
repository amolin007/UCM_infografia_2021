let w = 600;
let datos = [];
let a = [];
let n = 5;
let m = w/n;
let b = 40;
let c = 25;

function setup() {
  createCanvas(w, w);
  colorMode(HSB); //  -> H 0-360  S 0-100, B 0-100
  angleMode(DEGREES);
  
    creaDatos();

  console.log(datos);
  console.log(a); // pone los datos en la consola
}

function draw() {
  blendMode(BLEND);
  background(0,0,90); // HSB
 
  
   for(let fila= 0; fila< n; fila++){
        for(col = 0; col<n; col++){
          noStroke();
            let x = col*m;
            let y = fila*m;
            //coor centro
            let xc = x + m/2;
            let yc = y + m/2;

            //indice - numero de cada casilla
            let index = (fila*n) + col;
            

            // el dato
            let d = datos[index];
            let g = a[index];
            blendMode(DIFFERENCE);
            fill(0,0,100)
            noStroke();

            circle(xc, yc, m*0.9);
           
            strokeWeight(10);
            stroke(61, 91, 100);
                    
            
            if(d == 1){
              line (xc,yc,xc, (yc - b)); // en punto
            }
            else if(d == 2){
              line (xc,yc,xc, (yc + b)); // y media
            }
            else if(d == 3){
              line (xc,yc,xc + b, yc); // y cuarto
            }
            else if(d == 4){
                line (xc,yc,xc - b, yc); // menos cuarto
            }
            else if(d == 5){
              line (xc,yc,xc - c, (yc - c)); // 50
            }
            else if(d == 6){
              line (xc,yc,xc - c, (yc + c)); // 40
            }
            else if(d == 7){
              line (xc,yc,xc + c, (yc - c)); // 10
            }
           else {
            line (xc,yc,xc + c, (yc + c)); // 40
        }
          stroke(234, 100, 96);

        if(g == 1){
          line (xc,yc,xc, (yc - b)); // en punto
        }
        else if(g == 2){
          line (xc,yc,xc, (yc + b)); // y media
        }
        else if(g == 3){
          line (xc,yc,xc + b, yc); // y cuarto
        }
        else if(g == 4){
            line (xc,yc,xc - b, yc); // menos cuarto
        }
        else if(g == 5){
          line (xc,yc,xc - c, (yc - c)); // 50
        }
        else if(g == 6){
          line (xc,yc,xc - c, (yc + c)); // 40
        }
        else if(g == 7){
          line (xc,yc,xc + c, (yc - c)); // 10
        }
       else {
        line (xc,yc,xc + c, (yc + c)); // 40
    }
  }
}
}

function keyTyped(){
    creaDatos();
  console.log(key);
}

function creaDatos(){
    datos = []; // limpia los datos
    a = [];
    // n*n valores nuevos
    for(let i = 0; i < n*n; i++){
        datos.push(floor(random(8)));
        a.push(floor(random(8))); // añade un valor nuevo
    }
    // imprime los datos en la consola
    console.log(datos);
    console.log(a);
}