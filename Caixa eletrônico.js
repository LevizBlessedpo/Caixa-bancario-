let Saldo = 1000;
let Opcao = 0
let ArmazenarValor = 0;
let SacarValor = 0;

while (Opcao !== 4) 
{
  Opcao = +prompt("(1) - Saldo Atual, (2) -  Depositar valor, (3) - sacar, (4) - sair: ");
  
  switch (Opcao) 
     {
  case 1:
    alert("Atualmente você possui " + Saldo + " Reais.");
    break;
  case 2:
   ArmazenarValor = +prompt("Digite um valor para depositar: ");
   Saldo = Saldo + ArmazenarValor;
   alert("O valor depositado foi de: " + ArmazenarValor + " Reais" + " O valor total após o deposito foi de: " + Saldo + " Reais");
    break;
  case 3:
   SacarValor = +prompt("Digite  valor para sacar: ");
   if(SacarValor <= 0 || SacarValor > Saldo) 
  { 
    alert("Errado, digite um valor correto.");
  } else 
    {
     Saldo = Saldo - SacarValor;
     alert("O valor sacado foi: " + SacarValor + " Reais" + " O valor após o saque é de: " + Saldo + " Reais");
    }
    break;
     }
}