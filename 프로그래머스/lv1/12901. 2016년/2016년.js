function solution(a, b) {
  const weeks = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  const months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let days = 0;

  for (let i = 0; i < a - 1; i++) {
    days += months[i];
  }
  days += b;
  const today = days %= 7; 
  return today > 0 ? weeks[days - 1] : weeks[weeks.length - 1];
}

