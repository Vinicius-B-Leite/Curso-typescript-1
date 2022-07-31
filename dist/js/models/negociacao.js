export class Negociacao {
    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
    static criaDe(dataS, quantidadeS, valorS) {
        const exp = /-/g;
        const data = new Date(dataS.replace(exp, ','));
        const qnt = parseInt(quantidadeS);
        const valor = parseFloat(valorS);
        return new Negociacao(data, valor, qnt);
    }
}
