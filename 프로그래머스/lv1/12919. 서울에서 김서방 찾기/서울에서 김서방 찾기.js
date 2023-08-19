function solution(seoul) {
    
    const kimIndex = Number(seoul.map((v, i) => {
        if (v === 'Kim') {
            return i
        }
    }).filter(v => v >= 0));
    
    
    // const kimIndex = seoul.indexOf('Kim');
    
    return `김서방은 ${kimIndex}에 있다`;
}
