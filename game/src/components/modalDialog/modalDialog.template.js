export const spellButtonsTemplate = `
<div class="spell-buttons">
  <button class="spell-button math-button">Math</button>
  <button class="spell-button english-button">English</button>
  <button class="spell-button drag-button">Drag&Drop</button>
  <button class="spell-button radio-button">Radio</button>
  <button class="spell-button image-button">Image</button>
<div>
`;

export const calculate = (labelText) => {
  const str = `<form>
  <label for="result">${labelText}</label><input type="text" id="result" style="width: 40px">
  <form>`;

  return str;
};


export const dragTemplate = (arr) => {
  let res = '<ul class="sortable-list">';

  arr.forEach((element) => {
    res += `<li class="sortable-list__item">${element}</li>`;
  });
  res.concat('</ul>');

  return res;
};

// export const scoreTableTemplate = `
// <table class="table table-bordered">
//   <thead class="thead-light">
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">Name</th>
//       <th scope="col">Score</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <th scope="row">1</th>
//       <td>Mark</td>
//       <td>5</td>
//     </tr>
//     <tr>
//       <th scope="row">2</th>
//       <td>Jacob</td>
//       <td>4</td>
//     </tr>
//     <tr>
//       <th scope="row">3</th>
//       <td>Larry</td>
//       <td>0</td>
//     </tr>
//   </tbody>
// </table>
// `;
