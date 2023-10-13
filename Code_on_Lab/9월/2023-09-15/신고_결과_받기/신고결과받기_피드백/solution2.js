// https://school.programmers.co.kr/learn/courses/30/lessons/92334?language=javascript

function reportList(report) {
    const result = {};

    for (let i = 0; i < report.length; i++) {
        const [value, key] = report[i].split(' ');
        if (result[key] === undefined) {
            result[key] = [value];
        } else {
            if (!result[key].includes(value)) {
                result[key].push(value);
            }
        }
    }

    return result;
}

function reportCount(idList, reportList, k) {
    const result = new Array(idList.length).fill(0);

    for (const key in reportList) {
        if (reportList[key].length >= k) {
            for (let i = 0; i < reportList[key].length; i++) {
                result[idList.indexOf(reportList[key][i])] += 1;
            }
        }
    }

    return result;
}

function solution(idList, report, k) {
    return reportCount(idList, reportList(report), k);
}

console.log(
    solution(
        ["muzi", "frodo", "apeach", "neo"],
        ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
        2)
); // [2,1,1,0]

console.log(
  solution(
      ["con", "ryan"],
      ["ryan con", "ryan con", "ryan con", "ryan con"],
      3)
); // [0,0]
