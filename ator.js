//variáveis do ator;
let yAtor = 366;
let xAtor = 85;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
   image (imagemAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
   if (keyIsDown(DOWN_ARROW)){
     if (podeMover()){
    yAtor += 3;
     }
  }
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      voltaAtor();
      somColidiu.play();
      if (pontosMaiorZero()){
      meusPontos -= 1;
      }
    }
  }
}

function voltaAtor(){
  yAtor = 366;
}

function mostraPontos(){
  fill (220, 20, 60);
  textAlign (CENTER);
  textSize (22);
  text(meusPontos, width / 6, 26)
}

function marcaPontos(){
  if (yAtor < 15){
  meusPontos += 1;
    somPontos.play();
    voltaAtor();
  }
}

function pontosMaiorZero(){
  return meusPontos > 0;
}

function podeMover(){
  return yAtor < 366;
}
