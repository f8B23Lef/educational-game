import englishTaskData from '../components/tasks/englishTask/englishTask.data';
import mathTaskData from '../components/tasks/mathTask/mathTask.data';

import {
  compareArrays,
  createSortArrFromObj,
  generateGeneralTask,
  generateMathTask,
} from './utils';


describe('compareArrays function', () => {
  it('compare arrays of different lengths', () => {
    const arr1 = [7, 1, 6, 4, 9];
    const arr2 = [7, 5, 2, 11];
    expect(compareArrays(arr1, arr2)).toBe(false);
  });

  it('compare different arrays', () => {
    const arr1 = [5, 1, 23, 4];
    const arr2 = [1, 5, 4, 23];
    expect(compareArrays(arr1, arr2)).toBe(false);
  });

  it('compare identical arrays', () => {
    const arr1 = ['a', 4, 12, '45', null];
    const arr2 = ['a', 4, 12, '45', null];
    expect(compareArrays(arr1, arr2)).toBe(true);
  });
});

describe('createSortArrFromObj function', () => {
  it('create desc sort array from object (by value)', () => {
    const obj = { Anna: 3, Bob: 1, Tom: 15 };
    expect(createSortArrFromObj(obj)).toStrictEqual([['Tom', 15], ['Anna', 3], ['Bob', 1]]);
  });
});

describe('generateGeneralTask function', () => {
  it('has property "question"', () => {
    expect(generateGeneralTask(englishTaskData)).toHaveProperty('question');
  });

  it('has property "task"', () => {
    expect(generateGeneralTask(englishTaskData)).toHaveProperty('task');
  });

  it('has property "answer', () => {
    expect(generateGeneralTask(englishTaskData)).toHaveProperty('answer');
  });
});

describe('generateMathTask function', () => {
  it('has property "question"', () => {
    expect(generateMathTask(mathTaskData)).toHaveProperty('question');
  });

  it('has property "task"', () => {
    expect(generateMathTask(mathTaskData)).toHaveProperty('task');
  });

  it('has property "answer', () => {
    expect(generateMathTask(mathTaskData)).toHaveProperty('answer');
  });
});
