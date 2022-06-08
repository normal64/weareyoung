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
