function solution(s) {
  const isNum = [...s].map(Number).filter((v) => v >= 0); // 숫자만 남김

  if ((s.length === 4 || s.length === 6) && s.length === isNum.length) {
    return true;
  }
  return false;
}