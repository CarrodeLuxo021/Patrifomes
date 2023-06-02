// Criacão de de variaveis
  var jogador;
  var imgMar;
  var imgItens = [];
  var food = [];
  var contador = 0;
  var sped = 5;
  var squish;
  var blop;
  var choque;
  var imgAbertura;
  var controleTela = "INICIO";
  var imgFim;
  var life = 3;


 // Preload de imagem 
    function preload(){
   imgMar = loadImage("Jogo/imgJogo/Mar.png");
   imgAbertura = loadImage("Jogo/imgJogo/comepatrick.png");
   imgFim = loadImage("Jogo/imgJogo/gameover.gif");
   jogador = new Jogador();
   squish = loadSound("som/squish.mp3");
   blop = loadSound("som/blop.mp3");
   choque = loadSound("som/choque.mp3");
   imgItens[0] = loadImage("Jogo/imgJogo/jelly.png");
   imgItens[1] = loadImage("Jogo/imgJogo/ham.png");
   imgItens[2] = loadImage("Jogo/imgJogo/cookie.png");
   imgItens[3] = loadImage("Jogo/imgJogo/plank.png")
   food[0]= new Complemento();
   food[1]= new Complemento();
   food[2]= new Complemento();
   food[3]= new Complemento();

   }
//criação dos alimentos

// Criação do jogador
 
      
  function setup() {
    createCanvas(600, 400).parent("jogo");
}
function keyPressed(){
  if(keyCode == 13)
    controleTela = "Jogo";
}

function mouseClicked() {
 controleTela = "Jogo";
}
function draw(){
  if (controleTela == "INICIO"){
    mostraAbertura();

  }
  if(controleTela == "Jogo"){
    executarJogo();
  }

if(controleTela =="GAMEOVER"){
    mostraGameover();
}
}
  