function solution(food) {
    let process = true;
    let count = 0;
    let index = 0;

    while(process){
      if(food[index] === 1 && food[index+1] === 2 && food[index+2] === 3 && food[index+3] === 1){
        food.splice(index,4)
        count++
        // console.log('case1')
        if(index !== 0) {
          index = index-3
          // console.log('case2')
        }
      } else if(index > food.length-3){
        // console.log('case3')
        process = false
      } else {
        // console.log('case4')
        // console.log(index)
        // console.log(food.length-3)
        index++
      }
    }
    return count // console.log(count)
  }
