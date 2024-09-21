

//title: Scottish Screaming

//tags: formatting,regex,strings

//url: https://edabit.com/challenge/eRuGNqijDdFpLsW5K

//Description:
//A strong Scottish accent makes every vowel similar to an "e", so you should replace every vowel with an "e". Additionally, it is being screamed, so it should be in block capitals.
//Create a function that takes a string and returns a string.
//Examples
//toScottishScreaming("hello world") ➞ "HELLE WERLD"
//
//toScottishScreaming("Mr. Fox was very naughty") ➞ "MR. FEX WES VERY NEEGHTY"
//
//toScottishScreaming("Butterflies are beautiful!") ➞ "BETTERFLEES ERE BEEETEFEL!"
//Notes
//Make sure to include all punctuation that is in the original string.
//You don't need any more namespaces than are already given.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(toScottishScreaming("lorem ipsum"),"LEREM EPSEM")
//Test.assertEquals(toScottishScreaming("Leeroy jenkins!"),"LEEREY JENKENS!")
//Test.assertEquals(toScottishScreaming("A, wonderful, day, don't, you, think?"),"E, WENDERFEL, DEY, DEN'T, YEE, THENK?")
//Test.assertEquals(toScottishScreaming("Hello world"),"HELLE WERLD")
//Test.assertEquals(toScottishScreaming("start queueing you oafs"),"STERT QEEEEENG YEE EEFS")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Add a Consecutive List of Numbers

//tags: loops,math,numbers

//url: https://edabit.com/challenge/ygF4FR7ah2Bn9CNoz

//Description:
//Write a function that takes the last number of a consecutive list of numbers and returns the total of all numbers up to and including it.
//Examples
//addUpTo(3) ➞ 6
//// 1 + 2 + 3 = 6
//
//addUpTo(10) ➞ 55
//// 1 + 2 + 3 + ... + 10 = 55
//
//addUpTo(7) ➞ 28
//// 1 + 2 + 3 + ... + 7 = 28
//Notes
//You will only be given valid inputs.
//There are various ways of doing this; try finding them!
//Remember to return the result.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(addUpTo(3), 6, "Example #1")
//Test.assertEquals(addUpTo(10), 55, "Example #2")
//Test.assertEquals(addUpTo(0), 0)
//Test.assertEquals(addUpTo(2), 3)
//Test.assertEquals(addUpTo(20), 210)
//Test.assertEquals(addUpTo(1), 1)
//​
//// made by @Joshua Señoron

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Check if Number is within a Given Range

//tags: language_fundamentals,numbers,objects,validation

//url: https://edabit.com/challenge/Wp8uSyh2tfpdzR4CP

//Description:
//Given a number and an object with min and max properties, return true if the number lies within the given range (inclusive).
//Examples
//isInRange(4, { min: 0, max: 5 }) ➞ true
//
//isInRange(4, { min: 4, max: 5 }) ➞ true
//
//isInRange(4, { min: 6, max: 10 }) ➞ false
//
//isInRange(5, { min: 5, max: 5 }) ➞ true
//Notes
//Numbers can be positive or negative, and they may not be integers.
//You can assume min <= max is always true.
//If you get stuck on a challenge, find help in the Resources tab.
//If you're really stuck, unlock solutions in the Solutions tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isInRange(4, { min: 0, max: 5 }), true)
//Test.assertEquals(isInRange(4, { min: 4, max: 5 }), true)
//Test.assertEquals(isInRange(4, { min: 0, max: 4 }), true)
//Test.assertEquals(isInRange(4, { min: 6, max: 10 }), false)
//Test.assertEquals(isInRange(11, { min: 6, max: 10 }), false)
//Test.assertEquals(isInRange(5, { min: 5, max: 5 }), true)
//Test.assertEquals(isInRange(1.5, { min: 1.25, max: 1.75 }), true)
//Test.assertEquals(isInRange(1.1, { min: 1.25, max: 1.75 }), false)
//Test.assertEquals(isInRange(1.8, { min: 1.25, max: 1.75 }), false)
//Test.assertEquals(isInRange(-1, { min: -1, max: 1 }), true)

