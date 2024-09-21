

//title: Count Syllables

//tags: language_fundamentals,strings

//url: https://edabit.com/challenge/RPBqWjEa7iyo9p54F

//Description:
//Create a function that counts the number of syllables a word has. Each syllable is separated with a dash -.
//Examples
//numberSyllables("buf-fet") ➞ 2
//
//numberSyllables("beau-ti-ful") ➞ 3
//
//numberSyllables("mon-u-men-tal") ➞ 4
//
//numberSyllables("on-o-mat-o-poe-ia") ➞ 6
//Notes
//Don't forget to return the result.
//If you get stuck on a challenge, find help in the Resources tab.
//If you're really stuck, unlock solutions in the Solutions tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(numberSyllables("buf-fet"), 2)
//Test.assertEquals(numberSyllables("beau-ti-ful"), 3)
//Test.assertEquals(numberSyllables("mon-u-men-tal"), 4)
//Test.assertEquals(numberSyllables("on-o-mat-o-poe-ia"), 6)
//Test.assertEquals(numberSyllables("o-ver-ly"), 3)
//Test.assertEquals(numberSyllables("pas-try"), 2)
//Test.assertEquals(numberSyllables("flu-id"), 2)
//Test.assertEquals(numberSyllables("syl-la-ble"), 3)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Not Not Not True

//tags: logic,validation

//url: https://edabit.com/challenge/ootmkgXwJPvnub862

//Description:
//Something which is not true is false, but something which is not not true is true! Create a function where given n number of "not", evaluate whether it's true or false.
//Examples
//notNotNot(1, true) ➞ false
//// Not true
//
//notNotNot(2, false) ➞ false
//// Not not false
//
//notNotNot(6, true) ➞ true
//// Not not not not not not true
//Notes
//Even though this challenge can be easily solved through the use of an if | else block, you might want to solve it through the use of a Boolean Logic Operator or a Bitwise Operator, taking the opportunity to become acquainted with these methods (check the Resources tab to find specific links).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(notNotNot(1, true), false)
//Test.assertEquals(notNotNot(2, false), false)
//Test.assertEquals(notNotNot(7, true), false)
//Test.assertEquals(notNotNot(7, false), true)
//Test.assertEquals(notNotNot(3, true), false)
//Test.assertEquals(notNotNot(13, true), false)
//Test.assertEquals(notNotNot(24, false), false)
//Test.assertEquals(notNotNot(6, false), false)
//​
//// Made by @Joshua Señoron

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: A Circle and Two Squares

//tags: algebra,geometry,math

//url: https://edabit.com/challenge/ApTfL3DXJtyAmiajv

//Description:
//Imagine a circle and two squares: a smaller and a bigger one. For the smaller one, the circle is a circumcircle and for the bigger one, an incircle.
//
//Create a function, that takes an integer (radius of the circle) and returns the difference of the areas of the two squares.
//Examples
//squareAreasDifference(5) ➞ 50
//
//squareAreasDifference(6) ➞ 72
//
//squareAreasDifference(7) ➞ 98
//Notes
//Uses only positive integer parameters.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(squareAreasDifference(5), 50)
//Test.assertEquals(squareAreasDifference(6), 72)
//Test.assertEquals(squareAreasDifference(7), 98)
//Test.assertEquals(squareAreasDifference(17), 578)

