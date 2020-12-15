let xCarros = [700, 700, 700, 700, 700, 700];
let yCarros = [40, 95, 150, 210, 270, 318];
let velocidadeCarros = [2, 3, 3.5, 5, 3, 2];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
   for (let i = 0; i < imagemCarros.length; i++) {
   image (imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
   }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++) {
  xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaCarro(){
  for (let i = 0; i < imagemCarros.length; i++) {
  if (carroPassouTela(xCarros[i])) {
  xCarros[i] = 700;
  }
  }
}

function carroPassouTela(xCarros){
  return xCarros < -45;
}
