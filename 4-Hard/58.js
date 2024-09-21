

//title: Poker Full House

//tags: arrays,games,validation

//url: https://edabit.com/challenge/eJtRrrpRZEoaaYgvw

//Description:
//Create a function that determines whether or not a player is holding a Full House in their hand. A hand is represented as an array of 5 cards. A full house is defined as a pair of cards and a three-of-a-kind.
//To illustrate: ["A", "A", "A", "K", "K"] would be a Full House, since the player holds 3 aces and 2 kings.
//Examples
//isFullHouse(["A", "A", "A", "K", "K"]) ➞ true
//
//isFullHouse(["3", "J", "J", "3", "3"]) ➞ true
//
//isFullHouse(["10", "J", "10", "10", "10"]) ➞ false
//
//isFullHouse(["7", "J", "3", "4", "2"]) ➞ false
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isFullHouse(['A', 'A', 'A', 'K', 'K']), true);
//Test.assertEquals(isFullHouse(['3', 'J', 'J', '3', '3']), true);
//Test.assertEquals(isFullHouse(['10', 'J', '10', 'J', '10']), true);
//Test.assertEquals(isFullHouse(['10', 'J', '10', '10', '10']), false);
//Test.assertEquals(isFullHouse(['10', 'J', 'J', '2', '2']), false);
//Test.assertEquals(isFullHouse(['7', 'J', '3', '4', '2']), false);

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Let`s Talk Like a Monkey 🐵

//tags: interview,language_fundamentals,logic,strings

//url: https://edabit.com/challenge/BwyAr7S6y89prkrMo

//Description:
//Mubashir can talk with monkeys. You can also learn their simple language.
//Create a function that takes a string txt and returns the string in monkeys language. You have to figure out their language from test cases.
//Examples
//monkeyTalk("Mubashir Hassan") ➞ "Ook ook."
//
//monkeyTalk("Hello") ➞ "Ook."
//
//monkeyTalk("Matt") ➞ "Ook."
//
//monkeyTalk("Everyone") ➞ "Eek."
//
//monkeyTalk("Edabit is Amazing") ➞ "Eek eek eek."
//Notes
//A hint in the comments section.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(monkeyTalk("Mubashir Hassan"), "Ook ook.")
//Test.assertEquals(monkeyTalk("Edabit is Amazing"), "Eek eek eek.")
//Test.assertEquals(monkeyTalk("Matt"), "Ook.")
//Test.assertEquals(monkeyTalk("Hello"), "Ook.")
//Test.assertEquals(monkeyTalk("you are so beautiful"), "Ook eek ook ook.")
//Test.assertEquals(monkeyTalk("Everyone"), "Eek.")
//Test.assertEquals(monkeyTalk("Hello Everyone"), "Ook eek.")
//Test.assertEquals(monkeyTalk("Everyone Hello"), "Eek ook.")
//// Mubashir

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Number of Leap Years

//tags: dates,numbers,strings

//url: https://edabit.com/challenge/EzxPadgs3Y9hYWymS

//Description:
//Given a range of years as a string, return the number of leap years there are within the range (inclusive).
//Examples
//numLeapYears("1980-1984") ➞ 2
//// 1980 and 1984 are leapyears.
//
//numLeapYears("2000-2020") ➞ 6
//
//numLeapYears("1600-2000") ➞ 98
//Notes
//Remember that a hyphen separates the years.
//Check the Resources tab for help on checking whether a year is a leap year.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(numLeapYears("2000-2020"), 6)
//Test.assertEquals(numLeapYears("1600-2000"), 98)
//Test.assertEquals(numLeapYears("1980-1984"), 2)
//Test.assertEquals(numLeapYears("1224-8090"), 1666)
//Test.assertEquals(numLeapYears("2486-7607"), 1241)
//Test.assertEquals(numLeapYears("1813-4354"), 616)
//Test.assertEquals(numLeapYears("772-1849"), 262)
//Test.assertEquals(numLeapYears("2228-7099"), 1182)
//Test.assertEquals(numLeapYears("1349-6325"), 1206)
//Test.assertEquals(numLeapYears("1803-3828"), 492)
//Test.assertEquals(numLeapYears("295-6278"), 1451)
//Test.assertEquals(numLeapYears("107-1821"), 416)
//Test.assertEquals(numLeapYears("2912-6566"), 887)
//Test.assertEquals(numLeapYears("1006-5181"), 1013)
//Test.assertEquals(numLeapYears("2876-9210"), 1536)
//Test.assertEquals(numLeapYears("1189-5481"), 1041)
//Test.assertEquals(numLeapYears("1325-1409"), 20)
//Test.assertEquals(numLeapYears("2665-3338"), 163)
//Test.assertEquals(numLeapYears("1886-3577"), 410)
//Test.assertEquals(numLeapYears("2951-4523"), 381)
//Test.assertEquals(numLeapYears("2651-7572"), 1194)
//Test.assertEquals(numLeapYears("2036-3126"), 264)
//Test.assertEquals(numLeapYears("1602-6986"), 1306)
//Test.assertEquals(numLeapYears("35-602"), 137)
//Test.assertEquals(numLeapYears("38-1709"), 405)

