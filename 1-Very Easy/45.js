

//title: Case Insensitive Comparison

//tags: language_fundamentals,strings,validation

//url: https://edabit.com/challenge/9MBwBaa3wDKX8Mxbv

//Description:
//Write a function that validates whether two strings are identical. Make it case insensitive.
//Examples
//match("hello", "hELLo") ➞ true
//
//match("motive", "emotive") ➞ false
//
//match("venom", "VENOM") ➞ true
//
//match("mask", "mAskinG") ➞ false
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(match("hello", "hELLo"), true)
//Test.assertEquals(match("hey", "hey"), true)
//Test.assertEquals(match("venom", "VENOM"), true)
//Test.assertEquals(match("maGIciAN", "magician"), true)
//Test.assertEquals(match("stupIFy", "stupifY"), true)
//​
//Test.assertEquals(match("bald", "blad"), false)
//Test.assertEquals(match("motive", "emotive"), false)
//Test.assertEquals(match("mask", "mAskinG"), false)
//Test.assertEquals(match("skim", "skimp"), false)
//Test.assertEquals(match("EXCEl", "exceLs"), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: ES6: Destructuring Objects VIII

//tags: formatting,language_fundamentals,objects

//url: https://edabit.com/challenge/7GWG3z27pKqJRdPaM

//Description:
//Using basic object destructuring you can assign variables name and email:
//let { name, email } = { name: "John", email: "john@example.com" }
//
//console.log(name)  // "John"
//console.log(email)  // "john@example.com"
//What if there were more properties but you didn't want to write variables for all of them and just wanted to stick them into another object and do something like this:
//let { name, email, rest} = { name: "John", email: "john@example.com", city: "Phoenix", state: "AZ", country: "USA"}
//
//rest ===  { city: "Phoenix", state: "AZ", country: "USA"} // true
//There is something you have to do with the variable name rest in order to assign it an object containing the rest of the object properties. You can find out how in the MDN docs in the Resources tab.
//Use the rest syntax to change the code so that rest = {city: "Phoenix", state: "AZ", address: "USA"}. Only edit the left side of the assignment { name, email, rest }. Ignore the .toString() function (used for validation).
//Notes
//If you know how to use object destructuring, go ahead and complete this challenge, otherwise check the Resources tab for some examples.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//eval(str)
//​
//function validUser() {
//  return JSON.stringify(user) === JSON.stringify({ name: "John", email: "john@example.com",city: "Phoenix", state: "AZ", country: "USA"}) ? "valid" : "not valid"
//}  
//​
//function rightSideValidation() {
//  return /\suser\s/.test(str) ? "valid" : "not valid" 
//}
//​
//Test.assertEquals(validUser(), "valid", "The user object must not be changed")
//Test.assertEquals(rightSideValidation(), "valid", 'The right side of the assignment should remain as "user"')
//Test.assertEquals(name, "John")
//Test.assertEquals(email, "john@example.com")
//Test.assertSimilar(rest, {city: "Phoenix", state: "AZ", country: "USA"}, "The variable rest has not been defined yet.")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: ES6: Destructuring Arrays III

//tags: arrays,language_fundamentals

//url: https://edabit.com/challenge/STfAEAE5fjNmFCsvf

//Description:
//You can assign variables from arrays with destructuring like this:
//const arr = ["eyes", "nose", "lips", "ears"]
//let [eyes, nose, lips, ears] = arr
//But you can also skip over items in the array being destructured.
//Notes
//Check the Resources tab for more examples.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(lips, arr[2])

