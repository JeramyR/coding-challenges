

//title: Similar Bread

//tags: arrays,language_fundamentals,logic,validation

//url: https://edabit.com/challenge/w7BYrKiiszu5eJkuc

//Description:
//Given two arrays, which represent two sandwiches, return whether both sandwiches use the same type of bread. The bread will always be found at the start and end of the array.
//Examples
//hasSameBread(
//  ["white bread", "lettuce", "white bread"],
//  ["white bread", "tomato", "white bread"]
//) ➞ true
//
//hasSameBread(
//  ["brown bread", "chicken", "brown bread"],
//  ["white bread", "chicken", "white bread"]
//) ➞ false
//
//hasSameBread(
//  ["toast", "cheese", "toast"],
//  ["brown bread", "cheese", "toast"]
//) ➞ false
//Notes
//The arrays will always be three elements long.
//The first piece of bread on one sandwich must be the same as the first piece of bread on the other sandwich. The same goes for the last piece of bread.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(hasSameBread(
//  ["white bread", "lettuce", "white bread"],
//  ["white bread", "tomato", "white bread"]
//), true)
//​
//Test.assertEquals(hasSameBread(
//  ["brown bread", "chicken", "brown bread"],
//  ["white bread", "chicken", "white bread"]
//), false)
//​
//Test.assertEquals(hasSameBread(
//  ["toast", "cheese", "toast"],
//  ["brown bread", "cheese", "toast"]
//), false)
//​
//Test.assertEquals(hasSameBread(
//  ["white bread", "lettuce", "toast"],
//  ["white bread", "tomato", "toast"]
//), true)
//​
//Test.assertEquals(hasSameBread(
//  ["white bread", "lettuce", "toast"],
//  ["brown bread", "tomato", "toast"]
//), false)
//​

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Nth Star Number

//tags: algebra,math

//url: https://edabit.com/challenge/XgCxPs4xxdDJcqEe6

//Description:
//Create a function that takes a positive integer n and returns the nth "star number".
//A star number is a centered figurate number that represents a centered hexagram (six-pointed star), such as the one that Chinese checkers is played on.
//
//Examples
//starNumber(2) ➞ 13
//// n = 2
//// 2nd star number = 13
//
//starNumber(3) ➞ 37
//// n = 3
//// 3rd star number = 37
//
//starNumber(5) ➞ 121
//// n = 5
//// 5th star number = 121
//Notes
//n will always be a positive integer.
//The nth term of a star number can be represented as 6n(n-1) + 1
//See Resources for more information.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(starNumber(2), 13)
//Test.assertEquals(starNumber(3), 37)
//Test.assertEquals(starNumber(6), 181)
//Test.assertEquals(starNumber(6), 181)
//Test.assertEquals(starNumber(8), 337)
//Test.assertEquals(starNumber(6), 181)
//Test.assertEquals(starNumber(11), 661)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Return the Total Number of Parameters

//tags: language_fundamentals

//url: https://edabit.com/challenge/hztqDz4mjCPpLMMF4

//Description:
//Create a function that returns the total number of parameters passed in.
//Examples
//numberArgs("a", "b", "c") ➞ 3
//
//numberArgs(10, 20, 30, 40, 50) ➞ 5
//
//numberArgs(x, y) ➞ 2
//
//numberArgs() ➞ 0
//Notes
//How can you express the input parameter so it takes a variable number of arguments?
//Check the Resources tab for additional info.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(numberArgs('a', 'b', 'c'), 3)
//Test.assertEquals(numberArgs(10, 20, 30, 40, 50), 5)
//Test.assertEquals(numberArgs('x', 'y'), 2)
//Test.assertEquals(numberArgs(), 0)

