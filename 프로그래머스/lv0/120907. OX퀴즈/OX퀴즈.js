function solution(quiz) {
    return quiz.map((n) => {
        const [number, answer] = n.split("=");
        return eval(number) === Number(answer) ? "O" : "X";
    })
}