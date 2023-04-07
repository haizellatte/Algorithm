function solution(polynomial) {
  //1-1. polynomial의 각 요소를 띄여쓰기로 분리하고 "+"가 아닌 요소들만 필터링한다.
  polynomial = polynomial.split(' ').filter((e) => e !== '+'); 
  //1-2. 그리고 x값과 상수를 더해줄 변수를 선언한다.  
  let xNum = 0;
  let num = 0;
  /* 2. forEach()로 각 요소를 순회 -> forEach() 메서드는 주어진 함수를 배열 요소 각각에 대해 실행 */  
  polynomial.forEach((e) => {
      if (e.includes('x')) {
          const x = e.split('x');
          if (x[0] === '') xNum++;  //2-1. (1)x인경우
          if (x[0] !== '') xNum += Number(x[0]); //2-2. 3x인경우
      }
      
      if (!e.includes('x')) num += Number(e); //2-3. 상수인 경우
  })
  //3. 리턴 조건은 5개로, 각 조건에 맞게 리턴문을 작성한다.
  //3-1. xValue와 numberValue가 있고 1)xValue가 1인 경우와 2) 1 이상인 경우  
  if (xNum !== 0 && num !== 0) return xNum === 1 ? `x + ${num}` : `${xNum}x + ${num}`;
  //3-2. xValue만 있고 1)xValue가 1인 경우와 2) 1 이상인 경우  
  if (xNum !== 0 && num === 0) return xNum === 1 ? 'x' : `${xNum}x`;
  //3-3. numberValue만 있는 경우  
  if (xNum === 0 && num !== 0) return `${num}`;
  //3-4. xValue와 numberValue 둘다 없는 경우  
  if (xNum === 0 && num === 0) return '0';
}