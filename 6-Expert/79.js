

//title: Longest Valid Parentheses

//tags: algorithms,higher_order_functions,logic,regex,strings

//url: https://edabit.com/challenge/HvEGZyCwjSLTT8Z9w

//Description:
//Given a string containing just the characters ( and ), find the length of the longest valid (well-formed) parentheses substring.
//Examples
//longestValidParentheses("(()") ➞ 2
//// Longest valid parentheses substring is "()"
//
//longestValidParentheses(")()())") ➞ 4
//// Longest valid parentheses substring is "()()"
//
//longestValidParentheses("()))))(()())(") ➞ 6
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(longestValidParentheses("(()"), 2)
//Test.assertEquals(longestValidParentheses(")()())"), 4)
//Test.assertEquals(longestValidParentheses(")()())))((())()()())("), 12)
//Test.assertEquals(longestValidParentheses("()))))(()())("), 6)
//Test.assertEquals(longestValidParentheses("()))))(()())(((()()()(((()()))(()("), 8)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sum up Sequence of Numbers

//tags: algorithms,loops,numbers

//url: https://edabit.com/challenge/cLKsxbibXZAYr2cN6

//Description:
//Write a function that computes the sum of k*sign(sin(k*k)) with begin_k <= k <= end_k. Ruby does not have a sign function but it's easy to implement the required logic: 1 if x > 0 else -1, ( sine of natural_num equal to zero only for n=0). Sum of consecutive numbers can be computed by the formula (n1 + n2) * (n2 – n1 + 1) / 2 when all numbers have the same sign.
//The main point of this challenge is that it's hard to predict the sign of sin(k*k) for k. The sum of consecutive numbers between n1 and n2 with the specified sign can be positive or negative, large or small, as illustrated here:
//
//Examples
//sumUp(1, 101) ➞ 65
//
//sumUp(200, 911) ➞ -456
//Notes
//The function must be efficient because the intervals are large (be inventive).
//For comparison, my solution takes 7 seconds to compute all tests, which is still under the server limit of 12 seconds.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(sumUp(1, 101), 65)
//Test.assertEquals(sumUp(200, 911), -456)
//Test.assertEquals(sumUp(1000, 466666), 6857389)
//Test.assertEquals(sumUp(1000000, 9000009), 2384956067)
//Test.assertEquals(sumUp(11000000, 20000222), -42222922897)
//Test.assertEquals(sumUp(19000000, 36530150), 29325971)
//// Author : Evgeny SH

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Password Challenge

//tags: cryptography,logic

//url: https://edabit.com/challenge/5REXcc7iwGrTCspJ4

//Description:
//A certain security system is responsible for maintaining a code capable of generating a key for each respective lock key = code % lock .This security system has a key ( mainKey) and its respective lock( main_lock) that are fixed and serve as a base to update all the others. To maintain security, after a certain lock is accessed 10 times with the wrong key they update its lock value lock = lock + mainKey.
//A hacker was able to steal the main_key and the main_lock but he has no idea what the code is. Write a function that returns how many attempts the hacker needs to be sure he is able to find certain lock key, if that is impossible return "system with a high level of security".
//Will be provided: mainKey, mainLock and lockX (the one you have to find how many attempts to figure the key_x).
//Examples
//hack(1, 2, 8) ➞ 4
//// With only four attempts it is possible to access the lock.
//
//hack(1, 2, 13) ➞ 17
//
//hack(5, 101, 111) ➞ 996
//
//hack(10, 101, 111) ➞ "system with a high level of security"
//Notes
//All the inputs will be positive integers less than 10^6.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(hack(1, 2, 8), 4)
//Test.assertEquals(hack(1, 2, 13), 17)
//Test.assertEquals(hack(5, 101, 111) , 996)
//Test.assertEquals(hack(10, 101, 111), 'system with a high level of security')
//Test.assertEquals(hack(13, 125, 111) , 36)
//Test.assertEquals(hack(13, 125, 34) , 71)
//Test.assertEquals(hack(71, 12345, 354) , 13868)
//Test.assertEquals(hack(72, 12345, 354) , 3382)
//Test.assertEquals(hack(720, 12345, 354) , 'system with a high level of security')
//Test.assertEquals(hack(3, 997, 34) , 3211)
//Test.assertEquals(hack(4, 11, 1) , 1)
//Test.assertEquals(hack(17, 43234, 43233) , 63587)
//Test.assertEquals(hack(1, 6, 57) , 40)

