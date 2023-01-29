
//https://www.codewars.com/kata/56bd9e4b0d0b64eaf5000819/train/javascript 
//Combine objects

const objA =  { a: 18, b: 20, c: 36, d: 14, e: 8 };
const objB = { a: 15, b: 20, c: 33, d: 11, e: 8 };


function combine(obj1, obj2) {
    const newArr = [...obj1, ...obj2];
    const sortedArr = newArr.reduce((acc, item)=>{
      if (!acc[key]){
        acc[key] = item[key];
      }
      
      acc[key] +=item[key];
    }, {})
      
      return sortedArr;
    }