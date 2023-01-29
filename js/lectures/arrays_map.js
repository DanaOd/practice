const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

console.log(players[0].id);

console.table(players);
const playerToChange = { id: 'player-3' };


//Создаем новый массив, умножаем ВСЕМ ОЧКИ НА  - MAP

const newPlayers = players.map(player => {
  return {
    ...player,
    points: player.points * 2,
  };
});

//Создаем новый массив, обновляем одному айдишник

// const updatedPlayers = players.map(player => {
//   if (player.id === playerToChange.id) {
//     return {
//       ...player,
//       id: 'player-300',
//     };
//   }
//   return player;
// });

const updatedPlayers = players.map(player =>
  player.id === playerToChange.id ? { ...player, id: 'player-300' } : player,
);

console.table(updatedPlayers);


// FILTER
const hardPlayers = players.filter(player => player.timePlayed > 250);
console.log(hardPlayers);

// const playerToFind = players.find((player=>player.name === "Chelsy"));


//деструктуризация 
// const playerToFind = players.find((({name})=>name === "Chelsy"));
// console.log(playerToFind);


//переписываем красиво - FIND
const playerToFind = 'Kiwi';

const findPlayerByName = (arr, playerName)=>{
  return arr.find((item=>item.name === playerName));
}

findPlayerByName(players, playerToFind);
console.log(findPlayerByName(players, playerToFind));


//EVERY - вернет true/false // SOME
const areOnline = players.every(player => player.online);
console.log(areOnline);
