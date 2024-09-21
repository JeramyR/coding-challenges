

//title: Rotate-Transform the Two-Dimensional Matrix

//tags: algorithms,arrays,interview,loops

//url: https://edabit.com/challenge/4nmXZTtvBoNbsEe22

//Description:
//Create a function to rotate a two-dimensional matrix of N * N integer elements num times, where if num is positive, the rotation is clockwise, and if not, counterclockwise.
//Examples
//rotateTransform([
//  [2, 4],
//  [0, 0]
//], 1) ➞ [
//  [0, 2],
//  [0, 4]
//]
//rotateTransform([
//  [2, 4],
//  [0, 0]
//], -1) ➞ [
//  [4, 0],
//  [2, 0]
//]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(rotateTransform([
//  [2, 4],
//  [0, 0]], 1),
//[
//  [0, 2],
//  [0, 4]
//])
//​
//Test.assertSimilar(rotateTransform(
//[
//  [2, 4],
//  [0, 0]], -1),
//[
//  [4, 0],
//  [2, 0]
//])
//​
//Test.assertSimilar(rotateTransform(
//[
//  [1, 4, 0, 0],
//  [2, 8, 0, 0],
//  [0, 0, 3, 5],
//  [0, 0, 7, 1]], 2),
//[
//  [1, 7, 0, 0],

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Symmetrical Patterns

//tags: arrays,loops

//url: https://edabit.com/challenge/3Z26nkfwANCBguJCu

//Description:
//Kathleen owns a beautiful rug store. She likes to group the rugs into 4 mutually exclusive categories.
//imperfect
//horizontally symmetric
//vertically symmetric
//perfect
//An imperfect rug is one that is neither horizontally nor vertically symmetric. Here is an example of an imperfect rug:
//[
//  ["a", "a", "a", "a"],
//  ["a", "a", "a", "a"],
//  ["a", "a", "b", "b"]
//]
//The following is an horizontally symmetric rug. You could "fold" the rug across a hypothetical x-axis, and both sides would be identical. A horizontally symmetric rug is not vertically symmetric (otherwise this rug would be classified as perfect ).
//[
//  ["c", "a", "a", "a"],
//  ["b", "b", "b", "b"],
//  ["c", "a", "a", "a"]
//]
//The following is a vertically symmetric rug. You could "fold" the rug across a hypothetical y-axis, and both sides would be identical. A vertically symmetric is not horizontally symmetric (otherwise this rug would be classified as perfect ).
//[
//  ["a", "b", "a"],
//  ["b", "b", "b"],
//  ["a", "b", "a"],
//  ["a", "b", "a"]
//]
//Finally, a perfect rug is one that is both vertically and horizontally symmetric. That is, folded either length-wise or width-wise will yield two identical pieces.
//[
//  ["a", "b", "b", "a"],
//  ["b", "b", "b", "b"],
//  ["a", "b", "b", "a"]
//]
//Given a rug of m x n dimension, determine whether it is imperfect, horizontally symmetric, vertically symmetric or perfect. Rugs are represented using a two-dimensional array.
//Examples
//classifyRug([
//  ["a", "a"],
//  ["a", "a"]
//]) ➞ "perfect"
//
//classifyRug([
//  ["a", "a", "b"],
//  ["a", "a", "a"],
//  ["b", "a", "a"]
//]) ➞ "imperfect"
//
//classifyRug([
//  ["b", "a"],
//  ["b", "a"]
//]) ➞ "horizontally symmetric"
//
//classifyRug([
//  ["a", "a"],
//  ["b", "b"]
//]) ➞ "vertically symmetric"
//Notes
//You can consider a 1 x n rug as being trivially horizontally symmetric, an n x 1 rug as being trivially vertically symmetric, and a 1 x 1 rug as being trivially perfect.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(classifyRug([
//  ['a', 'a', 'b'],
//  ['a', 'a', 'b']
//]), "horizontally symmetric");
//​
//Test.assertEquals(classifyRug([
//  ['a']
//]), "perfect");
//​
//Test.assertEquals(classifyRug([
//  ['a'],
//  ['b'], 
//  ['a']
//]), "perfect");
//​
//Test.assertEquals(classifyRug([
//  ['a'],
//  ['b'], 
//  ['c']
//]), "vertically symmetric");
//​
//Test.assertEquals(classifyRug([
//  ['a', 'b', 'a']
//]), "perfect");
//​

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Find All Prime Numbers in Decimal Integer

//tags: algorithms,cryptography,math,numbers

//url: https://edabit.com/challenge/JpfNfZCEesy7Nz67i

//Description:
//Create a function that takes an integer argument and returns an array of prime numbers found in the decimal representation of that number (not factors).
//For example, extractPrimes(1717) returns [7, 7, 17, 17, 71].
//The array should be in ascending order. If a prime number appears more than once, every occurrence should be listed. If no prime numbers are found, return an empty array.
//Examples
//extractPrimes(1) ➞ []
//
//extractPrimes(7) ➞ [7]
//
//extractPrimes(73) ➞ [3, 7, 73]
//
//extractPrimes(1313) ➞ [3, 3, 13, 13, 31, 131, 313]
//Notes
//All test cases are positive real integers.
//Some numbers will have leading zeros. For example, the number 103 contains the prime number 3, but also contains 03. These should be treated as the same number, so the result would simply be [3].

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(extractPrimes(1), [])
//Test.assertSimilar(extractPrimes(2), [2])
//Test.assertSimilar(extractPrimes(3), [3])
//Test.assertSimilar(extractPrimes(13), [3, 13])
//Test.assertSimilar(extractPrimes(101), [101])
//Test.assertSimilar(extractPrimes(313), [3, 3, 13, 31, 313])
//Test.assertSimilar(extractPrimes(10234), [2, 3, 23])

