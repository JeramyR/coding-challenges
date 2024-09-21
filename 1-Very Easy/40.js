

//title: Stuttering Function

//tags: algorithms,formatting,language_fundamentals,strings

//url: https://edabit.com/challenge/3QHfHxp3WkuQsMLXd

//Description:
//Write a function that stutters a word as if someone is struggling to read it. The first two letters are repeated twice with an ellipsis ... and space after each, and then the word is pronounced with a question mark ?.
//Examples
//stutter("incredible") ➞ "in... in... incredible?"
//
//stutter("enthusiastic") ➞ "en... en... enthusiastic?"
//
//stutter("outstanding") ➞ "ou... ou... outstanding?"
//Notes
//Assume all input is in lower case and at least two characters long.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(stutter("incredible"), "in... in... incredible?")
//Test.assertEquals(stutter("am"), "am... am... am?")
//Test.assertEquals(stutter("outstanding"), "ou... ou... outstanding?")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: ES6: Destructuring Arrays IV

//tags: arrays,language_fundamentals

//url: https://edabit.com/challenge/wJuXYhgetMtD4Gezj

//Description:
//There is an easy way to assign to array values to the nth index by using rest parameter syntax.
//var [head, tail] = [1, 2, 3, 4]
//
//console.log(head) // outputs  1
//console.log(tail) // outputs 2
//But how could I make tail = [2, 3, 4] instead of tail = 2?
//Notes
//Check the Resources tab for more examples.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//eval(str)
//​
//const validString = (str) => {
//  return /\.\.\./.test(str) ? "rest" : false
//}
//​
//const validArray = (str) => {
//  return /\[\s*1\s*\,\s*2\s*\,\s*3\s*\,\s*4\s*\]$/.test(str) ? "array" : false
//}
//​
//Test.assertEquals(validString(str), "rest", "You need to use the Rest element.")
//Test.assertEquals(validArray(str), "array", "[1, 2, 3, 4] should remain untouched.")
//Test.assertEquals(head, 1, "head should equal to 1")
//Test.assertSimilar(tail, [2,3,4], "tail should equal to [2, 3, 4]" )

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Minimal IX: This or That

//tags: conditions,language_fundamentals,logic

//url: https://edabit.com/challenge/Rph4mYq5qtT48HCLY

//Description:
//Check the principles of minimalist code in the intro to the first challenge.
//In the Code tab you will find a code that is missing a single character in order to pass the tests. However, your goal is to submit a function as minimalist as possible. Use the tips in the tips section below.
//Write a function that returns the first truthy argument passed to the function. If all arguments are falsy, return the string "not found". The function will be called with a minimum of one and a maximum of four arguments: a, b, c, d.
//Tips
//The logical OR operator || can be used to assign or return the first truthy value among two or more elements. If no truthy value is found, the last element will be returned.
//For example, the code:
//function oneOfThese(a, b, c) {
//    if (a) return a;
//    else if (b) return b;
//    else return c;
//}       
//Can be simplified to:
//const oneOfThese = (a, b, c) => a || b || c;
//Bonus
//Once a truthy value is found, the rest of the elements will not be checked. This can be used to define a sort of default value that will be returned if all of the previous elements happen to be false or empty:
//Notes
//This challenge is translated from Alessandro Manicone's "Minimal Series". The following are his comments and link to the series:
//This is an open series: there isn't a definite list of features for the challenges. Please, do not hesitate to leave your suggestions in the Comments.
//Readability is indeed a subjective concept. Let's discuss it! Feel free to leave your opinion in the Comments.
//You can find all the exercises in this series over here.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(firstOne('Edabit'), 'Edabit')
//Test.assertEquals(firstOne(false), "not found")
//Test.assertEquals(firstOne('', 'Pikachu'), 'Pikachu')
//Test.assertEquals(firstOne('', 0), "not found")
//Test.assertEquals(firstOne(0, 20, ''), 20)
//Test.assertEquals(firstOne(0, 0, ''), "not found")
//Test.assertEquals(firstOne('', 0, true, false), true)
//Test.assertEquals(firstOne('', 0, false, false), "not found")
//​
//// Author: Alessandro Manicone

