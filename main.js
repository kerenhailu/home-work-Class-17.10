// class Car {
//   Wheels;
//   color;
//   volume;
//   Engine;
//   constructor(Wheels, color, volume, Engine) {
//     this.Wheels = Wheels;
//     this.color = color;
//     this.volume = volume;
//     this.Engine = Engine;
//   }
//   TextDetails() {
//     return `${this.Wheels}, ${this.color}, ${this.volume}, ${this.Engine} `;
//   }
//   //! הנפח הכי גדול???
//   static Morevolume(array) {
//       let maxNumvolume = 0;
//       let objectvolume = null;
//       for (let i = 0; i < array.length; i++) {
//         if (array[i].volume > maxNumvolume) {
//           maxNumvolume = array[i].volume=;
//           objectvolume = array[i];
//         }
//       }
//       return objectvolume;
//     }
//     bigLetters1() {
//     return this.color.toUpperCase();
//   }

//   get bigLettersAll1() {
//     return this.bigLetters1();
//   }
// }

// class bass extends Car {
//   constructor(Wheels, color, volume, Engine) {
//     super(Wheels, color, volume, Engine);
//   }
//   FullText() {
//     return `${super.TextDetails()} bass`;
//   }
// }

// class mazda extends Car {
//   constructor(Wheels, color, volume, Engine) {
//     super(Wheels, color, volume, Engine);
//   }
//   FullText() {
//     return `${super.TextDetails()} mazda`;
//   }
// }

// class honda extends Car {
//   constructor(Wheels, color, volume, Engine) {
//     super(Wheels, color, volume, Engine);
//   }
//   FullText() {
//     return `${super.TextDetails()} honda`;
//   }
// }

// let CarTwo = new Car(555, "dsfv", "red", 55);
// let CarThree = new Car(555, "dsfv", "red", 405);
// console.log(CarTwo, CarThree);
// console.log(CarThree.bigLettersAll1);

// let bass1 = new bass(555, "dsfv", "red", 55);
// let mazda1 = new mazda(555, "dsfv", "blue", 22);
// let honda1 = new honda(555, "dsfv", "green", 44);

// console.log(bass1.FullText());
// console.log(mazda1.FullText());
// console.log(honda1.FullText());

// btn.onclick = () => {
//   let CarOne = new Car(Wheels.value, color.value, volume.value, Engine.value);
//   console.log(CarOne);
//   for (const key in CarOne) {
//     art.innerHTML += `<table><tr><td> ${CarOne[key]}</td></tr></table>`;
//   }
// };
// console.log(Car.Morevolume([bass1,mazda1,honda1]));
// =====================================================
// =====================================================

// תרגיל מסכם תשובה הטובה  !!! 

class Car {
  NumberOfWheels;
  samak;
  color;
  constructor(NumberOfWheels, samak, color) {
    this.NumberOfWheels = NumberOfWheels;
    this.samak = samak;
    this.color = color;
  }
  //!אם זו פונקציה מחזיה נעשה פונקצית גט
  getDetails() {
    return `Number Of Wheels : ${this.NumberOfWheels} ,
    engine size : ${this.samak} ,
    color of the car : ${this.color}`;
  }
  static getBiggerSamak(carsArray) {
    let biggestSamak = carsArray[0];
    for (const carItem of carsArray) {
      if (carItem.samak > biggestSamak.samak) biggestSamak = carItem;
      //!אותה פונקציה רק בפןראיץ
      // carsArray.forEach((carItem) =>{
      //   if (carItem.samak > biggestSamak.samak) biggestSamak = carItem;
      // });
    }
    return biggestSamak;
  }
}
//!הקלאס הראשון
class Truck extends Car {
  //!ברגע שקראתי לפונקציה של הבן אותה שם כמו הפונקציה של האבא
  //!דרסתי את הפונקציה של האבא
  trackName;
  constructor(_NumberOfWheels, _samak, _color, _trackName) {
    super(_NumberOfWheels, _samak, _color);
    this.trackName = _trackName;
  }
  getDetails() {
    return `${super.getDetails()} , ${this.trackName}`;
  }
}

//!הקלאס השני
class Honda extends Car {
  //!ברגע שקראתי לפונקציה של הבן אותה שם כמו הפונקציה של האבא
  //!דרסתי את הפונקציה של האבא
  hondaName;
  constructor(_NumberOfWheels, _samak, _color, hondaName) {
    super(_NumberOfWheels, _samak, _color);
    this.hondaName = hondaName;
  }
  getDetails() {
    return `${super.getDetails()} , ${this.hondaName}`;
  }
}

//!הקלאס השלישי
class Bus extends Car {
  //!ברגע שקראתי לפונקציה של הבן אותה שם כמו הפונקציה של האבא
  //!דרסתי את הפונקציה של האבא
  busName;
  constructor(_NumberOfWheels, _samak, _color, _busName) {
    super(_NumberOfWheels, _samak, _color);
    this.busName = _busName;
  }
  getDetails() {
    return `${super.getDetails()} , ${this.busName}`;
  }
  getBusNameUpperCase() {
    return this.busName.toUpperCase();
  }
  //!פונקצית גיט מחזירה רק את התוצאה הסופית של הפונקציה שמעליה
  //!יש את היכולת להסוות ולהסתיר מהמשתמש את הדרך ולהראות לו רק את התוצאה
  get nameUpperCase() {
    return this.getBusNameUpperCase();
  }
}

saveCar.onclick = ()=>{
  switch(carTypeId.value.toLowerCase()){
    case "bus":
      console.log(new Bus(numOfWeelsId.value, colorId.value,samakId.value,"bus"));
      return new Bus(numOfWeelsId.value, colorId.value,samakId.value,"bus")
      
      case "truck":
        console.log(new Truck(numOfWeelsId.value, colorId.value,samakId.value,"truck"));
        return new Truck(numOfWeelsId.value, colorId.value,samakId.value,"truck")
        case "honda":
          console.log(new Honda(numOfWeelsId.value, colorId.value,samakId.value,"honda"));
          return new Honda(numOfWeelsId.value, colorId.value,samakId.value,"honda")
        default:
      alert("no such car")
  }
}