// https://school.programmers.co.kr/learn/courses/30/lessons/17681


function padStart(s, length, c) {
    const len = length - s.length;
    let temp = '';

    for (let i = 0; i < len; i++) {
        temp += c;
    }

    return temp + s;
}
// console.log('123'.padStart(5, '0'));
console.log(padStart('123', 5, '0'));

//* 10진법 -> 2진법으로 바꿔주는 함수
const toBinary = (arr, n) => {
    let num = [];
    arr.map(v => {
        let transNum = v.toString(2);
        // 앞에 0이 생략된 경우
        while (transNum.length < n) {
            transNum = "0" + transNum;
        }
        num.push(transNum);
    });
    return num;
}

//* 2진법 -> " "과 "#" 으로 바꿔주는 함수
const changeWall = (arr) => {
    return arr.map((v) =>
        [...v]
            .map(Number)
            .map((k) => (k >= 1) ? "#" : " ")
            .join("")
    );
}

function solution(n, arr1, arr2) {
    const BinaryArr1 = toBinary(arr1, n);
    const BinaryArr2 = toBinary(arr2, n);

    const map = BinaryArr1.map((row, rowIndex) => [...row].map((c, cIndex) => {
        return Number(c) + Number(BinaryArr2[rowIndex][cIndex]);
    }).join(''));

    return changeWall(map);
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])); // ["#####", "# # #", "### #", "#  ##", "#####"] 
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10])); // ["######", "###  #", "##  ##", " #### ", " #####", "### # "]


