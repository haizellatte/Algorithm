
function solution(number) {
    let answer = 0;
    
    for (let i = 0; i < number.length; i++) {
      const a = number[i];
      for (let j = i+1; j < number.length; j++) {
        const b = number[j];
            for (let k = j+1; k < number.length; k++) {
              const c = number[k];
              if (a + b + c === 0) answer++;
            }
        }
    }
  
  return answer;
}