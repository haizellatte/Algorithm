// https://school.programmers.co.kr/learn/courses/30/lessons/181872

/*
* [아이디어 노트]
1. lastIndexOf를 통해 마지막 pat의 인덱스를 구한다.
2. 'dE' 처럼 길이가 1이상일 수 있기 때문에 (n + pat.length)까지 구한다.
*/

// ! lastIndexOf 직접 구현하기

function solution(myString, pat) {
    let last = 0;

    for (let i = 0; i < myString.length; i++) {
        const j = myString.length - 1 - i;

        if (myString[j] === pat[0]) {
            if (myString.slice(j, j + pat.length) === pat) {
                last = j + pat.length;
                break;
            }
        }
    }

    return myString.slice(0, last);
}

console.log(solution("AbCdEFG", "dE")); // "AbCdE"
console.log(solution("AAAAaaaa", "a")); // "AAAAaaaa"
