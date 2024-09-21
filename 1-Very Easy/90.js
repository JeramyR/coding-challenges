

//title: Profit Margin

//tags: formatting,math,numbers,strings

//url: https://edabit.com/challenge/uqTGMSityHMYL7W5s

//Description:
//Create a function that calculates the profit margin given costPrice and salesPrice. Return the result as a percentage formatted string, and rounded to one decimal. To calculate profit margin you subtract the cost from the sales price, then divide by sales price.
//Examples
//profitMargin(50, 50) ➞ "0.0%"
//
//profitMargin(28, 39) ➞ "28.2%"
//
//profitMargin(33, 84) ➞ "60.7%"
//Notes
//Remember to return the result as a percentage formatted string.
//Only one decimal should be included.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(profitMargin(10, 15), "33.3%")
//Test.assertEquals(profitMargin(75, 40), "-87.5%")
//Test.assertEquals(profitMargin(55, 55), "0.0%")
//Test.assertEquals(profitMargin(30, 50), "40.0%")
//Test.assertEquals(profitMargin(9999, 10001), "0.0%")
//Test.assertEquals(profitMargin(33, 84), "60.7%")
//Test.assertEquals(profitMargin(28, 39), "28.2%")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Cowboy Shootout

//tags: arrays,numbers

//url: https://edabit.com/challenge/9TWhGHCeytQEBCbc9

//Description:
//Wild Roger is tasked with shooting down 6 bottles with 6 shots as fast as possible. Here are the different types of shots he could make:
//He could use one pistol to shoot a bottle with a "Bang!" in 0.5 seconds.
//Or he could use both pistols at once with a "BangBang!" to shoot two bottles in 0.5 seconds.
//Given an array of strings, return the time (in seconds) it took to shoot down all 6 bottles. Make sure to only count Bangs and BangBangs. Anything else doesn't count.
//Examples
//rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "Bang!", "Bang!"]) ➞ 3
//
//rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "BangBang!"]) ➞ 2.5
//
//rogerShots(["Bang!", "BangBangBang!", "Boom!", "Bang!", "BangBang!", "BangBang!"]) ➞ 2
//Notes
//All the bottles will be shot down in all the tests.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "Bang!", "Bang!"]), 3)
//Test.assertEquals(rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "BangBang!"]), 2.5)
//Test.assertEquals(rogerShots(["Bang!", "BangBangBang!", "Boom!", "Bang!", "BangBang!", "BangBang!"]), 2)
//Test.assertEquals(rogerShots(["BangBang!", "BangBang!", "BangBang!"]), 1.5)
//Test.assertEquals(rogerShots(["Bang!", "BadaBing!", "Badaboom!", "Bang!", "Bang!", "Bang!", "Bang!", "Bang!"]), 3)
//Test.assertEquals(rogerShots(["BangBang!", "BangBang!", "Bag!", "Ban!", "Tang!", "Bang!", "Bang!"]), 2)
//​
//// made by @Joshua Señoron

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Stupid Addition

//tags: conditions,numbers,strings,validation

//url: https://edabit.com/challenge/GABaDpxGZGFBdQPjs

//Description:
//Create a function that takes two parameters and, if both parameters are strings, add them as if they were integers or if the two parameters are integers, concatenate them.
//Examples
//stupidAddition(1, 2) ➞ "12"
//
//stupidAddition("1", "2") ➞ 3
//
//stupidAddition("1", 2) ➞ null
//Notes
//If the two parameters are different data types, return null.
//All parameters will either be strings or integers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(stupidAddition(1, 2), "12", "Both parameters are integers, therefore they should be concatenated")
//Test.assertEquals(stupidAddition("1", "2"), 3, "Both parameters are strings, therefore they should be added")
//Test.assertEquals(stupidAddition(1, "2"), null, "The parameters are different data types, therefore None should be returned")
//Test.assertEquals(stupidAddition("1", 2), null, "The parameters are different data types, therefore None should be returned")

