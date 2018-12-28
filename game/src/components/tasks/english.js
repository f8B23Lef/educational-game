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
  opposites: {
    question: 'Write the opposites of the given word:',
    tasks: [
      {
        task: 'left',
        answer: ['right'],
      },
      {
        task: 'after',
        answer: ['before'],
      },
      {
        task: 'cold',
        answer: ['hot'],
      },
      {
        task: 'yesterday',
        answer: ['tomorrow'],
      },
      {
        task: 'start',
        answer: ['end'],
      },
      {
        task: 'last',
        answer: ['first'],
      },
      {
        task: 'short',
        answer: ['long'],
      },
      {
        task: 'quick',
        answer: ['slow'],
      },
      {
        task: 'night',
        answer: ['day'],
      },
      {
        task: 'big',
        answer: ['small', 'little'],
      },
      {
        task: 'always',
        answer: ['never'],
      },
      {
        task: 'bad',
        answer: ['good'],
      },
      {
        task: 'boy',
        answer: ['girl'],
      },
      {
        task: 'dark',
        answer: ['light'],
      },
    ],
  },
  'have-has': {
    question: 'Insert have/has instead of dots:',
    tasks: [
      {
        task: 'I ... a bike.',
        answer: ['have'],
      },
      {
        task: 'We ... a blue car.',
        answer: ['have'],
      },
      {
        task: 'He ... breakfast at 7 am.',
        answer: ['has'],
      },
      {
        task: 'She ... a cat.',
        answer: ['has'],
      },
      {
        task: 'My brother ... a great job.',
        answer: ['has'],
      },
      {
        task: 'We ... a new English teacher.',
        answer: ['have'],
      },
      {
        task: 'They ... a beautiful house.',
        answer: ['have'],
      },
    ],
  },
  'to be': {
    question: 'Insert am/is/are instead of dots:',
    tasks: [
      {
        task: 'I ... a girl.',
        answer: ['am'],
      },
      {
        task: 'He ... my brother.',
        answer: ['is'],
      },
      {
        task: 'She ... my sister.',
        answer: ['is'],
      },
      {
        task: 'I ... from London.',
        answer: ['am'],
      },
      {
        task: 'Bob ... 15 years old.',
        answer: ['is'],
      },
      {
        task: 'Anna ... a student',
        answer: ['is'],
      },
      {
        task: 'They ... our parents.',
        answer: ['are'],
      },
      {
        task: 'We ... a family.',
        answer: ['are'],
      },
      {
        task: 'It ... our dog.',
        answer: ['is'],
      },
      {
        task: 'Ice-cream ... cold.',
        answer: ['is'],
      },
    ],
  },
  'a-an': {
    question: 'Insert article a/an instead of dots:',
    tasks: [
      {
        task: '... cat',
        answer: ['a'],
      },
      {
        task: '... doctor',
        answer: ['a'],
      },
      {
        task: '... actor',
        answer: ['an'],
      },
      {
        task: '... apple',
        answer: ['an'],
      },
      {
        task: '... woman',
        answer: ['a'],
      },
      {
        task: '... old man',
        answer: ['an'],
      },
      {
        task: '... dog',
        answer: ['a'],
      },
      {
        task: '... arm',
        answer: ['an'],
      },
      {
        task: '... animal',
        answer: ['an'],
      },
      {
        task: '... orange',
        answer: ['an'],
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
