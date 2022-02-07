function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function mutiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    return a / b;
}

function modulo(a, b) {
    return a % b;
}


function maiorNumero(primeiroNumero, segundoNumero) {
    if (primeiroNumero > segundoNumero) {
        return primeiroNumero + ' é maior que ' + segundoNumero;
    } else {
        return segundoNumero + ' é maior que ' + primeiroNumero;
    }
}
console.log(maiorNumero(5, 10));


function maiorNumero(primeiroNumero, segundoNumero, terceiroNumero) {
    if (primeiroNumero > segundoNumero && primeiroNumero > terceiroNumero) {
        return 'O maior número é: ' + primeiroNumero;
    } else if (segundoNumero > primeiroNumero && segundoNumero > terceiroNumero) {
        return 'O maior número é: ' + segundoNumero;
    } else {
        return 'O maior número é: ' + terceiroNumero;
    }
}
console.log(maiorNumero(5, 10, 15));


function positivoNegativo(numero) {
    if (numero > 0) {
        return 'positivo';
    } else if (numero < 0) {
        return 'negativo';
    } else {
        return 'zero';
    }
}
console.log(positivoNegativo(1));


function triangulo(angulo1, angulo2, angulo3) {
    let somaAngulos = angulo1 + angulo2 + angulo3;
    let anguloPositivo = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

    if (somaAngulos === 180) {
        return true;
    } else {
        return false;
    }
}   
console.log(triangulo(30, 70, 100));