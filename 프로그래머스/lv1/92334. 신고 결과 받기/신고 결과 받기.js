function solution(id_list, report, k) {
  let result = Array(id_list.length).fill(0);

  //* key : 신고당한 user, value : 신고한 user
  let reportList = id_list.reduce((acc, cur) => {
    acc[cur] = [];
    return acc;
  }, {}); // { muzi: [], frodo: [], apeach: [], neo: [] }

  //* 신고당한 user는 신고한 유저 배열을 값으로 가진다.
  report.forEach((r) => {
    [send, receive] = r.split(" ");
    if (!reportList[receive].includes(send)) {
      reportList[receive].push(send);
    }
  });

  // console.log(reportList); // { muzi: [ 'apeach' ], frodo: [ 'muzi', 'apeach' ], apeach: [],  neo: [ 'frodo', 'muzi' ] }

  //* 신고 결과(객체)를 돌면서 값 배열의 길이가 k보다 크거나 같다면 result의 해당 id index에 1을 더해준다.
  for (key in reportList) {
    if (reportList[key].length >= k) {
      reportList[key].map((id) => {
        result[id_list.indexOf(id)] += 1;
      });
    }
  }

  return result;
}