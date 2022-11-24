import { Cliente } from './cliente.js';
import { ContaCorrente } from './contaCorrente.js';

const cliente1 = new Cliente('Ricardo', 948473625);
const cliente2 = new Cliente('Marcelo', 4495182994);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);

contaCorrenteRicardo.depositar(500);

const conta2 = new ContaCorrente(102, cliente2);

contaCorrenteRicardo.transferir(200, conta2);

console.log(cliente2);
console.log(cliente2.cpf);
