function add(num1, num2) {
  // длинна масивов строк
  // строка в число
  num1 = String(num1).reverse();
  num2 = String(num2).reverse();

  let maxLength = Math.max(num1.length, num2.length);
let lengthDifference = maxLength - 

  

  console.log(num1, maxLength);
  let totalNum = 0;
  let totalstring = '';

  for (let i = maxLength; i > 0; i -= 1) {
    console.log(num1[i], num2[i]);

    totalNum = Number(num1[i]) + Number(num2[i]);
    totalstring += totalNum;
    console.log(totalNum, totalstring);
  }

  return totalstring;
}

add(123, 1000);
