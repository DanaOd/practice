const a = [ 1, 2, 3]
const b = [4, 3, 2]

console.log(a===b? true: false);

// Попросити юзера ввести три числа через кому.
// Створити з цього масив

let total = 0;
let numbers = prompt('введіть, будь ласка, три числа через кому');
numbers = numbers.split(',');
const numArr = [];

for (let num of numbers){
    num = Number(num);
    numArr.push(num);

    total+=num;
}

const min = Math.min(...numArr);
const max = Math.max(...numArr);


console.log(numArr, min, max);
alert(` first number is ${numArr[0]}, last number is ${numArr[numArr.length-1]}.
 ${numArr[0]}+ ${numArr[1]}+ ${numArr[2]}
 min is ${min}, max is ${max}`);

// Показати через alert:
// перший та останній елемент масиву

// на наступному рядку в тому самому alert вивести
// через символ '+' всі числа які ввів юзер (використовуючи спеціальні функції масиву) та сума цих чисел;
// наступний знайдіть найменьше й найбільше число

// у вас повинно вийти, приклад при вводі 3, 5, 1:

// first number is 3, last number is 1.
// 3 + 5 + 1 = 9
// min is 1, max is 5

// PS. зверніть увагу на пробіли та переноси.

// наступне запитайте у юзера одне число із тих що він ввів
// ""Please enter one of the numbers which you entered before?""
// та покажіть юзеру яким по черзі воно було, першим, другим чи третім.
// ввипадку коли юзер введе число якого не було в списку показати, текст
// 'Sorry, you did not enter this number!"