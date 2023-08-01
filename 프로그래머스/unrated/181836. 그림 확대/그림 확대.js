// 1x1 크기의 정사각형으로 이루어진 배열 picture가 주어질 때, 가로 세로로 k배 늘린 배열을 리턴하세요.
/*
* [아이디어 노트]
* 1. arr[i]의 각 요소 x을 k만큼 반복한다.
* 2. 2번에서 완성한 문자열을 k만큼 반복한다.
*/

function repeat(x, k) {
    const bucket = [];
    for (let i = 0; i < k; i++) {
        bucket.push(x);
    }
    return bucket;
}


function solution(picture, k) {
    const expansionPic = [];

   // 1. arr[i]의 각 요소를 k만큼 반복한다.     
    for (let i = 0 ; i < picture.length; i++) {
        let str = '';
        // picture[i][j] 값을 k만큼 반복
        for (let j = 0; j < picture[i].length; j++) {
            for (let n = 0 ; n < k; n++) {
                str+= picture[i][j];
            }
        }
        expansionPic.push(str);   
    }

     // 2. 2번에서 완성한 문자열을 k만큼 반복한다.
     return expansionPic.map(x => repeat(x, k, expansionPic)).flat()
}