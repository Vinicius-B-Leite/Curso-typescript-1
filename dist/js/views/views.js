export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    update(modelo) {
        this.elemento.innerHTML = this.templete(modelo);
    }
}
