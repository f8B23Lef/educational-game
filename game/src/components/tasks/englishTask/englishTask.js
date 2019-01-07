import Swal from 'sweetalert2';
import './englishTask.css';
import englishTaskData from './englishTask.data';
import { generateGeneralTask } from '../../../utils/utils';
import MessageDialog from '../../messageDialog/messageDialog';

class EnglishTask {
  static async showEnglishTask(callback) {
    console.log('showEnglishTask()');
    const task = await generateGeneralTask(englishTaskData);
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
      await MessageDialog.showCorrectMessage;
    } else {
      console.log(':(');
      isCorrect = false;
      await MessageDialog.showIncorrectMessage();
    }

    await callback(isCorrect);
  }
}

export default EnglishTask;
