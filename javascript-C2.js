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
//Array Exercise
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

/*
//Error Prevention, enabling running at the same time
function addTwoNums(a,b){
    try{
        if (typeof a != 'number'){
            throw new ReferenceError('The first argument is not a number.')
        }   
        else if (typeof b != 'number'){
            throw new ReferenceError('The second argument is not a number.')
        }
        else{
            console.log(a+b)    
        } 
    } catch (err) {
        console.log("Error!", err)
    }
}

addTwoNums(5,"5")
console.log("It still works")
*/


//Defensive Programming -> argument validation with condition vars
function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2
    var condition2 = typeof(match) == 'string' && match.length == 1

    if (condition1 && condition2)
    {
        for(var i = 0; i < word.length; i++) {
        if(word[i] == match) {
            //if the current character at position i in the word is equal to the match
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
        }
    } else {
        console.log("Please pass correct arguments to the function.")
    }
}

letterFinder(5,5)
console.log()
letterFinder("cat","c")