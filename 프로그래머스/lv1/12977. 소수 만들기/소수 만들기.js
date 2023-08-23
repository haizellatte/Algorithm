// 소수인지 아닌지 판별하는 함수
function isPrime(n) {
  // 1은 소수가 아니다.
  if (n === 1) {
      return false;
  }
    
  // 2부터 n제곱근까지의 수로 n을 나눴을 때 나누어 떨어지는 경우가 한 번이라도 있으면 N은 소수가 아니다.
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
        return false;
    }
  }
    
  // 모두 나누어 떨어지지 않으면 n은 소수이다.
  return true;
}


function solution(nums) {
    let result = 0;
    
    for(let i = 0; i < nums.length; i++) {
        let bucket = 0;
        for (let j = i+1; j < nums.length; j++) {
            for (let k = j+1; k < nums.length; k++) {
              bucket = nums[i] + nums[j] + nums[k];
                result += isPrime(bucket) ? 1 : 0;
            }
        }
    }
    
    return result;
}