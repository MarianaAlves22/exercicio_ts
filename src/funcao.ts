function calcular(numero1: number, numero2: number): number {
    return numero1 * numero2;
}

const calcular2 = (numero1: number, numero2: number): number => numero1 * numero2

function multiplicar(...numeros: number[]): void {
    console.log(numeros)
}

function voltar(): string | number {
    if (100 > 50) {
        return 'Cem é maior que cinco'
    }
    else {
        return 5
    }
} 

const resultadoDoVoltar = voltar();