

//title: Number Groups

//tags: arrays,numbers

//url: https://edabit.com/challenge/Xz2SWTuwQtnqHGi7d

//Description:
//Given three groups of numbers, return a list containing all numbers that appear in more than one group (in ascending order).
//Examples
//number_groups([7, 8, 7, 3, 4], [2, 9, 1, 2, 1], [5, 6, 6, 6, 5]) ➞ []
//
//number_groups([3, 8, 8, 1, 1], [9, 1, 1, 9, 9], [10, 7, 6, 6, 3]) ➞ [1, 3]
//
//number_groups([4, 10, 9, 2, 2], [5, 3, 7, 3, 8], [6, 2, 9, 4, 2]) ➞ [2, 4, 9]
//
//number_groups([7, 8, 4, 8, 7], [8, 5, 9, 2, 9], [6, 1, 5, 5, 6]) ➞ [5, 8]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(numberGroups([3, 1, 7, 6, 4], [6, 10, 2, 2, 6], [1, 1, 2, 5, 5]), [1, 2, 6])
//Test.assertSimilar(numberGroups([6, 3, 7, 3, 1], [4, 6, 5, 9, 2], [10, 7, 8, 1, 2]), [1, 2, 6, 7])
//Test.assertSimilar(numberGroups([4, 6, 3, 9, 9], [4, 7, 10, 6, 9], [7, 9, 1, 1, 5]), [4, 6, 7, 9])
//Test.assertSimilar(numberGroups([7, 6, 9, 2, 6], [8, 5, 6, 8, 3], [5, 8, 6, 8, 3]), [3, 5, 6, 8])
//Test.assertSimilar(numberGroups([4, 4, 4, 5, 1], [8, 2, 8, 9, 4], [7, 4, 3, 10, 4]), [4])
//Test.assertSimilar(numberGroups([4, 8, 9, 8, 4], [10, 2, 5, 7, 2], [1, 1, 3, 6, 6]), [])
//Test.assertSimilar(numberGroups([7, 10, 7, 1, 4], [6, 2, 1, 8, 5], [9, 4, 9, 9, 3]), [1, 4])
//Test.assertSimilar(numberGroups([4, 3, 3, 5, 9], [6, 9, 6, 6, 1], [10, 5, 7, 10, 7]), [5, 9])
//Test.assertSimilar(numberGroups([3, 4, 9, 1, 10], [2, 9, 6, 8, 5], [6, 9, 10, 1, 7]), [1, 6, 9, 10])
//Test.assertSimilar(numberGroups([4, 7, 2, 5, 9], [6, 10, 2, 2, 10], [9, 9, 2, 9, 9]), [2, 9])
//Test.assertSimilar(numberGroups([7, 10, 4, 8, 2], [3, 8, 1, 9, 4], [6, 1, 5, 8, 6]), [1, 4, 8])
//Test.assertSimilar(numberGroups([10, 1, 10, 10, 3], [7, 6, 8, 7, 4], [7, 7, 7, 2, 10]), [7, 10])
//Test.assertSimilar(numberGroups([7, 7, 6, 8, 3], [3, 3, 10, 3, 10], [5, 7, 2, 2, 10]), [3, 7, 10])
//Test.assertSimilar(numberGroups([5, 9, 9, 9, 5], [8, 6, 1, 1, 1], [3, 7, 2, 2, 6]), [6])
//Test.assertSimilar(numberGroups([2, 8, 10, 2, 10], [8, 9, 4, 6, 8], [6, 5, 4, 1, 10]), [4, 6, 8, 10])
//Test.assertSimilar(numberGroups([1, 5, 3, 3, 5], [9, 5, 10, 8, 10], [4, 6, 1, 6, 10]), [1, 5, 10])
//Test.assertSimilar(numberGroups([2, 6, 5, 4, 4], [8, 4, 8, 7, 8], [6, 8, 8, 3, 5]), [4, 5, 6, 8])
//Test.assertSimilar(numberGroups([8, 8, 9, 3, 8], [5, 1, 10, 6, 1], [2, 7, 7, 4, 2]), [])
//Test.assertSimilar(numberGroups([1, 10, 6, 10, 3], [9, 3, 9, 6, 8], [7, 8, 5, 3, 6]), [3, 6, 8])
//Test.assertSimilar(numberGroups([9, 8, 2, 9, 1], [10, 3, 2, 5, 6], [1, 7, 8, 3, 7]), [1, 2, 3, 8])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Magic Square

//tags: arrays,interview,loops,math

//url: https://edabit.com/challenge/WKTmHynBKz9zBDheR

//Description:
//In recreational mathematics, a square array of numbers, usually positive integers, is called a magic square if the sums of the numbers in each row, each column, and both main diagonals are the same.
//Create a function that takes a square 2D array as an argument and returns a Boolean (if it is: true, if it isn't: false).
//Examples
//isMagicSquare([
//  [2, 7, 6],
//  [9, 5, 1],
//  [4, 3, 8]
//]) ➞ true
//
//isMagicSquare([
//  [16, 3, 2, 13],
//  [5, 10, 11, 8],
//  [9, 6, 7, 12],
//  [4, 15, 14, 1]
//]) ➞ true
//
//isMagicSquare([
//  [1, 14, 14, 4],
//  [11, 7, 6, 9],
//  [8, 11, 10, 5],
//  [13, 2, 3, 15]
//]) ➞ false
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isMagicSquare([[2,7,6],[9,5,1],[4,3,8]]), true)
//Test.assertEquals(isMagicSquare([[2,7,600],[9,5,1],[-94,3,8]]), false)
//Test.assertEquals(isMagicSquare([[2,7,0.5],[9,555,1],[-9,3,8]]), false)
//​
//// Dürer's Melancholia I (1514)
//Test.assertEquals(isMagicSquare([[16,3,2,13],[5,10,11,8],[9,6,7,12],[4,15,14,1]]), true)
//​
//// Magic square in Parshavnath temple
//Test.assertEquals(isMagicSquare([[7,12,1,14],[2,13,8,11],[16,3,10,5],[9,6,15,4]]), true)
//Test.assertEquals(isMagicSquare([[7,12,1,14],[2,13,8,11],[16,3,10,5],[9,6,16,5]]), false)
//​
//// Sagrada Família magic square
//Test.assertEquals(isMagicSquare([[1,14,14,4],[11,7,6,9],[8,10,10,5],[13,2,3,15]]), true)
//Test.assertEquals(isMagicSquare([[1,14,14,4],[11,7,6,9],[8,11,10,5],[13,2,3,15]]), false)
//Test.assertEquals(isMagicSquare([[1,15,4,14],[10,11,5,8],[7,6,12,9],[16,2,13,3]]), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: The Alternating Numbers

//tags: numbers,validation

//url: https://edabit.com/challenge/eo6ThEtkDxYFipQew

//Description:
//In this challenge, you have to establish if an integer num is Alternating. To be Alternating, num must be positive and every digit in its sequence must have a different parity than its next and its previous digit.
//Given an integer num, implement a function that returns true is num is an Alternating number, or false if it's not.
//Examples
//isAlternating(123) ➞ true
//// 1 is odd, 2 is even, 3 is odd
//
//isAlternating(67) ➞ true
//// 6 is even, 7 is odd
//
//isAlternating(2380) ➞ false
//// 2 is even, 3 is odd, 8 is even, 0 is even
//
//isAlternating(75) ➞ false
//// 7 is odd, 5 is odd
//Notes
//A single-digit number is trivially considered Alternating, given the absence of neighboring digits.
//The first digit has to be compared only to its next neighbor, and the last digit has to be compared only to its previous neighbor.
//Every non-positive integer must be treated as false.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isAlternating(123), true, "Example #1")
//Test.assertEquals(isAlternating(67), true, "Example #2")
//Test.assertEquals(isAlternating(2380), false, "Example #3")
//Test.assertEquals(isAlternating(75), false, "Example #4")
//Test.assertEquals(isAlternating(3), true, "Trivially Alternating")
//Test.assertEquals(isAlternating(903), true)
//Test.assertEquals(isAlternating(444), false)
//Test.assertEquals(isAlternating(0), false, "Must be positive")
//Test.assertEquals(isAlternating(14589), true)
//Test.assertEquals(isAlternating(1234566789), false)
//Test.assertEquals(isAlternating(-12), false, "Must be positive")
//Test.assertEquals(isAlternating(10), true)

