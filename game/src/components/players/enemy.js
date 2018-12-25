const adjectives = ['Sullen', 'Sinister'];
const title = ['Warrior', 'Berserk'];
const names = ['Tom', 'Bob'];

const randomInteger = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

const generateName = () => {
  return adjectives[randomInteger(0, adjectives.length - 1)].concat(' ', title[randomInteger(0, title.length - 1)], ' ', names[randomInteger(0, names.length - 1)]);
};

class Enemy {
  constructor() {
    this.name = generateName();
    this.hp = 100;
    this.strength = 20;
  }
}

export default Enemy;
