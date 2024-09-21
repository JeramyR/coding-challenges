

//title: Closing in Sum

//tags: algorithms,loops,numbers,recursion

//url: https://edabit.com/challenge/vrHDieytY657gYTcT

//Description:
//Create a function that returns the sum of the digits formed from the first and last digits, all the way to the center of the number.
//Worked Example
//closingInSum(2520) ➞ 72
//
//// The first and last digits are 2 and 0.
//// 2 and 0 form 20.
//// The second digit is 5 and the second to last digit is 2.
//// 5 and 2 form 52.
//
//// 20 + 52 = 72
//Examples
//closingInSum(121) ➞ 13
//// 11 + 2
//
//closingInSum(1039) ➞ 22
//// 19 + 3
//
//closingInSum(22225555) ➞ 100
//// 25 + 25 + 25 + 25
//Notes
//If the number has an odd number of digits, simply add on the single-digit number in the center (see example #1).
//Any number which is zero-padded counts as a single digit (see example #2).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(closingInSum(10710356439481), 205)
//Test.assertEquals(closingInSum(403672023435605), 248)
//Test.assertEquals(closingInSum(121), 13)
//Test.assertEquals(closingInSum(1039), 22)
//Test.assertEquals(closingInSum(22225555), 100)
//Test.assertEquals(closingInSum(2520), 72)
//Test.assertEquals(closingInSum(5332824166496569), 331)
//Test.assertEquals(closingInSum(72314137318116), 237)
//Test.assertEquals(closingInSum(44013947776), 160)
//Test.assertEquals(closingInSum(378842185820), 344)
//Test.assertEquals(closingInSum(288422776554), 294)
//Test.assertEquals(closingInSum(5000275401986), 173)
//Test.assertEquals(closingInSum(600132227071), 139)
//Test.assertEquals(closingInSum(9703929506546), 335)
//Test.assertEquals(closingInSum(5707454878893), 327)
//Test.assertEquals(closingInSum(9057820232020), 319)
//Test.assertEquals(closingInSum(916905437689753), 388)
//Test.assertEquals(closingInSum(4963792985202586), 526)
//Test.assertEquals(closingInSum(923410871280811), 298)
//Test.assertEquals(closingInSum(9769354257577), 427)
//Test.assertEquals(closingInSum(6227181120333), 273)
//Test.assertEquals(closingInSum(1446833112446), 281)
//Test.assertEquals(closingInSum(12211153605642), 156)
//Test.assertEquals(closingInSum(3414146315434510), 283)
//// Author: Joshua Señoron

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Fibonacci Recursion

//tags: math,recursion

//url: https://edabit.com/challenge/Cfe88oSTXyxihiPhu

//Description:
//The Fibonacci sequence is a classic use case for recursive functions since the value of the sequence at a given index is dependent on the last two values. More precisely, it's dependent on the sum of the previous two values.
//Write a function named fib that takes an integer n as its input. It should return the Fibonacci sequence's value at index n.
//Examples
//fib(6) ➞ 8
//// 0 + 1 = 1, 1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8
//
//fib(1) ➞ 1
//
//fib(2) ➞ 1
//Notes
//Assume n will always be a non-negative integer.
//Assume the Fibonacci sequence's first two values (at indices 0 and 1) are 0 and 1.
//You must make fib a recursive function.
//Tips
//You can call a function within itself to get the value a different iteration returns. This is called a "recursive function".
//If you're getting stuck, try looking up the math behind the Fibonacci sequence to see if that inspires you.
//Check the Resources tab for relevant information!

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(fib(0), 0)
//Test.assertEquals(fib(1), 1)
//Test.assertEquals(fib(2), 1)
//Test.assertEquals(fib(3), 2)
//Test.assertEquals(fib(4), 3)
//Test.assertEquals(fib(5), 5)
//Test.assertEquals(fib(6), 8)
//Test.assertEquals(fib(7), 13)
//Test.assertEquals(fib(8), 21)
//Test.assertEquals(fib(9), 34)
//Test.assertEquals(fib(10), 55)
//Test.assertEquals(fib(11), 89)
//Test.assertEquals(fib(12), 144)
//Test.assertEquals(fib(13), 233)
//Test.assertEquals(fib(14), 377)
//Test.assertEquals(fib(15), 610)
//Test.assertEquals(fib(16), 987)
//Test.assertEquals(fib(17), 1597)
//Test.assertEquals(fib(18), 2584)
//Test.assertEquals(fib(19), 4181)
//Test.assertEquals(fib(20), 6765)
//Test.assertEquals(fib(21), 10946)
//Test.assertEquals(fib(22), 17711)
//Test.assertEquals(fib(23), 28657)
//Test.assertEquals(fib(24), 46368)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sort by the Letters

//tags: sorting,strings

//url: https://edabit.com/challenge/HwC7ryWNW6qvc5cN7

//Description:
//Write a function that sorts each string in an array by the letter in alphabetic ascending order (a-z).
//Examples
//sortByLetter(["932c", "832u32", "2344b"])
//➞ ["2344b", "932c", "832u32"]
//
//sortByLetter(["99a", "78b", "c2345", "11d"])
//➞ ["99a", "78b", "c2345", "11d"]
//
//sortByLetter(["572z", "5y5", "304q2"])
//➞ ["304q2", "5y5", "572z"]
//
//sortByLetter([])
//➞ []
//Notes
//Each string will only have one (lowercase) letter.
//If given an empty array, return an empty array.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(sortByLetter(["932c", "832u32", "2344b"]), ["2344b", "932c", "832u32"])
//Test.assertSimilar(sortByLetter(["99a", "78b", "c2345", "11d"]), ["99a", "78b", "c2345", "11d"])
//Test.assertSimilar(sortByLetter(["572z", "5y5", "304q2"]), ["304q2", "5y5", "572z"])
//Test.assertSimilar(sortByLetter([]), [])

