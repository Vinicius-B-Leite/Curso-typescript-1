import { View } from "./views.js";
export class NegociacaoView extends View {
    templete(negociacoes) {
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
                ${negociacoes.listarNegociacoes().map(item => {
            return `
                        <tr>
                            <td>${this.formatar(item.data)}</td>
                            <td>${item.valor}</td>
                            <td>${item.quantidade}</td>
                        </tr>
                    `;
        }).join('')}
            </tbody>
        </table>
        `;
    }
    formatar(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}
