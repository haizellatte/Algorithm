// https://school.programmers.co.kr/learn/courses/30/lessons/181934

// 객체 활용하기
const ops = {
  '>=': (n, m) => (n >= m) ? 1 : 0,
  '<=': (n, m) => (n <= m) ? 1 : 0,
  '>!': (n, m) => (n > m) ? 1 : 0,
  '<!': (n, m) => (n < m) ? 1 : 0,
}

function solution(ineq, eq, n, m) {
  return ops[ineq + eq](n, m);
}

console.log(solution("<", "=", 20, 50)); // 1 
console.log(solution(">", "!", 41, 78)); // 0 