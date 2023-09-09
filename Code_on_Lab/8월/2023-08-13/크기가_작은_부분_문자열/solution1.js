// https://school.programmers.co.kr/learn/courses/30/lessons/147355

function solution(t, p) {
    let cnt = 0;
    
    for(let i = 0; i < t.length; i++) {
      const temp = t.slice(i, p.length + i);
      if (temp.length === p.length && temp <= p) {
        cnt++;
      }
    }
  
  return cnt;
}

console.log(solution("3141592", "271")); // 2 
console.log(solution("500220839878", "7")); // 8
console.log(solution("10203", "15")); // 3