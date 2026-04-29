const button = document.querySelector("button");//used to select a button

button.addEventListener('click', function () { //adding clicking events to the buttons.

    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'); //Random colour ni generate chey.
    
    document.body.style.backgroundColor = randomColor; //body background ki aa color apply chey.
    
    console.log('New Color:', randomColor); // used to displaying the colour code at console - optional
});
