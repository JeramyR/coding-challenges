

//title: Divide Two Integers

//tags: math,numbers

//url: https://edabit.com/challenge/yb6eegDh8sCGoiSbR

//Description:
//Given two integers (dividend and divisor), divide two integers without using multiplication, division, and mod operator. Return the quotient after dividing the dividend by divisor.
//The integer division should truncate toward zero, which means losing its fractional part. For example, truncate(8.345) = 8 and truncate(-2.7335) = -2.
//Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−2**31, 2**31 − 1]. For this problem, assume that your function returns end values of the range when the division result overflows.
//Examples
//divide(10, 3) ➞ 3
//
//divide(7, -3) ➞ -2
//
//divide(-2147483648, -1) ➞ 2147483647
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////
// const divide = (numerator, denominator) => {
//     let numer = numerator
//     let denom = denominator
//     let negative = false
//     let multiples = 0

//     if (numerator < 0 && denominator < 0) {
//         denom = -denominator
//         numer = -numerator
//     }
//     else if ((numerator < 0 && denominator > 0)) {
//         numer = -numerator
//         negative = !negative
//     }
//     else if ((numerator > 0 && denominator < 0)) {
//         denom = -denominator
//         negative = !negative
//     }

//     let n = denom

//     while (n <= numer) {
//         n += denom
//         multiples++
//     }

//     return negative ? -multiples : multiples
// }
//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertEquals(divide(10, 3), 3)
// Test.assertEquals(divide(2, 2), 1)
// Test.assertEquals(divide(1, 2), 0)
// Test.assertEquals(divide(7, -3), -2)
// Test.assertEquals(divide(0, 1), 0)
// Test.assertEquals(divide(-1, 1), -1)
// Test.assertEquals(divide(-2147483648, -1), 2147483648)
// Test.assertEquals(divide(-2147483648, 1), -2147483648)
// Test.assertEquals(divide(2147483647, 2), 1073741823)
// Test.assertEquals(divide(-1060849722, 99958928), -10)
// Test.assertEquals(divide(638, 2), 319)
// Test.assertEquals(divide(618, 2), 309)
// Test.assertEquals(divide(2147483647, 3), 715827882)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Helping Alex with Treasure

//tags: algorithms,arrays,data_structures,functional_programming

//url: https://edabit.com/challenge/hXpZeun86vqSvN9Fr

//Description:
//Alex and Cindy, two students who recently spent some time on treasure hunting. Apart from scrap metal, they found a number of boxes full of old coins. Boxes are of different value and now are lined up in a row. Cindy proposes an idea to divide the treasure into two parts. She thinks that a fair way is that she and Alex take turns, and each of them chooses one box from either left or right side of the line. Cindy is a very generous person and lets Alex to go first.
//Alex wants to check whether this idea is actually good for him. He asks you to write a program to calculate the total value that he will get compared to how much Cindy will get if he chooses a box first. You can be sure that they both are very smart, and always select the next box in such way that it leads to the best overall individual solution for them. This means they may not always choose the highest value box of the two currently available in order to ensure they get a higher value box later.
//Examples
//solve([7, 2]) ➞ 5
//// Alex will choose the 7, and then Cindy gets the 2.
//// So the result is 7 ‐ 2 = 5.
//
//solve([2, 7, 3]) ➞ ‐2
//// It doesn't matter whether Alex chooses the 2 or the 3. Cindy will
//// choose the 7 and Alex will get the remaining box. (2+3) ‐ 7 = ‐2.
//
//solve([1000, 1000, 1000, 1000, 1000]) ➞ 1000
//// Since Alex chooses first, he will get 3 boxes and Cindy will get only 2.
//// They all have the same value so (1000+1000+1000) ‐ (1000+1000) = 1000.
//
//solve([823, 912, 345, 100000, 867, 222, 991, 3, 40000]) ➞ ‐58111
//Notes
//Reading sections 5.1, 5.3 and 5.4 of the book "Data Structures and Algorithms in Java" by Michael T. Goodrich, Irvine Roberto Tamassia, and Michael H. Goldwasser (2014) should help you with the solution to this task.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(solve([7, 2]), 5)
//Test.assertEquals(solve([2, 7, 3]), -2)
//Test.assertEquals(solve([1000, 1000, 1000, 1000, 1000]), 1000)
//Test.assertEquals(solve([823, 912, 345, 100000, 867, 222, 991, 3, 40000]), -58111)
//Test.assertEquals(solve([23, 35, 12, 100000, 99234, 86123, 3245]), -83644)
//Test.assertEquals(solve([23, 35, 12, 100000, 99234, 86123, 3245, 1]), 83645)
//Test.assertEquals(solve([7, 7, 7, 7, 7, 7, 80, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]), -66)
//Test.assertEquals(solve([7, 7, 7, 7, 7, 7, 7, 80, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]), 73)
//Test.assertEquals(solve([91, 56, 23, 45, 87, 65, 45, 45, 78, 23, 20, 41, 17, 54, 51, 51, 94, 62, 74, 42, 76, 76]), 96)
//Test.assertEquals(solve([92834, 95461, 15911, 56189, 6369, 80545, 31811, 51263, 30076, 68867, 36905, 32499, 59799, 334, 82991, 46636, 98741, 66601]), 42958)
//Test.assertEquals(solve([129]), 129)
//Test.assertEquals(solve([35463, 88121, 4362, 94457, 86235, 83680, 72686, 6003, 93069, 2015, 10436, 2139, 93162, 30380, 19067, 76335, 78941, 48620, 55887, 15679]), 101879)
//Test.assertEquals(solve([19335, 97643, 11468, 86267, 79718, 59584, 12129, 52642, 86575, 62307, 11545, 52658, 72377, 39986, 74850, 1992, 86928]), 1846)
//Test.assertEquals(solve([91883, 97793, 54567, 64714, 98624]), 82567)
//Test.assertEquals(solve([98473, 41866, 71129, 65936, 42626, 9194, 46718, 96921, 45613, 47677, 8763, 54634, 47259, 71448, 9918, 22666, 32711, 21692, 40207, 2017, 23040, 86083, 77809, 15472, 30718, 39085, 87911, 54827, 41686, 28354, 37203, 6548, 74184, 3043, 43961, 95189, 1238, 22002, 93507, 63546, 32527, 42778, 31614]), -14953)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Hill Cipher

//tags: algorithms,arrays,cryptography,logic,strings

//url: https://edabit.com/challenge/GRtrgMRRWJMk8QW2F

//Description:
//In Hill Cipher, encoding is done by using the input string of a key and a message which are turned into matrices and then back to the encoded message.
//Create a function that takes two arguments, key and message, and returns the encoded message.
//Assign a unique number to each letter of the alphabet.
// a  b  c  d  e  f  g  h  i  j  k  l  m
// 0  1  2  3  4  5  6  7  8  9  10 11 12
// n  o  p  q  r  s  t  u  v  w  x  y  z
// 13 14 15 16 17 18 19 20 21 22 23 24 25
//There are some variations on the rules of encipherment. One version of the cipher rules are outlined below:
//message = "H& *i"
//key = "cats"
//
//hillCipher(message, key) ➞ "OR"
//Step 1: Create a 2 x 2 matrix of the given key (Length of the key will always be = 4). Convert the key row-wise into a 2x2 matrix and substitute the letters with their respective positions on the alphabet i.e., A=0, B=1, C=2 and so on:
//key = "cats"
//
//[[ 2  0]
// [19 18]]
//
//// c = 2, a = 0, t = 19, s = 18
//Step 2: Remove spaces and all characters other than alphabets from the given message:
//"Hi"
//Step 3: Break the message into pairs of two and convert those pairs into 2x1 matrices. If message length is an odd number then just add a Z at the end.
//[[7]
// [8]]
//
//// H = 7, i = 8
//Step 4: Multiply both matrices and find out the modulo of 26 with the resultant matrix:
//[[ 2  0]  *  [[7]  =  [[14]   =  [[14]  mod 26
// [19 18]]     [8]]     [277]]     [17]]
//Step 5: Find out the alphabets at resultant matrix positions :
//eMessage = "OR"
//
//// 14 = O, 17 = "R"
//See the below examples for a better understanding:
//Examples
//hillCipher("H& *i", "cats") ➞ "OR"
//
//hillCipher("mubashir","matt") ➞ "OKMTIHSH"
//
//hillCipher("Five + Seven = Twelve", "math") ➞ "IVSLIGSLAQEECSWR"
//Notes
//The text may contain both uppercase and lowercase alphabets. Standardize them and return the encrypted message in uppercase letters.
//Key length will always be = 4.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(hillCipher("mubashir","matt"), "OKMTIHSH")
//Test.assertEquals(hillCipher("iamSTUPID","nooo"), "AISEHAVKZC")
//Test.assertEquals(hillCipher("PAKIstan","edab"), "IAMIZTNN")
//Test.assertEquals(hillCipher("","azyb"), "")
//Test.assertEquals(hillCipher("mubashir","hele"), "IEHLYSUA")
//Test.assertEquals(hillCipher("mubashir","four"), "CIFUGLSH")
//Test.assertEquals(hillCipher("hello","hill"), "DRJIMN")
//Test.assertEquals(hillCipher("This is a good day","bbaa"), "AAAAAAGACAGAYA")
//Test.assertEquals(hillCipher("Five + Seven = Twelve","math"), "IVSLIGSLAQEECSWR")
//Test.assertEquals(hillCipher("+-*/ &*%^$","azyb"), "")
////Mubashir

