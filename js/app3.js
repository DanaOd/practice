
const greet = () => "hello world!";
console.log(greet);


//нормализация = привежение к 1 виду // samsung
const brand = 'Samsung';
const normalizedBrand = brand.toLowerCase();
console.log(normalizedBrand);


//отрежем 1 букву капслоком и отсальные, нормализуем остальные  // Nevada
const names = 'NEVADA';
const normalisedName = names[0]+names.slice(1).toLowerCase();
console.log(normalisedName);


//узнаем входит ли слово в строку, возвращает trbe or false
const testString = 'Let the bodies hit the floor';
const testString2 = 'Let the bodies HIT the floor';

const testWord = 'hit';
console.log(testString.includes(testWord));
console.log(testString2.includes(testWord));

//нормализуем строку а затем проверяем есть ли там слово
console.log(testString2.toLowerCase().includes(testWord));

// в операции сравнения операнды приводятся к числу

console.log('10'>5 );

// в нестрогом равенстве == типы приводятся. Всегда юзаем строгое === тогда типы не приводятся


// И &&

console.log(false && 5); //false как только увидит фолс, прерывается и выводит
console.log(0 && 5); //0 как только увидит фолс, прерывается

console.log(4 && 5); //5 - если все тру, крайнее правое значение выведет

// Или || - вернет любое первое true


// проверка условия доступа
const sub = 'pro';
const hasAccess = sub === 'pro' || sub === 'vip';
console.log('do you have an access', hasAccess);


//тернарник условие? если True: если false
const message = условие ? выражение1 : выражение2;


