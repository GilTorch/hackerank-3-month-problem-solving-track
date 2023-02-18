
// Step 1
// 1.- problem: 
// let's restate the problem
// how many set of two numbers with index i and j have their sums divisible by k
// meaning arr[i] + arr[j] % k = 0
// assuming i < j and k > 0

// 2.- inputs and outputs of the problem

// input: 
// n: number of elements in the array (can be between 2 and 100),
// k: a positive integer (can be be between 1 and 100)
// arr: the actual array


// 3.-  outputs can be determeined by the outputs

// output: 
// the number of sums of two numbers divisible by k


// Step 2 
// Examples
// example 1:  n = 6, k = 3  ar = [1, 3, 2, 6, 1, 2] -> returns 5
// inputs cannot be empty
// outputs cannot be empty

// 
// solution
// for each indexes i let's check all of indexes j that are superior to it
// so it will be i,i+1.....n-1
// if the sum of the two numbers are divisble number increment count


function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let divisibleSumPairs = 0
    for(let i = 0; i < n; i ++){
        for(let j = 0;  j < n; j++){
            if(j <= i){
                continue;
            }
            if((ar[i]+ar[j])%k === 0){
                divisibleSumPairs++
            }
            // console.log(j)
        }
    }
    return divisibleSumPairs
}

// console.log(divisibleSumPairs(6,5,[1,2,3,4,5,6]))
// console.log(divisibleSumPairs(6,3,[1,3,2,6,1,2]))