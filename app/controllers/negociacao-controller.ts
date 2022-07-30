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
        this.inputData = <HTMLInputElement>document.querySelector('#data')
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement
        this.inputValor = document.querySelector('#valor') as HTMLInputElement
        this.negociacaoView.update(this.negociacoes)
    }

    public adionar(): void{
        const negociacao =  Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value,this.inputValor.value)

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