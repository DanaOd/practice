function whoseBicycle(diary1, diary2, diary3) {
    // good luck
const sons = ['first', 'second', 'third'];
const diaries = [diary1, diary2, diary3,];

const totalArr = diaries.map(diary=>{
    let total = 0;
    let values = Object.values(diary);
    values.reduce((acc, current,)=>{
        total+=current;
    }, 0)
    return total/values.length;
})

console.log(totalArr);

let highestMarks = Math.max(...totalArr);
let neededIndex = totalArr.lastIndexOf(highestMarks);
console.log(highestMarks, neededIndex);

return `I need to buy a bicycle for my ${sons[neededIndex]} son.`;
}
    // let marksCount = diary =>{
    //   let total = 0;
    //   let values = Object.values(diary);
    //   let length = values.length;
    //   console.log('keys,length', values, length );
      
    //   for (let mark in diary){
    //     // console.log(diary[mark]);
    //     total+=diary[mark];
    //   } 
      
        // return total/length;
    
    // let result1 = marksCount(diary1);
    // let result2 = marksCount(diary2);
    // let result3 = marksCount(diary3);
    // console.log('result1, result2, result3', result1, result2, result3);
    
    // if (result1>result2 && result1>result3){
    //   return 'I need to buy a bicycle for my first son.';
    // } else if (result2>result1 && result2>result3){
    //   return 'I need to buy a bicycle for my second son.';
    // } else if (result3>result1 && result3>result2){
    //   return 'I need to buy a bicycle for my third son.';
    // } else if (result1===result3){
    //   return 'I need to buy a bicycle for my third son.';
    // } else if (result1===result2===result3){
    //   return 'I need to buy a bicycle for my third son.';
    // } else if (result1===result2){
    //     return 'I need to buy a bicycle for my second son.';
    //   } else if (result2===result3){
    //     return 'I need to buy a bicycle for my third son.';
    //   } 
  
      
  


  console.log(whoseBicycle(
    {
      'algebra': 6,
      'history': 7,
      'physics': 8,
      'geography': 9,
      'chemistry': 10
    },
    {
      'algebra': 8,
      'history': 7,
      'physics': 8,
      'geography': 9,
      'chemistry': 10
    },
    {
      'algebra': 6,
      'history': 5,
      'physics': 5,
      'geography': 9,
      'chemistry': 10
    }));




//     const diaries = [dairy1, dairy2, dairy3];
//     const son = {
//       0: 'first',
//       1: 'second',
//       2: 'third'
//     };
//     const scores = diaries.map((diary, index) => {
//       const keys = Object.keys(diary);
      
//       return keys.reduce((acc, cur) => acc + diary[cur], 0);
//     });
    
//     const maxValue = Math.max(...scores);
    
//     const maxDiary = scores.lastIndexOf(maxValue);
    
//     return `I need to buy a bicycle for my ${son[maxDiary]} son.`;
//   }

console.log(whoseBicycle(
    {
      'algebra': 6,
      'history': 7,
      'physics': 8,
      'geography': 9,
      'chemistry': 5
    },
    {
      'algebra':6,
      'history': 7,
      'physics': 8,
      'geography': 9,
      'chemistry': 10
    },
    {
      'algebra': 6,
      'history': 7,
      'physics': 8,
      'geography': 9,
      'chemistry': 10
    }));
  