// https://school.programmers.co.kr/learn/courses/30/lessons/12921

/* 
* '에라토스테네스의 체' 알고리즘에 대해 알게 되어 적용했습니당 -> 참고) https://mine-it-record.tistory.com/507
?  [방법]
* 1. Array(n+1).fill(true) : 주어진 숫자를 포함한 배열을 생성하고 값을 모두 true로 바꿔준다.
* 2. .fill(false, 0, 2) : 0과 1은 소수가 아니기 때문에 미리 false로 바꿔준다.
* 3. i * i <= n : 마찬가지로 Math.sqrt(n)까지만 반복한다.
* 4. 이중 for문을 돌면서 배수에 대해서(소수x) false로 바꿔준다.
* --> 왜 이게 가능하냐면 소수 3이 i이라면 j는 절대 3이 될 수 없기 때문에 false로 값이 바뀌지 않는다.
* 5. true, false로 이루어진 배열을 filter을 통해 거른후 length로 리턴한다.
*/

function isPrime(n) {
  let arr = Array(n + 1).fill(true).fill(false, 0, 2);

  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }
  return arr;
}

function solution(n) {
  return isPrime(n).filter(x => x).length;
}

console.log(solution(10)); // 4
console.log(solution(5)); // 3