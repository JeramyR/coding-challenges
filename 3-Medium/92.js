

//title: Check if the String is a Palindrome

//tags: strings,validation

//url: https://edabit.com/challenge/2kyS2ESQqPaoZhNSd

//Description:
//A palindrome is a word, phrase, number or other sequence of characters which reads the same backward or forward, such as madam or kayak.
//Write a function that takes a string and determines whether it's a palindrome or not. The function should return a boolean (true or false value).
//Examples
//isPalindrome("Neuquen") ➞ true
//
//isPalindrome("Not a palindrome") ➞ false
//
//isPalindrome("A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!") ➞ true
//Notes
//Should be case insensitive.
//Special characters (punctuation or spaces) should be ignored.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isPalindrome('A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!'), true)
//Test.assertEquals(isPalindrome('Neuquen'), true)
//Test.assertEquals(isPalindrome('Not a palindrome'), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Crowded Carriage Capacity

//tags: interview,loops,numbers

//url: https://edabit.com/challenge/auxE4Rj2YNcHNqE7H

//Description:
//A train has a maximum capacity of n passengers overall, which means each carriage's capacity will share an equal proportion of the maximum capacity.
//Create a function which returns the index of the first carriage which holds 50% or less of its maximum capacity. If no such carriage exists, return -1.
//Worked Example
//findASeat(200, [35, 23, 18, 10, 40]) ➞ 2
//
//// There are 5 carriages which each have a maximum capacity of 40 (200 / 5 = 40).
//// Index 0's carriage is too full (35 is 87.5% of the maximum).
//// Index 1's carriage is too full (23 is 57.5% of the maximum).
//// Index 2's carriage is good enough (18 is 45% of the maximum).
//// Return 2.
//Examples
//findASeat(20, [3, 5, 4, 2]) ➞ 3
//
//findASeat(1000, [50, 20, 80, 90, 100, 60, 30, 50, 80, 60]) ➞ 0
//
//findASeat(200, [35, 23, 40, 21, 38]) ➞ -1
//Notes
//If a train can hold 200 passengers, and has 5 carriages, then that means each carriage can hold a maximum of 40 passengers each.
//All carriage numbers will be positive integers, which will be able to divide evenly.
//Remember to return -1 if no carriage is empty enough.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(findASeat(20, [3, 5, 4, 2]), 3)
//Test.assertEquals(findASeat(1000, [50, 20, 80, 90, 100, 60, 30, 50, 80, 60]), 0)
//Test.assertEquals(findASeat(200, [35, 23, 40, 21, 38]), -1)
//Test.assertEquals(findASeat(200, [35, 23, 18, 10, 40]), 2)
//Test.assertEquals(findASeat(21, [6, 3, 7]), 1)
//Test.assertEquals(findASeat(11037, [1839, 0, 0]), 0)
//​
//// Author: Joshua Señoron

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Capital Split

//tags: loops,strings

//url: https://edabit.com/challenge/cjgxKpAaxAMHCjqsP

//Description:
//Create a function which adds spaces before every capital in a word. Uncapitalize the whole string afterwards.
//Examples
//capSpace("helloWorld") ➞ "hello world"
//
//capSpace("iLoveMyTeapot") ➞ "i love my teapot"
//
//capSpace("stayIndoors") ➞ "stay indoors"
//Notes
//The first letter will stay uncapitalized.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(capSpace("helloWorld"), "hello world")
//Test.assertEquals(capSpace("iLoveMyTeapot"), "i love my teapot")
//Test.assertEquals(capSpace("stayIndoors"), "stay indoors")

