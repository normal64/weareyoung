import {resetCounter,onCloseModalClick, onJustDontButtonClick} from "./functions.js"

const resetCounterButton = document.querySelector(".fluid.ui.button");
resetCounterButton.onclick = () => resetCounter();

const onJustDontButton = document.querySelector(".dont-button");
onJustDontButton.onclick =  () => onJustDontButtonClick();

const closeModalButton = document.querySelector(".close.icon");
closeModalButton.onclick = () => onCloseModalClick();

const modal = document.querySelector(".modal-window");
modal.onclick = (event) =>{
    event.preventDefault();
    event.stopPropagation();
    if(event.target.parentElement.classList != "modal-content"
    && event.target.parentElement.classList != "modal-window"
    && event.target.parentElement.classList != "modal-window show"  
    ){
        onCloseModalClick();
    }
}
