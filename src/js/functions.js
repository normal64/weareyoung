export const resetCounter =    () =>{
    localStorage.setItem("counter", 0)
}
export const onCloseModalClick = () => {
    console.log("close modal");
    const modal = document.querySelector(".modal-window")
    modal.classList.remove('show')
}
export    const checkCounter = (currentValue) =>{
    console.log(`currentValue`, currentValue);
    if(currentValue <= 5){
        document.querySelector(".fluid.ui.button").classList.add('hide')
    }
    if(currentValue > 5){
        document.querySelector(".fluid.ui.button").classList.remove('hide')
        console.log('counter reset done');
    }
}
export const onJustDontButtonClick = () => {
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
    checkCounter(counterST)
    console.log(`counterST`, counterST);

    let insert = `<strong> ${counterST} </strong> times`
    alertText.innerHTML   = `You have clicked <span style="font-weight: bold"> ${insert} </span> to related button .`;
    const modal = document.querySelector(".modal-window");
    let classesToAdd = [ 'show',  ];
    modal.classList.add(...classesToAdd);
    console.log(`modal`, modal);
}