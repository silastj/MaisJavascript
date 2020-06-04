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


//DEBUGGER PELO NAVEGADOR OU PELO CODIGO AQUI
//COLOCAR O DEBUGGER ANTES DE INICIAR O CODIGO
// debugger



// DESTRUCTURING

const carro = {
    empresa: 'Fiat',
    ano: 2018,
    portas: 4,
}

const {empresa, ano} = carro;

console.log(empresa);
console.log(ano);
console.log(empresa, ano)

//MAIS UM EXEMPLO

const cliente = {
    nome: "Silas",
    compras: {
        digitais:{
            livros: ['Livro 1', 'Livro 2'],
            videos: ['Video JS', 'Video HTML']
        },
        fisicas: {
            cadernos: ['Caderno 1']
        }
      }
    }

//MODO ANTIGO
    // console.log(cliente.compras.digitais.livros);
    // console.log(cliente.compras.digitais.videos);
    
//MODO NOVO criando constant
    // const{livros, videos} = cliente.compras.digitais;
    // console.log(livros);
    // console.log(videos);

//DESAGRUPANDO MAIS E MAIS
const {digitais, fisicas, digitais: { livros, videos}} = cliente.compras;
console.log(digitais);
console.log(fisicas);
console.log(livros);
console.log(videos);

//MUDANDO O NOME DA VARIAVEL
const{nome: apelido} = cliente;
console.log(apelido);

//PODEMOS COLOCAR VARIAVEIS E VALORES
const{idade = '19 anos'} = cliente;
console.log(idade);

//DESESTRUTURAR ARRAYS
const frutas = ['Banana', 'Maça', 'Morango'];

const OneFruta = frutas[0];
const TwoFruta = frutas[1];
const ThreeFrutas = frutas[2];

// MODO DESESTRUTURAR
const [One, Two, Three] = frutas;
console.log(One);
console.log(Two);
console.log(Three);

//DESESTRUTURAR UM METODO
function handleKeyBoard(event){
    console.log(event.key);
}

//ESSE SERIA A DESESTRUTURAÇÃO
//já estou passando o evento que eu quero o key 
function handleKeyBoard2({key, keyCode}){
    console.log(key, keyCode);
}


document.addEventListener('keyup', handleKeyBoard);
document.addEventListener('keyup', handleKeyBoard2);