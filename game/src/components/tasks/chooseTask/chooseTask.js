import Swal from 'sweetalert2';
import chooseTaskData from './chooseTask.data';
import { generateGeneralTask } from '../../../utils/utils';
import MessageDialog from '../../messageDialog/messageDialog';

class ChooseTask {
  static async showChooseTask(scoupe, callback) {
    console.log('showChooseTask()');
    const task = generateGeneralTask(chooseTaskData);

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
      allowOutsideClick: false,
      allowEscapeKey: false,
    });
    console.log('result: ', result, task.answer, result === task.answer);
    if (task.answer === result) {
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

export default ChooseTask;
