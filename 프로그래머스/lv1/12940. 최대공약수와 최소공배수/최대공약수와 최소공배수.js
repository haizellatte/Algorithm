function solution(num1, num2) {
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);
  return [gcd(num1, num2), lcm(num1, num2)];
}


// 최대공약수를 구하는 함수
function gcd(a, b) {
  let rest = a % b;

  if (rest === 0) {
    return b;
  } else {
    return gcd(b, rest);
  }
}

// 최대공배수를 구하는 함수
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function solution(a, b) {
  // let big = n;
  // let small = m;

  // if (n < m) {
  //   big = m;
  //   small = n;
  // }

  return [gcd(a, b), lcm(a, b)];
  
}