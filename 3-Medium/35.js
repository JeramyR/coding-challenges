

//title: Even or Odd Number of Factors

//tags: logic,math,validation

//url: https://edabit.com/challenge/uGKSYufSxtBErTrhd

//Description:
//Create a function that returns "even" if a number has an even number of factors and "odd" if a number has an odd number of factors.
//Examples
//factorGroup(33) ➞ "even"
//
//factorGroup(36) ➞ "odd"
//
//factorGroup(7) ➞ "even"
//Notes
//You don't need to actually calculate the factors to solve this problem.
//Think about why a number would have an odd number of factors.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(factorGroup(33), "even")
//Test.assertEquals(factorGroup(36), "odd")
//Test.assertEquals(factorGroup(7), "even")
//Test.assertEquals(factorGroup(1), "odd")
//Test.assertEquals(factorGroup(19), "even")
//Test.assertEquals(factorGroup(27), "even")
//Test.assertEquals(factorGroup(100), "odd")
//Test.assertEquals(factorGroup(18), "even")
//Test.assertEquals(factorGroup(16), "odd")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: How Many Rectangles?

//tags: algorithms,math,numbers

//url: https://edabit.com/challenge/fgjtbbeZSy55ftXwa

//Description:
//Let there be a square matrix, where each square is a rectangle, and a combination of more squares are also rectangles. To find the number of rectangles, Pete sat down and started counting... but that's highly inefficient.
//Create a function that takes the order of the matrix as input and returns the number of rectangles in them.
//Examples
//rectangles(1) ➞ 1
//
//rectangles(2) ➞ 9
//
//rectangles(3) ➞ 36
//Notes
//The input will always be an integer.
//Number of rectangles are given by: ((n(n+1))/2)^2
//Watch the video listed in the Resources tab to get three different formulas.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(rectangles(64), 4326400)
//Test.assertEquals(rectangles(76), 8561476)
//Test.assertEquals(rectangles(10), 3025)
//Test.assertEquals(rectangles(79), 9985600)
//Test.assertEquals(rectangles(84), 12744900)
//Test.assertEquals(rectangles(0), 0)
//Test.assertEquals(rectangles(60), 3348900)
//Test.assertEquals(rectangles(29), 189225)
//Test.assertEquals(rectangles(18), 29241)
//Test.assertEquals(rectangles(74), 7700625)
//Test.assertEquals(rectangles(16), 18496)
//Test.assertEquals(rectangles(64), 4326400)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sastry Numbers

//tags: algorithms,math,numbers,validation

//url: https://edabit.com/challenge/KjSae7LTFzYTC256A

//Description:
//In this challenge, you have to establish if a given integer n is a Sastry number. If the number resulting from the concatenation of an integer n with its successor is a perfect square, then n is a Sastry Number.
//Given a positive integer n, implement a function that returns true if n is a Sastry number, or false if it's not.
//Examples
//isSastry(183) ➞ true
//// Concatenation of n and its successor = 183184
//// 183184 is a perfect square (428 ^ 2)
//
//isSastry(184) ➞ false
//// Concatenation of n and its successor = 184185
//// 184185 is not a perfect square
//
//isSastry(106755) ➞ true
//// Concatenation of n and its successor = 106755106756
//// 106755106756 is a perfect square (326734 ^ 2)
//Notes
//A perfect square is a number with a square root equals to a whole integer.
//You can expect only valid positive integers greater than 0 as input, without exceptions to handle. Zero is a perfect square, but the concatenation 00 isn't considered as a valid result to check.
//In JavaScript, despite the specific challenge the results are proofed, the method used to calculate if an integer greater of 2 ** 53 - 1 is a Sastry number can lead to errors due to the approximation of the JS engine.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isSastry(183), true, "Example #1")
//Test.assertEquals(isSastry(184), false, "Example #2")
//Test.assertEquals(isSastry(106755), true, "Example #3")
//Test.assertEquals(isSastry(129987253440921), false)
//Test.assertEquals(isSastry(157175907513603), true)
//Test.assertEquals(isSastry(206611570247935), true)
//Test.assertEquals(isSastry(338752188230098), false)
//Test.assertEquals(isSastry(433610247875715), true)
//Test.assertEquals(isSastry(652333983478884), false)
//Test.assertEquals(isSastry(718717107443715), true)
//Test.assertEquals(isSastry(752199872453889), false)
//Test.assertEquals(isSastry(786704531939448), true)

