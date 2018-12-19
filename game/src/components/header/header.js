import template from './header.template';
import './header.css';

class Header {
  static draw() {
    const contentEl = document.querySelector('nav');
    contentEl.insertAdjacentHTML('afterend', template);
  }
}

export default Header;
