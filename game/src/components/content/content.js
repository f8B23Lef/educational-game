import template from './content.template';
import './content.css';

class Content {
  static draw() {
    const contentEl = document.querySelector('header');
    contentEl.insertAdjacentHTML('afterend', template);
  }
}

export default Content;
