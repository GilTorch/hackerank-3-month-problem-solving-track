// 1.- let's rephrase problem
// basically we are grading students
// if grade is less than 40 it's failing
// we round a failing grade this way
  // if the difference between the next multiple of 5 
  // and the grade is less than 3 we round the grade to that multiple of 5
// if the grade is less than 38 we don't round and it's surely failed
// and every other cases the grade is passing (we also round grades that are greater than 40)

// 2.- input: array of n elements with n between 1 and 60
// output: array of grades with proper rounding

// 3.- Examples: 
// gradingStudents([84,29,57]) -> [85,29,57]



function gradingStudents(grades) {
    // Write your code here
    const finalGrades = [];

    function roundUpToNextMultipleOf5(grade) {
        let nextMutipleOf5
        for(let i = grade + 1; i < grade+3; i++){
            if(i%5===0){
                nextMutipleOf5 = i
                break;
            }
        }
        if(nextMutipleOf5){
            return nextMutipleOf5
        }else{
            return grade
        }
    }

    for(let i = 0; i < grades.length; i++){
        let grade = grades[i]
        if(grade < 40){
            if(grade < 38){
                finalGrades.push(grade)
            }else{
                finalGrades.push(roundUpToNextMultipleOf5(grade))
            }
        }else{
            finalGrades.push(roundUpToNextMultipleOf5(grade))
        }   
    }

    return finalGrades

}


console.log(gradingStudents([84,29,57]))
