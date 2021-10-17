class Car {
  Wheels;
  color;
  volume;
  Engine;
  constructor(Wheels, color, volume, Engine) {
    this.Wheels = Wheels;
    this.color = color;
    this.volume = volume;
    this.Engine = Engine;
  }
  TextDetails() {
    return `${this.Wheels}, ${this.color}, ${this.volume}, ${this.Engine} `;
  }
  //! הנפח הכי גדול
  static Morevolume() {
    return Math.max(this.volume);
  }
  bigLetters1() {
    return this.color.toUpperCase();
  }

  get bigLettersAll1() {
    return this.bigLetters1();
  }
}

class bass extends Car {
  constructor(Wheels, color, volume, Engine) {
    super(Wheels, color, volume, Engine);
  }
  FullText() {
    return `${super.TextDetails()} bass`;
  }
}

class mazda extends Car {
  constructor(Wheels, color, volume, Engine) {
    super(Wheels, color, volume, Engine);
  }
  FullText() {
    return `${super.TextDetails()} mazda`;
  }
}

class honda extends Car {
  constructor(Wheels, color, volume, Engine) {
    super(Wheels, color, volume, Engine);
  }
  FullText() {
    return `${super.TextDetails()} honda`;
  }
}

let CarTwo = new Car(555, "dsfv", "red", 55);
let CarThree = new Car(555, "dsfv", "red", 405);
console.log(CarTwo, CarThree);
console.log(CarThree.bigLettersAll1);

let bass1 = new bass(555, "dsfv", "red", 55);
let mazda1 = new mazda(555, "dsfv", "blue", 22);
let honda1 = new honda(555, "dsfv", "green", 44);

console.log(bass1.FullText());
console.log(mazda1.FullText());
console.log(honda1.FullText());

btn.onclick = () => {
  let CarOne = new Car(Wheels.value, color.value, volume.value, Engine.value);
  console.log(CarOne);
  for (const key in CarOne) {
    art.innerHTML += `<table><tr><td> ${CarOne[key]}</td></tr></table>`;
  }
};
console.log(Car.Morevolume());
