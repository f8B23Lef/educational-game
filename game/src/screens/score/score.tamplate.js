export const template = `
<section class="score">
  <table class="table table-bordered">
    <thead class="thead-light">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Score</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>5</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>4</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>0</td>
      </tr>
    </tbody>
  </table>
  <div class="text-center">
    <button class="button-score btn btn-primary" type="button">Ok</button>
  </div>
</section>
`;

function sortObjByValue(obj) {
  const sortable = [];
  Object.keys(obj).forEach(key => sortable.push([key, obj[key]]));

  sortable.sort((a, b) => b[1] - a[1]);

  return sortable;
}

export const scoreTemplate = (storageKey = 'ice-wastelands') => {
  let res = `
  <section class="score"> 
    <table class="table table-bordered">
      <thead class="thead-light">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Score</th>
        </tr>
      </thead>
      <tbody>`;

  const score = JSON.parse(localStorage.getItem(storageKey));
  const sortScore = sortObjByValue(score);

  for (let i = 0; i < sortScore.length; i += 1) {
    res += `<tr>
      <th scope="row">${i + 1}</th>
      <td>${sortScore[i][0]}</td>
      <td>${sortScore[i][1]}</td>
    </tr>`;
  }

  res += `
      </tbody>
    </table>
    <div class="text-center">
      <button class="button-score btn btn-primary" type="button">Ok</button>
    </div>
  </section>`;

  return res;
};
