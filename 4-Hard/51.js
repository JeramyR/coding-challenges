

//title: In N Days...

//tags: arrays,dates

//url: https://edabit.com/challenge/fLDHdMhmaNEd528wB

//Description:
//If today was Monday, in two days, it would be Wednesday.
//Create a function that takes in an array of days as input and the number of days to increment by. Return an array of days after n number of days has passed.
//Examples
//afterNDays(["Thursday", "Monday"], 4) ➞ ["Monday", "Friday"]
//
//afterNDays(["Sunday", "Sunday", "Sunday"], 1) ➞ ["Monday", "Monday", "Monday"]
//
//afterNDays(["Monday", "Tuesday", "Friday"], 1) ➞ ["Tuesday", "Wednesday", "Saturday"]
//Notes
//Return as an array.
//All test cases will have the first letter of each day capitalized.
//n number of days may be greater than 7.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(afterNDays(["Monday", "Tuesday", "Friday"], 1), ["Tuesday", "Wednesday", "Saturday"])
//Test.assertSimilar(afterNDays(["Sunday", "Sunday", "Sunday"], 1), ["Monday", "Monday", "Monday"])
//Test.assertSimilar(afterNDays(["Thursday", "Monday"], 4), ["Monday", "Friday"])
//Test.assertSimilar(afterNDays(["Sunday"], 7), ["Sunday"])
//Test.assertSimilar(afterNDays(["Monday","Friday","Wednesday"], 15), ["Tuesday", "Saturday", "Thursday"])
//Test.assertSimilar(afterNDays(["Sunday","Tuesday"], 5), ["Friday", "Sunday"])
//Test.assertSimilar(afterNDays(["Saturday","Wednesday","Wednesday"], 10), ["Tuesday", "Saturday","Saturday"])
//​
//// made by @Joshua Señoron

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Round to Closest N

//tags: arrays,logic,numbers

//url: https://edabit.com/challenge/CwRXhTncGii8dupn9

//Description:
//Create a function that takes two integers, num and n, and returns an integer which is divisible by n and is the closest to num. If there are two numbers equidistant from num and divisible by n, select the larger one.
//Examples
//roundNumber(33, 25) ➞ 25
//
//roundNumber(46, 7) ➞ 49
//
//roundNumber(133, 14) ➞ 140
//Notes
//n will always be a positive number.

//code area
///////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////

// //tests:

// Test.assertEquals(roundNumber(34, 25), 25)
// // Test.assertEquals(roundNumber(54, 8), 56)
// // Test.assertEquals(roundNumber(65, 10), 70)
// Test.assertEquals(roundNumber(6247, 163), 6194)
// Test.assertEquals(roundNumber(532, 12), 528)
// // Test.assertEquals(roundNumber(642234, 1523), 642706)
// Test.assertEquals(roundNumber(5123, 10), 5120)
// // Test.assertEquals(roundNumber(96623443, 7650), 96627150)
// // Test.assertEquals(roundNumber(125123, 520), 125320)
// Test.assertEquals(roundNumber(12121212, 144), 12121200)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: How Many "Prime Numbers" Are There?

//tags: algebra,algorithms,conditions,loops,math

//url: https://edabit.com/challenge/aHHyBptSxSfyzbWaX

//Description:
//Create a function that finds how many prime numbers there are, up to the given integer.
//Examples
//primeNumbers(10) ➞ 4
//// 2, 3, 5 and 7
//
//primeNumbers(20) ➞ 8
//// 2, 3, 5, 7, 11, 13, 17 and 19
//
//primeNumbers(30) ➞ 10
//// 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(primeNumbers(20), 8)
//Test.assertEquals(primeNumbers(30), 10)
//Test.assertEquals(primeNumbers(100), 25)
//Test.assertEquals(primeNumbers(200), 46)
//Test.assertEquals(primeNumbers(1000), 168)
//Test.assertEquals(primeNumbers(-5), 0)
//Test.assertEquals(primeNumbers(66), 18)
//Test.assertEquals(primeNumbers(133), 32)
//Test.assertEquals(primeNumbers(99), 25)

