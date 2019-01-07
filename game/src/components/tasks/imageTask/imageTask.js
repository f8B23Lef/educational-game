import Swal from 'sweetalert2';
import imageTaskData from './imageTask.data';
import { generateGeneralTask } from '../../../utils/utils';
import MessageDialog from '../../messageDialog/messageDialog';

class ImageTask {
  static async showImageTask(callback) {
    const task = generateGeneralTask(imageTaskData);
    console.log('showImageTask()', task);

    const options = {};
    task.task[1].forEach((el) => {
      options[el] = el;
    });

    let isCorrect = true;
    const { value: result } = await Swal({
      title: task.question,
      imageUrl: task.task[0],
      imageWidth: 150,
      imageHeight: 150,
      imageAlt: options,
      input: 'radio',
      inputOptions: options,
      // inputClass: 'english',
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

    await callback(isCorrect);
  }
}

export default ImageTask;
