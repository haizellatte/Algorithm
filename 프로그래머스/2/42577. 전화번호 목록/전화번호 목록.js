function solution(phone_book) {
    return !phone_book.sort().some((number, i, book) => book[i+1]?.indexOf(number) === 0);
}