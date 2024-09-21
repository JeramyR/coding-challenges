

//title: Calculating Damage

//tags: conditions,math

//url: https://edabit.com/challenge/g7FhPFYdZACYeJTSk

//Description:
//Create a function that takes damage and speed (attacks per second) and returns the amount of damage after a given time.
//Examples
//damage(40, 5, "second") ➞ 200
//
//damage(100, 1, "minute") ➞ 6000
//
//damage(2, 100, "hour") ➞ 720000
//Notes
//Return "invalid" if damage or speed is negative.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(damage(40, 5, "second"), 200)
//Test.assertEquals(damage(100, 1, "minute"), 6000)
//Test.assertEquals(damage(2, 100, "hour"), 720000)
//Test.assertEquals(damage(20, 0.5, "minute"), 600)
//Test.assertEquals(damage(2, 400, "hour"), 2880000)
//Test.assertEquals(damage(-23, 20, "second"), "invalid")
//Test.assertEquals(damage(-23, -5, "second"), "invalid")
//Test.assertEquals(damage(20, -492321, "hour"), "invalid")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Volume of a Pizza

//tags: geometry,language_fundamentals,math

//url: https://edabit.com/challenge/zuXtbkRZnDnnkf3i4

//Description:
//Tom is a very methodic guy that loves geometry and pizza: he loves them so much that, before eating a pizza, he calculates its radius and its height. Now, he wants to know from you the total volume of pizza that he swallowed!
//You are given the two parameters that Tom measured:
//radius
//height
//He tells you that if you multiply the height by the square of the radius and multiply the result for the mathematical constant π (Pi), you will obtain the total volume of the pizza. Implement a function that returns the volume of the pizza as a whole number, rounding it to the nearest integer (and rounding up for numbers with .5 as decimal part).
//Examples
//volPizza(1, 1) ➞ 3
//// (radius² x height x π) = 3.14159... rounded to the nearest integer.
//
//volPizza(7, 2) ➞ 308
//
//volPizza(10, 2.5) ➞ 785
//Notes
//This challenge requires knowledge of some language fundamentals related to math: the Math object methods. Find help in the Resources tab if you don't know them or if you still aren't confident with these concepts.
//If you're really stuck, unlock solutions in the Solutions tab.
//For experienced users: try to be creative!

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(volPizza(1, 1), 3, "Example #1")
//Test.assertEquals(volPizza(7, 2), 308, "Example #2")
//Test.assertEquals(volPizza(10, 2.5), 785, "Example #3")
//Test.assertEquals(volPizza(15, 1.3), 919)
//Test.assertEquals(volPizza(20, 1), 1257)
//Test.assertEquals(volPizza(13, 2), 1062)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: String to Integer and Vice Versa

//tags: language_fundamentals,strings

//url: https://edabit.com/challenge/EpCYjhzPKtCkkspL9

//Description:
//Write two functions:
//toInt() : A function to convert a string to an integer.
//toStr() : A function to convert an integer to a string.
//Examples
//toInt("77") ➞ 77
//
//toInt("532") ➞ 532
//
//toStr(77) ➞ "77"
//
//toStr(532) ➞ "532"
//Notes
//Don't forget to return the result.
//If you get stuck on a challenge, find help in the Resources tab.
//If you're really stuck, unlock solutions in the Solutions tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(toInt("37"), 37)
//Test.assertEquals(toInt("113"), 113)
//Test.assertEquals(toInt("5"), 5)
//Test.assertEquals(toInt("5231"), 5231)
//Test.assertEquals(toStr(37), "37")
//Test.assertEquals(toStr(113), "113")
//Test.assertEquals(toStr(5), "5")
//Test.assertEquals(toStr(5231), "5231")

