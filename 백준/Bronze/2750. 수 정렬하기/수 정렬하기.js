const fs = require("fs");
// 엔터로 구분되어 있는 값들을 split으로 처리하고, map을 사용해서 number 타입으로 변환
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map((item) => Number(item));

// 첫째 줄의 수는 배열의 길이를 의미하기 때문에 shift로 제거해준다.
const iter = input.shift();

// 오름차순 정렬 수행
input.sort((a,b) => a - b);

for(let i = 0; i < iter; i++){
    console.log(input[i]);
}
