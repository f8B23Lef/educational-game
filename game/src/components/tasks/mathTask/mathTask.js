import Swal from 'sweetalert2';
import './mathTask.css';
import mathTaskData from './mathTask.data';
import { generateMathTask } from '../../../utils/utils';
import MessageDialog from '../../messageDialog/messageDialog';

class MathTask {
  static async showMathTask(scoupe, callback) {
    const task = generateMathTask(mathTaskData);
    let isCorrect = true;

    const { value: result } = await Swal({
      title: task.question,
      text: task.task,
      input: 'text',
      inputClass: 'math',
      allowOutsideClick: false,
      allowEscapeKey: false,
    });

    if (result === task.answer) {
      await MessageDialog.showCorrectMessage();
    } else {
      isCorrect = false;
      await MessageDialog.showIncorrectMessage();
    }

    await callback.call(scoupe, isCorrect);
  }
}

export default MathTask;
