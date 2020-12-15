function setup() {
  somTrilha.loop();
  createCanvas(600, 400);
}

function draw() {
  background(imagemEstrada);
  mostraAtor();
  movimentaAtor();
  mostraCarro();
  movimentaCarro();
  voltaCarro();
  carroPassouTela();
  verificaColisao();
  mostraPontos();
  marcaPontos();
  pontosMaiorZero();
}
