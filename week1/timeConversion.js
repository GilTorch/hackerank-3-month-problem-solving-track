    
    
    function timeConversion(s) {
        // Write your code here
        

        const hourMinutesAndSecondsArray = s.split(":")
        const isAM = hourMinutesAndSecondsArray[2].includes("AM")
        
        let convertedHour = hourMinutesAndSecondsArray[0]
        let minutes = hourMinutesAndSecondsArray[1]
        let seconds = hourMinutesAndSecondsArray[2].replace(/AM|PM/,"")

        if(convertedHour === '12' && isAM){
            convertedHour = '00'
        }

        let hourAsNumber = Number(convertedHour)

        if(hourAsNumber > 0 && hourAsNumber < 12 && !isAM){
            convertedHour = hourAsNumber + 12
        }
        
        
        return `${convertedHour}:${minutes}:${seconds}`

    }

    console.log(timeConversion("07:05:45PM"))
    console.log(timeConversion("12:01:00:PM"))
    console.log(timeConversion("12:01:00AM"))