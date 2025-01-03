function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if (de >= ate) {
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = '<label class="texto_paragrafo">O número do campo "Do número" deve ser menor que o número do campo "Até o número"</label>';
        return;
     }
    
     if (quantidade > (ate - de + 1)) {
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = '<label class="texto_paragrafo">O campo "Quantidade" deve ser menor ou igual a quantidade de números do campo "Do número" e "Até o número"</label>';
        return;
     }

   let sorteados = [];
   let numero;

   for (let i = 0; i < quantidade; i++) {
    numero = numeroAleatorio(de, ate);

    while (sorteados.includes(numero)) {
        numero = numeroAleatorio(de, ate);
    }

    sorteados.push(numero);
   }

   sorteados.sort((a, b) => a - b);

   let resultado = document.getElementById('resultado');
   resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados.join(', ')}</label>`;

   terminoDeJogo();
}

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function terminoDeJogo() {
    let botaoReiniciar = document.getElementById('btn-reiniciar');

    if (botaoReiniciar.classList.contains('container__botao-desabilitado')) {

        botaoReiniciar.classList.remove('container__botao-desabilitado');

        botaoReiniciar.classList.add('container__botao');

    } else {
        botaoReiniciar.classList.remove('container__botao');

        botaoReiniciar.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    let quantidade = parseInt(document.getElementById('quantidade').value = '');
    let de = parseInt(document.getElementById('de').value = '');
    let ate = parseInt(document.getElementById('ate').value = '');

    let botaoReiniciar = document.getElementById('btn-reiniciar');
    botaoReiniciar.classList.remove('container__botao');
    botaoReiniciar.classList.add('container__botao-desabilitado');
}