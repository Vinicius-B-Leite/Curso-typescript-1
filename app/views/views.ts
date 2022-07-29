export abstract class View<T>{

    protected elemento: HTMLElement

    constructor(seletor: string){
        this.elemento = document.querySelector(seletor)
    }

    update(modelo: T): void{
        this.elemento.innerHTML = this.templete(modelo)
    }

    protected abstract templete(model: T): string
}