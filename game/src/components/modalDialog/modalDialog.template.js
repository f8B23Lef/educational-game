export const spellButtonsTemplate = `
<div class="spell-buttons">
  <button class="spell-button math-button">Math</button>
  <button class="spell-button english-button">English</button>
  <button class="spell-button drag-button">Drag&Drop</button>
<div>
`;

export const calculate = (labelText) => {
  const str = `<form>
  <label for="result">${labelText}</label><input type="text" id="result" style="width: 40px">
  <form>`;

  return str;
};
