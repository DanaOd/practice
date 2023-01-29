let randomNum = 0;
const max=80;
const min=20;

randomNum = Math.round(Math.random()*(max-min)+min);
console.log(randomNum);

const colors = ['lightgreen', 'lightblue', 'teal', 'violet','purple', 'orange' ]

let index = Math.round(Math.random()*(colors.length-1-0)+0);

let currentColor = colors[index];

document.body.style.backgroundColor=currentColor;