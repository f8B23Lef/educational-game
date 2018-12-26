const adjectives = ['Brave', 'Calm', 'Clever', 'Dangerous', 'Deaf', 'Dexterous', 'Invincible', 'Hysterical', 'Risky', 'Sullen', 'Sinister', 'Slick', 'Warlike'];
const title = ['Berserk', 'Commander', 'Hero', 'Knight', 'Master', 'Necromancer', 'Rogue', 'Overlord', 'Shadow', 'Wanderer', 'Warrior'];
const names = ['Arnold', 'Bob', 'Brian', 'Caleb', 'Corey', 'Darren', 'Derek', 'Ezekiel', 'Gareth', 'Graham', 'Grant', 'Hubert', 'Kurt', 'Sam', 'Tom'];

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
