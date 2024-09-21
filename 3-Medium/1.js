

//title: Tile Teamwork Tactics

//tags: conditions,language_fundamentals,numbers,validation

//url: https://edabit.com/challenge/NHfYRHg2tDtcZyykB

//Description:
//In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided die. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.
//Can you reach your friend's tile number in the next roll? Create a function that takes your position a and your friend's position b and returns a boolean representation of whether it's possible to earn a bonus on any die roll.
//Examples
//possibleBonus(3, 7) ➞ true
//
//possibleBonus(1, 9) ➞ false
//
//possibleBonus(5, 3) ➞ false
//Notes
//You cannot move backward (which is why example #3 doesn't work).
//If you are already on the same tile, return false, as you would be advancing away.
//Expect only positive integer inputs.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(possibleBonus(3, 7), true)
//Test.assertEquals(possibleBonus(0, 6), true)
//Test.assertEquals(possibleBonus(1, 6), true)
//Test.assertEquals(possibleBonus(2, 6), true)
//Test.assertEquals(possibleBonus(3, 6), true)
//Test.assertEquals(possibleBonus(4, 6), true)
//Test.assertEquals(possibleBonus(5, 6), true)
//Test.assertEquals(possibleBonus(6, 6), false)
//Test.assertEquals(possibleBonus(7, 6), false)
//Test.assertEquals(possibleBonus(23, 27), true)
//Test.assertEquals(possibleBonus(1, 9), false)
//Test.assertEquals(possibleBonus(5, 3), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Right Shift by Division

//tags: bit_operations,numbers

//url: https://edabit.com/challenge/ALGbgMWLuEdrh22fB

//Description:
//The right shift operation is similar to floor division by powers of two.
//Sample calculation using the right shift operator ( >> ):
//80 >> 3 = floor(80/2^3) = floor(80/8) = 10
//-24 >> 2 = floor(-24/2^2) = floor(-24/4) = -6
//-5 >> 1 = floor(-5/2^1) = floor(-5/2) = -3
//Write a function that mimics (without the use of >>) the right shift operator and returns the result from the two given integers.
//Examples
//shiftToRight(80, 3) ➞ 10
//
//shiftToRight(-24, 2) ➞ -6
//
//shiftToRight(-5, 1) ➞ -3
//
//shiftToRight(4666, 6) ➞ 72
//
//shiftToRight(3777, 6) ➞ 59
//
//shiftToRight(-512, 10) ➞ -1
//Notes
//There will be no negative values for the second parameter y.
//This challenge is more like recreating of the right shift operation, thus, the use of the operator directly is prohibited.
//Alternatively, you can solve this challenge via recursion.
//A recursive version of this challenge can be found via this link.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const opCheck = f => !`${f}`.match(RegExp('>>', 'gm'))
//Test.assertNotEquals(opCheck(shiftToRight), false,
//    "The use of right shift operator (>>) is prohibited!")
//​
//let [numVector, resVector] = [
//  [[80, 3], [-24, 2], [-5, 1], [38, 0], [192, 4], [4666, 6], [3777, 6], [1024, 5], [-512, 10]],
//  [10, -6, -3, 38, 12, 72, 59, 32, -1]
//]
//for (let i in numVector) Test.assertEquals(shiftToRight(...numVector[i]), resVector[i])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Perimeters with a Catch

//tags: conditions,geometry,logic,math,numbers

//url: https://edabit.com/challenge/WEvqZTFcHeYzFn74c

//Description:
//Write a function that takes a number and returns the perimeter of either a circle or a square. The input will be in the form (letter l, number num) where the letter will be either "s" for square, or "c" for circle, and the number will be the side of the square or the radius of the circle.
//Use the following formulas:
//Perimeter of a square: 4 * side.
//Perimeter of a circle: 6.28 * radius.
//The catch is you can only use arithmetic or comparison operators, which means:
//No if... else statements.
//No objects.
//No arrays.
//No formatting methods, etc.
//The goal is to write a short, branch-free piece of code.
//Examples
//perimeter("s", 7) ➞ 28
//
//perimeter("c", 4) ➞ 25.12
//
//perimeter("c", 9) ➞ 56.52
//Notes
//No rounding is needed.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(perimeter("s", 1), 4)
//Test.assertEquals(perimeter("s", 4), 16)
//Test.assertEquals(perimeter("s", 9), 36)
//Test.assertEquals(perimeter("s", 13), 52)
//Test.assertEquals(perimeter("s", 30), 120)
//Test.assertEquals(perimeter("c", 1), 6.28)
//Test.assertEquals(perimeter("c", 4), 25.12)
//Test.assertEquals(perimeter("c", 9), 56.52)
//Test.assertEquals(perimeter("c", 13), 81.64)
//Test.assertEquals(perimeter("c", 30), 188.4)
//​
//// Author: MyName

