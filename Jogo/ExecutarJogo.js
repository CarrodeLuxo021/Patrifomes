function executarJogo(){
     
        background(imgMar);
        jogador.mova();
      
      for(let i= 0;i<food.length;i++){
        food[i].mova();
        //Volta dos alimentos
        if(food[i].posY > 400){
        food[i] = new Complemento(food[i].posX);
       
      }
      if(
      //colisão codigo
          jogador.xInicial < food[i].xFinal &&
          jogador.xFinal > food[i].xInicial &&
          jogador.yInicial < food[i].yFinal &&
          jogador.yFinal > food[i].yInicial
        
      ) {
        //contador de perdas e som
         if(food[i].imagem == imgItens[3]){
           contador = 0;
           sped = 5;
           life -= 1;
           squish.play();
           if(life == 0){
            controleTela = "GAMEOVER";
            contador = 0;
            life = 3;
            jogador = new Jogador;
           }
           
      }
        //contador de comidas e som
        else{
        contador++
          sped += 0.5;
          blop.play();
      }
        //agua viva som 
        if(food[i].imagem == imgItens[0]){
          choque.play();
         
      }
        
         food[i] = new Complemento();
      }
      //texto de pontuação
      textSize(14);
      text("COLISÃO: " + contador, 145,50);
      text("Vidas: " + life, 450, 50);
      
      }
}
