let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

const findBiggestSalary = obj => {
    let entries = Object.entries(obj);

    if (entries.length ===0){
    return null;
  }

    entries.sort((entrie1, entrie2)=>entrie2[1]-entrie1[1]);
    console.log(entries);

    return entries[0][0];
}

console.log(findBiggestSalary(salaries));