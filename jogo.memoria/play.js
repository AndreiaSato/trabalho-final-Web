const cards = document.querySelectorAll('.memory-card');

let cartaVirada = false;
let lock = false; //para bloquear
let primeiraCarta, segundaCarta;

function virar() {   //Para que a carta vire ao ser clicada add a classe virar
  if (lock) return;
  if (this === primeiraCarta) return; //this representa a carta que foi clicada

  this.classList.add('flip');

  if (!cartaVirada) {  
    cartaVirada = true;
    primeiraCarta = this;

    return;
  }

  segundaCarta = this;
  verifica();
}

//Se as cartas formarem um par, disableCards() é chamada e os detectores de eventos são removidos, para prevenir que as cartas sejam viradas 
//novamente. Caso contrário, unflipCards()remove a classe 
function verifica() {
   if (primeiraCarta.dataset.framework === segundaCarta.dataset.framework){
    disableCards();
   }
   else{
    unflipCards();
   }
}


function disableCards() {  // remove as cartas da lista para não poder clicar nelas novamente
  primeiraCarta.removeEventListener('click', virar);
  segundaCarta.removeEventListener('click', virar);

  resetBoard();
}

function unflipCards() {   // função criada para virar as cartas novamente caso a variável isMatch for false
  lock = true;

  setTimeout(() => {
    primeiraCarta.classList.remove('flip');
    segundaCarta.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [cartaVirada, lock] = [false, false];
  [primeiraCarta, segundaCarta] = [null, null];
}

(function shuffle() { // embaralhar as cartas
  cards.forEach(card => {
    let embaralhar = Math.floor(Math.random() * 12);
    card.style.order = embaralhar;
  });
})();

cards.forEach(card => card.addEventListener('click', virar));