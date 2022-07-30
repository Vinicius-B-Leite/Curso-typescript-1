import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController();
const form = document.querySelector('#form')
if (form){
    form.addEventListener('submit', event=>{
        event.preventDefault()
        controller.adionar()
    })
} else throw Error("Verifique se o form existe.")