function solution(myString, pat) {
    const newStr = [...myString].map((el) => el === "A" ? "B" : "A").join("");
    return (newStr.includes(pat)) ? 1 : 0;
}