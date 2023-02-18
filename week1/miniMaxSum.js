// Timer: I took around 15 mins (Too Long)

function miniMaxSum(arr) {
    // Write your code here
    let min = Math.min(...arr)
    let max = Math.max(...arr)

    let arrCopy1 = [...arr]
    let arrCopy2 = [...arr]

    let maxSum = 0; 
    let minSum = 0;

    let minIndex = arr.findIndex(el => el === min)
    let maxIndex = arr.findIndex(el => el === max)

    arrCopy1.splice(minIndex,1)

    arrCopy2.splice(maxIndex,1)


    for(let i = 0; i < 4; i++){
        maxSum += arrCopy1[i]
        minSum += arrCopy2[i]
    }

    console.log(`${minSum} ${maxSum}`)
}

console.log(miniMaxSum([1, 3, 5, 7, 9]))
console.log(miniMaxSum([1, 2, 3, 4, 5]))