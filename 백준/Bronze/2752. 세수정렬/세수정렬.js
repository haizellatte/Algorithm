// fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('/n');

let arr = input[0].split(' ').map(Number);
// 오름차순 정렬 수행
arr.sort((a, b) => a - b);

// 한번에 콘솔 호출로 답을 리턴하기 위해 문자열로 정답을 만든다.
let answer = "";
for (let el of arr) {
    answer += el + " "
}

console.log(answer);
