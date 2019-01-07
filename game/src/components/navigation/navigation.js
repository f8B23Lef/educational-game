import template from './navigation.template';
import './navigation.css';

class Navigation {
  static render() {
    const contentEl = document.querySelector('body');
    contentEl.insertAdjacentHTML('afterbegin', template);
  }
}

export default Navigation;
