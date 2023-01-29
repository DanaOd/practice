function mergeArrays(arr1, arr2) {
    let arr = [];
    arr = arr.concat(arr1, arr2);
    
    
  
  
    console.log(arr);
  
    return arr.sort(function(a, b) { return a - b; }) ;
    
  }


  const one = [1, 3, 5, 7, 9, 11, 12];
  const two = [1, 2, 3, 4, 5, 10, 12];

  // [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]

//   mergeArrays(one, two);


  console.log(mergeArrays(one, two));