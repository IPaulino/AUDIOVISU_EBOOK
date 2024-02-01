//- Criação de variaveis para "enxergar" os elementos no HTML e executar uma ação -//
const audioCapitulo = document.getElementById("audio-capitulo");
const botaoPlayPause = document.getElementById("play-pause");
const botaoAvancar = document.getElementById("proximo");
const botaoVoltar = document.getElementById("anterior");
const nomeCapitulo = document.getElementById("capitulo")

//- FIM -//
const numeroCapitulos = 10;
let taTocando = false;
let capituloAtual = 1;

function tocarFaixa(){
    audioCapitulo.play();
    botaoPlayPause.classList.remove("bi-play-btn-fill")
    botaoPlayPause.classList.add("bi-pause-btn-fill")
}

function pausarFaixa(){
    audioCapitulo.pause();
    botaoPlayPause.classList.add("bi-play-btn-fill")
    botaoPlayPause.classList.remove("bi-pause-btn-fill")
}

function tocarOuPausar(){
    if(taTocando === false){
        tocarFaixa();
        taTocando = true;
    } else {
        pausarFaixa();
        taTocando = false
    }
}

function proximaFaixa(){
    if (capituloAtual === numeroCapitulos){
        capituloAtual = 1;
    } else{
        capituloAtual = capituloAtual +1
    }
    audioCapitulo.src = "./src/assets/books/dom-casmurro/" +capituloAtual+ ".mp3";
    tocarFaixa();
    taTocando = true;
    trocarNomeFaixa();
}

function voltarFaixa(){
    if (capituloAtual === 1){
        capituloAtual = numeroCapitulos;
    } else{
        capituloAtual = capituloAtual -1
    }
    audioCapitulo.src = "./src/assets/books/dom-casmurro/" +capituloAtual+ ".mp3";
    tocarFaixa();
    taTocando = true;
    trocarNomeFaixa();
}

function trocarNomeFaixa(){
    nomeCapitulo.innerText = "Capitulo " + capituloAtual;
}

//- Equivale ao "onClick", mas pode executar mais eventos (ações) -//
botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoAvancar.addEventListener('click', proximaFaixa);
botaoVoltar.addEventListener('click', voltarFaixa);
