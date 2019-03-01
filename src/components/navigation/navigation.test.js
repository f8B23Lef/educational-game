import Navigation from './navigation';


describe('Nav', () => {
  it('draw template into the body', () => {
    Navigation.render();
    const navEl = document.querySelectorAll('body>nav');
    expect(navEl.length).toBe(1);
  });
});
