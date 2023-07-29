function solution(arr) {
    // 1.  2의 pow 배열을 미리 지정해준다.
    const powArr = [1,2,4,8,16,32,64,128,256,512,1024,2048];
    // 2. pow 배열의 원소 중 arr.length보다 큰 값을 찾아 해당 값에 - arr.length한 값만큼 arr를 새로 만들어 0으로 채운다.
    const arr2 = new Array(powArr.find(x => x >= arr.length) - arr.length).fill(0);
    // 3. 기존 arr와 2번에서 만든 배열을 합쳐준다.
    return [...arr, ...arr2];
}