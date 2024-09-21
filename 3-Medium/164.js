

//title: RegEx Exercise 2: Find HTML Tags

//tags: regex

//url: https://edabit.com/challenge/t2zrueG7T4MDhaz6o

//Description:
//Create a regular expression to find all (opening and closing) HTML tags with their attributes. Assume that tag attributes may not contain < and > (inside quotes too).
//Example
//const REGEXP = /your regexp/g
//
//let str = '<> <a href="/"> <input type="radio" checked> <b>'
//
//str.match(REGEXP) ➞  '<a href="/">', '<input type="radio" checked>', '<b>'
//Notes
//The solution is in the Resources tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const str = '<> <a href="/"> <input type="radio" checked> <b>'
//​
//const validate = (REGEXP) => {
//   // if(!//.test(String(REGEXP))) return () => "invalid" 
//   return function testReg(str) {
//     return str.match(REGEXP)
//   }
//}
//​
//const testExp = validate(REGEXP)
//​
//// Test.assertNotEquals(testExp(str), "invalid", "Nothing new here")
//Test.assertSimilar(testExp(str), ['<a href="/">', '<input type="radio" checked>', '<b>']) 
//​
//// credits to https://javascript.info/regexp-greedy-and-lazy#find-html-tags

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Get Student Top Notes

//tags: arrays,objects

//url: https://edabit.com/challenge/b7dXbWEhbr3bXCk7i

//Description:
//Create a function that takes an array of students and returns an array of their top notes. If the student does not have notes then let's assume their top note is equal to 0.
//Examples
//getStudentTopNotes([
//  {
//    id: 1,
//    name: "Jacek",
//    notes: [5, 3, 4, 2, 5, 5]
//  },
//  {
//    id: 2,
//    name: "Ewa",
//    notes: [2, 3, 3, 3, 2, 5]
//  },
//  {
//    id: 3,
//    name: "Zygmunt",
//    notes: [2, 2, 4, 4, 3, 3]
//  }
//]) ➞ [5, 5, 4]
//Notes
//Try it with Array.prototype.map and Array.prototype.reduce.
//Alternatively use Math.max instead of Array.prototype.reduce.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const areEqual = (actual, expected) => expected.every(
//  (item, index) => item === actual[index]
//)
//const sets = [
//  [[5, 4, 3], [5], [4]],
//  [[1, 2, 3], [1, 1, 1], []],
//  [[], []],
//  []
//].map(
//  set => ({ 
//    actual: getStudentTopNotes(
//      set.map(notes => ({ notes }))
//    ), 
//    expected: set.map(notes => Math.max(...notes, 0))
//  })   
//).forEach(
//  ({ actual, expected }) => {
//    Test.expectNoError('Result should be an array', () => {
//      Test.assertEquals(areEqual(actual, expected), true, '' + actual)
//    })
//  }
//)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Car Timer 🏎️

//tags: algorithms,conditions,numbers

//url: https://edabit.com/challenge/QMZrRRhp8f65P3xzm

//Description:
//A built-in timer inside your car can count the length of your ride in minutes and you have started your ride at 00:00.
//Given the number of minutes n at the end of the ride, calculate the current time. Return the sum of digits that the digital timer in the format hh:mm will show at the end of the ride.
//Examples
//carTimer(240) ➞ 4
//// 240 minutes have passed since 00:00, the current time is 04:00
//// Digits sum up is 0 + 4 + 0 + 0 = 4
//
//carTimer(14) ➞ 5
//// Digits sum up is 0 + 0 + 1 + 4
//
//carTimer(808) ➞ 14
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(carTimer(240), 4)
//Test.assertEquals(carTimer(808), 14)
//Test.assertEquals(carTimer(1439), 19)
//Test.assertEquals(carTimer(0), 0)
//Test.assertEquals(carTimer(23), 5)
//Test.assertEquals(carTimer(8), 8)

