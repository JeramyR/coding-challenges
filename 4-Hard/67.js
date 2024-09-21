

//title: Loves Me, Loves Me Not...

//tags: loops,strings

//url: https://edabit.com/challenge/wNfRFhnAefjJcXwQ4

//Description:
//"Loves me, loves me not" is a traditional game in which a person plucks off all the petals of a flower one by one, saying the phrase "Loves me" and "Loves me not" when determining whether the one that they love, loves them back.
//Given a number of petals, return a string which repeats the phrases "Loves me" and "Loves me not" for every alternating petal, and return the last phrase in all caps. Remember to put a comma and space between phrases.
//Examples
//lovesMe(3) ➞ "Loves me, Loves me not, LOVES ME"
//
//lovesMe(6) ➞ "Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT"
//
//lovesMe(1) ➞ "LOVES ME"
//Notes
//Remember to return a string.
//The first phrase is always "Loves me".

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(lovesMe(1), "LOVES ME")
//Test.assertEquals(lovesMe(2), "Loves me, LOVES ME NOT")
//Test.assertEquals(lovesMe(3), "Loves me, Loves me not, LOVES ME")
//Test.assertEquals(lovesMe(4), "Loves me, Loves me not, Loves me, LOVES ME NOT")
//Test.assertEquals(lovesMe(5), "Loves me, Loves me not, Loves me, Loves me not, LOVES ME")
//Test.assertEquals(lovesMe(6), "Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT")
//Test.assertEquals(lovesMe(7), "Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, LOVES ME")
//Test.assertEquals(lovesMe(8), "Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT")
//Test.assertEquals(lovesMe(9), "Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, LOVES ME")
//Test.assertEquals(lovesMe(10), "Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT")
//Test.assertEquals(lovesMe(11), "Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, LOVES ME")
//Test.assertEquals(lovesMe(12), "Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT")
//Test.assertEquals(lovesMe(13), "Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, LOVES ME")
//Test.assertEquals(lovesMe(14), "Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT")
//Test.assertEquals(lovesMe(15), "Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, LOVES ME")
//Test.assertEquals(lovesMe(16), "Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT")
//Test.assertEquals(lovesMe(17), "Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, LOVES ME")
//Test.assertEquals(lovesMe(18), "Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT")
//Test.assertEquals(lovesMe(19), "Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, LOVES ME")
//Test.assertEquals(lovesMe(20), "Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT")
//Test.assertEquals(lovesMe(21), "Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, LOVES ME")
//Test.assertEquals(lovesMe(22), "Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT")
//Test.assertEquals(lovesMe(23), "Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, LOVES ME")
//Test.assertEquals(lovesMe(24), "Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT")
//Test.assertEquals(lovesMe(25), "Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, LOVES ME")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Parseltongue

//tags: regex,strings,validation

//url: https://edabit.com/challenge/5Jeq8Cf59KnLLg4Go

//Description:
//Hermione has come up with a precise formula for determining whether or not a phrase was ssspoken by a parssseltongue (a reference from the Harry Potter universe; the language of ssserpents and those who can converse with them).
//Each word in a sssentence must contain either:
//Two or more consecutive instances of the letter "s" (i.e. must be together ss..), or...
//Zero instances of the letter "s" by itself.
//Examples
//isParselTongue("Sshe ssselects to eat that apple. ") ➞ true
//
//isParselTongue("She ssselects to eat that apple. ") ➞ false
//// "She" only contains one "s".
//
//isParselTongue("Beatrice samples lemonade") ➞ false
//// While "samples" has 2 instances of "s", they are not together.
//
//isParselTongue("You ssseldom sssspeak sso boldly, ssso messmerizingly.") ➞ true
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isParselTongue("Sshe ssselects to eat that apple."), true)
//Test.assertEquals(isParselTongue("She ssselects to eat that apple."), false)
//Test.assertEquals(isParselTongue("You ssseldom sssspeak sso boldly, ssso messmerizingly."), true)
//Test.assertEquals(isParselTongue("Steve likes to eat pancakes"), false)
//Test.assertEquals(isParselTongue("Sssteve likess to eat pancakess"), true)
//Test.assertEquals(isParselTongue("Beatrice samples lemonade"), false)
//Test.assertEquals(isParselTongue("Beatrice enjoysss lemonade"), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Volume of a Spherical Shell

//tags: geometry,math,numbers

//url: https://edabit.com/challenge/oBtknCwKqmRQtFvPf

//Description:
//The volume of a spherical shell is the difference between the enclosed volume of the outer sphere and the enclosed volume of the inner sphere:
//
//Create a function that takes r1 and r2 as arguments and returns the volume of a spherical shell rounded to the nearest thousandth.
//
//Examples
//volShell(3, 3) ➞ 0
//
//volShell(7, 2) ➞ 1403.245
//
//volShell(3, 800) ➞ 2144660471.753
//Notes
//The inputs are always positive numbers. r1 could be the inner radius or the outer radius, don't return a negative number.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(volShell(17, 36), 174852.67)
//Test.assertEquals(volShell(3, 4), 154.985)
//Test.assertEquals(volShell(1, 90), 3053623.87)
//Test.assertEquals(volShell(12.5, 19), 20549.681)
//Test.assertEquals(volShell(3, 800), 2144660471.753)
//Test.assertEquals(volShell(16.128, 16.256), 421.719)
//Test.assertEquals(volShell(3, 3), 0)
//Test.assertEquals(volShell(4, 3), 154.985)
//Test.assertEquals(volShell(36, 17), 174852.67)
//Test.assertEquals(volShell(18, 96), 3681544.466)
//Test.assertEquals(volShell(1, 7), 1432.566)
//Test.assertEquals(volShell(7, 2), 1403.245)
//Test.assertEquals(volShell(100, 50), 3665191.429)
//Test.assertEquals(volShell(40, 36), 72650.377)

