/*
* 문제 : 배열 arr를 이용해 새로운 배열 stk를 만들어 리턴하세요,
* [조건] : i의 초기값을 0으로 설정하고, i < arr.length일 때 다음을 반복한다.
* 1. stk.length === 0 ? stk.push(arr[i])하고 i++;
* 2. stk.length > 0 && stk[stk.length - 1] === arr[i] ? stk.pop(); i++;
* 3. stk.length > 0 && stk[stkv.length - 1] !== arr[i] ? stk.push(arr[i]); i++;
* 4. 모든 과정을 거친 후에도 stk이 빈배열이라면 -1을 리턴
*/

function solution(arr) {
    let stk = [];
    let i = 0;
    
    while(i < arr.length) {
        if (stk.length > 0 && stk[stk.length - 1] === arr[i]) {
             stk.pop(); i++;
        }
       else if (stk.length >= 0 || stk[stk.length - 1] !== arr[i]) {
           stk.push(arr[i]); i++;
       }
             
        }
    
    
    return stk.length !== 0 ? stk : [-1];
    
}