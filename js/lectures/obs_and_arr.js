

const cart = {
    items: [],

    // add(newProduct){
    //     for (const {name, quantity} of this.items){
    //         if (name === newProduct.name){
    //             console.log('item already exists', name, newProduct.name );
    //             quantity +=1;
    //             console.table(items);
    //             return;
    //         }
    //     }

    //     const newCartItem = {
    //         ...newProduct,
    //         quantity: 1,
    //     }

    // this.items.push(newCartItem);
    // console.table(this.items);
    // },


    add(product) {
        for (const item of this.items) {
          if (item.name === product.name) {
            item.quantity += 1;
            console.table(this.items);
            return;
          }
        }
    
        const newProduct = {
          ...product,
          quantity: 1,
        };
    
        this.items.push(newProduct);
        console.table(this.items);
      },


    getTotalPrice(){
        let total = 0;
        for (const {price, quantity} of this.items){
            total+=price*quantity;
        }
        console.log('total price is:', total);

    }


}

cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍇', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });


cart.getTotalPrice();