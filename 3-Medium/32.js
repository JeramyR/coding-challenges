

//title: ES6: Destructuring Arrays V

//tags: arrays,language_fundamentals

//url: https://edabit.com/challenge/gMXdPQQbMdws8fTxC

//Description:
//ES6 Destructuring can come in handy when you use regular expressions. Here is a function that uses a regular expression to parse a URL.
//const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url)
//
//parseURL("https://developer.mozilla.org/en-US/Web/JavaScript")
//// returns ["https://developer.mozilla.org/en-US/Web/JavaScript", "https", "developer.mozilla.org", "en-US/Web/JavaScript"]
//
//// the protocol = https
//// the host = developer.mozilla.org
//// the path = en-US/Web/JavaScript
//From the parsedURL result you could assign these segments using ES6 array destructuring.
//Challenge
//Assign the variables protocol, host, path inside the brackets of the given string.
//Pay close attention to what is being returned from parsedURL, as you will need to skip over any values that are not protocol, host, or path.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const url1 = 'https://developer.mozilla.org/en-US/Web/JavaScript'
//​
//const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url1)
//eval(str)
//​
//const validString = (str) => {
//  return /(protocol).*(host).*(path)/.test(str) ? "valid" : "not valid" 
//}
//​
//const stringConstraints = (expression) => {
//  return /^\[.*\]\s\=\sparsedURL/.test(str) ? "valid" : "not valid" 
//}
//​
//Test.assertEquals(validString(str), "valid", "You must use the correct variables and they must be inside the brackets")
//Test.assertEquals(stringConstraints(str), "valid", "Changes must only be made inside the [ ] brackets")
//Test.assertEquals(protocol, "https", "The variable protocol must equal https")
//Test.assertEquals(host, "developer.mozilla.org", "The variable host must equal developer.mozilla.org")
//Test.assertEquals(path, "en-US/Web/JavaScript", "The variable path must equal en-US/Web/JavaScript")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Return the Middle Character(s) of a String

//tags: formatting,math,regex,strings

//url: https://edabit.com/challenge/R3649PDvoFf6wGxyg

//Description:
//Create a function that takes a string and returns the middle character(s). If the word's length is odd, return the middle character. If the word's length is even, return the middle two characters.
//Examples
//getMiddle("test") ➞ "es"
//
//getMiddle("testing") ➞ "t"
//
//getMiddle("middle") ➞ "dd"
//
//getMiddle("A") ➞ "A"
//Notes
//All test cases contain a single word (as a string).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(getMiddle("test"), "es")
//Test.assertEquals(getMiddle("testing"), "t")
//Test.assertEquals(getMiddle("middle"), "dd")
//Test.assertEquals(getMiddle("A"), "A")
//Test.assertEquals(getMiddle("inhabitant"), "bi")
//Test.assertEquals(getMiddle("brown"), "o")
//Test.assertEquals(getMiddle("pawn"), "aw")
//Test.assertEquals(getMiddle("cabinet"), "i")
//Test.assertEquals(getMiddle("fresh"), "e")
//Test.assertEquals(getMiddle("shorts"), "or")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Factorize a Number

//tags: control_flow,loops,math,numbers

//url: https://edabit.com/challenge/zLYbAPk8NMnwoPhjG

//Description:
//Create a function that takes a number as its argument and returns an array of all its factors.
//Examples
//factorize(12) ➞ [1, 2, 3, 4, 6, 12]
//
//factorize(4) ➞ [1, 2, 4]
//
//factorize(17) ➞ [1, 17]
//Notes
//The input integer will be positive.
//A factor is a number that evenly divides into another number without leaving a remainder. The second example is a factor of 12, because 12 / 2 = 6, with remainder 0.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(factorize(12), [1, 2, 3, 4, 6, 12])
//Test.assertSimilar(factorize(4), [1, 2, 4])
//Test.assertSimilar(factorize(17), [1, 17])
//Test.assertSimilar(factorize(24), [1, 2, 3, 4, 6, 8, 12, 24])
//Test.assertSimilar(factorize(1), [1])

