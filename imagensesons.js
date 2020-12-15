let imagemEstrada;
let imagemAtor;
let imagemCarroUm;
let imagemCarroDois;
let imagemCarroTres;

let somTrilha;
let somPontos;
let somColidiu;

function preload(){
  imagemEstrada = loadImage ("imagens/estrada.png");
  imagemAtor = loadImage ("imagens/ator-1.png");
  imagemCarroUm = loadImage ("imagens/carro-1.png");
  imagemCarroDois = loadImage ("imagens/carro-2.png")
  imagemCarroTres = loadImage ("imagens/carro-3.png")
  imagemCarros = [imagemCarroUm, imagemCarroDois, imagemCarroTres, imagemCarroUm, imagemCarroDois, imagemCarroTres];

  somTrilha = loadSound("sons/trilha.mp3");
  somPontos = loadSound("sons/pontos.wav");
  somColidiu = loadSound("sons/colidiu.mp3");
}
