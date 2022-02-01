console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 300;
canvas.height = 100;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

//-- Coordenadas del objeto
let x = 260;
let y = 80;

//-- Velocidades del objeto
let velx = 4;
let vely = 2;

let colision = 0;

function aleatorio(inferior, superior) {
    numPosibilidades = superior - inferior;
    aleat = Math.random() * numPosibilidades;
    aleat = Math.floor(aleat);
    return parseInt(inferior) + aleat;
}

function color() {
    return "rgb(" + aleatorio(0, 255) + "," + aleatorio(0, 255) + "," + aleatorio(0, 255) + ")";
}

//-- Funcion principal de animacion
function update() 
{
    console.log("test");
  //-- Algoritmo de animacion:
  //-- 1) Actualizar posicion del  elemento
  //-- (física del movimiento rectilineo uniforme)

   //-- Condicion de rebote en extremos verticales del canvas
    if (x < 0 || x >= (canvas.width - 20) ) {
        velx = -velx;
    }

  //-- Condición de rebote en extremos horizontales del canvas
    if (y <= 0 || y > canvas.height - 20) {
        vely = -vely;
    }

  //-- Actualizar la posición
    x = x + velx;
    y = y + vely;

  //-- 2) Borrar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

  //-- 3) Dibujar los elementos visibles
    ctx.beginPath();
    ctx.rect(x, y, 20, 20);

    //-- Dibujar
    if (y <= 0 || y > canvas.height - 20 || x < 0 || x >= (canvas.width - 20) ) {
        ctx.fillStyle = color();
        colision++;
        if((velx < 0 && vely < 0)||(velx > 0 && vely > 0)||(velx < 0 && vely > 0)||(velx < 0 && vely > 0)){
            if(colision==6){
            velx = velx /2;
            console.log(velx);
            }
        }
    }
    //-- Rellenar
    ctx.fill();
    //-- Dibujar el trazo
    ctx.stroke()
    ctx.closePath();

  //-- 4) Volver a ejecutar update cuando toque
    requestAnimationFrame(update);
}

//-- ¡Que empiece la función!
update();