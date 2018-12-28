// const engDictionary = ['car', 'apple', 'cat', 'park', 'tomato', 'banana', 'lemon', 'bed'];
// const randomInteger = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

// const generateWordsOrderTask = () => {
//   const question = 'Arrange the words in alphabetical order:';
//   const task = [];
//   for (let i = 0; i < 4; i++) {
//     task.push(engDictionary[randomInteger(0, engDictionary.length - 1)]);
//   }
//   const answer = task.sort();

//   return { question, task, answer };
// };

// const generateNumbersAscOrderTask = () => {
//   const question = 'Arrange the numbers in ascending order:';
//   const task = [];
//   for (let i = 0; i < 4; i++) {
//     task.push(randomInteger(0, 30));
//   }
//   const answer = task.sort((a, b) => a - b);

//   return { question, task, answer };
// };

const dragTasks = {
  'words-order': {
    question: 'Arange the words in alphabetical order:',
    tasks: [
      {
        task: ['car', 'apple', 'cat', 'park'],
        answer: ['apple', 'car', 'cat', 'park'],
      },
      {
        task: ['key', 'bus', 'window', 'bed'],
        answer: ['bed', 'bus', 'key', 'window'],
      },
      {
        task: ['orange', 'head', 'hand', 'cherry'],
        answer: ['cherry', 'hand', 'head', 'orange'],
      },
      {
        task: ['tomato', 'banana', 'lemon', 'potato'],
        answer: ['banana', 'lemon', 'potato', 'tomato'],
      },
      {
        task: ['hair', 'pet', 'ball', 'table'],
        answer: ['ball', 'hair', 'pet', 'table'],
      },
      {
        task: ['fox', 'bear', 'wolf', 'lion'],
        answer: ['bear', 'fox', 'lion', 'wolf'],
      },
      {
        task: ['bike', 'plane', 'ship', 'train'],
        answer: ['bike', 'plane', 'ship', 'train'],
      },
      {
        task: ['May', 'April', 'June', 'October'],
        answer: ['April', 'June', 'May', 'October'],
      },
      {
        task: ['red', 'blue', 'green', 'pink'],
        answer: ['blue', 'green', 'pink', 'red'],
      },
      {
        task: ['swim', 'ride', 'jump', 'walk'],
        answer: ['jump', 'ride', 'swim', 'walk'],
      },
    ],
  },
  'word-collect': {
    question: 'Collect the word from the letters:',
    tasks: [
      {
        task: ['a', 'c', 'r'],
        answer: ['c', 'a', 'r'],
      },
      {
        task: ['d', 'e', 'b'],
        answer: ['b', 'e', 'd'],
      },
      {
        task: ['h', 'n', 'd', 'a'],
        answer: ['h', 'a', 'n', 'd'],
      },
      {
        task: ['o', 'p', 't', 't', 'o', 'a'],
        answer: ['p', 'o', 't', 'a', 't', 'o'],
      },
      {
        task: ['l', 'b', 'a', 'l'],
        answer: ['b', 'a', 'l', 'l'],
      },
      {
        task: ['x', 'o', 'f'],
        answer: ['f', 'o', 'x'],
      },
      {
        task: ['t', 'a', 'r', 'i', 'n'],
        answer: ['t', 'r', 'a', 'i', 'n'],
      },
      {
        task: ['A', 'r', 'p', 'i', 'l'],
        answer: ['A', 'p', 'r', 'i', 'l'],
      },
      {
        task: ['d', 'r', 'e'],
        answer: ['r', 'e', 'd'],
      },
      {
        task: ['w', 's', 'i', 'm'],
        answer: ['s', 'w', 'i', 'm'],
      },
      {
        task: ['t', 'a', 'c'],
        answer: ['c', 'a', 't'],
      },
      {
        task: ['d', 'g', 'o'],
        answer: ['d', 'o', 'g'],
      },
      {
        task: ['t', 'g', 'i', 'e', 'r'],
        answer: ['t', 'i', 'g', 'e', 'r'],
      },
    ],
  },
  'sentence-collect': {
    question: 'Collect the sentence from the words:',
    tasks: [
      {
        task: ['want', 'I', 'to', 'sleep'],
        answer: ['I', 'want', 'to', 'sleep'],
      },
      {
        task: ['My', 'is', 'name', 'Victor'],
        answer: ['My', 'name', 'is', 'Victor'],
      },
      {
        task: ['am', 'I', 'years', 'old', 'seven'],
        answer: ['I', 'am', 'seven', 'years', 'old'],
      },
      {
        task: ['want', 'I', 'to', 'sleep'],
        answer: ['I', 'want', 'to', 'sleep'],
      },
      {
        task: ['is', 'fox', 'a', 'It'],
        answer: ['It', 'is', 'a', 'fox'],
      },
      {
        task: ['am', 'I', 'schoolboy', 'a'],
        answer: ['I', 'am', 'a', 'schoolboy'],
      },
      {
        task: ['My', 'is', 'sister', 'a', 'student'],
        answer: ['My', 'sister', 'is', 'a', 'student'],
      },
      {
        task: ['like', 'Children ', 'winter'],
        answer: ['Children ', 'like', 'winter'],
      },
      {
        task: ['tourists', 'They', 'are'],
        answer: ['They', 'are', 'tourists'],
      },
    ],
  },
  'numbers-asc': {
    question: 'Arrange the numbers in ascending order:',
    tasks: [
      {
        task: ['8', '1', '5', '3'],
        answer: ['1', '3', '5', '8'],
      },
      {
        task: ['9', '12', '2', '4', '8'],
        answer: ['2', '4', '8', '9', '12'],
      },
      {
        task: ['10', '1', '15', '23'],
        answer: ['1', '10', '15', '23'],
      },
      {
        task: ['3', '0', '2', '4', '8'],
        answer: ['0', '2', '3', '4', '8'],
      },
      {
        task: ['7', '9', '2', '4'],
        answer: ['2', '4', '7', '9'],
      },
      {
        task: ['8', '1', '2', '15', '18'],
        answer: ['1', '2', '8', '15', '18'],
      },
    ],
  },
  'numbers-desc': {
    question: 'Arrange the numbers in descending order:',
    tasks: [
      {
        task: ['20', '1', '12', '10'],
        answer: ['20', '12', '10', '1'],
      },
      {
        task: ['6', '5', '9', '1'],
        answer: ['9', '6', '5', '1'],
      },
      {
        task: ['13', '11', '14', '10'],
        answer: ['14', '13', '11', '10'],
      },
      {
        task: ['8', '15', '9', '1'],
        answer: ['15', '9', '8', '1'],
      },
      {
        task: ['0', '6', '1', '4'],
        answer: ['6', '4', '1', '0'],
      },
      {
        task: ['7', '12', '9', '5'],
        answer: ['12', '9', '7', '5'],
      },
    ],
  },
};

const randomInteger = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

export default () => {
  const typeTasks = Object.keys(dragTasks);
  console.log('typeTasks: ', typeTasks);
  const indexTypeTask = randomInteger(0, typeTasks.length - 1);
  const { question } = dragTasks[typeTasks[indexTypeTask]];

  const { tasks } = dragTasks[typeTasks[indexTypeTask]];
  const indexTask = randomInteger(0, tasks.length - 1);
  const { task, answer } = tasks[indexTask];

  return { question, task, answer };
};
