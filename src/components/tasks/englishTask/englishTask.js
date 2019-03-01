import Swal from 'sweetalert2';
import './englishTask.css';
import englishTaskData from './englishTask.data';
import { generateGeneralTask } from '../../../utils/utils';
import MessageDialog from '../../messageDialog/messageDialog';

class EnglishTask {
  static async showEnglishTask(scoupe, callback) {
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

    if (task.answer.includes(result.toLowerCase())) {
      await MessageDialog.showCorrectMessage;
    } else {
      isCorrect = false;
      await MessageDialog.showIncorrectMessage();
    }

    await callback.call(scoupe, isCorrect);
  }
}

export default EnglishTask;
