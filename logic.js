let container = document.getElementById('container');
let button = document.querySelector("button");

for(i = 0; i<16; i++){
  let board = document.createElement('div');
  board.className = 'board-element';
  board.textContent = i;
  container.appendChild(board);
}

let divs = document.querySelectorAll(".board-element");

divs.forEach( ( div ) => {
  div.addEventListener("mouseenter", function(event){
    event.target.style.background ="blue";
  });
});

button.addEventListener("click",() => {
  let counter = 0;
  divs.forEach((div) => {
    divs[counter].style.background="lightgrey";
    counter++;
  });
});
