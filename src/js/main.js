const onJustDontButtonClick = () => {
    console.log("clicked");
    const alertText = document.querySelector(".alert-text");
        let counter ;
    if(!localStorage.getItem("counter", counter)){
        counter = 0;
        counter++;
        localStorage.setItem("counter", counter)
    }
    
    let counterST = localStorage.getItem("counter", counter);
    counterST++;
    localStorage.setItem("counter", counterST)
    console.log(`counterST`, counterST);

    let insert = `<strong> ${counterST} </strong> times`
    alertText.innerHTML   = `You have clicked <span style="font-weight: bold"> ${insert} </span> to related button .`;
    
    const modal = document.querySelector(".modal-window");
    let classesToAdd = [ 'show',  ];
    modal.classList.add(...classesToAdd);
    console.log(`modal`, modal);
}
const onJustDontButton = document.querySelector(".dont-button")
onJustDontButton.onclick =() => onJustDontButtonClick();

const closeModalButton = document.querySelector(".close.icon")
console.log(`closeModalButton`, closeModalButton);
closeModalButton.onclick = () => onCloseModalClick();
const onCloseModalClick = () => {
    console.log("close modal");
    const modal = document.querySelector(".modal-window")
    modal.classList.remove('show')
}
const modal = document.querySelector(".modal-window")
modal.onclick = (event) =>{
    console.log("event target",event.target.parentElement);
    if(event.target.parentElement != "modal-content"){
        onCloseModalClick();
    }
}
