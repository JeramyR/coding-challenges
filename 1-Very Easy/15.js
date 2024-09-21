

//title: Return a String as an Integer

//tags: language_fundamentals,numbers,strings

//url: https://edabit.com/challenge/rGsgEswWuW339yNxY

//Description:
//Create a function that takes a string and returns it as an integer.
//Examples
//stringInt("6") ➞ 6
//
//stringInt("1000") ➞ 1000
//
//stringInt("12") ➞ 12
//Notes
//All numbers will be whole.
//All numbers will be positive.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(stringInt("6"), 6)
//Test.assertEquals(stringInt("2"), 2)
//Test.assertEquals(stringInt("10"), 10)
//Test.assertEquals(stringInt("666"), 666)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Area of a Rectangle

//tags: algebra,geometry,math

//url: https://edabit.com/challenge/g6b9HqkXqWu6GpfTo

//Description:
//Create a function that calculates the area of a rectangle. If the arguments are invalid, your function must return -1.
//Examples
//area(3, 4) ➞ 12
//
//area(10, 11) ➞ 110
//
//area(-1, 5) ➞ -1
//
//area(0, 2) ➞ -1
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(area(5, 3), 15)
//Test.assertEquals(area(8, 5), 40)
//Test.assertEquals(area(5, 4), 20)
//Test.assertEquals(area(2, 3), 6)
//Test.assertEquals(area(10000, 10000), 100000000)
//Test.assertEquals(area(-2, -5), -1)
//Test.assertEquals(area(0, 3), -1)
//Test.assertEquals(area(5, -3), -1)
//Test.assertEquals(area(0, 1), -1)
//Test.assertEquals(area(-1, 0), -1)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Minimal I: If Boolean Then Boolean

//tags: conditions,language_fundamentals,logic,validation

//url: https://edabit.com/challenge/nEdLGbAZQ5LaiumP6

//Description:
//In this series we're going to see common redundancies and superfluities that make our code unnecessarily complicated and less readable, and we're going to learn how to avoid them.
//In line with the spirit of the series, we can summarize the general rules of minimalist code in two simple principles:
//Keep your code clean and readable.
//While not violating the first principle: get rid of everything superfluous.
//In order to achieve this you should:
//Deepen your knowledge of logics.
//Deepen your understanding of the particular language you're coding with.
//I would also add: observe and learn from the pros. Make a habit of checking the Solutions tab after solving a challenge on Edabit. There is absolutely nothing wrong in assimilating features of someone else's coding style, especially if yours is not yet fully developed.
//Goal
//In the Code tab you will find a code that is missing a single character in order to pass the tests. However, YOUR GOAL is to submit a function as minimalist as possible. Use the tips in the Tips section down below.
//Write a function that returns true if the given integer is even, and false if it's odd.
//Tips
//Using an if statement in order to return boolean or to set a variable to a boolean is redundant.
//A function that returns true if a person's age is 18 or greater and false otherwise, could be written as:
//function legalAge(age) {
//  if(age >= 18) {
//    return true
//  }
//  else {
//    return false
//  }
//}
//Notice that age >= 18 will already give us a boolean (true or false). This means that the function can be written in a much simpler and cleaner way:
//function legalAge(age) {
//  return age >= 18
//}
//Notes
//This is an open series: there isn't a definite list of features for the challenges. Please, do not hesitate to leave your suggestions in the Comment tab.
//Readability is indeed a subjective concept. Let's discuss it! Feel free to leave your opinion in the Comments tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isEven(2), true)
//Test.assertEquals(isEven(3), false)
//Test.assertEquals(isEven(10), true)
//Test.assertEquals(isEven(31), false)
//Test.assertEquals(isEven(666), true)
//Test.assertEquals(isEven(777), false)
//Test.assertEquals(isEven(3482034), true)
//Test.assertEquals(isEven(3482035), false)

