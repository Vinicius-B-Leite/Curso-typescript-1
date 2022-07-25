export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adicionarNegociacao(negociacao) {
        this.negociacoes.push(negociacao);
    }
    listarNegociacoes() {
        return this.negociacoes;
    }
}
