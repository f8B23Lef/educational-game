import Swal from 'sweetalert2';
import imageTaskData from './imageTask.data';
import { generateGeneralTask } from '../../../utils/utils';
import MessageDialog from '../../messageDialog/messageDialog';

class ImageTask {
  static async showImageTask(scoupe, callback) {
    const task = generateGeneralTask(imageTaskData);

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
      allowOutsideClick: false,
      allowEscapeKey: false,
    });

    if (task.answer === result) {
      await MessageDialog.showCorrectMessage();
    } else {
      isCorrect = false;
      await MessageDialog.showIncorrectMessage();
    }

    await callback.call(scoupe, isCorrect);
  }
}

export default ImageTask;
