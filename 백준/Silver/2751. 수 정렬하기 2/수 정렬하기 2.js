const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n").map((el) => Number(el));

// 첫째 줄의 수는 배열의 길이를 의미하기 때문에 shift로 제거해준다.
input.shift();
// 오름차순 정렬 수행
input.sort((a, b) => a - b);

/* 기존의 for문으로 출력하면 시간 초과로 탈락, 
   join을 통해 하나의 문자열로 만들어 한번에 출력한다. */
console.log(input.join("\n"));
