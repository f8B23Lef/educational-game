import template from './content.template';
import './content.css';

class Content {
  static render() {
    const contentEl = document.querySelector('nav');
    contentEl.insertAdjacentHTML('afterend', template);
  }
}

export default Content;
