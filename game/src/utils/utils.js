export const randomInteger = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

export const compareArrays = (arr1, arr2) => {
  const conditionLength = arr1.length === arr2.length;
  const conditionContent = arr1.every((value, index) => value === arr2[index]);

  return conditionLength && conditionContent;
};

export const createSortArrFromObj = (obj) => {
  const sortable = [];
  Object.keys(obj).forEach(key => sortable.push([key, obj[key]]));

  sortable.sort((a, b) => b[1] - a[1]);

  return sortable;
};

export const generateGeneralTask = (generalTaskTypes) => {
  const typeTasks = Object.keys(generalTaskTypes);
  const indexTypeTask = randomInteger(0, typeTasks.length - 1);
  const { question } = generalTaskTypes[typeTasks[indexTypeTask]];

  const { tasks } = generalTaskTypes[typeTasks[indexTypeTask]];
  const indexTask = randomInteger(0, tasks.length - 1);
  const { task, answer } = tasks[indexTask];

  return { question, task, answer };
};

export const generateMathTask = (mathTaskTypes) => {
  const index = randomInteger(0, mathTaskTypes.length - 1);
  return mathTaskTypes[index]();
};

// export default randomInteger;
