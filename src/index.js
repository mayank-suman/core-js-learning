/*
  Reference:
  https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript
 */

// Hero constructor
function Hero(name, level) {
  this.name = name;
  this.level = level;
}

// Create parent instance
const thor = new Hero("thor", 1);

console.log(Object.getPrototypeOf(thor));

// Add method to parent prototype
Hero.prototype.greet = function () {
  console.log(`${this.name} say hello`);
};

// Call method from prototype
thor.greet();

// calling the parent to access parents properties
function Warrior(name, level, weapon) {
  // Chain constructor with call to copy properties from parent's constructor
  Hero.call(this, name, level);
  this.weapon = weapon;
}

function Healer(name, level, spell) {
  Hero.call(this, name, level);

  this.spell = spell;
}

// assigning the parent to access parents prototype methods
Warrior.prototype = Object.create(Hero.prototype);
Healer.prototype = Object.create(Hero.prototype);

// Creating child instance
const monk = new Healer("monk", 2, "stick");
console.log(monk);

// Add method to child prototype
Healer.prototype.heal = function () {
  console.log(`${this.name} cast heal with ${this.spell}`);
};

// Call self prototype
monk.heal();

// Call parent prototype
monk.greet();

// function Employee(){
//   this.name = 'Shubham';
//   }

//   function Manager(){
//   this.id = '1';
//   }
//   Manager.prototype.name = new Employee();
//   let mng = new Manager();
//   mng.__proto__
