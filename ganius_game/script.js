let order = [];
let clicketOrder = [];
let scare = 0;

//verde = 0
//vermelho = 1
//amarelo = 2
//azul = 


//SELEÇÃO DAS CORES

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');


//FUNÇÃO DE GERAR ORDEM 
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
       
    //ATIBUIÇÃO ORDENADA
    order[order.length] = colorOrder;
    clicketOrder = [];

    for(let i in order) {
         let elementColor = createElement(order[i]);
         lightColor(elementColor, Number(i) * 1)

     }
}

let lightColor = (element, number) => {
    time = time * 500;
    setTimeout(() =>{

    }, tempo);
}