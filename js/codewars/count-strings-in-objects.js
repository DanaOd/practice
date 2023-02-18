function strCount(obj) {
  // Your code here
  let count = 0;
  const values = Object.values(obj);
  console.log(values);

  for (const val of values) {
    console.log(val);
    if (typeof val === 'string') {
      count += 1;
      console.log('count', count);
    } else if (val === null) {
      continue;
    } 
    else if (Array.isArray(val)){
        val.forEach(element =>{
            if (typeof element === 'string'){
                count += 1;
            } else if (Array.isArray(element)){
                element.forEach(innerEl => typeof innerEl === 'string' ? (count += 1) : 'not a string');
            } else if (typeof element === 'object' && element !== null) {
                const innerValues = Object.values(val);
                innerValues.forEach(value=>typeof value === 'string' ? (count += 1) : 'not a string', )
            }
        }
        );
        console.log('count', count);
      }
    
    else if (typeof val === 'object' && val !== null) {
        const innerValues = Object.values(val);
        innerValues.forEach(value=>{
            if (typeof value === 'string'){
                count += 1;
            }else if (Array.isArray(value)){
                value.forEach(innerEl => typeof innerEl === 'string' ? (count += 1) : 'not a string');
            } else if (typeof value === 'object' && value !== null) {
                const innerValues = Object.values(value);
                innerValues.forEach(value=>typeof value === 'string' ? (count += 1) : 'not a string', )
            }



        } )
    }

    console.log('count', count);
  }
  return count;
}

console.log(
  strCount({
    first: '1',
    second: '2',
    third: false,
    fourth: ['anytime', 2, 3, 4],
    fifth: null,
    sixth: undefined,
    seventh: {},
  }),
);
