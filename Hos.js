const prompt = require("prompt-sync")();






function HoF(data){       // create a function with parameter
    function nested(){     // create a nested function
        let details = ["bindu", 24, "developer", "2cr"];
        data()                // parameter as function call
        console.log(details)
    }
    return nested                    // return nested function 
}


function HoF1(data){       // create a function with parameter
    function nested1(){     // create a nested function
        let details1 = ["hima", 24, "develolper", "1cr"];
        data()                // parameter as function call
        console.log(details1)
    }
    return nested1                 // return nested function 
}


// HoF(data)

function management(){
    console.log("given access");
} 


// closure
let access = HoF1(management)     // management = data
access();