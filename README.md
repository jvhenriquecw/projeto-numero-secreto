# Sorteador de Números 

Este é um projeto que usado como estudo pessoal, para lógica de programação, tenho cursado pela [Alura](https://github.com/alura-cursos) atualmente para iniciar na área de **Back-end**, usei como base o conteúdo já presente no `index.html` e no `style.css`, para aplicar a lógica por meio do `app.js` .

## Objetivos: 
- Funcionamento do botão "Sortear"
- Mostrar ao usuário os números sorteados
- Avisos para o usuário, para impedir bugs
- Mostrar em ordem crescente
- Não repetição de números sorteados
- Funcionamento do botão "Reiniciar"

## Como foi realizado: 
Para concluir os objetivos presentes, foi usado **variáveis, condicionais, funções e listas**, também foi crucial a interação do `app.js` com o `index.html` como podemos ver nesse trecho:
```html
let resultado = document.getElementById('resultado');
   resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados.join(', ')}</label>`;
   ```
   Aqui fica claro o quão crucial é a relação entre eles para o funcionamento do projeto.

## Resolução dos Objetivos:
Para o funcionamento do botão "Sortear" e mostrar ao usuário os números sorteados foi criada uma função, que além de cumprir seu objetivo, a partir das condicionais impede o usuário de causar bugs, como nesse caso:
```javascript
if (de >= ate) {
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = '<label class="texto_paragrafo">O número do campo "Do número" deve ser menor que o número do campo "Até o número"</label>';
        return;
```

Para mostrar de forma mais organizada os números sorteados usei esse metodo, para os números ficarem em ordem crescente:
```javascript
sorteados.sort((a, b) => a - b);
```

Para a não repetição dos números sorteados, usei um tipo de loop, o famoso **while**:
```javascript
 while (sorteados.includes(numero)) {
        numero = numeroAleatorio(de, ate);
    }
```

A `function reiniciar()` consistiu em limpar os campos de _input_ do projeto e troca de classe do botão "Reiniciar" assim que ele for clicado:
```javascript
function reiniciar() {
    let quantidade = parseInt(document.getElementById('quantidade').value = '');
    let de = parseInt(document.getElementById('de').value = '');
    let ate = parseInt(document.getElementById('ate').value = '');

    let botaoReiniciar = document.getElementById('btn-reiniciar');
    botaoReiniciar.classList.remove('container__botao');
    botaoReiniciar.classList.add('container__botao-desabilitado');
}
```

## Conclusão:
Os objetivos foram concluídos de forma que me trouxe mais aprendizado e interesse para minha área, talvez possa ocorrer melhorias no projeto ao longo do tempo com estudos, caso queira analizar de forma detalhada o projeto, o diretório está completamente disponível. 
