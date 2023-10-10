function solution(n) {
  let answer = 1; //1칸씩 가면 무조건 n에 도달할 수 있으니 +1은 기본값으로 더한다.
  let f0 = 1;
  let f1 = 1;

  for (let i = 2; i <= n; i++) {
    answer = (f0 + f1) % 1234567; //answer은 n - answer한 값이 된다.
    console.log(answer);
    f0 = f1;
    f1 = answer;
  }

  return answer;
}