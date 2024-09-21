

//title: Good Match?

//tags: algebra,arrays,math,sorting

//url: https://edabit.com/challenge/FsAdXGi6B76whpdkY

//Description:
//In this challenge you will be given an array of numbers. Your task is to "marry" each pair of adjacent numbers by adding them, and return the array of "couples" (i.e. sums).
//If the array has an odd length, one number is (sadly) left out, so you should return "bad match".
//Examples
//isGoodMatch([1, 2, 4, 7]) ➞ [1+2, 4+7] ➞ [3, 11]
//
//isGoodMatch([5, 7, 9, -1, 4, 2]) ➞ [12, 8, 6]
//
//isGoodMatch([5, 7, 9, -1, 4, 2, 3]) ➞ "bad match"
//
//isGoodMatch([2, 6, 7, -2, 4]) ➞ "bad match"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(isGoodMatch([1, 2, 4, 7]), [3, 11])
//Test.assertEquals(isGoodMatch([1, 2, 4]), "bad match")
//Test.assertSimilar(isGoodMatch([5, 7, 9, -1, 4, 2]), [12, 8, 6])
//Test.assertSimilar(isGoodMatch([1, 2, 3, 4, 5, 6]), [3, 7, 11])
//Test.assertEquals(isGoodMatch([3, 6, 7, 9, -1]), "bad match")
//Test.assertEquals(isGoodMatch([5, 7, 9, -1, 4, 2, 9]), "bad match")
//Test.assertSimilar(isGoodMatch([1, -1, 1, -1, 1, -1]), [0,0,0])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: RegEx: Character Classes XII⁠I - hexidecimals

//tags: formatting,regex,validation

//url: https://edabit.com/challenge/fdDprqnJyvFb2QLsu

//Description:
//You can think of character classes as characters with special meaning. They are recognized as special when you place the \ before the character.
//Here are a list of the characters classes in JavaScript:
//., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh,
//You might get text that looks like it's all English characters but it very well may not be:
//pànts !== pants
//To ensure that you only get the characters you want in a string you will need to use the character classes that accept hexadecimal digits.
//Create a regex that matches the word "edabit". You cannot use character classes \w, \d, [], or . to solve.
//Notes
//Use the handy text to hex converter tool in the Resources tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const str = "edabit"
//​
//const validate = (REGEXP) => {
//   if(/[edabit]|\\t|\\T\\w|\\W|\\d|\\S|\\D|\[|\]|\.|\\c/.test(String(REGEXP))) return () => "invalid" 
//   return function testReg(str) {
//     console.log(str.match(REGEXP))
//     return str.match(REGEXP)[0] === "edabit"
//   }
//}
//​
//const testExp = validate(REGEXP)
//​
//Test.assertNotEquals(testExp(str), "invalid", "You cannot use letters or any restricted character class in your expression.")
//Test.assertEquals(testExp(str), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: ES6: Destructuring Objects V

//tags: formatting,language_fundamentals,objects

//url: https://edabit.com/challenge/KKuTiK2opwMtZnrZ5

//Description:
//const user = {
//  first: 'James',
//  last: 'Baker',
//  bestFriend: {
//    first: 'Scott',
//    last: 'Parkman'
//  }
//}
//
//function welcomeMsg(user) {
//  console.log("Welcome " +  user.first + " " + user.last  )
//}
//
//welcomeMsg(user)
//// outputs Welcome James Baker
//With ES6 object destructuring you make this less terse by destructuring the function parameters which reduces duplication when scaling:
//function welcomeMsg({ first, last }) {
//  console.log("Welcome " + first + " " + last)
//}
//Challenge
//Use ES6 object destructuring to unpack the object inside of the function parameters. You will need to assign user.bestFriend.first to the variable name best. Don't remove the parameters { first, last } and don't change the return statement.
//Example
//bio(user) ➞ "Hi, my name is James Baker. Scott is my best friend."
//Notes
//If you know how to use object destructuring, go ahead and complete this challenge, otherwise check the Resources tab for some examples.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const user = {
//  first: 'James',
//  last: 'Baker',
//  bestFriend: {
//    first: 'Scott',
//    last: 'Parkman'
//  }
//}
//​
//eval(str)
//​
//const result = bio(user)
//​
//const code = str.slice(str.lastIndexOf("return")+8, str.lastIndexOf('"'))
//​
//const untouched = (str) => {
//  return code === `Hi, my name is " + first + " " + last + ". " + best + " is my best friend.` ? "valid" : "not valid" 
//}
//​
//Test.assertEquals(untouched(str), "valid", "Changing the return statement is not allowed.")
//Test.assertEquals(result, "Hi, my name is James Baker. Scott is my best friend.")

