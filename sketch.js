// variáveis da bolinha 
 let xbolinha = 300;
 let yBolinha = 200;
 let diametro = 20;
 let raio = diametro/2;


let velocidadex = 2;
let velocidadeY = 4;

// variaveis da raquete
 let larguraraquete = 10;
 let alturaraquete = 60;
 
let xraquete = 0; 
let yraquete = 170;
  
let xraqueteoponente = 590
let yraqueteoponente =170;

let meuspontos = 0;
let pontosoponente = 0;

let ponto; 
let raquetada;
let trilha; 

function setup() {
  createcanvas(600, 400);
  trilha.loop();
} 

function draw() {  
  background();
  desenhabolinha();
  movimentabolinha();
  verificaborda(); 
  desenharaquete(xraquete , yraquete);
  desenharaquete(xraqueteoponente , yraqueteoponente),
  movimentaraquete();
  verificaraquete();
  desenhaplacar();

}
function desenhabolinha(){
    
  
 circle (xbolinha, ybolinha, diametro);
}
  
function movimentabolinha(){
 
 xbolinha += velocidadex;
 ybolinha += velocidadey;
}   

function verificadora(){
  if(xbolinha + raio > width || xbolinha - raio < 0){
    velocidadex *= -1;
  }
  if(ybolinha + raio > height || ybolinha - raio < 0){
    velocidadey *= -1;
  } 
}

function desenharaquete(x, y){ 
  rect(x , y, larguraraquete, alturaraquete);
}

function movimentaraquete (){
  if(keyIsDown(87)){ 
    yraquete -= 10;
  }
  if(keyIsDown(830)){
    yraquete += 10; 
  } 
 
  if(KeyIsDown(DOWN_ARROW)){
    yraqueteoponente += 10;
  }
  if(KeyIsDown(DOWN_ARROW)){
    yraqueteoponente += 10;
  }
}
 
  function verificaraquete(){
    if(xbolinha - raio <= xraquete + larguraraquete &&
      ybolinha + raio <= yraquete &&
      ybolinha - raio <= yraquete + alturaraquete){
       velocidadex *= -1;
      raquetada,play();
       }
     
    if(xbolinha + raio >= xraqueteoponente &&
     ybolinha + raio >= yraqueteoponente &&
     ybolinha - raio<= yraqueteoponenete + alturaraquete){
      velocidadex *= -1;
      raquetada.play();
      }
  }

function desenhaplacar(){
  fill("FF9800");
  rect(130, 5, 40, 25);
  rect(430, 5, 40, 25);
  fill(255);
  textSize(20);
  textAlign(CENTER);
  text(meuspontos, 150, 25);
  text(pontosoponente, 450, 25);
}

function contabilizaplacar(){
  if(xbolinha - raio <= 0){
    pontosoponente += 1,
    ponto.play();
  }
  if(xbolinha + raio>= width){
    meuspontos+= 1;
    ponto.play();
  }
}

function preload(){
 ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
  trilha = loadSound("trilha.mp3");
}
