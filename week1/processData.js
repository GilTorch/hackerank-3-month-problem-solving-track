function processData(input) {
    //Enter your code here
    
    let inputs = input.split('\r\n');
    for(let i = 0; i < inputs.length; i++){

   
    const splitInput = inputs[i].split(";")
    const operation = splitInput[0]
    const typeOfWord = splitInput[1]
    let string = splitInput[2]

    // The operation will either be S (split) or C (combine)
    // M indicates method, C indicates class, and V indicates variable
    // In the case of a split operation, the words will be a camel case method, 
    // class or variable name that you need to split into a space-delimited list 
    // of words starting with a lowercase letter.
    // In the case of a combine operation, the words will be a space-delimited list
    //  of words starting with lowercase letters that you need to combine into the appropriate camel case String. 
    // Methods should end with an empty set of parentheses to differentiate them from variable names.
    
    // if the operation is "S" we split
      // METHOD:remove the parenteses and add space
      // between capitalized letters and the last letter then lowercase everything
      // CLASS: we had space between the capitalized letters and the letter behind them
      // except the first one then we lowercase everything
      // VARIABLES: 
      //we had space between the capitalized letters and the letter behind them then we lowercase everything
    
    // if the operation is "C" we combine
     // METHOD: we capitalize the first letter of each word except the first one, 
     // then we remove the spaces and we add the parentheses
     // CLASS: 
     // we capitalize the first letter of each word except the first one, 
     // then we remove the space
     // VARIABLES: we capitalize the first letter of each word except the first one, 
     // then we remove the spaces
     
     let result = "";
     if(operation === "S"){
        if(typeOfWord === "M"){
            string = string.replace("()","")
        }
        for(let i = 0; i < string.length; i++){
            let spaceOrNot = (i === 0 && typeOfWord === "C") || string[i].toLowerCase() === string[i] ? "" : " "
            result += `${spaceOrNot}${string[i].toLowerCase()}`
        }
     }else if(operation === "C"){
        
        let splitString = string.split(" ")

        for(let i = 0; i < splitString.length; i ++){
            let word = splitString[i]
            word = word.split("")
            word[0] = word[0].toUpperCase()
            if(typeOfWord !== "C" && i === 0){
                word[0] = word[0].toLowerCase()
            }
            word = word.join("")
            result+= word
        }

        if(typeOfWord === "M"){
            result = result + "()"
        }
     }

    console.log(result)
}
} 

// console.log(processData("S;M;plasticCup()"))
// console.log(processData("C;V;mobile phone"))
// console.log(processData("C;C;coffee machine"))
// console.log(processData("C;C;large software book"))
// console.log(processData("C;M;white sheet of paper"))
console.log(processData("S;V;pictureFrame"))
// console.log(processData("S;V;iPad"))
// console.log(processData("C;M;mouse pad"))
// console.log(processData("C;C;code swarm"))
console.log(processData("S;C;OrangeHighlighter"))



