function solution(today, terms, privacies) {
    //0. 정답을 리턴할 배열을 만들어준다.
    const answer = [];
    
    //1. 현재 시간 가져오기
    const nowTime = new Date(today);
 
    //2. 각 약관의 유효기간 정리하기
    let expire_list = {};
    terms.forEach((el) => {
        const [type, term] = el.split(" ");
        expire_list[type] = Number(term);
        })
    
     //3. 주어진 정보와 약관의 유효기간과 비교하기
     privacies.forEach((el, idx) => {
         const [date, type] = el.split(" ");
         const expireDate = new Date(date);
         
         //expireDate의 헌재달 + 타입의 기간을 더한 값을 구한다.(= 즉 해당 개인정보의 만료 날짜이다.)
         expireDate.setMonth(expireDate.getMonth() + expire_list[type]);
         
         /* 오늘 날짜와 구한 유효기간(expireDate)을 비교해
            유효기간이 오늘보다 작거나 같으면 answer에 번호를 푸시해준다. */
          if(expireDate <= nowTime) answer.push(idx + 1);
     })
    return answer;
    }

