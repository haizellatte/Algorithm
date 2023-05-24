function solution(id_list, report, k) {
    //1. answer 배열을 id_list 크기만큼 할당하고 fill 함수를 사용해 0으로 초기화한다.
    const answer = new Array(id_list.length);
    answer.fill(0);
    //2. 리포트 결과를 담을 변수를 선언하고 빈 객체를 할당한다.
    const report_list = {};
    
    //3. report_list 객체에 key: 신고 당한 id / value : [신고한 id]을 담기 위한 빈 배열을 추가한다.
    id_list.map((user) => {
        report_list[user] = [] //key가 userid이고 value로 빈 배열을 가지는 객체
    });
    
    //4. map을 통해 report 안의 요소들을 돌면서
    report.map((user) => {
        //4-1. 신고 id와 신고 당한 id가 띄여쓰기로 구분되므로 -> split을 통해 자르고 구조분해할당으로 값을 받아온다.
        const [user_id, report_id] = user.split(' ');
        //4-2. 신고당한 id(key)에 대해 신고한 id가 배열에 없다면(value)
        if(!report_list[report_id].includes(user_id)){
            //4-3. 해당 신고한 id를 배열에 추가해준다.
            report_list[report_id].push(user_id);
        }
    })
    
    //5. 신고 결과를 담은 report_list를 돌면서
    for(const key in report_list){
        //5-1. 해당 키의 value length가 k와 같거나 크다면
        if(report_list[key].length >= k){ //이용정지 유저
            //5-2. 
            report_list[key].map((user) => {
                answer[id_list.indexOf(user)] +=1;
            })
        }
    }
    return answer;
}

/*
* 참고로 report_list의 내용은 아래와 같다.
{"muzi":["apeach"],"frodo":["muzi","apeach"],"apeach":[],"neo":["frodo","muzi"]}
*/