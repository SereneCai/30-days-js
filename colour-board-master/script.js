const board = document.getElementById("board");
const colours = ["#F9E79F", "#F7F9F9", "#A3E4D7", "#AED6F1", "#F5B7B1"];

const SQUARES = 999;

for(var i =0; i < SQUARES; i ++){
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', ()=> setColour(square));
    square.addEventListener('mouseout', ()=> removeColour(square));

    board.appendChild(square);
}

setColour = (square) =>{
    const colour = randomColour();
    square.style.background = colour;
    square.style.boxShadow = `0 0 2x ${colour}, 0 0  10px ${colour}`;
    
} 

removeColour = (square) =>{
    square.style.background = 'darkslategray';
    square.style.boxShadow = `0 0 2px black`;
}

randomColour = () =>{
    return colours[Math.floor(Math.random() * colours.length)];
}



