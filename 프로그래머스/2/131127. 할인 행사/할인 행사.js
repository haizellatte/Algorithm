
function checkAble(wantList, discount) {
  const discountList = discount.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  const wantKey = Object.keys(wantList);

  return wantKey.every((key) => wantList[key] <= discountList[key]);
}

function solution(want, number, discount) {
  let days = 0;

  const wantList = want.reduce((acc, cur, i) => {
    acc[cur] = number[i];
    return acc;
  }, {});

  for (let i = 0; i < discount.length - 9; i++) {
    const discountDay = discount.slice(i, i + 10);
    if (checkAble(wantList, discountDay)) days++;
  }

  return days;
}
