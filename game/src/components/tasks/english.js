const englishTasks = {
  'eng-ru': {
    question: 'Translate from English to Russian:',
    tasks: [
      {
        task: 'apple',
        answer: ['яблоко', 'яблочко'],
      },
      {
        task: 'pear',
        answer: ['груша'],
      },
      {
        task: 'onion',
        answer: ['лук', 'луковица', 'головка лука', 'лучок'],
      },
      {
        task: 'mirror',
        answer: ['зеркало', 'зеркальце', 'отражение'],
      },
      {
        task: 'armchair',
        answer: ['кресло'],
      },
      {
        task: 'pants',
        answer: ['брюки', 'штаны', 'панталоны'],
      },
      {
        task: 'teacher',
        answer: ['учитель', 'преподаватель'],
      },
      {
        task: 'tiger',
        answer: ['тигр', 'тигренок'],
      },
      {
        task: 'elephant',
        answer: ['слон', 'слоненок', 'слоник', 'слониха'],
      },
      {
        task: 'white',
        answer: ['белый'],
      },
      {
        task: 'blue',
        answer: ['синий', 'голубой'],
      },
      {
        task: 'Wednesday',
        answer: ['среда'],
      },
      {
        task: 'to know',
        answer: ['знать', 'понимать', 'уметь', 'узнавать'],
      },
      {
        task: 'to eat',
        answer: ['есть', 'кушать'],
      },
      {
        task: 'to sleep',
        answer: ['спать', 'засыпать', 'ночевать'],
      },
    ],
  },
  'ru-eng': {
    question: 'Translate from Russian to English:',
    tasks: [
      {
        task: 'апельсин',
        answer: ['orange'],
      },
      {
        task: 'виноград',
        answer: ['grapes', 'grape'],
      },
      {
        task: 'собака',
        answer: ['dog', 'hound'],
      },
      {
        task: 'дедушка',
        answer: ['grandfather', 'grandpa', 'grandad', 'granddad', 'grandpapa'],
      },
      {
        task: 'мороженое',
        answer: ['ice-cream', 'ice'],
      },
      {
        task: 'мёд',
        answer: ['honey', 'mead'],
      },
      {
        task: 'юбка',
        answer: ['skirt'],
      },
      {
        task: 'лев',
        answer: ['lion', 'leo'],
      },
      {
        task: 'красный',
        answer: ['red'],
      },
      {
        task: 'синий',
        answer: ['blue'],
      },
      {
        task: 'ключ',
        answer: ['key', 'clue'],
      },
      {
        task: 'автобус',
        answer: ['bus', 'autobus'],
      },
      {
        task: 'понедельник',
        answer: ['Monday', 'monday'],
      },
      {
        task: 'бежать',
        answer: ['run', 'to run'],
      },
      {
        task: 'прыгать',
        answer: ['jump', 'to jump'],
      },
      {
        task: 'рисовать',
        answer: ['draw', 'paint', 'to draw', 'to paint'],
      },
    ],
  },
};

const randomInteger = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

export default () => {
  const typeTasks = Object.keys(englishTasks);
  const indexTypeTask = randomInteger(0, typeTasks.length - 1);
  const { question } = englishTasks[typeTasks[indexTypeTask]];

  const { tasks } = englishTasks[typeTasks[indexTypeTask]];
  const indexTask = randomInteger(0, tasks.length - 1);
  const { task, answer } = tasks[indexTask];

  return { question, task, answer };
};
