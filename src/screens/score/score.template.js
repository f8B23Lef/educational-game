import { createSortArrFromObj } from '../../utils/utils';

export default (storageKey = 'ice-wastelands') => {
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
  const sortScore = createSortArrFromObj(score);

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
