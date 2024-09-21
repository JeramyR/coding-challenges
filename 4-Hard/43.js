

//title: Amateur Hour

//tags: data_structures,dates,strings

//url: https://edabit.com/challenge/CFszCxtcmqAsgZdw8

//Description:
//Write a function that takes time t1 and time t2 and returns the number of hours passed between the two times.
//Examples
//hoursPassed("3:00 AM", "9:00 AM") ➞ "6 hours"
//
//hoursPassed("2:00 PM", "4:00 PM") ➞ "2 hours"
//
//hoursPassed("1:00 AM", "3:00 PM") ➞ "14 hours"
//Notes
//Time t1 will always be the starting time and t2, the ending time.
//Return the string "no time passed" if t1 is equal to t2.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//let [strVector, resVector] = [
//  [["3:00 AM", "9:00 AM"], ["2:00 PM", "4:00 PM"], ["1:00 AM", "3:00 PM"], ["2:00 AM", "3:00 PM"],
//   ["8:00 AM", "8:00 PM"], ["12:00 AM", "10:00 PM"], ["1:00 AM", "1:00 AM"], ["12:00 PM", "12:00 PM"]],
//  ["6 hours", "2 hours", "14 hours", "13 hours", "12 hours", "22 hours", "no time passed", "no time passed"]
//]
//for (let i in strVector) Test.assertSimilar(hoursPassed(...strVector[i]), resVector[i])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Primes Below a Given Number

//tags: algebra,loops,math,numbers

//url: https://edabit.com/challenge/Rgr2cba4Hp7kt47BW

//Description:
//Create a function that will find all primes below a given number. Return the result as an array.
//Examples
//primesBelowNum(5) ➞ [2, 3, 5]
//
//primesBelowNum(10) ➞ [2, 3, 5, 7]
//
//primesBelowNum(20) ➞ [2, 3, 5, 7, 11, 13, 17, 19]
//Notes
//If n is a prime, include it in the array.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(primesBelowNum(5), [2, 3, 5])
//Test.assertSimilar(primesBelowNum(10), [2, 3, 5, 7])
//Test.assertSimilar(primesBelowNum(20), [2, 3, 5, 7, 11, 13, 17, 19])
//Test.assertSimilar(primesBelowNum(6), [2, 3, 5])
//Test.assertSimilar(primesBelowNum(11), [2, 3, 5, 7, 11])
//Test.assertSimilar(primesBelowNum(21), [2, 3, 5, 7, 11, 13, 17, 19])
//Test.assertSimilar(primesBelowNum(7), [2, 3, 5, 7])
//Test.assertSimilar(primesBelowNum(12), [2, 3, 5, 7, 11])
//Test.assertSimilar(primesBelowNum(22), [2, 3, 5, 7, 11, 13, 17, 19])
//Test.assertSimilar(primesBelowNum(8), [2, 3, 5, 7])
//Test.assertSimilar(primesBelowNum(13), [2, 3, 5, 7, 11, 13])
//Test.assertSimilar(primesBelowNum(23), [2, 3, 5, 7, 11, 13, 17, 19, 23])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Balanced Array

//tags: arrays,conditions,math

//url: https://edabit.com/challenge/NcQg8tCkMecNpjwXc

//Description:
//Given an array of unknown length, but with an even amount of elements (numbers), copy the half with the highest sum of numbers to the other half of the array. If the sum of the first half equals the sum of the second half, return the original array.
//Examples
//balanced([1, 2, 4, 6, 3, 1]) ➞ [6, 3, 1, 6, 3, 1]
//
//balanced([88, 3, 27, 5, 9, 0, 13, 10]) ➞ [88, 3, 27, 5, 88, 3, 27, 5]
//
//balanced([7, 5, 2, 6, 1, 0, 1, 5, 2, 7, 0, 6]) ➞ [7, 5, 2, 6, 1, 0, 1, 5, 2, 7, 0, 6]
//Notes
//Each array has an even amount of elements.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(balanced([1, 2, 4, 6, 3, 1]), [6, 3, 1, 6, 3, 1])
//Test.assertSimilar(balanced([88, 3, 27, 5, 9, 0, 13, 10]), [88, 3, 27, 5, 88, 3, 27, 5])
//Test.assertSimilar(balanced([7, 5, 2, 6, 1, 0, 1, 5, 2, 7, 0, 6]), [7, 5, 2, 6, 1, 0, 1, 5, 2, 7, 0, 6])
//Test.assertSimilar(balanced([0, 1, 1, 1]), [1, 1, 1, 1])
//Test.assertSimilar(balanced([100, 55]), [100, 100])

