import Content from './content';


describe('Header', () => {
  beforeAll(() => {
    document.body.innerHTML = `
        <nav></nav>
        `;
  });
  it('draw template into the body', () => {
    Content.render();
    const headerEl = document.querySelectorAll('body>nav+header');
    expect(headerEl.length).toBe(1);
  });
});

describe('Content', () => {
  beforeAll(() => {
    document.body.innerHTML = `
        <nav></nav>
        `;
  });
  it('draw template into the body', () => {
    Content.render();
    const sectionEl = document.querySelectorAll('body>nav+header~section');
    expect(sectionEl.length).toBe(4);
  });
});
