

//title: Playing RisiKo!

//tags: arrays,data_structures,games,sorting

//url: https://edabit.com/challenge/DzZfKGHEF8jWMNYXq

//Description:
//In a game of RisiKo! (the Italian version of the popular board game Risk!), the players throw six-sided dice to conquer territories around a World map.
//When two players contend a territory there is a battle, and they throw from 1 up to 3 dice, with each die being an army sent to fight. To establish who loses armies after the battle, the dice are compared starting from the highest value, and proceeding with the comparisons in descending order (eliminating the dice in excess if the amount of thrown dice among the two players is different).
//When the rolls are compared, for each comparison the die of the attacking player must have a greater value than the defender's die to win the fight. In the case of a tie, the defender wins the single fight. The loser only loses 1 army per comparison.
//Given two arrays att (rolls of the attacker) and def (rolls of the defender), implement a function that returns the armies lost by the defender as an integer.
//Examples
//risiko([3, 6, 4], [2, 5, 3]) ➞ 3
//// Comparison 1:
//// ATT(6) vs. DEF(5): DEF loses an army
//// Comparison 2:
//// ATT(4) vs. DEF(3): DEF loses an army
//// Comparison 3:
//// ATT(3) vs. DEF(2): DEF loses an army
//
//risiko([3, 6], [6, 4, 4]) ➞ 0
//// Comparison 1:
//// ATT(6) vs. DEF(6): ATT loses an army
//// Comparison 2:
//// ATT(3) vs. DEF(4): ATT loses an army
//
//risiko([3, 1], [1]) ➞ 1
//// Comparison 1:
//// ATT(3) vs. DEF(1): DEF loses an army
//Notes
//When two compared dice have the same value, the player who defends wins the fight (see example #2).
//When the number of rolls is different between the two players, the number of comparisons to do is equal to the lowest amount of rolled dice (see examples #2 and #3).
//You can expect only valid inputs: each array will have at least a die, and no more than three dice, with values in the range from 1 to 6.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(risiko([3, 6, 4], [2, 5, 3]), 3, "Example #1")
//Test.assertEquals(risiko([3, 6], [6, 4, 4]), 0, "Example #2")
//Test.assertEquals(risiko([3, 1], [1]), 1, "Example #3")
//Test.assertEquals(risiko([4, 4, 3], [3, 2]), 2)
//Test.assertEquals(risiko([5], [3, 1, 4]), 1)
//Test.assertEquals(risiko([3, 5], [3, 5]), 0)
//Test.assertEquals(risiko([3, 6, 6], [6]), 0)
//Test.assertEquals(risiko([5, 4], [3, 4, 3]), 2)
//Test.assertEquals(risiko([3], [2, 1]), 1)
//Test.assertEquals(risiko([3, 3, 3], [2, 1, 2]), 3)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Regex Series: Canadian Postal Codes

//tags: regex,strings

//url: https://edabit.com/challenge/6y3Ew3v7GzdQhNrgm

//Description:
//Write a regular expression that matches any valid Canadian postal code with any of the following formats:
//A1A 1A1
//A1A-1A1
//A1A1B1
//Make the match case insensitive.
//Examples
//"M3M 0A9" ➞ true
//
//"m4c-1t1" ➞ true
//
//"m45 1t1" ➞ false
//
//"M4C-1T1Z" ➞ false
//Notes
//This challenge is designed to use Regex only.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//function validate(zip) {
//  return x.test(zip)
//}
//​
//Test.expect(validate("M3M 0A9"), "M3M 0A9 is a valid zip.")
//Test.expect(validate("M3M-0A9"), "M3M-0A9 is a valid zip.")
//Test.expect(validate("M3M0A9"), "M3M0A9 is a valid zip.")
//Test.expect(validate("m4c 1t1"), "m4c 1t1 is a valid zip.")
//Test.expect(validate("m4c-1t1"), "m4c-1t1 is a valid zip.")
//Test.expect(validate("m4c1t1"), "m4c1t1 is a valid zip.")
//​
//Test.expect(!validate("m45 1t1"), "m45 1t1 is not in the correct format.")
//Test.expect(!validate("M4F 1TY"), "M4F 1TY is not in the correct format.")
//Test.expect(!validate("M4C A1T"), "M4C A1T is not in the correct format.")
//Test.expect(!validate("M4C-1T1Z"), "M4C-1T1Z is too long.")
//Test.expect(!validate("M4C1T1Z"), "M4C1T1Z is too long.")
//Test.expect(!validate("M4C 1T"), "M4C 1T is too short.")
//Test.expect(!validate("M4C  1T2"), "M4C  1T2 has too many whitespaces.")
//Test.expect(!validate("M3M ?A9"), "M3M ?A9 uses an unacceptable character.")
//Test.expect(!validate("M3M~8A9"), "M3M~8A9 uses an unacceptable delimiter.")
//Test.expect(!validate("M3M^ 8A9"), "M3M^ 8A9 uses an unacceptable delimiter.")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Recreating Multiplication

//tags: math,numbers

//url: https://edabit.com/challenge/yQTXvvdnnanFFoten

//Description:
//Create a function that takes two numbers n1 n2 and multiplies them without using *.
//Examples
//multiply(3, 2) ➞ 6
//
//multiply(4, 10) ➞ 40
//
//multiply(-2, 4) ➞ -8
//Notes
//Do not use * for this challenge.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(multiply(3, 2), 6)
//Test.assertEquals(multiply(9, 1), 9)
//Test.assertEquals(multiply(2, 2), 4)
//Test.assertEquals(multiply(1, 1), 1)
//Test.assertEquals(multiply(702, 392), 275184)
//Test.assertEquals(multiply(9, 9), 81)
//Test.assertEquals(multiply(40, 31), 1240)
//Test.assertEquals(multiply(4, 10), 40)
//Test.assertEquals(multiply(-2, 4), -8)
//Test.assertEquals(multiply(-3, -20), 60)
//Test.assertEquals(multiply(40, -10), -400)

