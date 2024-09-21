

//title: RegEx XXI : Group Ranges - Non-capturing group (?:x)

//tags: formatting,regex

//url: https://edabit.com/challenge/yjAes6mGHe9DJpRgh

//Description:
//Groups and ranges indicate groups and ranges of expression characters. Non-capturing groups matches "x" and behaves like capturing groups, but it does not remember the match.
//Keep in mind that capturing groups have a performance penalty. If you don't need the matched substring to be recalled, prefer non-capturing groups.
//Write a RegEx that matches colors in the format #abc or #abcdef. That is: # followed by 3 or 6 hexadecimal digits. Use a non capturing group in your expression.
//let REGEXP = /your regexp/g
//let str = "color: #3f3; background-color: #AA00ef; and: #abcd"
//str.match(REGEXP) ; ➞  #3f3 #AA00ef
//Notes
//Check the Resources tab if you get stuck.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//let str1 = "color: #3f3; background-color: #AA00ef; and: #abcd"
//​
//const validate = (REGEXP) => {
//   if(!/\(\?\:/.test(String(REGEXP))) return () => "invalid" 
//   return function testReg(str) {
//     return str.match(REGEXP)
//   }
//}
//​
//const testExp = validate(REGEXP)
//​
//Test.assertNotEquals(testExp(str1), "invalid", "You are required to use a non-capturing group in your expression")
//Test.assertSimilar(testExp(str1), ["#3f3","#AA00ef"])
//​
//// credits to https://javascript.info/regexp-groups

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Burglary Series (13): Sort That List

//tags: arrays,objects,sorting

//url: https://edabit.com/challenge/qrb9Xaapq9b8nstLe

//Description:
//The insurance guy tells you he needs an updated list of the stolen goods, and surely only to annoy you, he adds, "in reverse alphabetical order".
//Given an object with the stolen items, return a new object with the list in reverse alphabetical order.
//Examples
//{ c: 100, a: 50, b: 10, d: 50 } ➞ { d: 50, c: 100, b: 10, a: 50 }
//
//{ ab: 10, ac: 10, ad: 10 } ➞ { ad: 10, ac: 10, ab: 10 }
//
//{ piano: 5, stereo: 10, suitcase: 1 } ➞ { suitcase: 1, stereo: 10, piano: 5 }
//Notes
//Please note that one should not rely on property order of an ordinary Object: Although the keys of an ordinary Object are ordered now, they didn't used to be, and the order is complex. As a result, it's best not to rely on property order. MDN Source

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const random = Math.random()
//const obj = {
//    c: 100,
//    a: 50,
//    b: 10,
//    d: 50,
//};
//const obj2 = {ab: 10, ac: 10, ad: 10}
//const obj3 = {piano: random, stereo: 10, suitcase: 1}
//​
//Test.assertSimilar(sortList(obj),{ d: 50, c: 100, b: 10, a: 50 })
//Test.assertSimilar(sortList(obj2),{ ad: 10, ac: 10, ab: 10 })
//Test.assertSimilar(sortList(obj3),{ suitcase: 1, stereo: 10, piano: random })

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Recursion: Array Summation

//tags: arrays,recursion

//url: https://edabit.com/challenge/rms6xusZ3QeurapAW

//Description:
//Create a function that sums up all the elements in the array recursively. The use of the array's built-in reduce() function is not allowed, thus, the approach is recursive.
//Examples
//recurAdd([1, 2, 3, 4, 10, 11]) ➞ 31
//
//recurAdd([-3, 4, 11, 10, 21, 32, -9]) ➞ 66
//
//recurAdd([-21, -7, 19, 3, 4, -8]) ➞ -10
//Notes
//You're expected to solve this challenge using a recursive approach.
//You can read on more topics about recursion (see Resources tab) if you aren't familiar with it yet or haven't fully understood the concept behind it before taking up this challenge.
//If you think recursion is fun, you can find a collection of those challenges here.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const recursive = f => (`${f}`.match(RegExp(`${f.name}`,'gm'))||[]).length > +(/function/.test(f))
//Test.assertNotEquals(recursive(recurAdd), false, "Recursion is required!")
//​
//let [numVector, resVector] = [[
//  [1, 2, 3, 4, 10, 11], [-3, 4, 11, 10, 21, 32, -9], [3, 7, -3, -7, 4, 6, -4, -6],
//  [-21, -7, 19, 3, 4, -8], [], [16]],
//  [31, 66, 0, -10, 0, 16]]
//​
//for (let i in numVector) Test.assertEquals(recurAdd(numVector[i]), resVector[i])

