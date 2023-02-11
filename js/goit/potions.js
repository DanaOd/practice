const atTheOldToad = {
    potions: [
      { name: "Speed potion", price: 460 },
      { name: "Dragon breath", price: 780 },
      { name: "Stone skin", price: 520 },
    ],
    // Change code below this line
    getPotions() {
      return this.potions;
    },


    addPotion(newPotion) {
      const namesArr = [];
      for (const item in this.potions){
        namesArr.push(this.potions[item].name);
      }

      if (namesArr.includes(newPotion.name)) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
  
      this.potions.push(newPotion);
      console.log(this.potions);
    },


    // removePotion(potionName) {
    //   const potionIndex = this.potions.indexOf(potionName);
  
    //   if (potionIndex === -1) {
    //     return `Potion ${potionName} is not in inventory!`;
    //   }
  
    //   this.potions.splice(potionIndex, 1);
    // },

    removePotion(potionName) {
        let names = [];
        for (const item in this.potions){
          names.push(this.potions[item].name);
        }
        const potionIndex = names.indexOf(potionName);
        console.log('names, potionIndex, potionName.name', names, potionIndex, potionName);
    
        if (potionIndex === -1) {
          return `Potion ${potionName} is not in inventory!`;
        }
    
        this.potions.splice(potionIndex, 1);
        console.log(this.potions);
      },


    // updatePotionName(oldName, newName) {
    //   const potionIndex = this.potions.indexOf(oldName);
  
    //   if (potionIndex === -1) {
    //     return `Potion ${oldName} is not in inventory!`;
    //   }
  
    //   this.potions.splice(potionIndex, 1, newName);
    // },
    // Change code above this line

    updatePotionName(oldName, newName) {
        let names = [];
        for (const item in this.potions){
          names.push(this.potions[item].name);
        }
        console.log(names, 'names');
        const potionIndex = names.indexOf(oldName);
    
        if (potionIndex === -1) {
          return `Potion ${oldName} is not in inventory!`;
        }
    
        this.potions[potionIndex].name = newName;
        console.log(this.potions);
      },

  };
  

  

//   console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
//   console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// //   console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));

// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));

// console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"));

const fruits = [ 'banana', 'apple', 'orange', 'watermelon', 'apple', 'orange', 'grape', 'apple', ];
const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
console.log(randomFruit);