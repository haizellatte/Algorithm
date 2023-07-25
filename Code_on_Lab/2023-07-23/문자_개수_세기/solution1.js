// https://school.programmers.co.kr/learn/courses/30/lessons/181902

// 인덱스 - 아스키코드 정리 https://docs.google.com/spreadsheets/d/1Tt52vIlrTi6Z5os9i8-qs7oCEZhcI4-7YX-vvLT-LkQ/edit#gid=0

function solution(my_string) {
  let arr = Array(52).fill(0);
  
  for (let i = 0; i < my_string.length; i++) {
    const alp = my_string[i];
    const code = alp.charCodeAt(alp);
      
    if (alp === alp.toUpperCase()) {
      arr[code - 65] += 1;
    } else {
      arr[code - 71] += 1;
    }
  }
  return arr;
}

console.log(solution("Programmers")); // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0]