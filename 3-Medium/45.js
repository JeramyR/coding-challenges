

//title: Lowercase and Uppercase Map

//tags: arrays,language_fundamentals,objects

//url: https://edabit.com/challenge/5Yt2CrYdrJvoJFHRt

//Description:
//Write a function that creates an object with each (key, value) pair being the (lower case, upper case) versions of a letter, respectively.
//Examples
//mapping(["p", "s"]) ➞ { "p": "P", "s": "S" }
//
//mapping(["a", "b", "c"]) ➞ { "a": "A", "b": "B", "c": "C" }
//
//mapping(["a", "v", "y", "z"]) ➞ { "a": "A", "v": "V", "y": "Y", "z": "Z" }
//Notes
//All of the letters in the input list will always be lowercase.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(mapping(["a", "b", "c"]), { a: "A", b: "B", c: "C" })
//Test.assertSimilar(mapping(["p", "s", "t"]), { p: "P", s: "S", t: "T" })
//Test.assertSimilar(mapping(["a", "v", "y", "z"]), { a: "A", v: "V", y: "Y", z: "Z" })

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Parity Bit Validation

//tags: numbers,strings,validation

//url: https://edabit.com/challenge/DG9JudATzAbgBxvhQ

//Description:
//Parity bits are used as very simple checksum to ensure that binary data isn't corrupted during transit. Here's how they work:
//If a binary string has an odd number of 1's, the parity bit is a 1.
//If a binary string has an even number of 1's, the parity bit is a 0.
//The parity bit is appended to the end of the binary string.
//Create a function that validates whether a binary string is valid, using parity bits.
//Worked Example
//validateBinary("10110010") ➞ true
//
//// The last digit is the parity bit.
//// 0 is the last digit.
//// 0 means that there should be an even number of 1's.
//// There are four 1's.
//// Return true.
//Examples
//validateBinary("00101101") ➞ true
//
//validateBinary("11000000") ➞ true
//
//validateBinary("11000001") ➞ false
//Notes
//All inputs will be a byte long (8 characters).
//You can find another parity bit involved challenge via this link.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//let [actualParam, expectedParam] = [
//  [
//    '00101101', '11000000', '11000001', '10010010', '10101101', '11000100',
//    '11000101', '10010110', '10101101', '11001000', '11001001', '10011010',
//  ],
//  [
//    true, true, false, false, false, false, true, true, false, false, true, true,
//  ]
//]
//for (let i in actualParam) Test.assertEquals(validateBinary(actualParam[i]), expectedParam[i])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Find Unique Positive Numbers from Array

//tags: arrays,formatting,loops,numbers

//url: https://edabit.com/challenge/Fx2NdxGzayHpfu8pS

//Description:
//Write a function that takes an array and returns a new array with unique positive (more than 0) numbers.
//Examples
//uniqueArr([-5, 1, -7, -5, -2, 3, 3, -5, -1, -1]) ➞ [1, 3]
//
//uniqueArr([3, -3, -3, 5, 5, -6, -2, -4, -1, 3]) ➞ [3, 5]
//
//uniqueArr([10, 6, -12, 13, 5, 5, 13, 6, 5]) ➞ [10, 6, 13, 5]
//Notes
//Return the elements in the order that they are found in the array.
//Your function should also work for empty arrays.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(uniqueArr([-5, 1, -7, -5, -2, 3, 3, -5, -1, -1]), [1, 3])
//Test.assertSimilar(uniqueArr([3, -3, -3, 5, 5, -6, -2, -4, -1, 3]), [3, 5])
//Test.assertSimilar(uniqueArr([-5, 3, 2, -4, 3, -1, -7, 2, 4, 4]), [3, 2, 4])
//Test.assertSimilar(uniqueArr([3, -5, 0, -5, 2, -1, 0, -4, -6, 1]), [3, 2, 1])
//Test.assertSimilar(uniqueArr([10, 6, -12, 13, 5, 5, 13, 6, 5]), [10, 6, 13, 5])
//Test.assertSimilar(uniqueArr([5, 10, -12, 5, 9, 5, 10, 9, 10, -12]), [5, 10, 9])
//Test.assertSimilar(uniqueArr([]), [])

