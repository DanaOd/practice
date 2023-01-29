//превращаем число в бинарное число. 1) превращаем в строку 2)в скобках задаем 2 и выходит бинарник

// let toBinary = n => +n.toString(2)
// console.log(toBinary(143));



// TASK   Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 
// and above with '1'. Return the resulting string.



function fakeBin(x){
   let str = x.toString();
   let newStr=''
   for (let i=0; i<str.length; i+=1){
    if (str[i]<5){
        newStr+='0';
    } else {newStr+="1"}
    
   }


   return newStr;
    }

    console.log(fakeBin(1765234));