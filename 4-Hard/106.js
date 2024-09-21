

//title: RegEx: Boundary Assertions V

//tags: formatting,regex,strings

//url: https://edabit.com/challenge/kcQmoJJE8CXC5kqnP

//Description:
//You've just webscraped a web page and stored it in a string. In the string there is a bullet list of states that voted for President Trump's impeachment:
//const str = `
//* Texas = no
//* California = yes
//* Florida = yes
//* Michigan = no
//`
//Add a negative lookahead assertion so a regex match would output the states that voted no. DO NOT use a positive lookahead assertion.
//Notes
//You must use a negative lookahead assertion (check the Resources tab for info).
//This is fake data and used only for educational purposes.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const validate = (REGEXP) => {
//   if(!/\(\?\!/.test(String(REGEXP))) return () => "need negative lookahead assertion"
//   return function testReg(str) {
//     return str.match(REGEXP)
//   }
//} 
//​
//const str = `
//* Texas = no 
//* California = yes  
//* Florida = yes 
//* Michigan = no 
//`
//​
//const testStr = validate(REGEXP) 
//​
//Test.assertNotEquals(testStr(str), "need negative lookahead assertion", "You need to use a negative lookahead in your expression.")
//Test.assertSimilar(testStr(str), ['Texas', 'Michigan'])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Staircase of Recursion

//tags: algorithms,recursion

//url: https://edabit.com/challenge/APCAgm5FRnnC7ar87

//Description:
//Write a function that returns the number of ways a person can climb n stairs, where the person may only climb 1 or 2 steps at a time.
//To illustrate, if n = 4 there are 5 ways to climb:
//[1, 1, 1, 1]
//[2, 1, 1]
//[1, 2, 1]
//[1, 1, 2]
//[2, 2]
//Examples
//waysToClimb(1) ➞ 1
//
//waysToClimb(2) ➞ 2
//
//waysToClimb(5) ➞ 8
//Notes
//A staircase of height 0 should return 1.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(waysToClimb(0), 1)
//Test.assertEquals(waysToClimb(1), 1)
//Test.assertEquals(waysToClimb(2), 2)
//Test.assertEquals(waysToClimb(3), 3)
//Test.assertEquals(waysToClimb(4), 5)
//Test.assertEquals(waysToClimb(5), 8)
//Test.assertEquals(waysToClimb(6), 13)
//Test.assertEquals(waysToClimb(7), 21)
//Test.assertEquals(waysToClimb(15), 987)
//Test.assertEquals(waysToClimb(23), 46368)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sum of Slices of an Array (Part 1)

//tags: algorithms,arrays,loops

//url: https://edabit.com/challenge/iaySFYs3oTQDboeqd

//Description:
//Create a function that takes an array as an argument and return an array of the sum of each of its slices. An array's slices are groups of consecutive values that add up to a maximum of 100. No slice's total sum should exceed 100. However, if a single integer equals or exceeds 100, return the integer as well.
//Examples
//sumOfSlices([10, 29, 13, 14, 15, 16, 17, 31, 20, 10, 29, 13, 14, 15, 16, 17, 31, 20, 100])
//➞ [97, 78, 87, 68, 100]
//
//// First slice: [10, 29, 13, 14, 15, 16]
//// 10 + 29 + 13 + 14 + 15 + 16 = 97
//// The next value could not be included in this slice because
//// the total would exceed 100.
//
//// Second slice: [17, 31, 20, 10]
//// 17 + 31 + 20 + 10 = 78
//// The next value could not be included in this slice because
//// the total would exceed 100.
//
//// And so on ...
//sumOfSlices([58, 3, 38, 99, 10]) ➞ [99, 99, 10]
//
//sumOfSlices([13]) ➞ [13]
//Notes
//Do not sort the array.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(sumOfSlices([10, 29, 13, 14, 15, 16, 17, 31, 20, 10, 29, 13, 14, 15, 16, 17, 31, 20, 100]), [97, 78, 87, 68, 100])
//Test.assertSimilar(sumOfSlices([58,3, 38, 99, 10]), [99, 99, 10])
//Test.assertSimilar(sumOfSlices([13]), [13])
//Test.assertSimilar(sumOfSlices([62, 40, 33, 23, 44, 20, 30, 46, 12, 48, 16, 71, 80, 51, 37, 42, 68, 35, 19, 41, 100, 3, 33, 37, 26, 65, 17, 44, 14, 35]), [62, 96, 94, 58, 64, 71, 80, 88, 42, 68, 95, 100, 99, 82, 93])
//Test.assertSimilar(sumOfSlices([30, 15, 75, 47]), [45, 75, 47])

