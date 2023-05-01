const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número: ', (number) => {
  const n = parseInt(number);

  let a = 0;
  let b = 1;

  // Loop para calcular os valores da sequência de Fibonacci até o valor informado pelo usuário
  while (b < n) {
    const temp = b;
    b = a + b;
    a = temp;
  }

  // Verifica se o valor informado pertence à sequência de Fibonacci
  if (b === n) {
    console.log(`${n} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`${n} NÃO pertence à sequência de Fibonacci.`);
  }

  rl.close();
});
