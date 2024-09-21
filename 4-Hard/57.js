

//title: Count Number of Identical Arrays

//tags: algorithms,arrays

//url: https://edabit.com/challenge/adJw7Rq3dnDGSZkX5

//Description:
//Create a function that takes four arrays as arguments and returns a count of the total number of identical arrays.
//Examples
//countIdenticalArrays([0, 0, 0], [0, 1, 2], [0, 0, 0], [2, 1, 0]) ➞ 2
//
//countIdenticalArrays([0, 1, 0], [0, 1, 2], [0, 2, 0], [2, 1, 0]) ➞ 0
//
//countIdenticalArrays([0, 1, 2], [0, 1, 2], [0, 1, 2], [2, 1, 0]) ➞ 3
//Notes
//Don't forget to return the result.
//If you get stuck on a challenge, find help in the Resources tab.
//If you're really stuck, unlock solutions in the Solutions tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(countIdenticalArrays([0, 0, 0], [0, 1, 2], [0, 0, 0], [2, 1, 0]), 2)
//Test.assertEquals(countIdenticalArrays([0, 1, 0], [0, 1, 2], [0, 2, 0], [2, 1, 0]), 0)
//Test.assertEquals(countIdenticalArrays([0, 1, 2], [0, 1, 2], [0, 1, 2], [2, 1, 0]), 3)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Adding a Function to the String Prototype

//tags: language_fundamentals,strings

//url: https://edabit.com/challenge/2buQEWggGkx7RQYD7

//Description:
//One of the fun parts of JavaScript is that you can extend all the standard types by extending their prototype. In this challenge, you need to give JavaScript Strings a swapCase() function, which will return a new string with all upper case characters swapped for lower case characters, and vice versa. Any non-alphabetic characters should be kept as they are.
//Examples
//"Hello".swapCase() ➞ "hELLO"
//
//"2 4 6 8 WHO DO WE APPRECIATE?".swapCase() ➞ "2 4 6 8 who do we appreciate?"
//
//"aBcD".swapCase().swapCase() ➞ "aBcD"
//Notes
//swapCase() should not alter the original string.
//Although you can add new functions to the standard data types, it's not generally a good idea in large projects!

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals("Hello".swapCase(), "hELLO")
//Test.assertEquals("2 4 6 8 WHO DO WE APPRECIATE?".swapCase(),'2 4 6 8 who do we appreciate?')
//Test.assertEquals("aBcD".swapCase().swapCase(), "aBcD")
//Test.assertEquals("".swapCase(), "")
//Test.assertEquals('!"£$%^&*()'.swapCase(), '!"£$%^&*()')
//Test.assertEquals("I once saw an Octopus attempt to devour a whole TUNA.".swapCase(), 'i ONCE SAW AN oCTOPUS ATTEMPT TO DEVOUR A WHOLE tuna.')

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Split and Delimit

//tags: regex,strings

//url: https://edabit.com/challenge/D7wauJQRRCnCqroEZ

//Description:
//Write a function that splits a string into substrings of size n, adding a specified delimiter between each of the pieces.
//Examples
//splitAndDelimit("bellow", 2, "&") ➞ "be&ll&ow"
//
//splitAndDelimit("magnify", 3, ":") ➞ "mag:nif:y"
//
//splitAndDelimit("poisonous", 2, "~") ➞ "po~is~on~ou~s"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(splitAndDelimit("bellow", 2, '&'), "be&ll&ow")
//Test.assertEquals(splitAndDelimit("magnify", 3, ':'), "mag:nif:y")
//Test.assertEquals(splitAndDelimit("poisonous", 2, '~'), "po~is~on~ou~s")
//Test.assertEquals(splitAndDelimit("shape-shifting", 5, '^'), "shape^-shif^ting")
//Test.assertEquals(splitAndDelimit("nebulous", 1, '#'), "n#e#b#u#l#o#u#s")

