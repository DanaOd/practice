// function threeInOne(arr){
//     //coding here...
//     const newArr = [];
//     for (let i=arr.length; i>0; i-=1){
//       let total = 0;
//       if (i%3===0){
//         total=arr[i-1]+arr[i-2]+arr[i-3];
//         console.log('arr[i]+arr[i-1]+arr[i-2]', arr[i-1], arr[i-2], arr[i-3])
//       newArr.push(total);
//       }
//     }
//     return newArr.sort((a, b)=>a-b);

//   }


//   console.log(threeInOne( [1,2,3,4,5,6,7,8,9] ));
//   console.log(threeInOne( [1,2,3,15, 46, 67, 4,5,6] ));
//   console.log('hi');

function add(num1, num2) {
    const arr1 = String(num1).split('').reverse();
    const arr2 = String(num2).split('').reverse();

    let totalArr = [];

    let minArr = [];
    let maxArr = [];

    if (arr1.length<arr2.length || arr1.length===arr2.length){
        minArr = arr1;
        maxArr = arr2;
    } else if (arr1.length>arr2.length){
        minArr = arr2;
        maxArr = arr1;
    };

maxArr.forEach((num, index, array) => {
if (!minArr[index]){
    minArr[index] = 0;
}

    let numberToAdd = Number(num)+Number(minArr[index]);

    totalArr.push(numberToAdd);
});


    return Number(totalArr.reverse().join(''));
  }


  console.log(add(1222, 30277));
  console.log(add(38810, 1383));
  console.log(add(26, 39));


//   assert.strictEqual(add(1222, 30277), 31499);
//   assert.strictEqual(add(1236, 30977), 31111013);
//   assert.strictEqual(add(38810, 1383), 391193);
//   assert.strictEqual(add(49999, 49999), 818181818); 515