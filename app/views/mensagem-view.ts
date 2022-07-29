import { View } from "./views.js"

export class MensagemView extends View<String>{

    protected templete(model: string): string{
        return `
            <p class="alert alert-info">${model}</p>
        `
    }
}