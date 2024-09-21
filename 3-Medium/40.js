

//title: War of Numbers

//tags: arrays,higher_order_functions,loops,numbers

//url: https://edabit.com/challenge/Aofd78q72sAtgCyEY

//Description:
//There's a great war between the even and odd numbers. Many numbers already lost their lives in this war and it's your task to end this. You have to determine which group sums larger: the evens, or the odds. The larger group wins.
//Create a function that takes an array of integers, sums the even and odd numbers separately, then returns the difference between the sum of the even and odd numbers.
//Examples
//warOfNumbers([2, 8, 7, 5]) ➞ 2
//// 2 + 8 = 10
//// 7 + 5 = 12
//// 12 is larger than 10
//// So we return 12 - 10 = 2
//
//warOfNumbers([12, 90, 75]) ➞ 27
//
//warOfNumbers([5, 9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243]) ➞ 168
//Notes
//The given array contains only positive integers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(warOfNumbers([5, 9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243]), 168)
//Test.assertEquals(warOfNumbers([654, 7, 23, 3, 78, 4, 56, 34]), 793)
//Test.assertEquals(warOfNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]), 5)
//Test.assertEquals(warOfNumbers([97 ,83, 209, 141, 134, 298, 110, 207, 229, 275, 115, 64, 244, 278]), 228)
//Test.assertEquals(warOfNumbers([332, 92, 35, 315, 109, 168, 320, 230, 63, 323, 16, 204, 105, 17, 226, 157, 245, 44, 223, 136, 93]), 83)
//Test.assertEquals(warOfNumbers([322, 89, 36, 310, 297, 157, 251, 55, 264, 244, 200, 304, 25, 308, 311, 269, 303, 257, 6, 311, 307, 310, 50, 46, 54, 237, 59, 105, 267]), 846)
//Test.assertEquals(warOfNumbers([50, 100, 149, 1, 200, 199, 3, 2]), 0)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Remove the Letters ABC

//tags: loops,regex,strings

//url: https://edabit.com/challenge/RftQjZs3srJnRBEH8

//Description:
//Create a function that will remove the letters "a", "b" and "c" from the given string and return the modified version. If the given string does not contain "a", "b", or "c", return null.
//Examples
//removeABC("This might be a bit hard") ➞ "This might e  it hrd"
//
//removeABC("hello world!") ➞ null
//
//removeABC("") ➞ null
//Notes
//If the given string does not contain "a", "b", or "c", return null.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(removeABC("This might be a bit hard"), "This might e  it hrd")
//Test.assertEquals(removeABC("This is awesome"), "This is wesome")
//Test.assertEquals(removeABC("hello world!"), null)
//Test.assertEquals(removeABC("coding is fun!"), "oding is fun!")
//Test.assertEquals(removeABC(""), null)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Valid Division

//tags: math,validation

//url: https://edabit.com/challenge/dfFpj2ZBtdy5J5sen

//Description:
//Create a function that takes a division equation d and checks if it will return a whole number without decimals after dividing.
//Examples
//validDivision("6/3") ➞ true
//
//validDivision("30/25") ➞ false
//
//validDivision("0/3") ➞ true
//Notes
//Return "invalid" if division by zero.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(validDivision("6/3"), true)
//Test.assertEquals(validDivision("30/25"), false)
//Test.assertEquals(validDivision("0/3"), true, "0/3 equals 0, 0 is a whole number without decimals")
//Test.assertEquals(validDivision("13/12"), false)
//Test.assertEquals(validDivision("329/329"), true)
//Test.assertEquals(validDivision("0/0"), "invalid")
//Test.assertEquals(validDivision("10/0"), "invalid")
//Test.assertEquals(validDivision("20/5"), true)

