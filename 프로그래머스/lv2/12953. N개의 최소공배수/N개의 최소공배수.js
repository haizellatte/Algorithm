//* 최대공약수를 구하는 함수
const GCD = (a, b) => {
  let rest = a % b;
  
  if (rest === 0) {
    return b; // b를 rest로 나눈 값이 0이라면 나누는 수인 b가 a와 b의 최대 공약수이다.
  } else {
    return GCD(b, rest); // rest가 0이 아니라면 재귀를 통해 0이 될때까지 반복한다.
  }
}

//* 최대공배수를 구하는 함수
const LCM = (a, b) => {
  return (a * b) / GCD(a, b);
}

function solution(arr) {
  let answer = arr[0];
    for (let i = 1; i < arr.length; i++) {
      answer = LCM(answer, arr[i]);
    }
  return answer;
}