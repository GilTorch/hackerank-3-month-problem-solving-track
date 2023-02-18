
// find the median in a list of numbers 

// [5,3,1,2,4] 

// input -> arr[n]
// output -> 



// THIS SOLUTION DOES NOT WORK

function findMedian(arr) {
    // Write your code here
    console.log(arr.length)
    console.log(arr)
    let middleElementIndex = (arr.length +1) / 2 

    console.log(middleElementIndex)

    return  arr[middleElementIndex]
}

console.log(findMedian([5,3,1,2,4]))
console.log(findMedian([0,1,2,4,6,5,3]))