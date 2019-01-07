export default (arr) => {
  let res = '<ul class="sortable-list">';

  arr.forEach((element) => {
    res += `<li class="sortable-list__item">${element}</li>`;
  });
  res.concat('</ul>');

  return res;
};
