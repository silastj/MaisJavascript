//FUNÇÃO DECLARAITION o codigo pode vir antes
console.log(mais(4,5));

function mais(a,b){
    return a + b;
}

// FUNÇÃO EXPRESSION O codigo precisa sempre vir a pós
const somar = function(a,b){
    return a+ b;
}
console.log(somar(4,2));

// ARROW FUNCTION

// Quando tiver => é uma função
// Quando tiver (a,b) é um parametro
// quando tiver depois das seta é o retorno

const pos = (b,c) => b + c;
console.log(pos(10,10));

const quadro = (a) => a * a;
console.log(quadro(20));

//FUNÇÃO ANONIMA ISOLANDO OS DADOS.
(() =>{
const instrumento = "Guitarra";
    console.log(instrumento);
})();

//EXERCICIOS
// removendo a cifra / trocando virgula por ponto
const priceNumber = n => +n.replace('R$', '').replace(',', '.');
console.log(priceNumber('R$ 99,99'));


//FACTORY FUNCTION

function createButton(text){
    return {
        text:text,
    }
}
const btnBlue = createButton('Comprar');
console.log(btnBlue);

// Ice Factory 
//Congelar os propriedades e metodos, impedir que usuario escreva por cima.


function $$(selectedElements){

    const elements = document.querySelectorAll(selectedElements);

    function hide() {
        elements.forEach(element => {
            element.style.display = 'none';
        });
        // ENCADIANDO OS ELEMENTOS ABAIXO, VOU TRAZER NOVAMENTE OS BTNS
        return $$(selectedElements);
    }
    function show() {
        elements.forEach(element => {
            element.style.display = 'initial';
        });
        // ENCADIANDO OS ELEMENTOS ABAIXO, VOU TRAZER NOVAMENTE OS BTNS
        return $$(selectedElements);
    }
    function on(onEvent, callback){
        elements.forEach(element => {
            element.addEventListener(onEvent, callback);
        });
        return $$(selectedElements);
    }
    function addClass(className) {
        elements.forEach(element => {
            element.classList.add(className);
        });
        return $$(selectedElements);

    }
    function removeClass(className) {
        elements.forEach(element => {
            element.classList.remove(className);
        });
        return $$(selectedElements);

    }



    return {
        elements,
        hide,
        show,
        on,
        addClass,
        removeClass,
    }

}

const btns = $$('button');

// MOSTRANDO OS BTNS
console.log(btns.element);

//ESCONDENDO OS BTNS
console.log(btns.hide());

//TENHO ACESSO NOVAMENTE NOS BTN
console.log(btns.hide().elements);

//MOSTRANDO O BTNS COM A FUNCTION SHOW
console.log(btns.show());

function handleClick(event){
    console.log(event.target);
    btns.addClass('active');
}

btns.on('click', handleClick);