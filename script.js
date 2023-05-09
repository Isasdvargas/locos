//exercício 1
function somaNumeros() {
    let valor = 180;
    let soma = 0

    while(valor !== 0) {
        valor = Number(prompt("Digite um numero: \n"))
        soma += valor;
    }
    return soma
}
console.log(somaNumeros());

//exercício 2
const numeros = [6,26,27,12]
function maiorNumero(numeros) {
    let maior = 0;
    for(let i = 0; i < numeros,length; i ++){
        if(numeros[i] > maior){
            maior = numeros[i];
        }
    }
    return maior;
}
console.log(numeros)
console.log(maiorNumero(numeros))

//exercício 3 
const palavras = ['O', 'clube', 'do', 'povo'];
function construirFrase(arraypalavras) {
    let frase = '';
    for (let plavra of arraypalavras) {
        frase = frase + ' ' + palavras;
    }
    return frase
}
console.log(construirFrase(palavras).trim());

//exercício 4
let paisesAr = ['Brasil', 'Argentina', 'Russia', 'Uruguai'];
let contadorAr = 1; 
for(let pais of paisesAr) {
    switch(pais) {
        case 'Brasil':
            console.log(contadorAr++ + '- ' + pais + '/BR');
            break;
        case 'Argentina':
            console.log(contadorAr++ + '- ' + pais + '/AR');
            break;
        case 'Russia':
            console.log(contadorAr++ + '- ' + pais + '/RS');
            break;
        case 'Uruguai':
            console.log(contadorAr++ + '- ' + pais + '/UR');
            break;

    }
}