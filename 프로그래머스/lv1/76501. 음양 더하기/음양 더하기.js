function solution(absolutes, signs) {
    const answer = signs.map((v, i) => v ? +(absolutes[i]) : -(absolutes[i]));
    return answer.reduce((a, b) => a + b);               
}