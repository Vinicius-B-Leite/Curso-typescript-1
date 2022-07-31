export abstract class View<T>{

    protected elemento: HTMLElement

    constructor(seletor: string){
        const elemetno = document.querySelector(seletor) 
        if(elemetno){
            this.elemento = elemetno as HTMLElement
        }else{
            throw Error("Verifique se o seletor " + seletor + " existe")
        }
    }

    update(modelo: T): void{
        this.elemento.innerHTML = this.templete(modelo)
    }

    protected abstract templete(model: T): string
}