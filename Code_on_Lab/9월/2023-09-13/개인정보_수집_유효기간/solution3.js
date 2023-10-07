// https://school.programmers.co.kr/learn/courses/30/lessons/150370

//* 좀 더 간단하게 

const checkExpire = (privacies, termsList, todayTime) => {
  return privacies.map((p, i) => {
    [date, type] = p.split(' ');
    const expireDate = new Date(date);
    expireDate.setMonth(expireDate.getMonth() + termsList[type]); // 약관 종류별 유효기간 Month를 더해준다.
    return todayTime >= expireDate ? i + 1 : '';
  })
}

function solution(today, terms, privacies) {
  const todayTime = new Date(today);

  const termsList = terms.reduce((acc, cur) => {
    const [type, expire] = cur.split(" ");
    acc[type] = Number(expire);
    return acc;
  }, {});

  return checkExpire(privacies, termsList, todayTime).filter(x => x);
}

console.log(
  solution(
    "2022.05.19",
    ["A 6", "B 12", "C 3"],
    ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
  )
); // [1, 3]
console.log(
  solution(
    "2020.01.01",
    ["Z 3", "D 5"],
    [
      "2019.01.01 D",
      "2019.11.15 Z",
      "2019.08.02 D",
      "2019.07.01 D",
      "2018.12.28 Z",
    ]
  )
); // [1, 4, 5]