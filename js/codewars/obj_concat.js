
//https://www.codewars.com/kata/56bd9e4b0d0b64eaf5000819/train/javascript 
//Combine objects

// const objA =  { a: 18, b: 20, c: 36, d: 14, e: 8 };
// const objB = { a: 15, b: 20, c: 33, d: 11, e: 8 };


const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
const objC = { a: 5, d: 11, e: 8 }
const objD = { c: 3 }


console.log('objA[a], objA.a', objA[a], objA.a);


function combine() {
    const objects = [...arguments];
    console.log(objects, 'this is objects');
    const newObj = {};
    
 for (let i=0; i<=objects.length; i+=1){ //for each object in array of arguments
  for (const key in objects[i]){ // for each parameter in the single object
    // if (!newObj[key]){
    //   newObj[key] = objects[i][key];
    // } else {
    //   newObj[key] +=objects[i][key];

    // }

    
    newObj[key] = newObj[key] ? newObj[key]+objects[i][key] : objects[i][key];
    console.log('newObj[key] , objects[i][key]', newObj[key] , objects[i][key]);

  }
console.log(newObj);
 }

      return newObj;
    }


    // combine(objA, objB, objC);


