import {landing, meny, clear} from "./landing.js";

landing()
const home = document.querySelector('#Home')
const menu = document.querySelector('#Menu')
const contact = document.querySelector('#Contact')

home.addEventListener('click',landing)
menu.addEventListener('click',()=>{
    clear()
    for(let i = 0; i<= 2;i++){
        meny()
    }
})
contact.addEventListener('click',landing)
