let a = 10;
let b = 15;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);


let c = 100;
let d = 50;
if (c > d) {
    console.log("100");
}
else {
    console.log("0");
}


let e = 50;
let f = 25;
let g = 1;
if (e > f && e > g) {
    console.log("e é o maior numero");
}
else if (e < f && e < g) {
    console.log("e é o menor numero");
}
else if (f > e && f > g) {
    console.log("f é o menor numero");
}
else {
    console.log("g é maior que f");
}


const number = 4;
if (number > 0) {
  console.log('positive');
} else if (number < 0) {
  console.log('negative');
} else {
  console.log('zero');
}


const angulo1 = 100;
const angulo2 = 50;
const angulo3 = 30;
if (angulo1 + angulo2 + angulo3 === 180) {
    console.log(true)
} else if (angulo1 + angulo2 + angulo3 < 180) {
    console.log(false)
} else {
    console.log("Erro: ângulo inválido")
}


let xadrez = 'bispo';
switch (xadrez.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
}


const nota = 61;
if (nota < 0 || nota > 100) {
    console.log('Erro: a nota está errada');
} else if (nota >= 90) {
    console.log("A");
} else if (nota >= 80) {
    console.log("B");
} else if (nota >= 70) {
    console.log("C");
} else if (nota >= 60) {
    console.log("D");
} else if (nota >= 50) {
    console.log("E");
} else {
    console.log("F");
}


let numero = [1, 2, 3];
let comandos = false;
for (let index = 0; index <= number.length; index += 1) {
    if (number[index] % 2 == 0) {
        comandos = true;
    }
}
console.log(comandos);


let num = [1, 2, 3];
let comando = false;
for (let index = 0; index <= num.length; index += 1) {
    if (number[index] % 2 == 1) {
        comando = true;
    }
}
console.log(comando);


const custo = 5;
const valor = 10;
if (custo >= 0 && valor >= 0) {
    const totalCusto = custo * 1.2;
    const totalProduto = (valor - totalCusto) * 1000;
    console.log(totalProduto);
} else {
    console.log("Error");
}


const salario = 1500.00;
let aliquotaINSS;
let aliquotaIR;
if (salario <= 1556.94) {
    aliquotaINSS = salario * 0.08;
} else if (salario <= 2594.92) {
    aliquotaINSS = salario * 0.09;
} else if (salario <= 5189.82) {
    aliquotaINSS = salario * 0.11;
} else {
    aliquotaINSS = 570.88
}
const salarioLiquido = salario - aliquotaINSS;
if (salarioLiquido <= 1903.98) {
    aliquotaIR = 0;
} else if (salarioLiquido <= 2826.65) {
    aliquotaIR = (salarioLiquido * 0.075) - 142.80;
} else if (salarioLiquido <= 3751.05) {
    aliquotaIR = (salarioLiquido * 0.15) - 354.80;
} else if (salarioLiquido <= 4664.68) {
    aliquotaIR = (salarioLiquido * 0.225) - 636.13;
} else {
    aliquotaIR = (salarioLiquido * 0.275) -869.36;
}
console.log("Salário: " + (salarioLiquido - aliquotaIR));