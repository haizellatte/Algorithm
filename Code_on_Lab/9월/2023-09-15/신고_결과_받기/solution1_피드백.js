// https://school.programmers.co.kr/learn/courses/30/lessons/92334
/*
* [아이디어 노트]
* 1. 유저별로 신고한 유저ID를 저장한다.
* 2. 1번을 돌면서 신고한 유저의 신고당한 횟수가 k번이 넘는다면 +1을 한 값을 result에 담아 리턴한다.
*/

function solution(id_list, report, k) {
    const result = Array(id_list.length).fill(0);

    //* key : 신고당한 user, value : 신고한 user
    const reportList = id_list.reduce((acc, cur) => {
        acc[cur] = [];
        return acc;
    }, {}); // { muzi: [], frodo: [], apeach: [], neo: [] }

    //* 신고당한 user는 신고한 유저 배열을 값으로 가진다.
    report
        .map(x => x.split(' '))
        .forEach(([send, receive]) => {
            if (!reportList[receive].includes(send)) {
                reportList[receive].push(send);
            }
        });

    // console.log(reportList); // { muzi: [ 'apeach' ], frodo: [ 'muzi', 'apeach' ], apeach: [],  neo: [ 'frodo', 'muzi' ] }

    //* 신고 결과(객체)를 돌면서 값 배열의 길이가 k보다 크거나 같다면 result의 해당 id index에 1을 더해준다.
    for (const key in reportList) {
        if (reportList[key].length >= k) {
            reportList[key].map((id) => {
                result[id_list.indexOf(id)] += 1;
            });
        }
    }

    return result;
}

console.log(
    solution(
        ["muzi", "frodo", "apeach", "neo"],
        ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
        2
    )
); // [2, 1, 1, 0]
console.log(
    solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3)
); // [0, 0]
