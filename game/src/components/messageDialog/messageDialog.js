import Swal from 'sweetalert2';

class MessageDialog {
  static async showCorrectMessage() {
    await Swal({
      title: 'You are right!',
      type: 'success',
      showConfirmButton: false,
      timer: 1200,
      allowOutsideClick: 'false',
      allowEscapeKey: 'false',
      animation: false,
      customClass: 'animated tada',
    });
  }

  static async showIncorrectMessage() {
    await Swal({
      title: 'Noup :(',
      type: 'error',
      showConfirmButton: false,
      timer: 1200,
      allowOutsideClick: 'false',
      allowEscapeKey: 'false',
      animation: false,
      customClass: 'animated shake',
    });
  }

  static showNewRoundMessage() {
    console.log('showNewRoundMessage()');
    return Swal({
      title: 'New round',
      allowOutsideClick: 'false',
      allowEscapeKey: 'false',
      animation: false,
      customClass: 'animated bounceInDown',
    });
  }

  static showGameOverMessage() {
    console.log('showGameOverMessage()');
    return Swal({
      title: 'Game over',
      allowOutsideClick: 'false',
      allowEscapeKey: 'false',
      animation: false,
      customClass: 'animated bounceInDown',
    });
  }
}

export default MessageDialog;
