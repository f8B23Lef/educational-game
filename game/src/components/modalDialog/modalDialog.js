import 'regenerator-runtime/runtime';
import 'bootstrap';
import Swal from 'sweetalert2';
import Sortable from 'sortablejs';
import './modalDialog.css';
import { spellButtonsTemplate, dragTemplate } from './modalDialog.template';
import generateMathTask from '../tasks/math';
import generateEnglishTask from '../tasks/english';
import generateDragTask from '../tasks/drag';
import generateRadioTask from '../tasks/radio';
import generateImageTask from '../tasks/image';

let callBack = null;

export const saveCallback = (fun) => {
  callBack = fun;
};

const showMathModalDialog = async (task) => {
  console.log('showMathModalDialog()');
  let isCorrect = true;
  const { value: result } = await Swal({
    title: task.question,
    text: task.task,
    input: 'text',
    inputClass: 'math',
    allowOutsideClick: false,
    allowEscapeKey: false,
  });
  console.log('result: ', result, task.answer, result === task.answer);
  console.log('type: ', typeof result);
  if (result === task.answer) {
    console.log(':)');
    await showCorrectMessage();
  } else {
    console.log(':(');
    isCorrect = false;
    await showIncorrectMessage();
  }

  await callBack(isCorrect);
};

const showEnglishModalDialog = async (task) => {
  console.log('showEnglishModalDialog()');
  let isCorrect = true;
  const { value: result } = await Swal({
    title: task.question,
    text: task.task,
    input: 'text',
    inputClass: 'english',
    allowOutsideClick: false,
    allowEscapeKey: false,
  });
  console.log('result: ', result, task.answer, result === task.answer);
  if (task.answer.includes(result.toLowerCase())) {
    console.log(':)');
    await showCorrectMessage();
  } else {
    console.log(':(');
    isCorrect = false;
    await showIncorrectMessage();
  }

  await callBack(isCorrect);
};

const areArraysEqual = ((arr1, arr2) => arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]));
// JSON.stringify(arr1) === JSON.stringify(arr2)

const showDragModalDialog = (task) => {
  console.log('showDragModalDialog()');
  console.log(task);
  let isCorrect = true;
  Swal({
    title: task.question,
    html: dragTemplate(task.task),
    allowOutsideClick: false,
    allowEscapeKey: false,
    onClose: async () => {
      console.log('onClose');
      const result = [];
      [...document.querySelector('.sortable-list').children].forEach(element => result.push(element.innerText));
      console.log('result: ', result, task.answer, result === task.answer);
      if (areArraysEqual(result, task.answer)) {
        console.log(':)');
        await showCorrectMessage();
      } else {
        console.log(':(');
        isCorrect = false;
        await showIncorrectMessage();
      }
      await callBack(isCorrect);
    },
  });
  Sortable.create(document.querySelector('.sortable-list'));
};

const showRadioModalDialog = async (task) => {
  console.log('showRadioModalDialog()', task);

  const options = {};
  task.task[1].forEach((el) => {
    options[el] = el;
  });

  let isCorrect = true;
  const { value: result } = await Swal({
    title: task.question,
    text: task.task[0],
    input: 'radio',
    inputOptions: options,
    // inputClass: 'english',
    allowOutsideClick: false,
    allowEscapeKey: false,
  });
  console.log('result: ', result, task.answer, result === task.answer);
  if (task.answer === result) {
    console.log(':)');
    await showCorrectMessage();
  } else {
    console.log(':(');
    isCorrect = false;
    await showIncorrectMessage();
  }

  await callBack(isCorrect);
};

const showImageModalDialog = async (task) => {
  console.log('showImageModalDialog()', task);

  const options = {};
  task.task[1].forEach((el) => {
    options[el] = el;
  });

  let isCorrect = true;
  const { value: result } = await Swal({
    title: task.question,
    imageUrl: task.task[0],
    imageWidth: 150,
    imageHeight: 150,
    imageAlt: options,
    input: 'radio',
    inputOptions: options,
    // inputClass: 'english',
    allowOutsideClick: false,
    allowEscapeKey: false,
  });
  console.log('result: ', result, task.answer, result === task.answer);
  if (task.answer === result) {
    console.log(':)');
    await showCorrectMessage();
  } else {
    console.log(':(');
    isCorrect = false;
    await showIncorrectMessage();
  }

  await callBack(isCorrect);
};

export const showSpellDialog = () => {
  Swal({
    title: 'Choose spell:',
    html: spellButtonsTemplate,
    showConfirmButton: false,
    allowOutsideClick: false,
    allowEscapeKey: false,
    animation: false,
    customClass: 'animated zoomIn',
    stopKeydownPropagation: false,
    onBeforeOpen: () => {
      document.querySelector('.math-button').addEventListener('click', () => {
        console.log('click math');
        const task = generateMathTask();
        showMathModalDialog(task);
      });

      document.querySelector('.english-button').addEventListener('click', () => {
        console.log('click english');
        const task = generateEnglishTask();
        showEnglishModalDialog(task);
      });

      document.querySelector('.drag-button').addEventListener('click', () => {
        console.log('click drag-drop');
        const task = generateDragTask();
        showDragModalDialog(task);
      });

      document.querySelector('.radio-button').addEventListener('click', () => {
        console.log('click radio-drop');
        const task = generateRadioTask();
        showRadioModalDialog(task);
      });

      document.querySelector('.image-button').addEventListener('click', () => {
        console.log('click image-drop');
        const task = generateImageTask();
        showImageModalDialog(task);
      });
    },
    onOpen: () => {
      console.log('onOpen()', document.activeElement);

      document.querySelector('.swal2-content').addEventListener('keydown', (key) => {
        console.log('click on -> ', key);

        const curSpellButton = document.activeElement;

        if (key.code === 'ArrowUp') {
          console.log('up');
          let prevSpellButton = curSpellButton.previousElementSibling;

          if (curSpellButton === curSpellButton.parentElement.firstElementChild) {
            prevSpellButton = curSpellButton.parentElement.lastElementChild;
          }

          curSpellButton.classList.remove('hover');
          prevSpellButton.focus();
          prevSpellButton.classList.add('hover');
        } else if (key.code === 'ArrowDown') {
          console.log('down');
          let nextSpellButton = curSpellButton.nextElementSibling;

          if (curSpellButton === curSpellButton.parentElement.lastElementChild) {
            nextSpellButton = curSpellButton.parentElement.firstElementChild;
          }

          curSpellButton.classList.remove('hover');
          nextSpellButton.focus();
          nextSpellButton.classList.add('hover');
        } else if (key.code === 'Tab') {
          console.log('tab');
          key.preventDefault();
          key.stopImmediatePropagation();
        }
      });
    },
  });
};
// Example with HTML form
// function getFormValues () {
//   Swal({
//     title: 'Multiple inputs',
//     html:
//       '<input id="swal-input1" class="swal2-input">',
//     }).then(() => console.log(document.getElementById('swal-input1').value));
//   }
//   getFormValues();

export const showNewRoundMessage = () => {
  console.log('showNewRoundMessage()');
  return Swal({
    title: 'New round',
    allowOutsideClick: 'false',
    allowEscapeKey: 'false',
    animation: false,
    customClass: 'animated bounceInDown',
  });
};

export const showGameOverMessage = () => {
  Swal({
    title: 'Game over',
    // html: scoreTableTemplate,
    // grow: 'fullscreen',
    allowOutsideClick: 'false',
    allowEscapeKey: 'false',
    animation: false,
    customClass: 'animated bounceInDown',
  });
};

const showCorrectMessage = () => Swal({
  title: 'You are right!',
  type: 'success',
  showConfirmButton: false,
  timer: 1200,
  allowOutsideClick: 'false',
  allowEscapeKey: 'false',
  animation: false,
  customClass: 'animated tada',
});
  // .then(() => {
  //   if (!gameOver) {
  //     showSpellDialog();
  //   } else {
  //     showGameOverMessage();
  //   }
  // });


const showIncorrectMessage = () => Swal({
  title: 'Noup :(',
  type: 'error',
  showConfirmButton: false,
  timer: 1200,
  allowOutsideClick: 'false',
  allowEscapeKey: 'false',
  animation: false,
  customClass: 'animated shake',
});
  // .then(() => {
  //   if (!gameOver) {
  //     showSpellDialog();
  //   } else {
  //     showGameOverMessage();
  //   }
  // });
