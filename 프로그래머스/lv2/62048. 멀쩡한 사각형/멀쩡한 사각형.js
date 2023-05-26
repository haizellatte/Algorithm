/*
! 이 문제는 대각선이 지나는 단위 사각형의 갯수를 구하는 공식을 이용해야한다.
  -> w + h - (w, h의 최대 공약수)
*/

//최대 공약수를 구하는 함수
function getGCD(w, h) {

    const mod = w % h;
    
    // 최대 공약수를 구하기 위해 0이 될때까지 재귀적으로 반복한다.
    return mod === 0 ? h : getGCD(h, mod);
}

function solution(w, h){
    let answer = 0;
    const gcd = getGCD(w, h);
    
    answer = w * h - (w + h - gcd);
    
    return answer;
}