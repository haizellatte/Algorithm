function solution(a, b) {
  //* 1일이 FRI니까 0일인 THU부터 나열한다.
  const weeks = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
  const months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  //* days에 b먼저 더해준다.
  let days = b;

  for (let i = 0; i < a - 1; i++) {
    days += months[i];
  }
  return weeks[days % 7];
}