const btnEnter = document.querySelector('button[data-add]');
const btnClear = document.querySelector('button[data-reset]');
const input = document.querySelector('input[data-value]');
let sum = document.querySelector('.js-output span');

let total=0;

console.log(btnEnter, input, btnClear);
// sum = Number(sum); - это было лишним/не работало

btnEnter.addEventListener('click', ()=>{
const value = Number(input.value);
console.log(value);
total +=value;

sum.textContent = total;
input.value = '';

});


// CLEAR
btnClear.addEventListener('click', ()=>{
sum.textContent = '0';
total = 0;


})