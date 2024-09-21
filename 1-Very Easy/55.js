

//title: Free Coffee Cups

//tags: algorithms,logic,math,numbers

//url: https://edabit.com/challenge/Y24efzo7NaACt3GvX

//Description:
//For each of the 6 coffee cups I buy, I get a 7th cup free. In total, I get 7 cups. Create a function that takes n cups bought and return as an integer the total number of cups I would get.
//Examples
//totalCups(6) ➞ 7
//
//totalCups(12) ➞ 14
//
//totalCups(213) ➞ 248
//Notes
//Number of cups I bought + number of cups I got for free.
//Only valid inputs will be given.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(totalCups(6), 7)
//Test.assertEquals(totalCups(3), 3)
//Test.assertEquals(totalCups(7), 8)
//Test.assertEquals(totalCups(12), 14)
//Test.assertEquals(totalCups(213), 248)
//Test.assertEquals(totalCups(16), 18)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: WordCharWord

//tags: formatting,strings

//url: https://edabit.com/challenge/ep3sJHtww6PdgGszH

//Description:
//Create a function that will put the first argument, a character, between every word in the second argument, a string.
//Examples
//add("R", "javascript is fun") ➞ "javascriptRisRfun"
//
//add("#", "hello world!") ➞ "hello#world!"
//
//add("#", " ") ➞ "#"
//Notes
//Make sure there are no spaces between words when returning the function.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(add("#", "hello world"), "hello#world")
//Test.assertEquals(add("R", "javascript is fun"), "javascriptRisRfun")
//Test.assertEquals(add("*", "use .join() for this challenge"), "use*.join()*for*this*challenge")
//Test.assertEquals(add("#", " "), "#")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Add, Subtract, Multiply or Divide?

//tags: math,numbers

//url: https://edabit.com/challenge/XyPee4TdK64BTgvbD

//Description:
//Write a function that takes two numbers and returns if they should be added, subtracted, multiplied or divided to get 24. If none of the operations can give 24, return null.
//Examples
//operation(15, 9) ➞ "added"
//
//operation(26, 2) ➞ "subtracted"
//
//operation(11, 11) ➞ null
//Notes
//Only integers are used as test input.
//Numbers should be added, subtracted, divided or multiplied in the order they appear in the parameters.
//The function should return either "added", "subtracted", "divided", "multiplied" or null.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(operation(12, 12), "added")
//Test.assertEquals(operation(100, 76), "subtracted")
//Test.assertEquals(operation(6, 4), "multiplied")
//Test.assertEquals(operation(528, 22), "divided")
//Test.assertEquals(operation(10, 12), null)

