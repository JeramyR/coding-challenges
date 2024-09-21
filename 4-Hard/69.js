

//title: Return the Sum of Two Numbers (on the Moon)

//tags: arrays,math,numbers

//url: https://edabit.com/challenge/Ev6brd7JHWzMufJ9w

//Description:
//When two numbers are added together, the strange Lunar arithmetic is used on the Moon. The Lunar sum of two numbers is not determined by the sum of their individual digits, but by the highest digit of the two taken into account at each step, in columnar form.
//2  4  6  +
//3  1  7  =
//--------
//3  4  7
//
//// 3 > 2 | 4 > 1 | 7 > 6
//
//1  3  4  +
//   5  4  =
//--------
//1  5  4
//
////  1 > 0 | 5 > 3 | 4 == 4
//// Blank spots in the columnar form are equals to 0
//
//   2  0  +
//1  4  0  =
//-------
//1  4  0
//
//// 1 > 0 | 4 > 2 | 0 == 0
//Given two positive integers number1 and number2, implement a function that returns their sum as a new integer.
//Examples
//lunarSum(246, 317) ➞ 347
//
//lunarSum(134, 54) ➞ 154
//
//lunarSum(20, 140) ➞ 140
//Notes
//The given numbers will be always positive integers: no exceptions to handle.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(lunarSum(246, 317), 347, "Example #1")
//Test.assertEquals(lunarSum(134, 54), 154, "Example #2")
//Test.assertEquals(lunarSum(20, 140), 140, "Example #3")
//Test.assertEquals(lunarSum(1, 1), 1)
//Test.assertEquals(lunarSum(198, 44), 198)
//Test.assertEquals(lunarSum(36602, 696), 36696)
//Test.assertEquals(lunarSum(91, 8823), 8893)
//Test.assertEquals(lunarSum(123, 8), 128)
//Test.assertEquals(lunarSum(2289, 98211285), 98212289)
//Test.assertEquals(lunarSum(9, 11), 19)
//Test.assertEquals(lunarSum(11, 22), 22)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Calculate Next Position of One Point Moving Towards Another

//tags: algebra,games,math,objects

//url: https://edabit.com/challenge/BxiBhscoP5SSzQpGG

//Description:
//A point on the screen (pt1) wants to move a certain distance (dist) closer to another point on the screen (pt2) The function has three arguments, two of which are objects with x & y values, and the third being the distance, e.g. {x:50, y:60}, {x: 100, y: 100}, 10. The expected result is a similar object with the new co-ordinate.
//Examples
//getNextPosition({x: 50, y: 60}, {x: 100, y: 100}, 10) ➞ {x: 58, y: 66}
//
//getNextPosition({x: 0, y: 0}, {x: 100, y: 0}, 10) ➞ {x: 10, y: 0}
//
//getNextPosition({x: 0, y: 0}, {x: 100, y: 100}, 10) ➞ {x: 7, y: 7}
//
//getNextPosition({x: 250, y: 10}, {x: -20, y: 35}, 55) ➞ {x: 195, y: 15}
//Notes
//The returned x & y values should be rounded to the closest integer
//If the distance between the two points is less than distance wanting to be traveled, then the returned co-ordinate should overshoot the mark, e.g. {x: 50, y: 0}, {x: 70, y: 0}, 30) ➞ {x: 80, y: 0}.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(Test.inspect(getNextPosition({x: 0, y: 0}, {x: 100, y: 0}, 10)), Test.inspect({x: 10, y: 0}))
//Test.assertEquals(Test.inspect(getNextPosition({x: 50, y: 60}, {x: 100, y: 100}, 10)), Test.inspect({x: 58, y: 66}))
//Test.assertEquals(Test.inspect(getNextPosition({x: 0, y: 0}, {x: 100, y: 100}, 10)), Test.inspect({x: 7, y: 7}))
//Test.assertEquals(Test.inspect(getNextPosition({x: 250, y: 10}, {x: -20, y: 35}, 55)), Test.inspect({x: 195, y: 15}))
//Test.assertEquals(Test.inspect(getNextPosition({x: 50, y: 0}, {x: 70, y: 0}, 30)), Test.inspect({x: 80, y: 0}))

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Seasons on Earth

//tags: conditions,data_structures,dates

//url: https://edabit.com/challenge/4d4RamC7mArPEwHpX

//Description:
//In this challenge, you are given a date and you have to determine the correspondent season in a certain hemisphere of Earth.
//You have to use the ranges given by the meteorological seasons definition, accordingly to the following table:
//Start	End	North Hemisphere	South Hemisphere
//March, 1	May, 31	Spring	Autumn
//June, 1	August, 31	Summer	Winter
//September, 1	November, 30	Autumn	Spring
//December, 1	February, 28***	Winter	Summer
//Given two strings hemisphere (can be "N" for the North hemisphere or "S" for the South hemisphere) and date (name and day of the month), implement a function that returns a string with the season name, accordingly to the above table.
//Examples
//hemisphereSeason("N", "June, 30") ➞ "Summer"
//
//hemisphereSeason("N", "March, 1") ➞ "Spring"
//
//hemisphereSeason("S", "September, 22") ➞ "Spring"
//Notes
//During leap years the end date of Winter in the northern hemisphere is the 29th day of February (last day of Summer in the southern hemisphere). In this challenge, years are not used, so the last day of February will always be the 28th.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(hemisphereSeason("N", "June, 30"), "Summer", "Example #1")
//Test.assertEquals(hemisphereSeason("N", "March, 1"), "Spring", "Example #2")
//Test.assertEquals(hemisphereSeason("S", "September, 22"), "Spring", "Example #3")
//Test.assertEquals(hemisphereSeason("S", "April, 20"), "Autumn")
//Test.assertEquals(hemisphereSeason("N", "November, 20"), "Autumn")
//Test.assertEquals(hemisphereSeason("S", "May, 8"), "Autumn")
//Test.assertEquals(hemisphereSeason("N", "February, 28"), "Winter")
//Test.assertEquals(hemisphereSeason("S", "August, 6"), "Winter")
//Test.assertEquals(hemisphereSeason("N", "July, 28"), "Summer")
//Test.assertEquals(hemisphereSeason("S", "October, 12"), "Spring")
//Test.assertEquals(hemisphereSeason("N", "December, 31"), "Winter")
//Test.assertEquals(hemisphereSeason("S", "January, 2"), "Summer")

