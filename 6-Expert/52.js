

//title: Truncatable Primes

//tags: loops,math,numbers

//url: https://edabit.com/challenge/ATybdGTuRuHAjwnyf

//Description:
//A left-truncatable prime is a prime number that contains no 0 digits and, when the first digit is successively removed, the result is always prime.
//A right-truncatable prime is a prime number that contains no 0 digits and, when the last digit is successively removed, the result is always prime.
//Create a function that takes an integer as an argument and:
//If the integer is only a left-truncatable prime, return "left".
//If the integer is only a right-truncatable prime, return "right".
//If the integer is both, return "both".
//Otherwise, return false.
//Examples
//truncatable(9137) ➞ "left"
//// Because 9137, 137, 37 and 7 are all prime.
//
//truncatable(5939) ➞ "right"
//// Because 5939, 593, 59 and 5 are all prime.
//
//truncatable(317) ➞ "both"
//// Because 317, 17 and 7 are all prime and 317, 31 and 3 are all prime.
//
//truncatable(5) ➞ "both"
//// The trivial case of single-digit primes is treated as truncatable from both directions.
//
//truncatable(139) ➞ false
//// 1 and 9 are non-prime, so 139 cannot be truncatable from either direction.
//
//truncatable(103) ➞ false
//// Because it contains a 0 digit (even though 103 and 3 are primes).
//Notes
//The input integers will not exceed 10^6.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(truncatable(47), "left")
//Test.assertEquals(truncatable(347), "left")
//Test.assertEquals(truncatable(62383), "left")
//Test.assertEquals(truncatable(79), "right")
//Test.assertEquals(truncatable(7331), "right")
//Test.assertEquals(truncatable(233993), "right")
//Test.assertEquals(truncatable(3797), "both")
//Test.assertEquals(truncatable(739397), "both")
//Test.assertEquals(truncatable(5), "both", "single-digit number treated as both")
//Test.assertEquals(truncatable(349), false)
//Test.assertEquals(truncatable(2317), false, "the starting number is composite")
//Test.assertEquals(truncatable(131), false, "1 is not a prime")
//Test.assertEquals(truncatable(6043), false, "cannot contain a 0 digit")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Chain Reaction (Part #2)

//tags: arrays,games

//url: https://edabit.com/challenge/NnK7XKRomETbNszXx

//Description:
//This is a sequel to Chain Reaction (Part #1), with the same setup, but a different flavor.
//As in the previous part, you will be given a rectangular array representing a "map" with three types of spaces:
//"+" bombs: when activated, their explosion activates any bombs directly above, below, left, or right of the "+" bomb.
//"x" bombs: when activated, their explosion activates any bombs placed in any of the four diagonal directions next to the "x" bomb.
//Empty spaces "0".
//The goal is simple: given a map, return the minimum number of bombs that need to be set off for all bombs to be destroyed by the chain reaction.
//Let's look at some examples:
//[
//  ["+", "+", "+", "0", "+", "+", "+"],
//  ["+", "+", "+", "0", "0", "+", "+"]
//]
//For the map above, the answer is 2; to explode all bombs you just need to set off one "+" bomb in the right cluster and one in the left cluster.
//[
//  ["x", "0", "x"],
//  ["x", "x", "x"]
//]
//For the map above, the answer is 3; clearly setting off the three bottom "x" bombs is enough, and no less than three bombs suffice.
//[
//  ["x", "x", "x", "0", "x"],
//  ["x", "x", "x", "x", "x"],
//  ["x", "x", "x", "0", "x"]
//]
//For the map above, the answer is 3; setting off the three rightmost bombs in the middle row will do the trick.
//Examples
//minBombsNeeded([
//  ["+", "+", "+", "0", "+", "+", "+"],
//  ["+", "+", "+", "0", "0", "+", "+"]
//]) ➞ 2
//
//minBombsNeeded([
//  ["x", "0", "x"],
//  ["x", "x", "x"]
//]) ➞ 3
//
//minBombsNeeded([
//  ["x", "x", "x", "0", "x"],
//  ["x", "x", "x", "x", "x"],
//  ["x", "x", "x", "0", "x"]
//]) ➞ 3
//Notes
//Note that both "+" and "x" bombs have an "explosion range" of 1.
//To limit the difficulty, in this challenge each map will have only "+" or only "x" bombs. The more challenging case of maps with both "+" and "x" bombs will be part 3!
//Figuring out what to do is half the fun, but if you'd prefer to just handle the coding, a hint on to how to attack this challenge can be found in the comments.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(minBombsNeeded(
//[['+', '0', '+'],
// ['+', '+', '+']])
//, 1)
//​
//Test.assertEquals(minBombsNeeded(
//[['+', '+', '+', '0', '+', '+', '+'],
// ['+', '+', '+', '0', '0', '+', '+']])
//, 2)
//​
//Test.assertEquals(minBombsNeeded(
//[['0', '+', '+', '0', '+'],
// ['+', '0', '+', '+', '0'],
// ['+', '+', '0', '0', '+']])
//, 4)
//​
//Test.assertEquals(minBombsNeeded(
//[['+', '+', '0', '+', '+'],
// ['+', '0', '+', '0', '+'],
// ['0', '+', '+', '+', '0'],
// ['+', '0', '+', '0', '+'],
// ['+', '+', '0', '+', '+']])
//, 5)
//​
//Test.assertEquals(minBombsNeeded(

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Parabolic Jumps

//tags: math,numbers

//url: https://edabit.com/challenge/NnxmnCrPEwTq4cact

//Description:
//When a bug jumps to a height y, its position can be plotted as a quadratic function with x as the time, and y as the vertical distance traveled. For example, for a bug that jumps 9 cm up and is back on the ground after 6 seconds, its trajectory can be plotted as:
//
//Create a function that, given the max height of a vertical jump in cm and the current time in milliseconds, returns the current position of the bug rounded to two decimal places, and its direction ("up" or "down"). If the bug is already back on the ground, return 0 for the position and "None" for the direction.
//Examples
//bugJump(9, 1000) ➞ [5, "up"]
//
//bugJump(9, 4000) ➞ [8, "down"]
//
//bugJump(9, 5500) ➞ [2.75, "down"]
//
//bugJump(9, 7000) ➞ [0, "None"]
//Notes
//Time and position both start at 0.
//You only need to translate the parabola (you don't need to scale it).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(bugJump(9,1000), [5, "up"])
//Test.assertSimilar(bugJump(9,4000), [8, "down"])
//Test.assertSimilar(bugJump(9,5500), [2.75, "down"])
//Test.assertSimilar(bugJump(9, 7000), [0, "None"])
//Test.assertSimilar(bugJump(5,2230), [5, "up"])
//Test.assertSimilar(bugJump(5,2240), [5, "down"])
//Test.assertSimilar(bugJump(18,8485), [0, "down"])
//Test.assertSimilar(bugJump(18,8490), [0, "None"])
//Test.assertSimilar(bugJump(12,1500), [8.14, "up"])
//Test.assertSimilar(bugJump(3,2650), [2.16, "down"])

