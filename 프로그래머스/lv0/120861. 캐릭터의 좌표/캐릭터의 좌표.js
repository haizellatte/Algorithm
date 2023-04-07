function solution(keyinput, board) {
    //1. [0,0]에서 시작하므로
    let x = 0;
    let y = 0;
    
    //2. board에 크기도 정해져 있기때문에 마찬가지로, x/y가 갈 수 있는 범위를 지정한다.
    let xRange = (board[0] / 2);
    let yRange = (board[1] / 2);
    
    //3. keyinput을 순회하며 right라면 x+1, left는 x-1, up은 y+1, down은 y-1 이 되도록 조건문을 작성한다.
   /* 4. 반례를 생각하자 
    -> 이미 xRange 혹은 yRange에 닿아있다면 이동할 수 없다 = 즉 x/yRange 보다 x/y값이 작은 경우에만 이동 가능하다. 
    -> 따라서 해당 조건을 넣어준다. */
    for(let i = 0 ; i < keyinput.length; i++){
        if(keyinput[i] === "right" && x + 1 < xRange) x++;
        if(keyinput[i] === "left" && x - 1 > -xRange) x--;
        if(keyinput[i] === "up" && y+1 < yRange) y++;
        if(keyinput[i] === "down" && y-1 > -yRange) y--;
        
    }
    return [x, y]
}