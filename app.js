let listaDeNumerosSorteados = [];
let limiteDoNumeroSecreto = 10;
let numeroSecreto = geradorDeNumeroAleatorio();
console.log(numeroSecreto);
let tentativa = 1;

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
};
function exibirMensagemInicial() {
    exibirTextoNaTela ('h1', 'Jogo do número secreto');
    exibirTextoNaTela ('p', `Escolha um número entre 1 e ${limiteDoNumeroSecreto}`);
};
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        let palavraTentativa = tentativa > 1? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto! Com ${tentativa} ${palavraTentativa}!`;
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela ('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (chute > numeroSecreto) {
        exibirTextoNaTela ('p', 'O número secreto é menor.');
    } else {
        exibirTextoNaTela ('p', 'O número secreto é maior.');
    };
    tentativa++
    limparCampo();
};

function geradorDeNumeroAleatorio () {
   let numeroEscolhido = parseInt(Math.random() * limiteDoNumeroSecreto + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == limiteDoNumeroSecreto) {
        listaDeNumerosSorteados = [];
    };

   if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return geradorDeNumeroAleatorio ();
   } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
   };
};
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
};
function reiniciarJogo() {
    numeroSecreto = geradorDeNumeroAleatorio();
    limparCampo();
    tentativa = 1;
    console.log(numeroSecreto);
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);   
};