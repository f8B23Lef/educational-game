import Swal from 'sweetalert2';
import Sortable from 'sortablejs';
import './dragDropTask.css';
import template from './dragDropTask.template';
import dragDropTaskData from './dragDropTask.data';
import { generateGeneralTask, compareArrays } from '../../../utils/utils';
import MessageDialog from '../../messageDialog/messageDialog';

class DragDropTask {
  static showDragTask(callback) {
    console.log('showDragTask()');
    const task = generateGeneralTask(dragDropTaskData);
    console.log(task);
    let isCorrect = true;
    Swal({
      title: task.question,
      html: template(task.task),
      allowOutsideClick: false,
      allowEscapeKey: false,
      onClose: async () => {
        console.log('onClose');
        const result = [];
        [...document.querySelector('.sortable-list').children].forEach(element => result.push(element.innerText));
        console.log('result: ', result, task.answer, result === task.answer);
        if (compareArrays(result, task.answer)) {
          console.log(':)');
          await MessageDialog.showCorrectMessage();
        } else {
          console.log(':(');
          isCorrect = false;
          await MessageDialog.showIncorrectMessage();
        }
        await callback(isCorrect);
      },
    });
    Sortable.create(document.querySelector('.sortable-list'));
  }
}

export default DragDropTask;
