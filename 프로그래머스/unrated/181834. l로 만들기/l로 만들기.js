function solution(myString) {
    const beforeI = "abcedfghijk";
    let answer = [];

    for (let i = 0; i < myString.length; i++) {
        if (beforeI.includes(myString[i])) {
            answer.push("l");
        } else {
            answer.push(myString[i]);
        }
    }
    return answer.join("");
}