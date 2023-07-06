let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);

// 1. 순열을 계산하고자 하는 원소가 담긴 배열로, 1부터 n까지의 자연수를 arr 배열에 담는다.
let arr = [];
for (let i = 1; i <= n; i++) arr.push(i);

// 2. 각 원소 인덱스별 방문 여부를 기록
let visited = new Array(n).fill(false);
  
// 3. 현제 순열에 포함된 원소를 가질 떄 쓴 배열
let selected = [];

let answer = "";
function dfs(arr, depth) {
  // 모든 수열을 확인하는 부분으로, 깊이가 m인 경우 === m개를 고른 경우
  if (depth === n) {
    // 순열 결과 저장 테이블
    let result = [];
    // 선택된 i원소를 result 배열에 담아주고,
    for (let i of selected) result.push(arr[i]);
    // 계산된 순열을 실질적으로 처리하는 부분으로, 출력 형태에 맞춰 answer 문자열에 담아준다.
    for (let x of result) answer += x + " ";
    answer += "\n"; // 
    // 종료 조건 : 깊이가 m에 도달하면 해당 함수가 종료될 수 있도록 꼭 return을 작성한다.
    return;
  }

  // 깊이가 m이 아닌 경우, 하나씩 원소 인덱스를 확인한다.
  for (let i = 0; i < arr.length; i++) {
    // [중복 처리된 원소] 중복을 허용하지 않으므로, 이미 처리된 원소라면 무시한다.
    if (visited[i]) continue;

    // [중복 처리 되지 않은 원소 === 처음 방문한 원소]
    // 현재 원소를 선택한다.
    selected.push(i);
    // 현재 원소 방문 처리
    visited[i] = true;
    // 재귀함수 호출
    dfs(arr, depth + 1);
    // 현재 원소 선택 취소
    selected.pop();
    // 현재 원소 방문 처리 취소
    visited[i] = false;
  }
}

dfs(arr, 0);
console.log(answer);