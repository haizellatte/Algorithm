function solution(survey, choices) {
  const types = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  let answer = "";
    
    //1. cholces에 따라 point를 누적한다.
    for(let i = 0 ; i < choices.length ; i++){
        //servey의 각 요소를 split해 구조분해할당으로 받아온다.
        const [leftType, rightType] = survey[i].split("");
        //점수를 절대값으로 저장한다.
        const point = Math.abs(choices[i] - 4);
        if(choices[i] < 4){
            types[leftType] += point;
        } else if(choices[i] > 4) {
            types[rightType] += point;
        }
    }
    
    //2. 쌓인 포인트를 가지고 성격 유형을 산출한다. (이때 동일값이라면 내림차순 기준)
    //key값들만 따로 모은다.
    const type = Object.keys(types);
    //+1이 아닌 +2를 하는 이유 -> 2개가 한쌍이기 때문에 한 타입에 대해 검증하면 +2를 해 다음 타입을 검증할 수 있다.
    for(let i = 0; i < type.length ; i +=2){
        const typeOne = types[type[i]];
        const typeTwo = types[type[i+1]];
        if(typeOne >= typeTwo){
            answer += type[i]; //같거나 크다면 첫번째 타입
        } else{
            answer += type[i+1]; //작다면 두번째 타입 요소
        }
    }
    return answer;
}

/*
점수체계 : 
1 또는 7 -> 3점
2 또는 6 -> 2점
3 또는 5 -> 1점
4 -> 0점
! 여기서 알수 있는 점
그럼 choices[i]에서 -4를 했을 때 음수면 앞에꺼 양수면 뒤에꺼
점수는 choices[i]-4 한 값의 절대값이 된다. Math.abs(choices[i] - 4)
*/