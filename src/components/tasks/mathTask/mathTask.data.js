import { randomInteger } from '../../../utils/utils';

const mathOperators = ['+', '-', '*'];

const calculate = (a, b, operator) => {
  let result = 0;
  switch (operator) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    default:
      break;
  }
  return result;
};

const generateCalculateTask = () => {
  const question = 'Calculate:';

  const a = randomInteger(0, 30);
  const b = randomInteger(0, 30);
  const operator = mathOperators[randomInteger(0, mathOperators.length - 1)];

  const task = `${a} ${operator} ${b} = ?`;
  const answer = String(calculate(a, b, operator));

  return { question, task, answer };
};

const compare = (a, b) => {
  if (a > b) {
    return '>';
  }
  if (a < b) {
    return '<';
  }
  return '=';
};

const generateCompareTask = () => {
  const question = 'Compare two numbers (<, >, =):';

  const a = randomInteger(0, 30);
  const b = randomInteger(0, 30);

  const task = `${a} ? ${b}`;
  const answer = compare(a, b);

  return { question, task, answer };
};

const getSequence = () => {
  const arr = [];
  arr.push(randomInteger(0, 30));
  const dif = randomInteger(0, 10);
  for (let i = 0; i < 4; i += 1) {
    arr.push(arr[i] + dif);
  }

  return arr;
};

const generateSequenceTask = () => {
  const question = 'Continue the sequence:';

  const arr = getSequence();

  const answer = String(arr.pop());
  const task = arr.concat('?').join(', ');

  return { question, task, answer };
};

export default [generateCalculateTask, generateCompareTask, generateSequenceTask];
