function solution(s){
    const isP = [...s].filter(x => x === 'p' || x === 'P');
    const isY = [...s].filter(x => x === 'y' || x === 'Y');
    
    return isP.length === isY.length ? true : false;
}