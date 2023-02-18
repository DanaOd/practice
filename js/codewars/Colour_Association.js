function colourAssociation(array){
    // We <3 colours..
    const resultArr = [];
    
     array.forEach(pair => {
      const arr = {};
      arr[pair[0]] =  pair[1];

        console.log(arr, pair[0], pair[1]);

     resultArr.push(arr);
     console.log("resultArr", resultArr);
    });

    return resultArr;
  }


  console.log(colourAssociation([["white", "goodness"], ["blue", "tranquility"]]));
  console.log(colourAssociation([["red", "energy"],["yellow", "creativity"],["brown" , "friendly"],["green", "growth"]]));


