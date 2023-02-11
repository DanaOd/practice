function makeTask(data) {
    const completed = false;
    const category = "General";
    const priority = "Normal";
    // Change code below this line

// const {category :"General", priority= "Normal", text} = data;
    
  const newObj = {category, priority, completed, ...data};
  
    return newObj;

}
    // console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));

    // console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));
    // console.log(makeTask({ text: "Buy bread" }));

    //makeTask({ category: 'Finance', text: 'Take interest' }) повертає 
    //{ category: 'Finance', priority: 'Normal', text: 'Take interest', completed: false }

    console.log(makeTask({ category: 'Finance', text: 'Take interest' }));