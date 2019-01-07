import 'regenerator-runtime/runtime';
// import 'bootstrap';
import Swal from 'sweetalert2';
import './spellDialog.css';
import template from './spellDialog.template';

import MathTask from '../tasks/mathTask/mathTask';
import EnglishTask from '../tasks/englishTask/englishTask';// test ???
import DragDropTask from '../tasks/dragDropTask/dragDropTask';
import ChooseTask from '../tasks/chooseTask/chooseTask';
import ImageTask from '../tasks/imageTask/imageTask';

class SpellDialog {
  constructor(callback) {
    this.callBack = callback;
  }

  showSpellDialog() {
    Swal({
      title: 'Choose spell:',
      html: template,
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      animation: false,
      customClass: 'animated zoomIn',
      stopKeydownPropagation: false,
      onBeforeOpen: () => {
        document.querySelector('.math-button').addEventListener('click', () => {
          console.log('click math');
          MathTask.showMathTask(this.callBack);
        });

        document.querySelector('.english-button').addEventListener('click', () => {
          console.log('click english');
          EnglishTask.showEnglishTask(this.callBack);
        });

        document.querySelector('.drag-button').addEventListener('click', () => {
          console.log('click drag-drop');
          DragDropTask.showDragTask(this.callBack);
        });

        document.querySelector('.radio-button').addEventListener('click', () => {
          console.log('click radio-drop');
          ChooseTask.showChooseTask(this.callBack);
        });

        document.querySelector('.image-button').addEventListener('click', () => {
          console.log('click image-drop');
          ImageTask.showImageTask(this.callBack);
        });
      },
      onOpen: () => {
        console.log('onOpen()', document.activeElement);

        let curSpellButton = document.activeElement;

        document.querySelectorAll('.spell-button').forEach((button) => {
          button.addEventListener('mouseover', (e) => {
            console.log('mouseover', e);
            curSpellButton.classList.remove('hover');
            curSpellButton = e.target;
          });
        });

        document.querySelector('.spell-buttons').addEventListener('keydown', (key) => {
          console.log('click on -> ', key);

          // const curSpellButton = document.activeElement;

          if (key.code === 'ArrowUp') {
            console.log('up');
            let prevSpellButton = curSpellButton.previousElementSibling;

            if (curSpellButton === curSpellButton.parentElement.firstElementChild) {
              prevSpellButton = curSpellButton.parentElement.lastElementChild;
            }

            curSpellButton.classList.remove('hover');
            prevSpellButton.focus();
            prevSpellButton.classList.add('hover');
            curSpellButton = prevSpellButton;
          } else if (key.code === 'ArrowDown') {
            console.log('down');
            let nextSpellButton = curSpellButton.nextElementSibling;

            if (curSpellButton === curSpellButton.parentElement.lastElementChild) {
              nextSpellButton = curSpellButton.parentElement.firstElementChild;
            }

            curSpellButton.classList.remove('hover');
            nextSpellButton.focus();
            nextSpellButton.classList.add('hover');
            curSpellButton = nextSpellButton;
          } else if (key.code === 'Tab') {
            console.log('tab');
            key.preventDefault();
            key.stopImmediatePropagation();
          }
        });
      },
    });
  }
}

export default SpellDialog;
