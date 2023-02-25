function sentence(List) {
    // your code
    let keys = List.map(obj => String(Object.keys(obj)));
    console.log("keys", keys);

    let numKeys = keys.map(key => Number(key)).sort((a, b)=> a-b);
    console.log("numKeys", numKeys);


    const sortedlist = [];


    numKeys.map(num => {
        const index = String(num);

         List.forEach(obj => {
            let key = String(Object.keys(obj));
            let value = String(Object.values(obj));
            // console.log("index, obj", index, key , value );

            if (key=== index){
            sortedlist.push(value);
            console.log("sortedlist", sortedlist);
            }
        });
        console.log(sortedlist.join(' '));

    });

    return sortedlist.join(' ');
};


  const List = [
    {'4': 'dog' }, {'2': 'took'}, {'3': 'his'}, 
    {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'} 
   ];

   console.log(sentence(List));