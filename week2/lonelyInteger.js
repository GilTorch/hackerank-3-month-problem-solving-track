function lonelyinteger(a) {
    // Write your code here
    if(a.length === 1) return a[0]
    const sortedArray = a.sort()
    let uniqueElement;
    for(let i = 1; i < sortedArray.length; i++){
        if(sortedArray[i] !== sortedArray[i+1] && sortedArray[i] != sortedArray[i-1]){
            uniqueElement = sortedArray[i]
        }
    }

    return uniqueElement
}


console.log(lonelyinteger([1,2,3,4,3,2,1,5,5]))