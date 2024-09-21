

//title: Modular Arithmetic (Part #1)

//tags: bugs,loops,math

//url: https://edabit.com/challenge/b57srgiS3CEHCrABh

//Description:
//Modify the inefficient code in the Code tab so it can pass the tests.
//Examples
//mod(base, exp, k) ➞ (base**(2**exp)) % k
//
//mod(10, 1, 99 ) ➞ 1
//
//mod(3, 2, 15 ) ➞ 6
//
//mod(123, 20, 1234 ) ➞ 391
//Notes
//Try using loops.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(mod(10, 1, 99 ), 1)
//Test.assertEquals(mod(3, 2, 15 ), 6)
//Test.assertEquals(mod(123, 20, 1234 ), 391)
//Test.assertEquals(mod(3, 5, 15), 6)
//Test.assertEquals(mod(10, 5, 99), 1)
//Test.assertEquals(mod(11, 23, 23), 8)
//Test.assertEquals(mod(11, 1000, 23), 12)
//Test.assertEquals(mod(5432, 234625, 4321), 1734)
//Test.assertEquals(mod(146145432, 5423345, 542), 100)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: The Centrifuge Problem

//tags: algorithms,math,numbers,validation

//url: https://edabit.com/challenge/T4KHxHe8n4cy2hcME

//Description:
//A centrifuge, as you probably know, is a laboratory device used to separate fluids based on density. The separation is achieved through centripetal force by spinning a collection of test tubes at high speeds. This means, the configuration needs to be in balance.
//Create a function that takes two numbers as arguments n and k and returns true if the configuration is balanced and false if it's not. To check out the formula, look at the resources tab.
//
//Here are the valid configurations for n = 6, k = 2, 3, 4 and 6.
//Examples
//cFuge(6, 4) ➞ true
//
//cFuge(2, 1) ➞ false
//
//cFuge(3, 3) ➞ true
//Notes
//One test tube k = 1 is never in balance.
//One hole n = 1 is never in balance, even empty.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(cFuge(6, 4), true)
//Test.assertEquals(cFuge(5, 1), false)
//Test.assertEquals(cFuge(12, 7), true)
//Test.assertEquals(cFuge(1, 1), false)
//Test.assertEquals(cFuge(21, 18), true)
//Test.assertEquals(cFuge(1, 0), false)
//Test.assertEquals(cFuge(4, 2), true)
//Test.assertEquals(cFuge(5, 3), false)
//Test.assertEquals(cFuge(21, 13), false)
//Test.assertEquals(cFuge(3, 3), true)
//Test.assertEquals(cFuge(50, 1), false)
//Test.assertEquals(cFuge(8, 6), true)
//Test.assertEquals(cFuge(9, 5), false)
//Test.assertEquals(cFuge(2, 1), false)
//Test.assertEquals(cFuge(59, 59), true)
//Test.assertEquals(cFuge(11, 4), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Aluminum Foil

//tags: loops,math,numbers

//url: https://edabit.com/challenge/ZSqNfoKhnjonFShpb

//Description:
//Aluminum foil has a thickness of 0.025mm. A roll is formed by tightly winding it around a tube with an outside diameter of 4cm. Given the length of the foil in cm, write a function that returns the diameter of the roll in cm measured at its thickest point. Round the result to four places.
//Examples
//foil(0) ➞ 4.0
//
//foil(50) ➞ 4.02
//
//foil(4321) ➞ 5.4575
//
//foil(10000) ➞ 6.9175
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(foil(0), 4.0)
//Test.assertEquals(foil(6), 4.0025)
//Test.assertEquals(foil(7), 4.005)
//Test.assertEquals(foil(12), 4.005)
//Test.assertEquals(foil(13), 4.0075)
//Test.assertEquals(foil(1000), 4.3825)
//Test.assertEquals(foil(7777), 6.385)
//Test.assertEquals(foil(123456), 20.2275)

