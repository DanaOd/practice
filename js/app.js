let padding = '50px';
padding = parseInt(padding);

console.log(padding);
//----------------------------

let margin = "34.5px"

//можно и через намбер, но как выше тоже работало
//плавающ цифры
margin = Number.parseFloat(margin);
console.log(margin);

//----------------------------
//отсечет цифры больше n после точки
let salary = 1234.5678;
// salary = salary.toFixed(2);
salary = Number(salary.toFixed(2));
console.log(salary);