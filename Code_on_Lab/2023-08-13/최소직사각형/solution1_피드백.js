// https://school.programmers.co.kr/learn/courses/30/lessons/86491

// ❌ 

function solution(sizes) {
    for (let i = 0; i < sizes.length; i++) {
        sizes[i] = sizes[i].sort();
    }
    console.log(sizes);

    let wMax = -1;
    let hMax = -1;

    for (let i = 0; i < sizes.length; i++) {
        const [w, h] = sizes[i];

        if (wMax < w) {
            wMax = w;
        }

        if (hMax < h) {
            hMax = h;
        }
    }

    return wMax * hMax;
}

console.log(
    solution([
        [60, 50],
        [30, 70],
        [60, 30],
        [80, 40],
    ])
); // 4000
// console.log(
//   solution([
//     [10, 7],
//     [12, 3],
//     [8, 15],
//     [14, 7],
//     [5, 15],
//   ])
// ); // 120
// console.log(
//   solution([
//     [14, 4],
//     [19, 6],
//     [6, 16],
//     [18, 7],
//     [7, 11],
//   ])
// ); // 133