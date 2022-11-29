function solution(array) {
    //1. 일단 오름차순으로 정렬한다.
    array.sort((a,b)=>a-b);
    //2. array의 중간 index값을 parseInt를 통해 변수에 담는다.
    let index = parseInt(array.length/2);
    //3. 해당 인덱스를 리턴한다.
    return array[index];
}