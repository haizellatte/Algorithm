/*
[비교 조건]
1. 길이가 다르다면 -> 배열의 길이가 긴쪽이 더 큼
2. 길이가 같다면 -> 배열의 각 원소의 합이 큰 쪽이 크고
              -> 또는 같다
[출력 조건]              
1. arr1 < arr2 라면 -1
2. arrr1 > arr2 라면 1
3. arr1 = arr2 라면 0
*/

function solution(arr1, arr2) {
    const Arr1 = arr1.reduce((acc, cur) => (acc + cur), 0);
     const Arr2 = arr2.reduce((acc, cur) => (acc + cur), 0);
    
let result = 0;
    //1. 길이가 다를때
    if (arr1.length !== arr2.length) {
        result = (arr1.length < arr2.length) ? -1 : 1;
    } else { //2. 길이가 같을 때
        result = (Arr1 < Arr2) ? -1 : (Arr1 > Arr2) ? 1 : 0;
        
    }
    
    return result;
}