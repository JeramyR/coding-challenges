

//title: Destructuring Assignment (Ignoring Values)

//tags: language_fundamentals,logic,loops

//url: https://edabit.com/challenge/cGFYF7YcQmAzD2ZWP

//Description:
//You can assign variables from arrays like this:
//arr = [1, 2, 8]
//first, , last = arr
//
//first = lst[0]
//
//last = lst[arr.length - 1]
//
//console.log(first) ➞ outputs 1
//console.log(last) ➞ outputs 8
//Using Destructuring Assignment (check the Resources tab), your task is to unpack the arrays writeyourcodehere into three variables, first, a variable to ignore all middle values and last.
//Notes
//Your solution should be just One Line of code.
//If your solution is longer than one line of code, please check the Resources tab.
//Another version of this challenge.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(first, 1)
//Test.assertEquals(last, 8)
//​
//// Author: Mubashir Hassan

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Invert an Array

//tags: arrays,functional_programming,interview,language_fundamentals

//url: https://edabit.com/challenge/5L368ypvh5ZZ2HJSL

//Description:
//Create a function that takes an array of numbers arr and returns an inverted array.
//Examples
//invertArray([1, 2, 3, 4, 5]) ➞ [-1, -2, -3, -4, -5]
//
//invertArray([1, -2, 3, -4, 5]) ➞ [-1, 2, -3, 4, -5]
//
//invertArray([]) ➞ []
//Notes
//Don't forget to return the result.
//If you get stuck on a challenge, find help in the Resources tab.
//If you're really stuck, unlock solutions in the Solutions tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(invertArray([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5])
//Test.assertSimilar(invertArray([1, -2, 3, -4, 5]), [-1, 2, -3, 4, -5])
//Test.assertSimilar(invertArray([]), [])
//Test.assertSimilar(invertArray([0]), [0])
//// Mubashir

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: City School Creating IDS

//tags: formatting,language_fundamentals,strings

//url: https://edabit.com/challenge/Ht67uJXACq4hWrC2i

//Description:
//Many IDS (for emails or Google ID) are created using the person's name.
//Create a function that will return a four-character ID using the person's first name and last name. The first character will be the first letter of the first name but in lowercase. The next three characters will be the first three characters of the last name, but the first letter will be capitalized and the other two will be in lower case.
//Examples
//createID("mary", "lamb") ➞ "mLam"
//
//createID("John", "SMITH") ➞ "jSmi"
//
//createID("mary", "smith") ➞ "mSmi"
//Notes
//There is always one character in the first name and at least three in the last name.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(createID("mary","smith"), "mSmi", "all lower case")
//Test.assertEquals(createID("S","WORKING"), "sWor", "all upper case")
//Test.assertEquals(createID("joHN","wAShington"), "jWas", "mixed case")

