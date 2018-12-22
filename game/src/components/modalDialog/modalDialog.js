import Swal from 'sweetalert2';
import './modalDialog.css';
import { spellButtonsTemplate, calculate } from './modalDialog.template';
import generateMathTask from '../tasks/math';
import generateEnglishTask from '../tasks/english';

// eslint-disable-next-line import/prefer-default-export
export const showModalDialog = () => {
  Swal({
    title: 'Choose spell:',
    html: spellButtonsTemplate,
    showConfirmButton: false,
    allowOutsideClick: false,
    allowEscapeKey: false,
    animation: false,
    customClass: 'animated zoomIn',
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

const showMathModalDialog = (task) => {
  console.log('showMathModalDialog()');
  Swal({
    // title: 'Calculate:',
    // text: '2 + 5 =',
    // input: 'text',
    title: task.question,
    text: task.task,
    input: 'text',
    // inputClass: 'ttt',
    // html: calculate('2 + 5 = '),
    allowOutsideClick: false,
    allowEscapeKey: false,
  })
    .then((result) => {
      console.log('result: ', result, result.value, task.answer, result.value === task.answer);
      console.log('type: ', typeof result.value);
      if (result.value === task.answer) {
        console.log(':)');
        // add animation
        // count hp
        // new turn
        Swal({
          title: 'You are right!',
          type: 'success',
          animation: false,
          customClass: 'animated tada',
        })
          .then(() => showModalDialog());
      } else {
        console.log(':(');
        Swal({
          title: 'Noup :(',
          type: 'error',
          animation: false,
          customClass: 'animated shake',
        })
          .then(() => showModalDialog());
        // add animation
        // count hp
        // new turn
      }
    });
};

const showEnglishModalDialog = (task) => {
  console.log('showEnglishModalDialog()');
  Swal({
    title: task.question,
    text: task.task,
    input: 'text',
    allowOutsideClick: false,
    allowEscapeKey: false,
  })
    .then((result) => {
      console.log('result: ', result, result.value, task.answer, result.value === task.answer);
      if (task.answer.includes(result.value.toLowerCase())) {
        console.log(':)');
        // add animation
        // count hp
        // new turn
        Swal({
          title: 'You are right!',
          type: 'success',
          animation: false,
          customClass: 'animated tada',
        })
          .then(() => showModalDialog());
      } else {
        console.log(':(');
        Swal({
          title: 'Noup :(',
          type: 'error',
          animation: false,
          customClass: 'animated shake',
        })
          .then(() => showModalDialog());
        // add animation
        // count hp
        // new turn
      }
    });
};
