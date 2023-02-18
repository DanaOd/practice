function findMissing(arr1, arr2) {
    // Your solution here
    const sorted1 = arr1.sort((a, b)=> a-b);
    const sorted2 = arr2.sort((a, b)=> a-b);
    console.log (sorted1, sorted2);

    let missingelem = 0;
    
    for (let i=0; i<sorted1.length; i+=1){
        if (sorted1[i] !== sorted2[i]){
            console.log('sorted1[i]', sorted1[i]);
            return missingelem = sorted1[i];
    }


  }
}


  console.log(findMissing([1, 2, 3], [1, 3]));
  console.log(findMissing([7], []));
  console.log(findMissing([0, 0, 0, 0, 0], [0, 0, 0, 0])); 