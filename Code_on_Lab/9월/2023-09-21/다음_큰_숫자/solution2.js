// https://school.programmers.co.kr/learn/courses/30/lessons/12911

//* toString() 2진법 직접 구현하기 !

const ToBinary = (n) => {
  let answer = '';

  while (n !== 0) {
    answer += n % 2; // 나머지는 이진수의 값이 되고
    n = Math.floor(n/2) // 몫은 다시 n이 된다.
  }
  
  return answer;
}
// console.log(ToBinary(11)) // 1011

const CountOne = (n) => {
  return [...ToBinary(n)].filter((v) => v === "1").length;
};

function solution(n) {
  const countN = CountOne(n);
  let NextN = n + 1;

  while (true) {
    if (CountOne(NextN) === countN) {
      return NextN;
    } else {
      NextN++;
    }
  }
}

console.log(solution(78)); // 83
console.log(solution(15)); // 23
