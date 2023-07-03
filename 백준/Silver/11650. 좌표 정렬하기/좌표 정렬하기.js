const fs = require("fs");
// 엔터로 구분되어 있는 값들을 split으로 처리하고, map을 사용해서 number 타입으로 변환
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 첫째줄의 값은 총 좌표의 개수이다.
const iter = Number(input[0]); 
let data = [];
for (let i = 1; i <= iter; i++) {
    // 구조분해할당으로 값을 가져온 후, 좌표형태로 data에 넣어준다.
    let [x, y] = input[i].split(" ").map(Number);
    data.push([x, y]);
}

// 정렬 규칙에 대한 함수 구현
function compare(a, b) {
    // x좌표와 y좌표 값이 같지 않다면 x를 기준으로 오름차순, 
    if (a[0] != b[0]) return a[0] - b[0];
    // 값이 같다면 y를 기준으로 오름차순한다. (이때 0번째 값이 x값, 1번째 값이 y값이다.)
    else return a[1] - b[1];
}

//구현한 정렬 함수대로 정렬하고, 이를 출력한다.
data.sort(compare);

let answer = "";
for (let point of data) {
    answer += point[0] + " " + point[1] + "\n";
}

console.log(answer);