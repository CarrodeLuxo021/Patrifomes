class Complemento{
     constructor(){
       this.imagem = imgItens[int (random(0,3.9))];
       this.posX = random (590 ,0);
       this.posY = 0;
       this.lag = 50;
       this.alt = 50;
       this.vel = random (1,sped);
       this.yInicial = this.posY;
       this.yFinal = this.posY+ this.alt;
       this.xInicial = this.posX;
       this.xFinal = this.posX+ this.lag;
     }
      
       
      mova(){
        // Definição para imagem em movimento
      this.posY += this.vel
     image(this.imagem, this.posX, this.posY, this.lag, this.alt);
      this.yInicial = this.posY;
      this.yFinal = this.posY+ this.alt;
      this.xInicial = this.posX;
      this.xFinal = this.posX+ this.lag;
    }
    }