export class View {
    constructor(seletor) {
        const elemetno = document.querySelector(seletor);
        if (elemetno) {
            this.elemento = elemetno;
        }
        else {
            throw Error("Verifique se o seletor " + seletor + " existe");
        }
    }
    update(modelo) {
        this.elemento.innerHTML = this.templete(modelo);
    }
}
