// const animal = {
//     legs: 4,
//   };
//   const dog = Object.create(animal);
//   dog.name = "Манго";
  
//   console.log(dog); // { name: 'Манго', __proto__: animal }
//   console.log(animal.isPrototypeOf(dog));


// const objA = {
//     x:5,
// };


// console.log('obj a', objA);
// // console.log(objA.__proto__);


// class food{

//     constructor(){
        
//     }
// }



// ================= задача со статик=============

// class Car {
//     // Change code below this line
//     #price;
  
//     static MAX_PRICE = 50000;

// constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//       console.log('newPrice, MAX_PRICE',newPrice, Car.MAX_PRICE);

//     if (newPrice > this.MAX_PRICE){
//       return this.#price;
//     }
//     else {this.#price = newPrice;}
//   }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000


// ================= задача екстенд =============


// class User {
//     constructor(email) {
//       this.email = email;
//     }
  
//     get email() {
//       return this.email;
//     }
  
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }

  
//   // Change code below this line
//   class Admin extends User{

// static AccessLevel = { BASIC: "basic", SUPERUSER: "superuser" };
//   }

//   console.log(Admin.AccessLevel.SUPERUSER);


// ================= задача 20 =============



class User {
    email;
  
    constructor(email) {
      this.email = email;
    }
  
    get email() {
      return this.email;
    }
  
    set email(newEmail) {
      this.email = newEmail;
    }
  }
  class Admin extends User {
    // Change code below this line
    blacklistedEmails = [];
    
    static AccessLevel = {
      BASIC: "basic",
      SUPERUSER: "superuser",
    };
  
    constructor({ email, accessLevel }) {
      super(email);
      this.accessLevel = accessLevel;
    }
  
    blacklist(email){
      this.blacklistedEmails.push(email);
    }
  
     isBlacklisted(email){
        console.log('blacklistedEmails', this.blacklistedEmails, email);
      this.blacklistedEmails.includes(email);
    }
    // Change code above this line
  }
  
  const mango = new Admin({
    email: "mango@mail.com",
    accessLevel: Admin.AccessLevel.SUPERUSER,
  });
  
  console.log(mango.email); // "mango@mail.com"
  console.log(mango.accessLevel); // "superuser"
  
  mango.blacklist("poly@mail.com");
  console.log(mango.blacklistedEmails); // ["poly@mail.com"]
  console.log(mango.isBlacklisted("mango@mail.com")); // false
  console.log(mango.isBlacklisted("poly@mail.com")); // true