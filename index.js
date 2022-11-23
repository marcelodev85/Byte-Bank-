import { Cliente } from './cliente.js';
import { ContaCorrente } from './contaCorrente.js';

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = 'Ricardo';
cliente1.cpf = 11122233309;
cliente1.rg = 987654321;

cliente2.nome = 'Marcelo';
cliente2.cpf = 12345566789;

cliente2.rg = 123467890;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo._saldo = 0;
contaCorrenteRicardo.agencia = 1001;
const deposito = contaCorrenteRicardo.depositar(500);
console.log(`VAlor depositado ${deposito}`);
console.log(contaCorrenteRicardo._saldo);

const valorSacado = contaCorrenteRicardo.sacar(200);
console.log(`valorSacado: ${valorSacado}`);

console.log(contaCorrenteRicardo);
