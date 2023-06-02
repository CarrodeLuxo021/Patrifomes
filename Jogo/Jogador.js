class Jogador{
    constructor(){
  this.imagem = loadImage("Jogo/imgJogo/patrick.png");
  this.posY = 310;
  this.posX = 250;
  this.vel = 7;
  this.lag = 90;
  this.alt = 90;
  this.yInicial = this.posY;
  this.yFinal = this.posY+ this.alt;
  this.xInicial = this.posX;
  this.xFinal = this.posX+ this.lag;
  
  }
  
  mova(){
    // Definição para imagem em parametros
      image(this.imagem, this.posX, this.posY, this.lag, this.alt);
    
   //para a direita
    if((keyIsDown(39)) && (this.xFinal<600)){
      this.posX += this.vel; 
  }
  //para o lado esquerda
    if((keyIsDown(37)) && (this.xInicial>0)){
    this.posX -= this.vel;
      
    }
  
  // criação para hitbox da delimitação do personagem
  this.yInicial = this.posY;
  this.yFinal = this.posY+ this.alt;
  this.xInicial = this.posX;
  this.xFinal = this.posX+ this.lag;
  
}
  

} 