import { Negociacao } from "../models/negociacao.js"
import { Negociacoes } from "../models/negociacoes.js"

export class NegociacaoController{
    private inputData: HTMLInputElement
    private inputValor: HTMLInputElement
    private inputQuantidade: HTMLInputElement
    private negociacoes = new Negociacoes


    constructor(){
        this.inputData = document.querySelector('#data')
        this.inputQuantidade = document.querySelector('#quantidade')
        this.inputValor = document.querySelector('#data')
    }

    adionar(): void{
        const negociacao = this.criaNegociacao()
        this.negociacoes.adicionarNegociacao(negociacao)
        console.log(this.negociacoes.listarNegociacoes())
        this.limparForm()
    }

    criaNegociacao(): Negociacao{
        const exp = /-/g
        const data = new Date(this.inputData.value.replace(exp, ','))
        const qnt = parseInt(this.inputQuantidade.value)
        const valor = parseFloat(this.inputValor.value)
        return new Negociacao(data, qnt, valor)
    }
    
    limparForm():void{
        this.inputData.value = ""
        this.inputQuantidade.value = ""
        this.inputValor.value = ""

        this.inputData.focus()
    }
}