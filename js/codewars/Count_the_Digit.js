//https://www.codewars.com/kata/566fc12495810954b1000030/train/javascript

function nbDig(n, d) {
    // your code

// ДЕЛАЕМ КВАДРАТЫ ВСЕХ ЧИСЕЛ, ЗАПИСЫВАЕМ СТРОКАМИ В ПУСТОЙ МАССИВ
  const arr = [];
  let totalcount = 0;
  for (let i=1; i<=n; i+=1){
    arr.push(String(i*i));
  }
//   console.log(arr);

// НАХОДИМ ГДЕ ЕСТЬ ЕДИНИЧКИ
let filteredArr = arr.filter(num => num.includes(d));

console.log(filteredArr);

let arrayOfDigits = [];


let counted = filteredArr.map(num =>{
    let str = String(num.split(','));
for (let item in str){
    if (Number(str[item]) === d){
        totalcount+=1;
    }
}
});

// let counted = filteredArr.map(num =>{
//     let str = String(num.split(','));
// for (let item in str){
//     arrayOfDigits.push(Number(str[item]));
// }
// });

// console.log(arrayOfDigits);
// console.log('filtered', filteredArr, counted);

//   return arrayOfDigits.filter(num=>num===1).length;
return totalcount;
}

console.log(nbDig( 25, 1));
// console.log(nbDig( 5750, 0));
// console.log(nbDig( 11011, 2));
// console.log(nbDig( 12224, 8));
// console.log(nbDig( 11549, 1));
console.log(nbDig( 5750, 0));


// assert.strictEqual(nbDig( 5750, 0),  4700, "n = 5750, d = 0");
// assert.strictEqual(nbDig(11011, 2),  9481, "n = 11011, d = 2");
// assert.strictEqual(nbDig(12224, 8),  7733, "n = 12224, d = 8");
// assert.strictEqual(nbDig(11549, 1), 11905, "n = 11549, d = 1");