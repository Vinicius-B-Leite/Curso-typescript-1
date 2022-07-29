import { Negociacao } from "../models/negociacao.js"
import { Negociacoes } from "../models/negociacoes.js"
import { NegociacaoView } from "../views/negociacoes-view.js"
import { MensagemView } from "../views/mensagem-view.js"
import { DiasdaSemana } from "../enums/dias-da-semana.js"

export class NegociacaoController{
    private inputData: HTMLInputElement
    private inputValor: HTMLInputElement
    private inputQuantidade: HTMLInputElement
    private negociacoes = new Negociacoes()
    private negociacaoView = new NegociacaoView('#negociacaoTabela')
    private mensagemVieew = new MensagemView("#mensagemView")


    constructor(){
        this.inputData = document.querySelector('#data')
        this.inputQuantidade = document.querySelector('#quantidade')
        this.inputValor = document.querySelector('#valor')
        this.negociacaoView.update(this.negociacoes)
    }

    public adionar(): void{
        const negociacao = this.criaNegociacao()

        if (!this.ehDiaUtil(negociacao.data)){
             this.mensagemVieew.update("Só dia de semana")
             return
            }
        this.negociacoes.adicionarNegociacao(negociacao)
        this.limparForm()
        this.atualizaView() 
    }

    private ehDiaUtil(data: Date){
        return data.getDate() > DiasdaSemana.DOMINGO && data.getDay() < DiasdaSemana.SABADO
    }

    private criaNegociacao(): Negociacao{
        const exp = /-/g
        const data = new Date(this.inputData.value.replace(exp, ','))
        const qnt = parseInt(this.inputQuantidade.value)
        const valor = parseFloat(this.inputValor.value)
        return new Negociacao(data, valor,qnt)
    }
    
    private limparForm():void{
        this.inputData.value = ""
        this.inputQuantidade.value = ""
        this.inputValor.value = ''

        this.inputData.focus()
    }

    private atualizaView(): void{
        this.mensagemVieew.update('Adicionado com sucesso')
        this.negociacaoView.update(this.negociacoes)

    }
}