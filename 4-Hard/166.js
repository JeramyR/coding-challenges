

//title: Maximum Travel Distance

//tags: algebra,algorithms,math,numbers

//url: https://edabit.com/challenge/cFhKd3LzSD73vNKb8

//Description:
//Write a function that takes fuel (liters), fuelUsage (liters/100km), passengers, airCon (boolean) and returns maximum distance that car can travel.
//fuel is the number of liters of fuel in the fuel tank.
//fuelUsage is basic fuel consumption per 100 km (with the driver inside only).
//Every additional passenger is increasing basic fuel consumption by 5%.
//If the air conditioner is ON true, its increasing total (not basic) fuel consumption by 10%.
//Examples
//totalDistance(70.0, 7.0, 0, false) ➞ 1000.0
//
//totalDistance(36.1, 8.6, 3, true) ➞ 331.8
//
//totalDistance(55.5, 5.5, 5, false) ➞ 807.3
//Notes
//fuel and fuelUsage are always greater than 1.
//passengers are always greater or equal to 0.
//Round your answer to the nearest tenth.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(totalDistance(30.0, 3.0, 0, false), 1000.0)
//Test.assertEquals(totalDistance(50.0, 7.0, 3, true), 564.7)
//Test.assertEquals(totalDistance(36.1, 8.6, 3, true), 331.8)
//Test.assertEquals(totalDistance(71.9, 12.1, 1, false), 565.9)
//Test.assertEquals(totalDistance(11.0, 11.0, 0, false), 100.0)
//Test.assertEquals(totalDistance(55.5, 5.5, 5, false), 807.3)
//Test.assertEquals(totalDistance(300.0, 25.0, 11, true), 703.8)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Shuffled Properly?

//tags: arrays,loops,numbers,validation

//url: https://edabit.com/challenge/jx9hhCFHp92EpjB2J

//Description:
//Given an array of 10 numbers, return whether or not the array is shuffled sufficiently enough. In this case, if 3 or more numbers appear consecutively (ascending or descending), return false.
//Examples
//isShuffledWell([1, 2, 3, 5, 8, 6, 9, 10, 7, 4]) ➞ false
//// 1, 2, 3 appear consecutively
//
//isShuffledWell([3, 5, 1, 9, 8, 7, 6, 4, 2, 10]) ➞ false
//// 9, 8, 7, 6 appear consecutively
//
//isShuffledWell([1, 5, 3, 8, 10, 2, 7, 6, 4, 9]) ➞ true
//// No consecutive numbers appear
//
//isShuffledWell([1, 3, 5, 7, 9, 2, 4, 6, 8, 10]) ➞ true
//// No consecutive numbers appear
//Notes
//Only steps of 1 in either direction count as consecutive (i.e. a sequence of odd and even numbers would count as being properly shuffled (see example #4)).
//You will get numbers from 1-10.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isShuffledWell([1, 2, 3, 5, 8, 6, 9, 10, 7, 4]), false, "1, 2, 3 appear consecutively.")
//Test.assertEquals(isShuffledWell([3, 5, 1, 9, 8, 7, 6, 4, 2, 10]), false, "9, 8, 7, 6 appear consecutively.")
//Test.assertEquals(isShuffledWell([1, 5, 3, 8, 10, 2, 7, 6, 4, 9]), true, "No consecutive numbers appear.")
//Test.assertEquals(isShuffledWell([1, 3, 5, 7, 9, 2, 4, 6, 8, 10]), true, "No consecutive numbers appear.")
//Test.assertEquals(isShuffledWell([5, 6, 7, 9, 1, 10, 3, 8, 2, 4]), false)
//Test.assertEquals(isShuffledWell([3, 9, 7, 5, 2, 4, 10, 1, 8, 6]), true)
//Test.assertEquals(isShuffledWell([6, 4, 2, 1, 3, 7, 8, 10, 5, 9]), true)
//Test.assertEquals(isShuffledWell([2, 6, 10, 9, 8, 1, 4, 7, 3, 5]), false)
//Test.assertEquals(isShuffledWell([6, 10, 5, 8, 4, 2, 7, 9, 3, 1]), true)
//Test.assertEquals(isShuffledWell([3, 10, 5, 2, 6, 9, 8, 4, 1, 7]), true)
//Test.assertEquals(isShuffledWell([10, 7, 9, 5, 4, 6, 3, 8, 2, 1]), true)
//Test.assertEquals(isShuffledWell([3, 5, 9, 6, 10, 1, 4, 8, 7, 2]), true)
//Test.assertEquals(isShuffledWell([10, 7, 8, 4, 3, 9, 5, 1, 2, 6]), true)
//Test.assertEquals(isShuffledWell([2, 4, 8, 7, 3, 9, 1, 10, 6, 5]), true)
//Test.assertEquals(isShuffledWell([9, 6, 1, 3, 10, 8, 5, 4, 7, 2]), true)
//Test.assertEquals(isShuffledWell([2, 3, 9, 7, 10, 8, 4, 6, 1, 5]), true)
//Test.assertEquals(isShuffledWell([3, 8, 5, 6, 2, 7, 4, 1, 10, 9]), true)
//Test.assertEquals(isShuffledWell([1, 6, 4, 10, 3, 5, 7, 2, 9, 8]), true)
//Test.assertEquals(isShuffledWell([1, 10, 8, 9, 2, 3, 4, 7, 5, 6]), false)
//Test.assertEquals(isShuffledWell([5, 4, 3, 10, 9, 2, 7, 6, 8, 1]), false)
//Test.assertEquals(isShuffledWell([4, 7, 8, 3, 5, 9, 2, 6, 1, 10]), true)
//Test.assertEquals(isShuffledWell([5, 8, 6, 7, 3, 2, 4, 9, 10, 1]), true)
//Test.assertEquals(isShuffledWell([3, 7, 1, 4, 8, 6, 5, 9, 10, 2]), true)
//Test.assertEquals(isShuffledWell([10, 1, 9, 4, 3, 2, 7, 8, 6, 5]), false)
//Test.assertEquals(isShuffledWell([3, 2, 6, 4, 1, 5, 8, 10, 9, 7]), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: The Zodiac Symbols

//tags: arrays,dates

//url: https://edabit.com/challenge/zfFDATiTLm6CgmGzf

//Description:
//In Western astrology, there are twelve possible date intervals for establishing the zodiac sign of a person, with each sign having its own symbol.
//Sign	Symbol	Interval
//Aries	♈	March 21 – April 20
//Taurus	♉	April 21 – May 21
//Gemini	♊	May 22 – June 21
//Cancer	♋	June 22 – July 22
//Leo	♌	July 23 – August 22
//Virgo	♍	August 23 – September 23
//Libra	♎	September 24 – October 23
//Scorpio	♏	October 24 – November 22
//Sagittarius	♐	November 23 – December 21
//Capricorn	♑	December 22 – January 20
//Aquarius	♒	January 21 – February 19
//Pisces	♓	February 20 – March 20
//Given a string dob being a date of birth in the U.S. full format, implement a function that returns the related zodiac symbol accordingly to the table above.
//Examples
//zodiacSymbol("May 9, 1951") ➞ "♉"
//// Taurus
//
//zodiacSymbol("October 31, 1977") ➞ "♏"
//// Scorpio
//
//zodiacSymbol("January 19, 1985") ➞ "♑"
//// Capricorn
//Notes
//A list of the Unicode characters to return is already given in the Code tab.
//In each date interval listed into the table, the starting date and the end date are the inclusive bounds of the range to consider.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(zodiacSymbol("May 9, 1951"), "♉", "Example #1")
//Test.assertEquals(zodiacSymbol("October 31, 1977"), "♏", "Example #2")
//Test.assertEquals(zodiacSymbol("January 19, 1985"), "♑", "Example #3")
//Test.assertEquals(zodiacSymbol("February 3, 1943"), "♒")
//Test.assertEquals(zodiacSymbol("August 28, 1990"), "♍")
//Test.assertEquals(zodiacSymbol("April 18, 1929"), "♈")
//Test.assertEquals(zodiacSymbol("September 24, 1985"), "♎")
//Test.assertEquals(zodiacSymbol("May 29, 1988"), "♊")
//Test.assertEquals(zodiacSymbol("June 30, 1998"), "♋")
//Test.assertEquals(zodiacSymbol("July 23, 1983"), "♌")
//Test.assertEquals(zodiacSymbol("March 20, 1970"),"♓")
//Test.assertEquals(zodiacSymbol("November 26, 2000"), "♐")

