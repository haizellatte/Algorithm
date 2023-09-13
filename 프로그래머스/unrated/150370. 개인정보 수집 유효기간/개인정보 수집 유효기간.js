function solution(today, terms, privacies) {
  const todayTime = new Date(today);

  const termsList = terms.reduce((acc, cur) => {
    const [type, expire] = cur.split(" ");
    acc[type] = Number(expire);
    return acc;
  }, {});
  // console.log(termsList); // { A: '6', B: '12', C: '3' }

  return privacies.map((p, i) => {
    [date, type] = p.split(' ');
    const expireDate = new Date(date);
    expireDate.setMonth(expireDate.getMonth() + termsList[type]); // 약관 종류별 유효기간 Month를 더해준다.
    if (todayTime >= expireDate) {
      return i + 1
    }
    return '';
  }).filter(x => x);
}
