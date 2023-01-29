// REDUCE
//array.reduce(сallback[(previousValue, currentItem, index, array)], initialValue)

const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

const amount = Object.values(salary).reduce((total, value) => total + value, 0);

console.log(amount);

/*
 * Считаем общую сумму товаров корзины
 */
const cart = [
  { label: 'Apples', price: 100, quantity: 2 },
  { label: 'Bananas', price: 120, quantity: 3 },
  { label: 'Lemons', price: 70, quantity: 4 },
];

// const totalSum = cart.reduce((total, product) => {
//   return (total += product.price * product.quantity);
// }, 0);

// ДЕСТРУКТУРИЗАЦИЯ БОЛЕЕ ЧЕМ 1 СВОЙСТВА ЧТОБ КРАСИВЕЕ - и можно без скобок и ретерна

const totalSum = cart.reduce(
  (total, { price, quantity }) => total + price * quantity,
  0,
);
// console.log(totalSum);

// * Собираем все теги из твитов
// */

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

//ВАРИАНТ 1
// const allTags = tweets.reduce((total, {tags})=>{
//     total.push(...tags);
//     return total;
// }, []);

//ВАРИАНТ 2 - НО ПУШНЕМ МАССМИВЫ МАССИВОВ, НУЖНО БЫЛО БЫ РАСПЫЛИТЬ
// const allTags = tweets.reduce((tags, tweet)=>{
//      tags.push(tweet.tags);
//      return tags;
// }, []);

//ВАРИАНТ 3    -   ЧТОБЫ ЛИНТЕР НЕ РУГАЛСЯ НА ТО, чТО Мы МУТИРУЕМ ИЗНАЧАЛЬНЫЙ МАССИВ
// ретерним массив - квадратные скобки!!

const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);

console.log(allTags);

// const tagsStat = allTags.reduce((acc, item)=>{
//     console.log(acc);
//     if (acc[item]){
//         acc[item] += 1;
//         // console.log(acc[item]);

//         return acc;
//     }

//     acc[item] = 1
//     return acc;

// }, {})


//  ----------------------------- я написала красиво

// const tagsStat = allTags.reduce((acc, item)=>{
//    acc[item] ? acc[item] += 1 : acc[item] = 1;
//     return acc;
// }, {})


//Саша посоветовал тернарник сдвинуть чтобы не повторять то же самое
const tagsStat = allTags.reduce((acc, item)=>{
    console.log(acc);

     return {
        ...acc,
        [item]: acc[item] ? acc[item] + 1 :  1,
     };
 }, {})


console.log(tagsStat);