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