

//title: Validate Credit Card Number

//tags: numbers,validation

//url: https://edabit.com/challenge/ceEEZioNmxuMJFMxi

//Description:
//Create a function that takes a number as an argument and returns true if the number is a valid credit card number, false otherwise.
//Credit card numbers must be between 14-19 digits in length, and pass the Luhn test, described below:
//Remove the last digit (this is the "check digit").
//Reverse the number.
//Double the value of each digit in odd-numbered positions. If the doubled value has more than 1 digit, add the digits together (e.g. 8 x 2 = 16 ➞ 1 + 6 = 7).
//Add all digits.
//Subtract the last digit of the sum (from step 4) from 10. The result should be equal to the check digit from step 1.
//Examples
//validateCard(1234567890123456) ➞ false
//
//// Step 1: check digit = 6, num = 123456789012345
//// Step 2: num reversed = 543210987654321
//// Step 3: digit array after selective doubling: [1, 4, 6, 2, 2, 0, 9, 8, 5, 6, 1, 4, 6, 2, 2]
//// Step 4: sum = 58
//// Step 5: 10 - 8 = 2 (not equal to 6) ➞ false
//
//validateCard(1234567890123452) ➞ true
//
//// Same as above, but check digit checks out.
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(validateCard(79927398714), false)
//Test.assertEquals(validateCard(79927398713), false, 'Passes Luhn test, but too short.')
//Test.assertEquals(validateCard(709092739800713), true)
//Test.assertEquals(validateCard(1234567890123456), false)
//Test.assertEquals(validateCard(12345678901237), true)
//Test.assertEquals(validateCard(5496683867445267), true)
//Test.assertEquals(validateCard(4508793361140566), false)
//Test.assertEquals(validateCard(376785877526048), true)
//Test.assertEquals(validateCard(36717601781975), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Javelin Parabolic Throw

//tags: math,physics

//url: https://edabit.com/challenge/8mSYeF49nHhxoT2Yw

//Description:
//Write a function that takes initial speed (v in m/s) and throw angle (a in degrees) and returns the maximum height and maximum range reached by javelin as a string.
//Examples
//javelinThrow(36.7, 45) ➞ "Ymax=34m, Xmax=137m"
//
//javelinThrow(51.3, 20) ➞ "Ymax=16m, Xmax=172m"
//
//javelinThrow(100.1, 89) ➞ "Ymax=511m, Xmax=36m"
//Notes
//Javelin starts moving at h=0m.
//Gravitational acceleration is g=9.81 m/s^2.
//All results should be rounded to the nearest whole number.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(javelinThrow(100.0, 37), "Ymax=185m, Xmax=980m")
//Test.assertEquals(javelinThrow(36.7, 45), "Ymax=34m, Xmax=137m")
//Test.assertEquals(javelinThrow(51.3, 20), "Ymax=16m, Xmax=172m")
//Test.assertEquals(javelinThrow(11.1, 25), "Ymax=1m, Xmax=10m")
//Test.assertEquals(javelinThrow(75.5, 40), "Ymax=120m, Xmax=572m")
//Test.assertEquals(javelinThrow(250.0, 42), "Ymax=1426m, Xmax=6336m")
//Test.assertEquals(javelinThrow(100.1, 89), "Ymax=511m, Xmax=36m")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Euler`s Phi Function

//tags: algorithms,higher_order_functions,math,numbers

//url: https://edabit.com/challenge/JDgeyZ9gxNty7Y5re

//Description:
//The Euler's phi function (from the Greek letter φ, also called Euler's totient function) counts the positive integers that are coprime of a given number n, from 1 to n - 1. Two numbers are coprime when their greater common divisor is equal to 1. Look at the example below.
//divisors of 6 ➞ [1, 2, 3, 6]
//
//divisors of 5 ➞ [1, 5] ➞ g.c.d. = 1
//divisors of 4 ➞ [1, 2, 4] ➞ g.c.d. = 2
//divisors of 3 ➞ [1, 3] ➞ g.c.d. = 3
//divisors of 2 ➞ [1, 2] ➞ g.c.d. = 2
//divisors of 1 ➞ [1] ➞ g.c.d. = 1
//
//1 and 5 are coprime of 6 ➞ phi(6) = 2
//Implement a phi function that returns the count of coprime integers of a given positive integer n.
//Examples
//phi(1) ➞ 1
//
//phi(3) ➞ 2
//
//phi(8) ➞ 4
//Notes
//1 is trivially coprime of every number.
//You can also proceed to obtain prime factors of an integer instead of all its positive divisors, just remember that 1 is present in any case despite is not prime.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(phi(1), 1)
//Test.assertEquals(phi(3), 2)
//Test.assertEquals(phi(9), 6)
//Test.assertEquals(phi(19), 18)
//Test.assertEquals(phi(33), 20)
//Test.assertEquals(phi(51), 32)
//Test.assertEquals(phi(54), 18)
//Test.assertEquals(phi(86), 42)
//Test.assertEquals(phi(144), 48)
//Test.assertEquals(phi(209), 180)
//Test.assertEquals(phi(666), 216)
//Test.assertEquals(phi(1000), 400)

