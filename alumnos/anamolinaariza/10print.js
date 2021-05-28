let w = 600;
let datos = [];
let n = 10;
let m = w/n;

function setup() {
  createCanvas(w, w);
  colorMode(HSB); //  -> H 0-360  S 0-100, B 0-100
  angleMode(DEGREES);
  
    creaDatos();

  console.log(datos); // pone los datos en la consola
}

function draw() {
  background(0,0,90); // HSB

  strokeWeight(24);
  stroke(0,80,80);

   for(let fila= 0; fila< n; fila++){
        for(col = 0; col<n; col++){
            //coordenadas esquina sup izq
            let x = col*m;
            let y = fila*m;
            //coor centro
            let xc = x + m/2;
            let yc = y + m/2;

            //indice - numero de cada casilla
            let index = (fila*n) + col;

            // el dato
            let d = datos[index];
            
            //circle(xc, yc, m/2);
            //text(d,xc,yc);

            if(d == 1){
                // desde arriba a izq
                line (x,y,x+m, y+m);
 
            } else {
                //desde abajo a la izq
                line(x,y+m, x+m,y);
            }

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
        datos.push(floor(random(2))); // añade un valor nuevo
    }
    // imprime los datos en la consola
    console.log(datos);
}