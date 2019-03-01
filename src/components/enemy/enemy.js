import { randomInteger } from '../../utils/utils';

const adjectives = ['Brave', 'Calm', 'Clever', 'Dangerous', 'Deaf', 'Dexterous', 'Invincible', 'Hysterical', 'Risky', 'Sullen', 'Sinister', 'Slick', 'Warlike'];
const titles = ['Berserk', 'Commander', 'Hero', 'Knight', 'Master', 'Necromancer', 'Rogue', 'Overlord', 'Shadow', 'Wanderer', 'Warrior'];
const names = ['Arnold', 'Bob', 'Brian', 'Caleb', 'Corey', 'Darren', 'Derek', 'Ezekiel', 'Gareth', 'Graham', 'Grant', 'Hubert', 'Kurt', 'Sam', 'Tom'];

const generateName = () => {
  const adjective = adjectives[randomInteger(0, adjectives.length - 1)];
  const title = titles[randomInteger(0, titles.length - 1)];
  const name = names[randomInteger(0, names.length - 1)];

  return adjective.concat(' ', title, ' ', name);
};

class Enemy {
  constructor() {
    this.name = generateName();
    this.hp = 100;
    this.strength = 20;
  }
}

export default Enemy;
