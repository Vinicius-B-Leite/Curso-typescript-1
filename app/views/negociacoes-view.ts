import { Negociacoes } from "../models/negociacoes.js"
import { View } from "./views.js"

export class NegociacaoView extends View<Negociacoes>{

    protected templete(negociacoes: Negociacoes): string{
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Quantidade</th>
                    <th>Valor</th>
                </tr>
            </thead>

            <tbody>
                ${negociacoes.listarNegociacoes().map(item=>{
                    return `
                        <tr>
                            <td>${this.formatar(item.data)}</td>
                            <td>${item.valor}</td>
                            <td>${item.quantidade}</td>
                        </tr>
                    `
                }).join('')}
            </tbody>
        </table>
        `
    }

    private formatar(data: Date): string{
        return new Intl.DateTimeFormat().format(data)
    }
}