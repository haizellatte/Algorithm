function solution(a, b) {
  const aByb = Number(String(a) + b);
  const bBya = Number(String(b) + a);

  return aByb > bBya ? aByb : bBya;
}