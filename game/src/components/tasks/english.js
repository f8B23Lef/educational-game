const englishTasks = {
  'eng-ru': {
    question: 'Translate eng-ru',
    tasks: [
      {
        task: 'apple',
        answer: ['яблоко', 'яблочко'],
      },
      {
        task: 'cat',
        answer: ['кот', 'котик', 'кошка'],
      },
    ],
  },
  'ru-eng': {
    question: 'Translate ru-eng',
    tasks: [
      {
        task: 'собака',
        answer: ['dog', 'hound'],
      },
      {
        task: 'апельсин',
        answer: ['orange'],
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
