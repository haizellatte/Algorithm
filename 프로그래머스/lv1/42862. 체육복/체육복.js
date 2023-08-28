function solution(n, lost, reserve) {
  let result = n - lost.length;
  lost = lost.sort((a, b) => a - b);
  reserve = reserve.sort((a, b) => a - b);

  for (let i = 0; i < lost.length; i++) {
    for (let j = 0; j < reserve.length; j++) {
      // 먼저 자신이 잊어버린 경우를 체크한다.
      if (lost[i] === reserve[j]) {
        result++;
        reserve[j] = "x";
        lost[i] = "x";
        console.log(n, lost, reserve);
      }
    }
  }

  for (let i = 0; i < lost.length; i++) {
    for (let j = 0; j < reserve.length; j++) {
      // 그 후 앞, 뒤번호 학생을 체크한다.
        if (Math.abs(lost[i] - reserve[j]) === 1) {
          result++;
          reserve[j] = "x";
          lost[i] = "x";
          console.log(n, lost, reserve);
        }
    }
  }

  return result;
}