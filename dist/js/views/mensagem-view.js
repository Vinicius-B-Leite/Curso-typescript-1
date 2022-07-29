import { View } from "./views.js";
export class MensagemView extends View {
    templete(model) {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
}
