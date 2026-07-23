import readline from 'readline-sync';
let Saldo = 1000;
let Opcao = 0
let ArmazenarValor = 0;
let SacarValor = 0;

while (Opcao !== '4') 
{
  Opcao = readline.question('(1) - Saldo Atual, (2) -  Depositar valor, (3) - sacar, (4) - sair: ');
  
  switch (Opcao) 
     {
  case '1':
    console.log("Atualmente você possui " + Saldo + " Reais.");
    break;
  case '2':
   ArmazenarValor = readline.questionFloat("Digite um valor para depositar: ");
   Saldo = Saldo + ArmazenarValor;
   console.log("O valor depositado foi de: " + ArmazenarValor + " Reais" + " O valor total após o deposito foi de: " + Saldo + " Reais");
    break;
  case '3':
   SacarValor = readline.questionFloat("Digite  valor para sacar: ");
   if(SacarValor <= 0 || SacarValor > Saldo) 
  { 
    console.log("Errado, digite um valor correto.");
  } else 
    {
     Saldo = Saldo - SacarValor;
     console.log("O valor sacado foi: " + SacarValor + " Reais" + " O valor após o saque é de: " + Saldo + " Reais");
    }
    break;
     }
}