function mergeArrays(arr1, arr2) {
    return Array.from(new Set(arr1.concat(arr2).sort((a,b)=>a-b)))
    
  }

  const array1 = [1,3,5,7,9];
  const array2 = [1,2,3,4,5,10,12];
  const array3 = [1,2,3,4,5,7,9,10,11,12];

//   console.log(mergeArrays(array1, array3));

  //Sorting array of objects 

  const items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
  ];

  items.sort((a,b )=> a-b);
  console.log(  items.sort((a,b )=> a.value-b.value));