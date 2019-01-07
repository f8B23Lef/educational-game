import Swal from 'sweetalert2';
import './mathTask.css';
import mathTaskData from './mathTask.data';
import { generateMathTask } from '../../../utils/utils';
import MessageDialog from '../../messageDialog/messageDialog';

class MathTask {
  static async showMathTask(scoupe, callback) {
    console.log('showMathTask()');
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
    console.log('result: ', result, task.answer, result === task.answer);
    console.log('type: ', typeof result);
    if (result === task.answer) {
      console.log(':)');
      await MessageDialog.showCorrectMessage();
    } else {
      console.log(':(');
      isCorrect = false;
      await MessageDialog.showIncorrectMessage();
    }

    await callback.call(scoupe, isCorrect);
  }
}

export default MathTask;
