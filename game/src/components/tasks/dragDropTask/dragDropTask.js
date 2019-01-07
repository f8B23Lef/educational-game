import Swal from 'sweetalert2';
import Sortable from 'sortablejs';
import './dragDropTask.css';
import template from './dragDropTask.template';
import dragDropTaskData from './dragDropTask.data';
import { generateGeneralTask, compareArrays } from '../../../utils/utils';
import MessageDialog from '../../messageDialog/messageDialog';

class DragDropTask {
  static showDragTask(scoupe, callback) {
    const task = generateGeneralTask(dragDropTaskData);
    let isCorrect = true;

    Swal({
      title: task.question,
      html: template(task.task),
      allowOutsideClick: false,
      allowEscapeKey: false,
      onClose: async () => {
        const result = [];
        [...document.querySelector('.sortable-list').children].forEach(element => result.push(element.innerText));

        if (compareArrays(result, task.answer)) {
          await MessageDialog.showCorrectMessage();
        } else {
          isCorrect = false;
          await MessageDialog.showIncorrectMessage();
        }

        await callback.call(scoupe, isCorrect);
      },
    });

    Sortable.create(document.querySelector('.sortable-list'));
  }
}

export default DragDropTask;
