

//title: Promises VIII: Old Callback API

//tags: functional_programming

//url: https://edabit.com/challenge/R8atdhgsG4B69AZzR

//Description:
//You may run into some old asynchronous API that requires you to pass in a callback. Take the setTimeout() function for example:
//setTimeout(() => saySomething("1 second passed"), 1000)
//What if an error occured in the saySomething() function. How could you handle it? Wrap it with a Promise!
//There are some elements missing in the wait function, it should return a promise. Create an error handler and assign the error to ERR inside the handler.
//Notes
//Do not change the function saySomething().
//You should not have to erase any of the existing code.
//Check Resources if you get stuck.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//function promiseState(p) {
//  const t = {};
//  return Promise.race([p, t]).then(v => (v === t)? "pending" : "fulfilled", () => "rejected");
//}
//​
//Test.assertEquals(ERR, "", "You are only allowed to reassign 'ERR' in the error handler.")
//promiseState(wait).then(state => Test.assertEquals(state, "fulfilled"))
//wait().then(x => Test.assertEquals(ERR, "what the heck"))

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Next Prime

//tags: loops,math,numbers

//url: https://edabit.com/challenge/WYHgoTtdQHjjSvD7G

//Description:
//Given an integer, create a function that returns the next prime. If the number is prime, return the number itself.
//Examples
//nextPrime(12) ➞ 13
//
//nextPrime(24) ➞ 29
//
//nextPrime(11) ➞ 11
//// 11 is a prime, so we return the number itself.
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(nextPrime(12), 13)
//Test.assertEquals(nextPrime(24), 29)
//Test.assertEquals(nextPrime(11), 11)
//Test.assertEquals(nextPrime(13), 13)
//Test.assertEquals(nextPrime(14), 17)
//Test.assertEquals(nextPrime(33), 37)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Find the Missing Letter

//tags: algorithms,arrays,math

//url: https://edabit.com/challenge/g4dFuspeWuXLLu65B

//Description:
//Create a function that takes an array of increasing letters and return the missing letter.
//Examples
//missingLetter(["a", "b", "c", "e", "f", "g"]) ➞ "d"
//
//missingLetter(["O", "Q", "R", "S"]) ➞ "P"
//
//missingLetter(["t", "u", "v", "w", "x", "z"]) ➞ "y"
//
//missingLetter(["m", "o"]) ➞ "n"
//Notes
//Tests will always have exactly one letter missing.
//The length of the test array will always be at least two.
//Tests will be in one particular case (upper or lower but never both).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(missingLetter(["a", "b", "c", "e", "f", "g"]), "d");
//Test.assertEquals(missingLetter(["O", "Q", "R", "S"]), "P");
//Test.assertEquals(missingLetter(["t", "u", "v", "w", "x", "z"]), "y");
//Test.assertEquals(missingLetter(["m", "o"]), "n");
//Test.assertEquals(missingLetter(["a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]), "i");
//Test.assertEquals(missingLetter(["q", "s", "t"]), "r");
//Test.assertEquals(missingLetter(["c", "d", "e", "f", "g", "h", "i", "k", "l", "m", "n"]), "j");
//Test.assertEquals(missingLetter(["e", "f", "g", "h", "i", "j", "k", "m", "n", "o", "p"]), "l");
//Test.assertEquals(missingLetter(["t", "u", "w", "x"]), "v");
//Test.assertEquals(missingLetter(["B", "D"]), "C");

