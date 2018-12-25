// const engDictionary = [];

const dragTasks = {
  'words-order': {
    question: 'Arange the words in the correct order:',
    tasks: [
      {
        task: ['car', 'apple', 'cat', 'park'],
        answer: ['apple', 'car', 'cat', 'park'],
      },
      {
        task: ['key', 'bus', 'window', 'bed'],
        answer: ['bed', 'bus', 'key', 'window'],
      },
    ],
  },
  // 'numbers-asc': {
  //   question: 'Arrange the numbers in ascending order:',
  //   tasks: [
  //     {
  //       task: [8, 0, -5, 3],
  //       answer: [-5, 0, 3, 8],
  //     },
  //     {
  //       task: [54, -1, 52, 26, 9],
  //       answer: [-1, 9, 26, 52, 54],
  //     },
  //   ],
  // },
  // 'numbers-desc': {
  //   question: 'Arrange the numbers in descending order:',
  //   tasks: [
  //     {
  //       task: [-12, -5, 8, 12],
  //       answer: [12, 8, -5, -12],
  //     },
  //     {
  //       task: [6, 64, 3, 1],
  //       answer: [64, 6, 3, 1],
  //     },
  //   ],
  // },
};

const randomInteger = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

export default () => {
  const typeTasks = Object.keys(dragTasks);
  const indexTypeTask = randomInteger(0, typeTasks.length - 1);
  const { question } = dragTasks[typeTasks[indexTypeTask]];

  const { tasks } = dragTasks[typeTasks[indexTypeTask]];
  const indexTask = randomInteger(0, tasks.length - 1);
  const { task, answer } = tasks[indexTask];

  return { question, task, answer };
};
