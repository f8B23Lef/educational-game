const mathOperators = ['+', '-', '*'];

const randomInteger = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

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
  const question = 'Calculate: ';

  const a = randomInteger(-100, 100);
  const b = randomInteger(-100, 100);
  const operator = mathOperators[randomInteger(0, mathOperators.length - 1)];

  const task = `(${a}) ${operator} (${b}) = ?`;
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
  const question = 'Compare: ';

  const a = randomInteger(-100, 100);
  const b = randomInteger(-100, 100);

  const task = `(${a}) ? (${b})`;
  const answer = compare(a, b);

  return { question, task, answer };
};

const getSequence = () => {
  const arr = [];
  arr.push(randomInteger(-100, 100));
  const dif = randomInteger(-20, 20);
  for (let i = 0; i < 4; i += 1) {
    arr.push(arr[i] + dif);
  }

  return arr;
};

const generateSequenceTask = () => {
  const question = 'Sequence: ';

  const arr = getSequence();

  const answer = String(arr.pop());
  const task = arr.concat('?').join(', ');

  return { question, task, answer };
};

// const ascSort = (arr) => arr.sort();
// const descSort = (arr) => arr.sort().reverse();

const mathTaskTypes = [generateCalculateTask, generateCompareTask, generateSequenceTask];

export default () => {
  const index = randomInteger(0, mathTaskTypes.length - 1);
  return mathTaskTypes[index]();
};
