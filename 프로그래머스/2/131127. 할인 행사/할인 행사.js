function check(wantList, discount) {
  const discountList = discount.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  const wantKey = Object.keys(wantList);

  return wantKey.map(key => {
    // console.log(wantList[key], discountList[key])
    if (wantList[key] <= discountList[key]) {
      return true;
    } else {
      return false;
    }
  })

}

function solution(want, number, discount) {
  let days = 0;

  const wantList = want.reduce((acc, cur, i) => {
    acc[cur] = number[i];
    return acc;
  }, {});


  for (let i = 0; i < discount.length - 9; i++) {
    const discountDay = discount.slice(i, i + 10);
    const able = check(wantList, discountDay).every(x => x);
    // console.log(able);
    if (able) days++;
  }

  return days;
}