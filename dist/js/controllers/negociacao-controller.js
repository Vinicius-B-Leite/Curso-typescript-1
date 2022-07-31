import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacaoView } from "../views/negociacoes-view.js";
import { MensagemView } from "../views/mensagem-view.js";
import { DiasdaSemana } from "../enums/dias-da-semana.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacaoView = new NegociacaoView('#negociacaoTabela');
        this.mensagemVieew = new MensagemView("#mensagemView");
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacaoView.update(this.negociacoes);
    }
    adionar() {
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemVieew.update("Só dia de semana");
            return;
        }
        this.negociacoes.adicionarNegociacao(negociacao);
        this.limparForm();
        this.atualizaView();
    }
    ehDiaUtil(data) {
        return data.getDate() > DiasdaSemana.DOMINGO && data.getDay() < DiasdaSemana.SABADO;
    }
    limparForm() {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = '';
        this.inputData.focus();
    }
    atualizaView() {
        this.mensagemVieew.update('Adicionado com sucesso');
        this.negociacaoView.update(this.negociacoes);
    }
}
