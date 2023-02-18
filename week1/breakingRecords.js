function breakingRecords(scores) {
    // Write your code here
    let countMin = 0; 
    let countMax = 0;
    let min = scores[0]; 
    let max = scores[0]; 

    for(let i = 1; i < scores.length; i++){
        if(scores[i] < min){
            min = scores[i]
            countMin++;
        }
        if(scores[i] > max){
            max = scores[i]
            countMax++
        }
    }


    return [countMin, countMax]

}

console.log(breakingRecords([12,24,10,24])) // should return [1,1]
