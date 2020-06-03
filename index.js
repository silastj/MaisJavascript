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
