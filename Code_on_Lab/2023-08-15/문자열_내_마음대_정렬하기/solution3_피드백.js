// 문자열 내 마음대로 정렬하기
// https://programmers.co.kr/learn/courses/30/lessons/12915?language=javascript

function solution(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const word1 = arr[i];
            const word2 = arr[j];
            // console.log(i, word1, j, word2);

            if (word1[n] === word2[n]) {
                if (word1 > word2) {
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }

            if (word1[n] > word2[n]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            // console.log(arr);
        }
    }

    return arr;
}

console.log(solution(['sun', 'bed', 'car'], 1)); // ['car', 'bed', 'sun']
console.log(solution(['abce', 'abcd', 'cdx'], 2)); // ['abcd', 'abce', 'cdx']