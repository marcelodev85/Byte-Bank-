import { Cliente } from './cliente.js';

export class ContaCorrente {
  _cliente;
  agencia;

  _saldo = 0;

  get saldo() {
    return this._saldo;
  }

  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }

  get cliente() {
    return this._cliente;
  }

  constructor(cliente, agencia) {
    this.agencia = agencia;
    this.cliente = cliente;
  }

  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }
  }

  depositar(valor) {
    if (valor <= 0) {
      return;
    }
    this._saldo += valor;
  }

  transferir(valor, conta) {
    conta.cidade = 'Curitiba';
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
