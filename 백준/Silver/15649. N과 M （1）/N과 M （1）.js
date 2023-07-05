 let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

/*
[문제 설명]
N과 M이 주어졌을 때, 1부터 N까지의 자연수를 중복 없이 M개 뽑는 수열을 리턴해라.

[문제 해결 아이디어]
- 백트래킹(재귀함수) 문제로, 깊이가 m인 경우까지 고려하도록 재귀함수를 만든다.
 -> 즉 모든 순열의 수를 고려하기 위해 재귀 함수(백트래킹)를 통해 구현한다.
- 하나의 순열을 트리에서 리프 노드까지의 경로로 생각한다.
- 원소를 중복하지 않으므로, 방문 처리 배열을 사용한다.
 -> 한 번 선택된 원소는 다음 재귀 함수에서 다시 선택되지 않는다.
*/

const [n, m] = input[0].split(" ").map(Number);

// 순열을 계산하고자 하는 원소가 담긴 배열
let arr = [];

for (let i = 1; i <= n; i++) arr.push(i);
  // 각 원소 인덱스별 방문 여부
  let visited = new Array(n).fill(false);
  // 현제 순열에 포함된 원소
  let selected = [];


let answer = "";
function dfs(arr, depth) {
  // 모든 수열을 확인하는 부분
  if (depth === m) {
    // 순열 결과 저장 테이블
    let result = [];
    for (let i of selected) result.push(arr[i]);
    // 계산된 순열을 실질적으로 처리하는 부분
    for (let x of result) answer += x + " ";

    answer += "\n";
    return;
  }
  // 하나씩 원소 인덱스를 확인한다.
  for (let i = 0; i < arr.length; i++) {
    // 중복을 허용하지 않으므로, 이미 처리된 원소라면 무시한다.
    if (visited[i]) continue;
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