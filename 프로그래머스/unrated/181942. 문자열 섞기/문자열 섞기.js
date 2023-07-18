function solution(str1, str2) {
    let answer = [];
    let arr1 = [...str1];
    let arr2 = [...str2];
    
    for (let i = 0; i <= str1.length; i++) {
        answer.push(arr1[i], arr2[i]);
    } 
    return answer.join("");
}