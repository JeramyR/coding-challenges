

//title: RegEx: Boundary Assertions VII

//tags: formatting,language_fundamentals,regex

//url: https://edabit.com/challenge/mW3z9rJtR5gjcLpeu

//Description:
//You are needed to finish a program that lists how many bad cookies are produced every day. A list of all the cookies produced for the day is given in an array. All that's needed is a regular expression that will make the function work correctly.
//const cookies = ["bad cookie", "good cookie", "bad cookie", "good cookie", "good cookie"]
//
//function badCookies(res) {
//  const REGEXP = /* YOU FILL IN */
//  return res.filter( x => REGEXP.test(x)).length
//}
//
//badCookies(res) // should output 2
//Challenge
//Write the regular expression to make the function output the correct number.
//You're required to use a negative lookbehind assertion in your expression.
//Notes
//Check the Resources tab for details on negative lookbehind assertions.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const cookies = ["bad cookie", "good cookie", "bad cookie", "good cookie", "good cookie"] 
//​
//const validate = (REGEXP) => {
//   if(!/\(\?\<\!/.test(String(REGEXP))) return () => "negative lookbehind required"
//   return function testReg(cookies) {
//     return cookies.filter(x => REGEXP.test(x)).length
//   }
//} 
//​
//const testExp = validate(REGEXP) 
//​
//Test.assertNotEquals(testExp(cookies), "negative lookbehind required", "You are required to use a negative lookbehind in your expression.")
//Test.assertSimilar(testExp(cookies), 2)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Find the Overlapping Range

//tags: arrays,language_fundamentals

//url: https://edabit.com/challenge/z6ydynS7YBL9K9t3T

//Description:
//For an array of ranges, find the maximum range that is contained in all the ranges. If there is no such range, return "No overlapping".
//Examples
//overlapping([[1, 7], [2, 8], [0, 4]]) ➞ [2, 4]
//
//overlapping([[5, 10], [2, 15], [10, 12]]) ➞ [10, 10]
//
//overlapping([[11, 18], [3, 7], [2, 20], [5, 16]]) ➞ "No overlapping"
//Notes
//Both ends are inclusive for all ranges.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(overlapping([[4, 24], [3, 10], [4, 18]]), [4, 10])
//Test.assertSimilar(overlapping([[4, 9], [8, 22], [8, 24]]), [8, 9])
//Test.assertSimilar(overlapping([[12, 16], [11, 20], [11, 24]]), [12, 16])
//Test.assertSimilar(overlapping([[9, 13], [12, 17], [11, 23], [3, 21]]), [12, 13])
//Test.assertSimilar(overlapping([[5, 9], [7, 8], [2, 11], [2, 12]]), [7, 8])
//Test.assertSimilar(overlapping([[4, 18], [6, 17], [5, 8], [6, 16]]), [6, 8])
//Test.assertEquals(overlapping([[4, 9], [8, 22], [10, 24]]), 'No overlapping')
//Test.assertEquals(overlapping([[9, 11], [12, 17], [11, 23], [3, 21]]), 'No overlapping')
//Test.assertSimilar(overlapping([[4, 24], [24, 25], [4, 30]]), [24, 24])
//​
//// Author : MyName

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Harmonic Series

//tags: algebra,math,numbers

//url: https://edabit.com/challenge/ZhKGjy56E5LYdjreW

//Description:
//In mathematics, the harmonic series is the divergent infinite series:
//
//Its name derives from the concept of overtones, or harmonics in music.
//Create a function that, given a precision parameter n, returns the value of the partial sum of the harmonic series up to n terms.
//Examples
//harmonic(3) ➞ 1.833
//
//harmonic(1) ➞ 1.0
//
//harmonic(5) ➞ 2.283
//Notes
//Round the result to the third decimal place.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(harmonic(10), 2.929)
//Test.assertEquals(harmonic(1), 1)
//Test.assertEquals(harmonic(12345), 9.998)
//Test.assertEquals(harmonic(0), 0)
//Test.assertEquals(harmonic(5000), 9.095)
//Test.assertEquals(harmonic(2), 1.5)

