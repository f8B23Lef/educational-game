import Header from './header';

describe('Header', () => {
  it('draw template into the body', () => {
    Header.draw();
    const headerTag = document.querySelectorAll('body header');
    expect(headerTag.length).toBe(1);
  });
});
