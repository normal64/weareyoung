import {resetCounter,onCloseModalClick, onJustDontButtonClick} from "./functions.js"

const resetCounterButton = document.querySelector(".fluid.ui.button");
resetCounterButton.onclick = () => resetCounter();

const onJustDontButton = document.querySelector(".dont-button");
onJustDontButton.onclick =  () => onJustDontButtonClick();

const closeModalButton = document.querySelector(".close.icon");
console.log(`closeModalButton`, closeModalButton);
closeModalButton.onclick = () => onCloseModalClick();

const modal = document.querySelector(".modal-window");
modal.onclick = (event) =>{
    console.log("event target",event.target.parentElement);
    if(event.target.parentElement != "modal-content"){
        onCloseModalClick();
    }
}
