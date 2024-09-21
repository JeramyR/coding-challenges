

//title: Recursion: Inclusive Array Ranges

//tags: arrays,recursion,sorting

//url: https://edabit.com/challenge/v46dEzuJvHKawduxb

//Description:
//Write a function that, given the start startNum and end endNum values, return an array containing all the numbers inclusive to that range. See examples below.
//Examples
//inclusiveArray(1, 5) ➞ [1, 2, 3, 4, 5]
//
//inclusiveArray(2, 8) ➞ [2, 3, 4, 5, 6, 7, 8]
//
//inclusiveArray(10, 20) ➞ [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
//
//inclusiveArray(17, 5) ➞ [17]
//Notes
//The numbers in the array are sorted in ascending order.
//If startNum is greater than endNum, return an array with the higher value. See example #4.
//You are expected to solve this challenge via a recursive approach.
//An iterative version of this challenge can be found via this link.
//A collection of challenges in recursion can be found via this link.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const isRecursive = src => (`${src}`.match(RegExp(`${src.name}`, 'gm'))||[]).length > +(/function/.test(src));
//const isKeywordPresent = (src, kw) => RegExp(`(${kw.join('|')})`, 'gm').test(src);
//​
//let keywords = ["\\bArray", "fill", "from", "of", "reverse"]
//Test.assertNotEquals(isKeywordPresent(inclusiveArray, keywords),
//  true, "The use of these keywords [" + keywords.join(", ") + "] is not allowed!")
//Test.assertNotEquals(isRecursive(inclusiveArray), false, "Recursion is required!")
//​
//let [actual, expected] = [
//  [[1, 5], [2, 8], [10, 20], [17, 5], [40, 50], [1, 41], [24, 17], [11, 66], [9, 3], [6, 16]],
//  [[1, 2, 3, 4, 5],
//  [2, 3, 4, 5, 6, 7, 8],
//  [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
//  [17],
//  [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
//  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41],
//  [24],
//  [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66],
//  [9],
//  [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]]
//]
//for (let i in actual) Test.assertSimilar(inclusiveArray(...actual[i]), expected[i])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Count the Digits

//tags: logic,numbers

//url: https://edabit.com/challenge/bxJH7XXXnX6G5NTxT

//Description:
//Create a function that will count the number of digits of a number. Conversion of the number to a string is not allowed.
//Examples
//digitsCount(4666) ➞ 4
//
//digitsCount(544) ➞ 3
//
//digitsCount(121317) ➞ 6
//
//digitsCount(0) ➞ 1
//
//digitsCount(12345) ➞ 5
//
//digitsCount(1289396387328L) ➞ 13
//Notes
//All inputs are integers but some are in exponential form, deal with it accordingly.
//A recursive version of this challenge can be found via this link.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const noStrConvert = fn => !RegExp('`|String|\'|\"', 'gm').test(fn)
//Test.assertNotEquals(noStrConvert(digitsCount), false, "String manipulation is not allowed.")
//​
//let [actualParam, expectedParam] = [
//  [ 
//    0, 4666, 544, 121317, 12345, 1289396387328, -1232323, 
//    3463463874638476, -231.2e6, 1283939312321, -231273683, 
//    3.2e6, 314890e3 
//  ],
//  [1, 4, 3, 6, 5, 13, 7, 16, 9, 13, 9, 7, 9]
//]
//for (let i in actualParam) Test.assertEquals(digitsCount(actualParam[i]), expectedParam[i])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Flip the Array

//tags: arrays,formatting,loops

//url: https://edabit.com/challenge/wytnq5RFKdMaD9GGM

//Description:
//Create a function that flips a horizontal array into a vertical array, and a vertical array into a horizontal array.
//In other words, take an 1 x n array (1 row + n columns) and flip it into a n x 1 array (n rows and 1 column), and vice versa.
//Examples
//flipArray([1, 2, 3, 4]) ➞ [[1], [2], [3], [4]]
//// Take a horizontal array and flip it vertical.
//
//flipArray([[5], [6], [9]]) ➞ [5, 6, 9]
//// Take a vertical array and flip it horizontal.
//
//flipArray([]) ➞ []
//Notes
//If given an empty array [], return an empty array [].

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(flipArray([1, 2, 3, 4]), [[1], [2], [3], [4]])
//Test.assertSimilar(flipArray([[5], [6], [9]]), [5, 6, 9])
//Test.assertSimilar(flipArray([[7], [8], [9], [55]]), [7, 8, 9, 55])
//Test.assertSimilar(flipArray([7, 8, 9, 55]),[[7], [8], [9], [55]])
//Test.assertSimilar(flipArray([[1], [2]]), [1, 2])
//Test.assertSimilar(flipArray([5, 8]), [[5], [8]])
//Test.assertSimilar(flipArray([2]), [[2]])
//Test.assertSimilar(flipArray([]), [])

