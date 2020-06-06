function somar(numero, dados){
    return numero + dados;
}
console.log(somar(10,5));

// SE NÃO PASSAR ALGUMA VALOR DEIXAR O NUMERO
//4 POR PADRAO

function adicao(numero, dados = 4){
     
     return numero * dados;
}
console.log(adicao(10));


//ARGUMENTOS
function ligar(numero, dados = 4){
    console.log(arguments);
    const argArray = Array.from(arguments);
    argArray.forEach((arg) => {
        console.log(arg)
    })
     
    return numero * dados;
}
console.log(ligar(10,20,"Olá","300"));


//REST
function ligar(...listaRest){
    console.log(listaRest);
}
console.log(ligar(10,20,"Olá","300",500));

//NOVO EXEMPLO
function anunciarGanhador(premio, ...ganhadores){
    ganhadores.forEach((ganhador) => {
        console.log(ganhador + 'ganhou um ' + premio)
    });    
}
anunciarGanhador('Carro,','Pedro', "Marta", "Maria");

//OPERADOR SPREAD
//JUNTANDOS DUAS ARRAYS
const eletronico = ['videoGame', 'som', 'tv'];
const celulares = ['Apple', 'Samsung', 'Motorolla'];

const geral = [...eletronico,'Relogio', ...celulares];
console.log(geral);

//PEGANDO O NUMERO MAIOR
const numeros = [2,33,44,32,678,101,10,02,90];
const ResultNumeros = Math.max(...numeros);
console.log(ResultNumeros);

//TRANSFORMANDO NODELIST EM ARRAY
const button = document.querySelectorAll('button');

//PODEMOS FAZER NO MEDOTO ANTIGO
const btnsArray = Array.from(button);
console.log(btnsArray);

//NOVO METODO
const btn = [...button];
console.log(btn);

//LOOPS INTERABLE - IGUAL O FOREACH É O FOR OF
const feiras = ['Banana', 'Maça', 'Melão'];
const frase = 'Isso é Javascript';

for(const feira of feiras){
    console.log(feira);
}

for(const char of frase){
    console.log(char);
}

// fetch('https://pokeapi.co/api/v2/pokemon/')
// .then(response => console.log(response));

//COM ESSE METODO ABAIXO ELE CONSEGUE DAR UM CONSOLE .LOG EM CADA UM BOTÃO
const btnsA = document.querySelectorAll('button');

for(const btA of btnsA){
    btA.style.color = "blue";
}

console.log(...btnsA);
//COM ESSE METODO ACIMA ELE CONSEGUE DAR UM CONSOLE .LOG EM CADA UM BOTÃO

//FOR IN ELE FAZ O LOOP EM OBJETOS NAO ITERABLE - MAS ELE TRAZ A CHAVE COMO  RETORNO
// TB CONSEGUIMOS TRAZER O VALUE DE CADA CHAVE
// ELE SÓ TRAZ TODO O OBJETO SE TIVER O ENUMERABLE= TRUE


const notebook = {
    marca: 'DELL',
    ano: '2020',
}

Object.defineProperties(notebook, {

    memoria: {
        value:4,
        enumerable: true,
    }
})

for(const note in notebook){
    console.log(note, notebook[note])
}

//MOSTRANDO TODAS AS PROPRIEDADES DOS BOTOES
const bb = document.querySelector('button');
const bbStyle = getComputedStyle(bb);


for(const style in bbStyle){
    console.log(`${style}: ${bbStyle[style]}`);
}

//INCLUIR CADA LI UMA CLASS
const items = document.querySelectorAll('li');

for(const item of items) {
    item.classList.add('ativo')
}




