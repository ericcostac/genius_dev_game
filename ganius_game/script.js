let order = [];
let clickedOrder = [];
let score = 0;

//verde = 0
//vermelho = 1
//amarelo = 2
//azul = 


//SELEÇÃO DAS CORES

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');


//FUNÇÃO DE GERAR ORDEM DAS CORES
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
       
    //ATIBUIÇÃO ORDENADA
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
         let elementColor = createColorElement(order[i]);
         lightColor(elementColor, Number(i) + 1);

     }
}
//ACENDE A PROX COR     
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() =>{
        element.classList.add('selected');
    }, number - 250);

    setTimeout(() =>{
        element.classList.remove('selected');
    });
}

//CHECANDO A ORDENAÇÃO DAS CORES

let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }

    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

//FUNÇÃO PARA CLICK DO USER 
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);   
}
//FUNÇÃO QUE RETORNA A COR 

let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if(color == 2) {
        return yellow;
    } else if(color == 3){
        return blue;
    }
}

//FUNÇÃO PROX NIVEL

let nextLevel = () => {
    score++;
    shuffleOrder();
}

//FUNÇÃO GAME OVER
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];

    playGame();

}

//FUNÇÃO INICIO DO GAME
let playGame = () => {
    alert('Bem vindo ao GENIUS! Iniciando novo jogo!');
    score = 0;

    nextLevel();
}

//green.addEventListener('click', click(0));
//red.addEventListener('click', click(1));
//yellow.addEventListener('click', click(2));
//blue.addEventListener('click', click(3));

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3)

playGame();