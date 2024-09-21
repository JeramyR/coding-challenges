

//title: On/Off Switches

//tags: algebra,logic,math

//url: https://edabit.com/challenge/EZ4H6A8pBeTYfZzQe

//Description:
//Create a function that returns how many possible arrangements can come from a certain number of switches (on / off). In other words, for a given number of switches, how many different patterns of on and off can we have?
//Examples
//posCom(1) ➞ 2
//
//posCom(3) ➞ 8
//
//posCom(10) ➞ 1024
//Notes
//All numbers will be whole and positive.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(posCom(5), 32)
//Test.assertEquals(posCom(4), 16)
//Test.assertEquals(posCom(3), 8)
//Test.assertEquals(posCom(2), 4)
//Test.assertEquals(posCom(1), 2)
//Test.assertEquals(posCom(6), 64)
//Test.assertEquals(posCom(7), 128)
//Test.assertEquals(posCom(8), 256)
//Test.assertEquals(posCom(9), 512)
//Test.assertEquals(posCom(10), 1024)
//Test.assertEquals(posCom(25), 33554432)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Among Us Imposter Formula

//tags: algebra,math

//url: https://edabit.com/challenge/ihpAv2EBCxDD27T3P

//Description:
//Create a function that calculates the chance of being an imposter. The formula for the chances of being an imposter is 100 × (i / p) where i is the imposter count and p is the player count. Make sure to round the value to the nearest integer and return the value as a percentage.
//Examples
//imposterFormula(1, 10) ➞ "10%"
//
//imposterFormula(2, 5) ➞ "40%"
//
//imposterFormula(1, 8) ➞ "13%"
//Notes
//The player limit is 10 and the imposter count can only go up to 3.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(imposterFormula(1, 9), "11%")
//Test.assertEquals(imposterFormula(2, 10), "20%")
//Test.assertEquals(imposterFormula(3, 7), "43%")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Find Out the Leap Year

//tags: algebra,algorithms,validation

//url: https://edabit.com/challenge/xKKwvL2zYC8pEvMLG

//Description:
//A leap year happens every four years, so it's a year that is perfectly divisible by four. However, if the year is a multiple of 100 (1800, 1900, etc), the year must be divisible by 400.
//Write a function that determines if the year is a leap year or not.
//Examples
//leapYear(2020) ➞ true
//
//leapYear(2021) ➞ false
//
//leapYear(1968) ➞ true
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(leapYear(2004), true)
//Test.assertEquals(leapYear(8), true)
//Test.assertEquals(leapYear(4), true)
//Test.assertEquals(leapYear(2019), false)
//Test.assertEquals(leapYear(1970), false)
//Test.assertEquals(leapYear(2021), false)
//Test.assertEquals(leapYear(1934), false)
//Test.assertEquals(leapYear(1874), false)
//Test.assertEquals(leapYear(1968), true)

