const onJustDontButtonClick = () => {
    console.log("clicked");
    const modal = document.querySelector(".modal-window")
    let classesToAdd = [ 'show',  ];
    modal.classList.add(...classesToAdd);
    console.log(`modal`, modal);
}
const onJustDontButton = document.querySelector(".dont-button")
onJustDontButton.onclick =() => onJustDontButtonClick();
console.log(`onJustDontButton`, onJustDontButton);

const closeModalButton = document.querySelector(".close.icon")
console.log(`closeModalButton`, closeModalButton);
closeModalButton.onclick = () => onCloseModalClick();
const onCloseModalClick = () => {
    console.log("close modal");
    const modal = document.querySelector(".modal-window")
    modal.classList.remove('show')

}