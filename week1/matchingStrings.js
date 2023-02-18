
function matchingStrings(strings, queries) {
    // Write your code here
    const frequencyCount = []
    for(let i = 0; i < queries.length; i++){
        let query = queries[i]
        let currentFrequencyCount = 0;
        for(let j = 0; j < strings.length;j++){
            if(strings[j] === query){
                currentFrequencyCount++
            }
        }
        frequencyCount.push(currentFrequencyCount)
    }

    return frequencyCount

}

let strings = ['ab','ab','abc']
let queries = ['ab','abc','bc']


console.log(matchingStrings(strings,queries))

let strings1 = [
"aba",
"baba",
"aba",
"xzxb"
]

let queries1 = [
"aba",
"xzxb",
"ab"
]

console.log(matchingStrings(strings1,queries1))



let strings2 = ["abcde",
"sdaklfj",
"asdjf",
"na",
"basdn",
"sdaklfj",
"asdjf",
"na",
"asdjf",
"na",
"basdn",
"sdaklfj",
"asdjf"]

let queries2 = ["abcde",
"sdaklfj",
"asdjf",
"na",
"basdn"]

console.log(matchingStrings(strings2,queries2))
