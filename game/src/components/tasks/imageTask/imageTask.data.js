import bear from './img/animals/bear.png';
import cat from './img/animals/cat.png';
import dog from './img/animals/dog.png';
import fox from './img/animals/fox.png';
import lion from './img/animals/lion.png';
import tiger from './img/animals/tiger.png';
import wolf from './img/animals/wolf.png';

import apple from './img/fruits/apple.png';
import banana from './img/fruits/banana.png';
import lemon from './img/fruits/lemon.png';
import orange from './img/fruits/orange.png';
import peach from './img/fruits/peach.png';
import pineapple from './img/fruits/pineapple.png';

import armchair from './img/furniture/armchair.png';
import chair from './img/furniture/chair.png';
import table from './img/furniture/table.png';

import garlic from './img/vegetables/garlic.png';
import onion from './img/vegetables/onion.png';
import potato from './img/vegetables/potato.png';

export default {
  image: {
    question: 'Choose the correct answer:',
    tasks: [
      {
        task: [bear, ['tiger', 'bear', 'wolf']],
        answer: 'bear',
      },
      {
        task: [cat, ['dog', 'lion', 'cat']],
        answer: 'cat',
      },
      {
        task: [dog, ['dog', 'cat', 'wolf']],
        answer: 'dog',
      },
      {
        task: [fox, ['tiger', 'fox', 'wolf']],
        answer: 'fox',
      },
      {
        task: [lion, ['tiger', 'lion', 'wolf']],
        answer: 'lion',
      },
      {
        task: [tiger, ['lion', 'wolf', 'tiger']],
        answer: 'tiger',
      },
      {
        task: [wolf, ['dog', 'wolf', 'bear']],
        answer: 'wolf',
      },
      {
        task: [apple, ['peach', 'apple', 'orange']],
        answer: 'apple',
      },
      {
        task: [banana, ['grape', 'banana', 'apricot']],
        answer: 'banana',
      },
      {
        task: [lemon, ['orange', 'apricot', 'lemon']],
        answer: 'lemon',
      },
      {
        task: [orange, ['grape', 'orange', 'lemon']],
        answer: 'orange',
      },
      {
        task: [peach, ['peach', 'banana', 'apricot']],
        answer: 'peach',
      },
      {
        task: [pineapple, ['peach', 'pineapple', 'apricot']],
        answer: 'pineapple',
      },
      {
        task: [armchair, ['chair', 'table', 'armchair']],
        answer: 'armchair',
      },
      {
        task: [chair, ['table', 'chair', 'armchair']],
        answer: 'chair',
      },
      {
        task: [table, ['chair', 'table', 'armchair']],
        answer: 'table',
      },
      {
        task: [garlic, ['onion', 'garlic', 'potato']],
        answer: 'garlic',
      },
      {
        task: [onion, ['potato', 'garlic', 'onion']],
        answer: 'onion',
      },
      {
        task: [potato, ['onion', 'potato', 'garlic']],
        answer: 'potato',
      },
    ],
  },
};


// const randomInteger = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

// export default () => {
//   const typeTasks = Object.keys(imageTasks);
//   const indexTypeTask = randomInteger(0, typeTasks.length - 1);
//   const { question } = imageTasks[typeTasks[indexTypeTask]];

//   const { tasks } = imageTasks[typeTasks[indexTypeTask]];
//   const indexTask = randomInteger(0, tasks.length - 1);
//   const { task, answer } = tasks[indexTask];

//   return { question, task, answer };
// };
