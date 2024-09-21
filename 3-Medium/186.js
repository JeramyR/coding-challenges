

//title: A Simple Pair

//tags: algebra,interview,math,numbers

//url: https://edabit.com/challenge/ZRTs8xSSsiurhHLEo

//Description:
//Mubashir needs your help to write a simple algorithm of multiplication.
//Given an array of integers arr and an integer n, find out a pair of numbers [x, y] from a given array such that x * y = n .
//If the pair is not found, return null.
//Examples
//simplePair([1, 2, 3], 3) ➞ [1, 3]
//
//simplePair([1, 2, 3], 6) ➞ [2, 3]
//
//simplePair([1, 2, 3], 9) ➞ null
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(simplePair([1, 2, 3], 3), [1, 3])
//Test.assertSimilar(simplePair([1, 2, 3], 6), [2, 3])
//Test.assertSimilar(simplePair([1, 2, 3], 7), null)
//Test.assertSimilar(simplePair([1, 2, 3, 6], 6), [1, 6])
//Test.assertSimilar(simplePair([1, 2, 3, 4, 5, 6], 15), [3, 5])
//Test.assertSimilar(simplePair([0, 0, 2], 4), null)
//Test.assertSimilar(simplePair([0, 0, 2, 2], 4), [2, 2])
//Test.assertSimilar(simplePair([-3, -2, -2, -1, 0, 1, 2, 3, 4], 4), [-2, -2])
//Test.assertSimilar(simplePair([-3, -2, -2, -1, 0, 1, 2, 3, 4], 0), [-3, 0])
//Test.assertSimilar(simplePair([-3, -2, -1, 0, 1, 2, 3, 4], 4), [1, 4])
//// Mubashir

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Logarithms - Basic

//tags: algebra,math,numbers

//url: https://edabit.com/challenge/c8rmXATWCsZfxxCtc

//Description:
//A logarithm is kind of like reverse exponents. There is a base and a number in a logarithm. The point of a logarithm is to find out what power you have to raise the base to get the number next to the base. For example:
//log base 5 of 25 = x
//This is the same thing as saying 5 to the xth power is 25, which is 2 (so x would be 2). Using this example, your function must take the 5 and 25 and somehow get 2.
//Examples
//logarithm(5, 25) ➞ 2
//
//logarithm(2, 64) ➞ 6
//
//logarithm(2, 4) ➞ 2
//Notes
//All inputs and their associated outputs are integers.
//Return "Invalid" for inputs outside of domain.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(logarithm(7, 49), 2)
//Test.assertEquals(logarithm(12, 144), 2)
//Test.assertEquals(logarithm(2, 4), 2)
//Test.assertEquals(logarithm(7, 49), 2)
//Test.assertEquals(logarithm(5, 9765625), 10)
//Test.assertEquals(logarithm(1, "Hi,".length), "Invalid")
//Test.assertEquals(logarithm(0, "How".length), "Invalid")
//Test.assertEquals(logarithm(-1, "Are".length), "Invalid")
//Test.assertEquals(logarithm("you".length, 0), "Invalid")
//Test.assertEquals(logarithm("doing".length, -1), "Invalid")
//Test.assertEquals(logarithm("today?".length, -15), "Invalid")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Be Your Own Minifier

//tags: algorithms,formatting,loops,math

//url: https://edabit.com/challenge/p3BszuKFN8wDcpPgF

//Description:
//Your boss has demanded you write a function to determine whether a given number n is prime or not. But there's a catch! The Blueberry Cæk™ you're using is a (rather extreme) discount model, and only has code storage space for a single line of code, and no more than the length of an old Tweet (140 characters).
//Can you still make a working function?
//(Re-)write the function isPrime() so that:
//It works! It must correctly return true or false depending on whether the number provided is prime or not.
//It takes up only a single line of code.
//It uses no more than 140 characters.
//Notes:
//For the sake of this test, all numbers will be integers larger than 2. This is done so you won't need specific edge cases to deal with the weird cases of 2, which is prime, despite being even, and 1, which is not prime, despite fitting the "divisible only by 1 and itself" criterion.
//Bonus: can you get the function to run in O(√n) time (instead of O(n))? (Note: You won't actually receive any bonus points for this)

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const fs = require('fs'),
//      sol = fs.readFileSync('solution.txt','utf-8'),
//      lines = sol.split(/[\n\r]/g).length,
//      len = sol.length;
//​
//console.log('Line Count:')
//Test.assertEquals(lines,1,'You can only use a single line!')
//​
//console.log('Character Count')
//Test.assertEquals(len<=140,true,'Your code must be fewer than 140 characters in length!')
//​
//const cands = [{num:4,ex:false},{num:7,ex:true},{num:21,ex:false},{num:23,ex:true},{num:453,ex:false},{num:456,ex:false},{num:457,ex:true}];
//cands.forEach(cand=>{
//  Test.assertEquals(isPrime(cand.num),cand.ex,`Wrong answer! ${cand.num} ${cand.ex?'is':'is not'} prime!`)
//});

