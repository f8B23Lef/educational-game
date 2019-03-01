import Swal from 'sweetalert2';
import './spellDialog.css';
import template from './spellDialog.template';

import MathTask from '../tasks/mathTask/mathTask';
import EnglishTask from '../tasks/englishTask/englishTask';
import DragDropTask from '../tasks/dragDropTask/dragDropTask';
import ChooseTask from '../tasks/chooseTask/chooseTask';
import ImageTask from '../tasks/imageTask/imageTask';

class SpellDialog {
  constructor(scoupe, callback) {
    this.scoupe = scoupe;
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
          MathTask.showMathTask(this.scoupe, this.callBack);
        });

        document.querySelector('.english-button').addEventListener('click', () => {
          EnglishTask.showEnglishTask(this.scoupe, this.callBack);
        });

        document.querySelector('.drag-button').addEventListener('click', () => {
          DragDropTask.showDragTask(this.scoupe, this.callBack);
        });

        document.querySelector('.radio-button').addEventListener('click', () => {
          ChooseTask.showChooseTask(this.scoupe, this.callBack);
        });

        document.querySelector('.image-button').addEventListener('click', () => {
          ImageTask.showImageTask(this.scoupe, this.callBack);
        });
      },
      onOpen: () => {
        let curSpellButton = document.activeElement;

        document.querySelectorAll('.spell-button').forEach((button) => {
          button.addEventListener('mouseover', (e) => {
            curSpellButton.classList.remove('hover');
            curSpellButton = e.target;
          });
        });

        document.querySelector('.spell-buttons').addEventListener('keydown', (key) => {
          if (key.code === 'ArrowUp') {
            let prevSpellButton = curSpellButton.previousElementSibling;

            if (curSpellButton === curSpellButton.parentElement.firstElementChild) {
              prevSpellButton = curSpellButton.parentElement.lastElementChild;
            }

            curSpellButton.classList.remove('hover');
            prevSpellButton.focus();
            prevSpellButton.classList.add('hover');
            curSpellButton = prevSpellButton;
          } else if (key.code === 'ArrowDown') {
            let nextSpellButton = curSpellButton.nextElementSibling;

            if (curSpellButton === curSpellButton.parentElement.lastElementChild) {
              nextSpellButton = curSpellButton.parentElement.firstElementChild;
            }

            curSpellButton.classList.remove('hover');
            nextSpellButton.focus();
            nextSpellButton.classList.add('hover');
            curSpellButton = nextSpellButton;
          } else if (key.code === 'Tab') {
            key.preventDefault();
            key.stopImmediatePropagation();
          }
        });
      },
    });
  }
}

export default SpellDialog;
