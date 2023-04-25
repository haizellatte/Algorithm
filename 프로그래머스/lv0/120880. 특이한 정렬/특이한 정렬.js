function solution(numlist, n) {
    return numlist.sort((a,b) => {
        const [ aGab, bGab ] = [Math.abs(a-n), Math.abs(b-n)];
        //거리가 같다면 더 큰 수를 우선 배치
        if(aGab === bGab) return b - a;
        //거리가 다르다면 오름차순 정렬
        return aGab-bGab;
    })
}