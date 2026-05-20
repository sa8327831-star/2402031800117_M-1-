const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Enter the first number: ', (input1) => {
  rl.question('Enter the second number: ', (input2) => {
    const sum = Number(input1) + Number(input2);
    console.log(`The sum is: ${sum}`);
    rl.close();
  });
});
