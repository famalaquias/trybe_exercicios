// Exercicio 1
const testingScope = escopo => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
}
  testingScope(true);

// Exercicio 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordemCrescente = () => {
    oddsAndEvens[0] = 2;
    oddsAndEvens[1] = 3;
    oddsAndEvens[2] = 4;
    oddsAndEvens[3] = 7;
    oddsAndEvens[4] = 10;
    oddsAndEvens[5] = 13;
    
    return oddsAndEvens;
}

const ordemCrescenteArray = ordemCrescente();
console.log(`Os números ${ordemCrescenteArray} se encontram ordenados de forma crescente!`); 