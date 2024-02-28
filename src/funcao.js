"use strict";
function calcular(numero1, numero2) {
    return numero1 * numero2;
}
const calcular2 = (numero1, numero2) => numero1 * numero2;
function multiplicar(...numeros) {
    console.log(numeros);
}
function voltar() {
    if (100 > 50) {
        return 'Cem é maior que cinco';
    }
    else {
        return 5;
    }
}
const resultadoDoVoltar = voltar();
