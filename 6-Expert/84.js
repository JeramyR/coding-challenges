

//title: Recursion: Farey Sequence

//tags: arrays,logic,recursion

//url: https://edabit.com/challenge/JXwdqPmX3KTeoGNGi

//Description:
//The Farey sequence of order n is the set of all fractions with a denominator between 1 and n (reduced to its lowest terms and ordered ascendingly). Given an n, write a function that returns the Farey sequence as an array with a string representation of each fraction of the form "numerator/denominator".
//Examples
//farey(1) ➞ ["0/1", "1/1"]
//
//farey(5) ➞ ["0/1", "1/5", "1/4", "1/3", "2/5", "1/2", "3/5", "2/3", "3/4", "4/5", "1/1"]
//
//farey(7) ➞ ["0/1", "1/7", "1/6", "1/5", "1/4", "2/7", "1/3", "2/5", "3/7", "1/2", "4/7", "3/5", "2/3", "5/7", "3/4", "4/5", "5/6", "6/7", "1/1"]
//Notes
//The sequence should always start with "0/1" and end with "1/1".
//It is expected from the challenge-takers to come up with a solution using the concept of recursion or the so-called recursive approach.
//You can read on more topics about recursion (see Resources tab) if you aren't familiar with it yet or hasn't fully understood the concept behind it before taking up this challenge or unless otherwise.
//There will be no exceptions to handle, all inputs are positive integers.
//A recursive approach is prone to Uncaught RangeError or exceededing the maximum call size of the stack.
//Optional: Try to solve this with the least lines of code.
//If you think recursion is fun, you can find a collection of those challenges here.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const recursive = f => (`${f}`.match(RegExp(`${f.name}`,'gm'))||[]).length > +(/function/.test(f))
//Test.assertEquals(recursive(farey), true)
//Test.assertNotEquals(recursive(farey), false, "Recursion is required!")
//​
//let [seq, frac] = [[1, 3, 5, 7, 9, 10, 12, 14, 16], [
//      ['0/1', '1/1'],
//      ['0/1', '1/3', '1/2', '2/3', '1/1'],
//      ['0/1', '1/5', '1/4', '1/3', '2/5', '1/2', '3/5', '2/3', '3/4', '4/5', '1/1'],
//      ['0/1', '1/7', '1/6', '1/5', '1/4', '2/7', '1/3', '2/5', '3/7', '1/2', '4/7', '3/5', '2/3', '5/7', '3/4', '4/5', '5/6', '6/7', '1/1'],
//      ['0/1', '1/9', '1/8', '1/7', '1/6', '1/5', '2/9', '1/4', '2/7', '1/3', '3/8', '2/5', '3/7', '4/9', '1/2', '5/9', '4/7', '3/5', '5/8', '2/3', '5/7', '3/4', '7/9', '4/5', '5/6', '6/7', '7/8', '8/9', '1/1'],
//      ['0/1', '1/10', '1/9', '1/8', '1/7', '1/6', '1/5', '2/9', '1/4', '2/7', '3/10', '1/3', '3/8', '2/5', '3/7', '4/9', '1/2', '5/9', '4/7', '3/5', '5/8', '2/3', '7/10', '5/7', '3/4', '7/9', '4/5', '5/6', '6/7', '7/8', '8/9', '9/10', '1/1'],
//      ['0/1', '1/12', '1/11', '1/10', '1/9', '1/8', '1/7', '1/6', '2/11', '1/5', '2/9', '1/4', '3/11', '2/7', '3/10', '1/3', '4/11', '3/8', '2/5', '5/12', '3/7', '4/9', '5/11', '1/2', '6/11', '5/9', '4/7', '7/12', '3/5', '5/8', '7/11', '2/3', '7/10', '5/7', '8/11', '3/4', '7/9', '4/5', '9/11', '5/6', '6/7', '7/8', '8/9', '9/10', '10/11', '11/12', '1/1'],
//      ['0/1', '1/14', '1/13', '1/12', '1/11', '1/10', '1/9', '1/8', '1/7', '2/13', '1/6', '2/11', '1/5', '3/14', '2/9', '3/13', '1/4', '3/11', '2/7', '3/10', '4/13', '1/3', '5/14', '4/11', '3/8', '5/13', '2/5', '5/12', '3/7', '4/9', '5/11', '6/13', '1/2', '7/13', '6/11', '5/9', '4/7', '7/12', '3/5', '8/13', '5/8', '7/11', '9/14', '2/3', '9/13', '7/10', '5/7', '8/11', '3/4', '10/13', '7/9', '11/14', '4/5', '9/11', '5/6', '11/13', '6/7', '7/8', '8/9', '9/10', '10/11', '11/12', '12/13', '13/14', '1/1'],
//      ['0/1', '1/16', '1/15', '1/14', '1/13', '1/12', '1/11', '1/10', '1/9', '1/8', '2/15', '1/7', '2/13', '1/6', '2/11', '3/16', '1/5', '3/14', '2/9', '3/13', '1/4', '4/15', '3/11', '2/7', '3/10', '4/13', '5/16', '1/3', '5/14', '4/11', '3/8', '5/13', '2/5', '5/12', '3/7', '7/16', '4/9', '5/11', '6/13', '7/15', '1/2', '8/15', '7/13', '6/11', '5/9', '9/16', '4/7', '7/12', '3/5', '8/13', '5/8', '7/11', '9/14', '2/3', '11/16', '9/13', '7/10', '5/7', '8/11', '11/15', '3/4', '10/13', '7/9', '11/14', '4/5', '13/16', '9/11', '5/6', '11/13', '6/7', '13/15', '7/8', '8/9', '9/10', '10/11', '11/12', '12/13', '13/14', '14/15', '15/16', '1/1']
//    ]]
//for (let i in seq) Test.assertSimilar(farey(seq[i]), frac[i])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Happy Numbers & More

//tags: math,numbers

//url: https://edabit.com/challenge/mjQxqBnNjAuvnEon7

//Description:
//A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.
//A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.
//A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself.
//A triangular number counts objects arranged in an equilateral triangle. The nth triangular number is the number of dots in the triangular arrangement with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n.
//Objective
//Create a function that takes a number as an argument and returns a print showing if the number is happy or not, if the number is prime or not, if the number is perfect or not and if the number is triangular or not.
//Examples
//happy(2) ➞
//"2 is an unhappy number.
//2 is a prime number.
//2 is not a perfect number.
//2 is not a triangular number."
//
//
//happy(7) ➞
//"7 is a happy number.
//7 is a prime number.
//7 is not a perfect number.
//7 is not a triangular number."
//
//
//happy(8128) ➞
//"8128 is a happy number.
//8128 is not a prime number.
//8128 is a perfect number.
//8128 is a triangular number."
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(happy(-1), 
//'-1 is an unhappy number.\n' +
//'-1 is not a prime number.\n' +
//'-1 is not a perfect number.\n' +
//'-1 is not a triangular number.')
//​
//Test.assertEquals(happy(0), 
//'0 is an unhappy number.\n' +
//'0 is not a prime number.\n' +
//'0 is not a perfect number.\n' +
//'0 is a triangular number.')
//​
//Test.assertEquals(happy(1), 
//'1 is a happy number.\n' +
//'1 is not a prime number.\n' +
//'1 is not a perfect number.\n' +
//'1 is a triangular number.')
//​
//Test.assertEquals(happy(2), 
//'2 is an unhappy number.\n' +
//'2 is a prime number.\n' +
//'2 is not a perfect number.\n' +
//'2 is not a triangular number.')
//​
//Test.assertEquals(happy(3), 

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Last Digits of a Huge Fibonacci Number

//tags: algebra,algorithms,logic,loops,numbers

//url: https://edabit.com/challenge/vbhnkyRvrzmWCz6cd

//Description:
//Create a function that takes a number n and returns the last four digits of nth Fibonacci number.
//In this challenge, the given number n may be huge (billions or so). Hence an algorithm looping for n iterations will not fit into the allotted time. Therefore you have to find out the algorithm which finds the answer in O(log n) time.
//Examples
//fibonacci(6) ➞ 8
//
//fibonacci(10) ➞ 55
//
//fibonacci(10000000) ➞ 6875
//
//fibonacci(12345678901) ➞ 7401
//Notes
//The Fibonacci numbers are defined as follows:
//f(0) = 0, f(1) = 1, and f(i) = f(i−1) + f(i−2)

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(fibonacci(6), 8)
//Test.assertEquals(fibonacci(10), 55)
//Test.assertEquals(fibonacci(18), 2584)
//Test.assertEquals(fibonacci(50), 9025)
//Test.assertEquals(fibonacci(10000000), 6875)
//Test.assertEquals(fibonacci(12345678901), 7401)

