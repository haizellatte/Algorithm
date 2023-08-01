// 문제 : 2차원 배열 arr에 대해 1) 행과 열의 수가 같아지도록 각 행과 열에 끝에 0을 추가한 이차원 배열을 리턴하세요.

function solution(arr) {
    let rows = arr.length;
    let columns = arr[0].length;
    
    // 행 > 열     
    if (rows > columns) {
        // arr[i]에 대해
        for (let i = 0 ; i < rows; i++) {
            // 행-열의 차이만큼 반복           
            for (let j = columns; j < rows; j++) {
                arr[i].push(0);
            }
        }
    } 
    
    // 행 < 열
    if (rows < columns) {
        for (let i = rows; i < columns; i++) {
            arr.push(Array(columns).fill(0));
        }
    }
        
    
    return arr;
}