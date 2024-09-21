

//title: Basic E-Mail Validation

//tags: logic,regex,strings,validation

//url: https://edabit.com/challenge/8rC8cbEonMKbHeLTx

//Description:
//Create a function that accepts a string, checks if it's a valid email address and returns either true or false, depending on the evaluation.
//The string must contain an @ character.
//The string must contain a . character.
//The @ must have at least one character in front of it.
//e.g. "e@edabit.com" is valid while "@edabit.com" is invalid.
//The . and the @ must be in the appropriate places.
//e.g. "hello.email@com" is invalid while "john.smith@email.com" is valid.
//If the string passes these tests, it's considered a valid email address.
//Examples
//validateEmail("@gmail.com") ➞ false
//
//validateEmail("hello.gmail@com") ➞ false
//
//validateEmail("gmail") ➞ false
//
//validateEmail("hello@gmail") ➞ false
//
//validateEmail("hello@edabit.com") ➞ true
//Notes
//Check the Tests tab to see exactly what's being evaluated.
//You can solve this challenge with RegEx, but it's intended to be solved with logic.
//Solutions using RegEx will be accepted but frowned upon :(

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(validateEmail('@edabit.com'), false)
//Test.assertEquals(validateEmail('@edabit'), false)
//Test.assertEquals(validateEmail('matt@edabit.com'), true)
//Test.assertEquals(validateEmail(''), false, "Don't forget about empty strings!")
//Test.assertEquals(validateEmail('hello.gmail@com'), false)
//Test.assertEquals(validateEmail('bill.gates@microsoft.com'), true)
//Test.assertEquals(validateEmail('hello@email'), false)
//Test.assertEquals(validateEmail('%^%$#%^%'), false)
//Test.assertEquals(validateEmail('www.email.com'), false)
//Test.assertEquals(validateEmail('email'), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Function Function

//tags: arrays,closures,functional_programming

//url: https://edabit.com/challenge/FEiLd6HgHcwkgHTWP

//Description:
//Create a function that takes a number as its parameter and returns another function. The returned function must take an array of numbers as its parameter, and return an array of the numbers divided by the number that was passed into the first function.
//Examples
//const first = factory(15)
//// returns a function first.
//
//const arr = [30, 45, 60]
//// 30 / 15 = 2, 45 / 15 = 3, 60 / 15 = 4
//
//first(arr) ➞ [2, 3, 4]
//const second = factory(2)
//// returns a function second.
//
//const arr = [2, 4, 6]
//// 2 / 2 = 1, 4 / 2 = 2, 6 / 2 = 3
//
//second(arr) ➞ [1, 2, 3]
//Notes
//Rounding not required.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(factory(15)([30, 45, 60]), [2, 3, 4])
//Test.assertSimilar(factory(2)([2, 4, 6]), [1, 2, 3])
//Test.assertSimilar(factory(6)([60, 30]), [10, 5])
//Test.assertSimilar(factory(7)([14, 21, 49]), [2, 3, 7])
//Test.assertSimilar(factory(5)([10, 5, 20]), [2, 1, 4])
//Test.assertSimilar(factory(10)([100, 10, 60]), [10, 1, 6])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Number of Apples Left

//tags: language_fundamentals,math

//url: https://edabit.com/challenge/wvPTPAqARjE9fswCE

//Description:
//A man has n number of apples. If he eats a percentage p of the apples (if apples are available), his children will share the remainder of the apples. Create a function to determine the number of whole apples his children got. If his children did not get any apples, return "The children didn't get any apples".
//Examples
//getNumberOfApples(10, "90%") ➞ 1
//
//getNumberOfApples(25, "10%") ➞ 22
//
//getNumberOfApples(0, "10%") ➞ "The children didn't get any apples"
//Notes
//p will always be given.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(getNumberOfApples(10, '90%'), 1)  
//Test.assertEquals(getNumberOfApples(25, '10%'), 22)  
//Test.assertEquals(getNumberOfApples(0, '10%'), "The children didn't get any apples")  
//Test.assertEquals(getNumberOfApples(40, '30%'), 28)  
//Test.assertEquals(getNumberOfApples(10, '44%'), 5)  
//Test.assertEquals(getNumberOfApples(12, '100%'), "The children didn't get any apples")  
//Test.assertEquals(getNumberOfApples(40, '100%'), "The children didn't get any apples")

