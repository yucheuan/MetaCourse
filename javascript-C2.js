/*
for (var i=1; i<11; i++)
    {
        if (i==1) {console.log("Gold medal")}    
        else if (i==2) {console.log("Silver medal")}    
        else if (i==3) {console.log("Bronze medal")}
        else {console.log(i)}
    }
*/

/*
//array exercise
function letterFinder(word, match) {
    for (i = 0; i < word.length; i++) {
        if (word[i] == match){
            console.log("Found the", match, "at", i+1)
        }
        else {console.log("---No found", "at", i+1)}
    }
}

letterFinder("test", "t");
*/

//Error Prevention
function addTwoNums(a,b){
    try{
        if (typeof a != 'number'){
            throw new TypeError('The first argument is not a number.')
        }   
        else if (typeof b != 'number'){
            throw new TypeError('The second argument is not a number.')
        }
        else{
            console.log(a+b)    
        } 
    } catch (err) {
        console.log(err)
    }
}

addTwoNums(5,"5")

