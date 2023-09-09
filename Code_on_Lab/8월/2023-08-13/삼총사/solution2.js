// https://school.programmers.co.kr/learn/courses/30/lessons/131705

/*
* 구현 - dfs(깊이 우선 탐색) 알고리즘 
* 1. 순환 호출 이용
* 2. 명시적인 스택 사용
*/

function solution(number) {
    let result = 0;

  const combination = (current, start) => {
    console.log('current', current)
        if (current.length === 3) {
            result += current.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
          return;
        }

    for (let i = start; i < number.length; i++) {
      console.log('start', start)
      combination([...current, number[i]], i + 1);
        }
  }
  
    combination([], 0);
    return result;
}

console.log(solution([-2, 3, 0, 2, -5])); // 2
// console.log(solution([-3, -2, -1, 0, 1, 2, 3])); // 5
// console.log(solution([-1, 1, -1, 1])); // 0