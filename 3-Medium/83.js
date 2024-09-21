

//title: Split Item Codes

//tags: regex,strings

//url: https://edabit.com/challenge/Trog78Qz4bGNLFh6M

//Description:
//You have an array of item codes with the following format: "[letters][digits]"
//Create a function that splits these strings into their alphabetic and numeric parts.
//Examples
//splitCode("TEWA8392") ➞ ["TEWA", 8392]
//
//splitCode("MMU778") ➞ ["MMU", 778]
//
//splitCode("SRPE5532") ➞ ["SRPE", 5532]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(splitCode("TEWA8392"), ["TEWA", 8392])
//Test.assertSimilar(splitCode("MMU778"), ["MMU", 778])
//Test.assertSimilar(splitCode("SRPE5532"), ["SRPE", 5532])
//Test.assertSimilar(splitCode("SKU8977"), ["SKU", 8977])
//Test.assertSimilar(splitCode("MCI5589"), ["MCI", 5589])
//Test.assertSimilar(splitCode("WIEB3921"), ["WIEB", 3921])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Days in a Month

//tags: conditions,dates

//url: https://edabit.com/challenge/wNhCHwPXNLJwrTith

//Description:
//Create a function that takes the month and year (as integers) and returns the number of days in that month.
//Examples
//days(2, 2018) ➞ 28
//
//days(4, 654) ➞ 30
//
//days(2, 200) ➞ 28
//
//days(2, 1000) ➞ 28
//Notes
//Don't forget about leap years!

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(days(1, 2018), 31, 'Should show the correct day amount for January');
//Test.assertEquals(days(2, 2018), 28, 'Should show the correct day amount for February on a non-leap year');
//Test.assertEquals(days(3, 2018), 31, 'Should show the correct day amount for March');
//Test.assertEquals(days(4, 2018), 30, 'Should show the correct day amount for April');
//Test.assertEquals(days(5, 2018), 31, 'Should show the correct day amount for May');
//Test.assertEquals(days(6, 2018), 30, 'Should show the correct day amount for June');
//Test.assertEquals(days(7, 2018), 31, 'Should show the correct day amount for July');
//Test.assertEquals(days(8, 2018), 31, 'Should show the correct day amount for August');
//Test.assertEquals(days(9, 2018), 30, 'Should show the correct day amount for September');
//Test.assertEquals(days(10, 2018), 31, 'Should show the correct day amount for October');
//Test.assertEquals(days(11, 2018), 30, 'Should show the correct day amount for November');
//Test.assertEquals(days(12, 2018), 31, 'Should show the correct day amount for December');
//Test.assertEquals(days(2, 2004), 29, 'Should show the correct day amount for February on a leap year that is divisible by 4 but not 100');
//Test.assertEquals(days(2, 1800), 28, 'Should show the correct day amount for February on a leap year that is divisible by 100 but not 400 ');
//Test.assertEquals(days(2, 1600), 29, 'Should show the correct day amount for February on a leap year that is divisible by 100 and 400');

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Make a Vessel of Height

//tags: algorithms,geometry,logic,math,numbers

//url: https://edabit.com/challenge/gGWmC3BvmQ3gfAeR7

//Description:
//A company asks a small-scale manufacturer to produce packaging in which they can ship their cooking oil. The company also gives the design for how the vessel should look (the shaded portion filled in the image below). Depending upon the volume of oil to be packaged, the company requires vessels of varying height.
//Create a function to determine what the height of the vessel should be, depending on the given volume of oil. Return height of the vessel in centimeters, with up to two decimals of precision.
//
//Examples
//heightNeeded(0.5) ➞ 19.1
//
//heightNeeded(5) ➞ 190.99
//
//heightNeeded(10) ➞ 381.97
//Notes
//Assume the radius (5cm) will stay constant for all different volume vessels.
//volume will be given in the unit of litre.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(heightNeeded(1), 38.2)
//Test.assertEquals(heightNeeded(3), 114.59)
//Test.assertEquals(heightNeeded(0.5), 19.1)
//Test.assertEquals(heightNeeded(10), 381.97)
//Test.assertEquals(heightNeeded(5), 190.99)

