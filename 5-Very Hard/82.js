

//title: Splitting Up Numbers

//tags: arrays,numbers

//url: https://edabit.com/challenge/TRemcJejARnQyd5xr

//Description:
//Create a function that takes a number num and returns each place value in the number.
//Examples
//numSplit(39) ➞ [30, 9]
//
//numSplit(-434) ➞ [-400, -30, -4]
//
//numSplit(100) ➞ [100, 0, 0]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(numSplit(39), [30, 9])
//Test.assertSimilar(numSplit(-434), [-400, -30, -4])
//Test.assertSimilar(numSplit(100), [100, 0, 0])
//Test.assertSimilar(numSplit(3929), [3000, 900, 20, 9])
//Test.assertSimilar(numSplit(10293), [10000, 0, 200, 90, 3])
//Test.assertSimilar(numSplit(900), [900, 0, 0])
//Test.assertSimilar(numSplit(-100), [-100, 0, 0])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: The Smiths

//tags: higher_order_functions,loops,math,numbers

//url: https://edabit.com/challenge/4CLzLRAiuxepwfL5X

//Description:
//In numbers theory, a positive composite integer is a Smith number if its digital root is equal to the digital root of the sum of its prime factors, with factors being counted by multiplicity. Trivially, every prime is also a Smith number, having just one prime factor that is equal to itself. If two Smith numbers are consecutive in the integer series, then they are Smith brothers. Any other number will not be a Smith.
//Given a positive integer number, implement a function that returns:
//"Youngest Smith" if the given number is the lower element of a couple of Smith brothers.
//"Oldest Smith" if the given number is the higher element of a couple of Smith brothers.
//"Single Smith" if the given number is a Smith number without another Smith number adjacent, lower or higher.
//"Trivial Smith" if the given number is a prime.
//"Not a Smith" if the given number is not a Smith number.
//Examples
//smithType(22) ➞ "Single Smith"
//// Digital root of 22 = 2 + 2 = 4
//// Sum of prime factors of 22 = 2 + 11 = 13
//// Digital root of 13 = 1 + 3 = 4
//// Is a Smith  number without a brother
//
//smithType(7) ➞ "Trivial Smith"
//// The given number is a prime
//
//smithType(728) ➞ "Youngest Smith"
//// Digital root of 728 = 7 + 2 + 8 = 17 = 1 + 7 = 8
//// Sum of prime factors of 728 = 2 + 2 + 2 + 7 + 13 = 26
//// Digital root of 26 = 2 + 6 = 8
//// The number 729 is a Smith number, so 728 is the youngest brother  
//
//smithType(6) ➞ "Not a Smith"
//// Digital root of 6 = 6
//// Sum of prime factors of 6 = 2 + 3 = 5
//// Digital root of 5 = 5
//Notes
//The prime factors are counted by multiplicity, they don't have to be unique (see example #3).
//Two Smith numbers are brothers if they are adjacent and if they are composite, a Trivial Smith (a prime) can't be the brother of a Smith number! Look at example #1: 22 is a Single Smith, despite the next one, 23 (a prime), being a Trivial Smith.
//The digital root is the reiterated sum of the digits of a number until a single digit is reached. You can find more info in the Resources tab.
//All given integers will be greater than zero.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(smithType(22), "Single Smith", "Example #1")
//Test.assertEquals(smithType(7), "Trivial Smith", "Example #2")
//Test.assertEquals(smithType(728), "Youngest Smith", "Example #3")
//Test.assertEquals(smithType(6), "Not a Smith", "Example #4")
//Test.assertEquals(smithType(729), "Oldest Smith")
//Test.assertEquals(smithType(1), "Not a Smith")
//Test.assertEquals(smithType(58), "Single Smith")
//Test.assertEquals(smithType(8), "Not a Smith")
//Test.assertEquals(smithType(666), "Single Smith")
//Test.assertEquals(smithType(2965), "Oldest Smith")
//Test.assertEquals(smithType(2963), "Trivial Smith")
//Test.assertEquals(smithType(2964), "Youngest Smith")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Group Monotonicity

//tags: algorithms,math

//url: https://edabit.com/challenge/RPfHDE8xNuDu8Te3F

//Description:
//Create a function which returns the indices where the monotonicity of a 1-D array changes. If there are none, return an empty array. A monotonic array is one that is either non-increasing or non-decreasing.
//Examples
//groupMonotonic([0, 1]) ➞ []
//
//groupMonotonic([0, 2, 1]) ➞ [1]
//
//groupMonotonic([0, 1, 1, 0]) ➞ [2]
//Notes
//Trivially, all points and line-segments are monotonic (see example #1).
//Return the indices where each monotonic section stops, not where each new one begins: i.e. return the "peaks" of the triangles (see example #2).
//Monotonic arrays are allowed to be constant (see example #3).
//You can expect positive and negative values in the array.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(groupMonotonic([]), [])
//Test.assertSimilar(groupMonotonic([0]), [])
//Test.assertSimilar(groupMonotonic([1]), [])
//Test.assertSimilar(groupMonotonic([0, 1]), [])
//Test.assertSimilar(groupMonotonic([1, 0]), [])
//Test.assertSimilar(groupMonotonic([1, 1]), [])
//Test.assertSimilar(groupMonotonic([0, 1, 2]), [])
//Test.assertSimilar(groupMonotonic([2, 1, 0]), [])
//Test.assertSimilar(groupMonotonic([0, 2, 1]), [1])
//Test.assertSimilar(groupMonotonic([1, 0, 2]), [1])
//Test.assertSimilar(groupMonotonic([0, 1, 1, 0]), [2])
//Test.assertSimilar(groupMonotonic([1, 2, 3, 4, 4, 4, 3, 2, 1]), [5])
//Test.assertSimilar(groupMonotonic([0, 6, 10, 9, 3, -3, -9, -10, -6, 0]), [2, 7])

