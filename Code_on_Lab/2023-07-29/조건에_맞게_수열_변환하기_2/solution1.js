// https://school.programmers.co.kr/learn/courses/30/lessons/181881

/*
 * [문제]
 * 1. arr의 각 원소(n)에 대해 아래와 같이 연산한다.
 * - n >= 50 && n%2 === 0 --> n/2
 * - n < 50 && n%2 === 1 --> n*2 + 1
 * 2. 위 작업을 x번 반복하면 x번의 결과값과 x+1의 결과값이 같은 경우가 존재하는데, 이때 가장 작은 x값을 리턴하세요.
 */

// 조건에 따라 연산하는 함수
function calculation(arr) {
  return arr.map((n) => {
    if (n >= 50 && n % 2 === 0) {
      return n / 2;
    }
    if (n < 50 && n % 2 === 1) {
      return n * 2 + 1;
    }
    return n;
  });
}

// 일치 여부를 확인하는 함수
function isAllSame(arr1, arr2) {
  return arr1.every((v, i) => v === arr2[i]);
}

function solution(arr) {
  let cnt = 0;
  let prevArr = arr; // 앞전 x-1 연산값
  let curArr = arr; // 현재 x번째 연산값

  while (true) {
    // 현재 값을 바꿔준다.
    curArr = calculation(arr);
    // 현재(x)번째 연산 값과 이전(x-1)번째 연산값이 같다면 while문을 빠져나간다.
    if (isAllSame(prevArr, curArr)) {
      break;
    }
    // 아니라면 x값을 1 증가시키고, prevArr값을 현재 값으로 갱신해준다.
    cnt++;
    prevArr = curArr;
  }

  return cnt;
}

console.log(solution([1, 2, 3, 100, 99, 98])); // 5
