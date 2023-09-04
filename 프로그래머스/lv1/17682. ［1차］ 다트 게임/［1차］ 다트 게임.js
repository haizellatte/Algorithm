const pointCalculator = {
  S: (v) => Math.pow(v, 1),
  D: (v) => Math.pow(v, 2),
  T: (v) => Math.pow(v, 3),
  "*": (pre, cur) => pre * 2 + cur * 2,
  "#": (pre, cur) => cur * (-1),
};

function solution(dartResult) {
  //* 1. 요소가 숫자이고 (현재 요소 + 앞 요소)가 10이 아닌 경우(점수가 10까지 있기 때문에) 요소 앞에 공백을 추가하고 공백으로 split 한 후 1번째 요소부터 가져온다. (맨 앞 숫자의 공백을 제외하기 위해)
  const [a, b, c] = [...dartResult]
    .map((x, i) => (!isNaN(x) && dartResult[i - 1] + x !== "10" ? " " + x : x))
    .join("")
    .split(" ")
    .slice(1);

  const bonus = ['S', 'D', 'T'];
  const option = ['*', '#'];
  let bonusPoint = [];
  let result = 0;
    
  //* 2. bonus 점수 확인
  for (let point of [a, b, c]) {
    let pointValue = '';
    let bonusValue = '';
    
    for (let i = 0; i < point.length; i++) {
      if (!isNaN(point[i])) {
        pointValue += point[i];
      }
      if (bonus.includes(point[i])) {
        pointValue = pointCalculator[point[i]](pointValue);
      }
      
      if (option.includes(point[i])) {
        bonusValue = point[i];
      }
    }
    bonusPoint.push([pointValue, bonusValue]);
  }
  console.log(bonusPoint)

  //* 3. option 점수 확인
  for (let i = 0; i < bonusPoint.length; i++) {
    if (bonusPoint[i][1]) {
      if (bonusPoint[i][1] === '#') {
        bonusPoint[i][0] *= -1;
      }
      if (bonusPoint[i][1] === "*") {
        bonusPoint[i][0] *= 2; 
        if (i - 1 >= 0) {
          bonusPoint[i - 1][0] *= 2;
        }
      }
    }
  }

  return bonusPoint.map(p => p[0]).reduce((a, b) => a + b);
}