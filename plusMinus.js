//Time: I solved this in 8 mn 39s

function plusMinus(arr) {
    // Write your code here
    const n = arr.length 
    let positives = 0;
    let negatives = 0;
    let nulls = 0;

    for(let i = 0; i < n; i++){
        if(arr[i] > 0){
            positives++
        }else if(arr[i] < 0){
            negatives++
        }else{
            nulls++
        }
    }

    let positiveRatio = Number.parseFloat(positives/n).toFixed(6)
    let negativeRatio = Number.parseFloat(negatives/n).toFixed(6)
    let nullsRatio = Number.parseFloat(nulls/n).toFixed(6)

    console.log(positiveRatio)
    console.log(negativeRatio)
    console.log(nullsRatio)
}

console.log(Number.parseFloat("0").toFixed(6))

console.log(plusMinus([1,1,0,-1,-1]))
console.log(plusMinus([-4,3,-9,0,4,1]))