// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Change code below this line
  
//     numbers.forEach( function (num){
//       if (num>value){
//          filteredNumbers.push(num)};
//       })
  
//     // for (let i = 0; i < numbers.length; i += 1) {
//     //   if (numbers[i] > value) {
//     //     filteredNumbers.push(numbers[i]);
//     //   }
//     // }
  
//     // Change code above this line
//     return filteredNumbers;
//   }
  


// function changeEven(numbers, value) {
//     // Change code below this line
//     const newArr = [...numbers];

//     for (let i = 0; i < numbers.length; i += 1) {
//       if (newArr[i] % 2 === 0) {
//         newArr[i] = newArr[i] + value;
//       }
//     }
//     return newArr;
//     // Change code above this line
//   }

//   console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
//   console.log(changeEven([44, 13, 81, 92, 36, 54], 100));



  const userArray = [
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      gender: "male"
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      gender: "female"
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      eyeColor: "green",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      isActive: false,
      balance: 3793,
      gender: "male"
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      eyeColor: "green",
      friends: ["Goldie Gentry", "Aisha Tran"],
      isActive: true,
      balance: 2278,
      gender: "female"
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      eyeColor: "blue",
      friends: ["Jordan Sampson", "Eddie Strong"],
      isActive: true,
      balance: 3951,
      gender: "male"
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      eyeColor: "brown",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      isActive: false,
      balance: 1498,
      gender: "male"
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      eyeColor: "brown",
      friends: ["Goldie Gentry", "Briana Decker"],
      isActive: true,
      balance: 2764,
      gender: "female"
    }
  ]

  const getUsersWithEyeColor = (users, color) => {
    const names = [];

    const filteredByEyes = users.filter(user => user.eyeColor === color).forEach(user =>  names.push(user));
   return names;
  
  };

//   console.log(getUsersWithEyeColor(userArray, "blue"));
//   console.log(getUsersWithEyeColor(userArray, "green"));
//   console.log(getUsersWithEyeColor(userArray, "brown"));


  const getFriends = (users) => {
    const friends = users.flatMap(user => {
      
        console.log(user.friends);
        return user.friends;
    }).filter((elem, index, array)=>{
      return array.indexOf(elem) === index;
    });
  
    return friends;
  };

//   console.log(getFriends(userArray));

  //Вызов функции с указанным массивом пользователей возвращает массив ["Sharron Pace", "Briana Decker", "Marilyn Mcintosh",
//    "Padilla Garrison", "Naomi Buckner", "Goldie Gentry", "Aisha Tran", "Jordan Sampson", "Eddie Strong", "Jacklyn Lucas", 
//    "Linda Chapman"]


const players = [
    { name: "Mango", playtime: 1270, gamesPlayed: 4 },
    { name: "Poly", playtime: 469, gamesPlayed: 2 },
    { name: "Ajax", playtime: 690, gamesPlayed: 3 },
    { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
  ];
  // Change code below this line
  
//   const totalAveragePlaytimePerGame = players.reduce((counter, player) => {
//     console.log('player.playTime/player.gamesPlayed', player.playTime, player.gamesPlayed);
//     return counter += (player.playTime/player.gamesPlayed);
//   }, 0);

  
//   console.log(totalAveragePlaytimePerGame);


const getTotalFriendCount = users => {
    return users.reduce((total, user) =>{
   return total += user.friends.length;
      
 }, 0)
 };

//  console.log(getTotalFriendCount(userArray));


const getSortedFriends = users => {
    return users.reduce((total, user) => {
                return [...total, ...user.friends];
    }, []).filter((item, index, array)=>{
      return array.indexOf(item)===index;
    }).sort((fr1, fr2)=>fr1.localeCompare(fr2));
 };

//  console.log(getSortedFriends(userArray));

const getTotalBalanceByGender = (users, gender) => {
    return [...users].filter(user => user.gender === gender).reduce((total, user)=>{
      return total +=user.balance;
    }, 0)
 };

 console.log(getTotalBalanceByGender(userArray, "male")); //12053
 console.log(getTotalBalanceByGender(userArray, "female")); //8863

