// const func = number => number*2;

// const obj  = {
//     a:5,
//     b:7,
// }

// console.log(func(5));
// console.log(obj);

class Habit {
     greeting  = 'Nice done!';
     warning = 'You should try harder!';


    constructor ({name = "new habit", priority = "low", deadline = 'May'}={}){
        this.name = name;
        this.priority = priority;
        this.deadline = deadline;
    }

    get details (){
        return `the habit ${name} is ${priority} priority and has deadline in ${deadline}`
    }
}

class Healthcare extends Habit{
    totalDaysTrained = 0;

    constructor(haveYouTrainded, ...config){
        super();
        this.haveYouTrainded = haveYouTrainded;

    }
 
       addDaysInTheRow(haveYouTrainded){
        if (haveYouTrainded){
            console.log(this.greeting);
            return this.totalDaysTrained+=1;
        }
        console.log(this.warning);
        return this.totalDaysTrained -=1;
 }


}

const learningEnglish = new Habit({name: "English", priority: "high",});
console.log(learningEnglish);

const GymTraining  = new Healthcare ({name: "aerobics", priority: "middle", haveYouTrainded:false });
console.log(GymTraining);

GymTraining.addDaysInTheRow(true);
console.log(GymTraining.totalDaysTrained);
GymTraining.addDaysInTheRow(true);

GymTraining.addDaysInTheRow(false);
GymTraining.addDaysInTheRow(true);
console.log(GymTraining.totalDaysTrained);
