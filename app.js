function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

   let sorteados = [];
   let numero;

   for (let i = 0; i < quantidade; i++) {
    numero = numeroAleatorio(de, ate);

    while (sorteados.includes(numero)) {
        numero = numeroAleatorio(de, ate);
    }

    sorteados.push(numero);
   }

   let resultado = document.getElementById('resultado');
   resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;

   reiniciarJogo();
}

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reiniciarJogo() {
    let botaoReiniciar = document.getElementById('btn-reiniciar');

    if (botaoReiniciar.classList.includes('container__botao-desabilitado')) {

        botaoReiniciar.classList.remove('container__botao-desabilitado');

        botaoReiniciar.classList.add('container__botao');

    } else {
        botaoReiniciar.classList.remove('container__botao');

        botaoReiniciar.classList.add('container__botao-desabilitado');
    }
}

