

//title: Maximum Possible Total

//tags: arrays,language_fundamentals,sorting

//url: https://edabit.com/challenge/Wg3pBiH8HQggcfaTg

//Description:
//Given an array of 10 numbers, return the maximum possible total made by summing just 5 of the 10 numbers.
//Examples
//maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1]) ➞ 43
//
//maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100]) ➞ 100
//
//maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) ➞ 40
//Notes
//You can select any 5 numbers from the given array to form maximum possible total.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1]), 43)
//Test.assertEquals(maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100]), 100)
//Test.assertEquals(maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 40)
//Test.assertEquals(maxTotal([12, 8, 73, 1, 24, 11, 88, 39, 2, -47]), 236)
//Test.assertEquals(maxTotal([48, 90, 42, -12, 1, -14, -36, -37, -9, -4]), 177)
//Test.assertEquals(maxTotal([-99, -38, -13, -84, 66, 13, -13, -16, 14, 15]), 95)
//Test.assertEquals(maxTotal([60, -70, -53, -4, 53, -66, 10, -7, 56, 89]), 268)
//Test.assertEquals(maxTotal([88, 45, 76, 34, -42, 10, -22, 85, -52, 49]), 343)
//Test.assertEquals(maxTotal([70, -74, 20, -56, -15, 93, -75, 98, 46, 36]), 343)
//Test.assertEquals(maxTotal([-20, -61, 50, 52, 60, -70, 0, 69, 91, -36]), 322)
//Test.assertEquals(maxTotal([31, 75, 78, 76, -51, -8, 17, -23, 34, 100]), 363)
//Test.assertEquals(maxTotal([-79, 85, 55, -5, -86, -72, 31, -68, 13, 1]), 185)
//Test.assertEquals(maxTotal([-93, -79, -26, 53, 74, -55, 68, -36, -6, -94]), 163)
//Test.assertEquals(maxTotal([-100, 21, 22, 65, 19, 2, -11, 3, 24, 73]), 205)
//Test.assertEquals(maxTotal([92, -43, 80, 43, 23, -41, -19, 90, 78, 31]), 383)
//Test.assertEquals(maxTotal([-71, -11, -89, 60, 71, -62, 54, 11, 73, 49]), 307)
//Test.assertEquals(maxTotal([61, -55, 60, -30, 27, 61, -68, -1, -36, -27]), 208)
//Test.assertEquals(maxTotal([67, -44, 40, -75, 27, 71, -59, 4, 45, -91]), 250)
//Test.assertEquals(maxTotal([27, -61, 81, -28, 5, 45, -81, 37, 30, 36]), 229)
//Test.assertEquals(maxTotal([42, 34, -11, -41, -73, 53, 52, 34, 63, -15]), 244)
//Test.assertEquals(maxTotal([-89, 51, -24, -12, 26, 52, -98, -14, -99, 85]), 202)
//Test.assertEquals(maxTotal([-77, 24, 83, -67, -5, 58, -64, 21, 86, 41]), 292)
//Test.assertEquals(maxTotal([-69, 74, -78, 56, -9, -28, 39, 54, -74, 30]), 253)
//Test.assertEquals(maxTotal([70, -25, 78, -58, -49, -42, -77, -52, 93, -37]), 179)
//Test.assertEquals(maxTotal([-30, -29, 32, -60, 84, -13, 67, -77, 94, 64]), 341)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Valid Zip Code

//tags: regex,strings,validation

//url: https://edabit.com/challenge/Ysk5M8XAscc4fqaAi

//Description:
//Zip codes consist of 5 consecutive digits. Given a string, write a function to determine whether the input is a valid zip code. A valid zip code is as follows:
//Must only contain numbers (no non-digits allowed).
//Must not contain any spaces.
//Must not be greater than 5 digits in length.
//Examples
//isValid("59001") ➞ true
//
//isValid("853a7") ➞ false
//
//isValid("732 32") ➞ false
//
//isValid("393939") ➞ false
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isValid("59001"), true)
//Test.assertEquals(isValid("853a7"), false, "No non-digits allowed.")
//Test.assertEquals(isValid("732 32"), false, "No spaces allowed.")
//Test.assertEquals(isValid("788876"), false, "No sequences of length greater than 5.")
//Test.assertEquals(isValid("a923b"), false, "No letters allowed.")
//Test.assertEquals(isValid("5923!"), false, "No non-digits allowed.")
//Test.assertEquals(isValid("59238aa"), false, "No letters and no sequences of length greater than 5.")
//Test.assertEquals(isValid("88231"), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Convert to Decimal Notation

//tags: numbers,strings

//url: https://edabit.com/challenge/4tLabih2cr5Haw7xo

//Description:
//Create a function to convert an array of percentages to their decimal equivalents.
//Examples
//convertToDecimal(["1%", "2%", "3%"]) ➞ [0.01, 0.02, 0.03]
//
//convertToDecimal(["45%", "32%", "97%", "33%"]) ➞ [0.45, 0.32, 0.97, 0.33]
//
//convertToDecimal(["33%", "98.1%", "56.44%", "100%"]) ➞ [0.33, 0.981, 0.5644, 1]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(convertToDecimal(["33%", "98.1%", "56.44%", "100%"]), [0.33, 0.981, 0.5644, 1])
//Test.assertSimilar(convertToDecimal(["45%", "32%", "97%", "33%"]), [0.45, 0.32, 0.97, 0.33])
//Test.assertSimilar(convertToDecimal(["1%", "2%", "3%"]), [0.01, 0.02, 0.03])

