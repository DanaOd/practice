// function calculateEngravingPrice(message, pricePerWord) {
//     // Change code below this line
//  let messageArr = message.split(' ');
//    const length = messageArr.length-1;
//    return length*pricePerWord;
 
 
//     // Change code above this line
//  }


//  console.log(calculateEngravingPrice('Web-development is creative work', 40));

// function createArrayOfNumbers(min, max) {
//    const numbers = [];
//    // Change code below this line
//  for (let i=min; i<=max; i+=1){
//    console.log(i);
//    numbers.push[i];
//  }
//    // Change code above this line
//    return numbers;
//  }


//  console.log(createArrayOfNumbers(14, 17));

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};


apartment.tags.push("trusted");

console.log(apartment);