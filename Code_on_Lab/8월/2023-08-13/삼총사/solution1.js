// https://school.programmers.co.kr/learn/courses/30/lessons/131705

// 문제 : 배열의 수 3개를 더해 0이 되는 경우의 수를 구해 리턴하세요. --> 조합 문제.

// ❌ 3중 반복문을 돌려 풀어보려고 했는데 그럼 순서대로만 수를 뽑을 수 있다... ex)[0, 1, 2], [1, 2, 3] --> 올바른 방법 X.
// 배열에서 가지치기처럼 3개를 뽑아 0이 되는 경우를 찾아야 하는데 어떻게 접근해야할지 모르겠어요 🥲
// --> [0, 1, 2], [0, 1, 3], [0, 1, 4], [0, 2, 3], [0, 2, 4], [0, 3, 4],[1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4] ...

function solution(number) {
    let answer = 0;
    
    for (let i = 0; i < number.length; i++) {
      const a = number[i];
      for (let j = i+1; j <= i; j++) {
        const b = number[j];
            for (let k = j+1; k <= j; k++) {
              const c = number[k];
              if (a + b + c === 0) answer++;
            }
        }
    }
  
  answer;
}

console.log(solution([-2, 3, 0, 2, -5])); // 2
console.log(solution([-3, -2, -1, 0, 1, 2, 3])); // 5
console.log(solution([-1, 1, -1, 1])); // 0