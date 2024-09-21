

//title: Lexicographically First and Last

//tags: arrays,sorting,strings

//url: https://edabit.com/challenge/m6GYKsereS6JdARGW

//Description:
//Write a function that returns the lexicographically first and lexicographically last rearrangements of a lowercase string. Output the results in the following manner:
//firstAndLast(string) ➞ [first, last]
//Examples
//firstAndLast("marmite") ➞ ["aeimmrt", "trmmiea"]
//
//firstAndLast("bench") ➞ ["bcehn", "nhecb"]
//
//firstAndLast("scoop") ➞ ["coops", "spooc"]
//Notes
//Lexicographically first: the permutation of the string that would appear first in the English dictionary (if the word existed).
//Lexicographically last: the permutation of the string that would appear last in the English dictionary (if the word existed).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(firstAndLast("marmite"), ["aeimmrt", "trmmiea"])
//Test.assertSimilar(firstAndLast("bench"), ["bcehn", "nhecb"])
//Test.assertSimilar(firstAndLast("scoop"), ["coops", "spooc"])
//Test.assertSimilar(firstAndLast("fanatic"), ["aacfint", "tnifcaa"])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Promises IV: The Reject Callback

//tags: functional_programming

//url: https://edabit.com/challenge/HT2dHkbzmLDZgsS7G

//Description:
//Async operations don't always go as planned. When errors creep up we need to know how to handle them. We can pass the reject callback to our executor function to pass errors to our promise.
//let promise = new Promise( (resolve, reject) => {
//  setTimeout(( ) => {
//    /* something went wrong */
//     reject('oops!')
//  }, 1000)
//})
//You can pass Error objects as well. Here we pass a simple string "oops!".
//Challenge
//Reject the promise with the simple string "It's not a dog!".
//Notes
//Check the Resources tab for more info on promises.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(promise, promise)
//​
//promise.then(res => Test.assertEquals(res, "Ignore this test","Do not change the animal variable." ))
//      .catch(e => Test.assertEquals(e, "It's not a dog!"))

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Re-Form the Word

//tags: formatting,language_fundamentals,strings

//url: https://edabit.com/challenge/KQQ7RMXjSK257GQgy

//Description:
//A word has been split into a left part and a right part. Re-form the word by adding both halves together, changing the first character to an uppercase letter.
//Examples
//getWord("seas", "onal") ➞ "Seasonal"
//
//getWord("comp", "lete") ➞ "Complete"
//
//getWord("lang", "uage") ➞ "Language"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(getWord("maga", "zine"), "Magazine")
//Test.assertEquals(getWord("reli", "able"), "Reliable")
//Test.assertEquals(getWord("impl", "icit"), "Implicit")
//Test.assertEquals(getWord("docu", "ment"), "Document")
//Test.assertEquals(getWord("oppo", "site"), "Opposite")
//Test.assertEquals(getWord("offi", "cial"), "Official")
//Test.assertEquals(getWord("disa", "gree"), "Disagree")
//Test.assertEquals(getWord("acci", "dent"), "Accident")
//Test.assertEquals(getWord("omis", "sion"), "Omission")
//Test.assertEquals(getWord("vigo", "rous"), "Vigorous")
//Test.assertEquals(getWord("pred", "ator"), "Predator")
//Test.assertEquals(getWord("prog", "ress"), "Progress")
//Test.assertEquals(getWord("inva", "sion"), "Invasion")
//Test.assertEquals(getWord("fare", "well"), "Farewell")
//Test.assertEquals(getWord("majo", "rity"), "Majority")
//Test.assertEquals(getWord("pers", "onal"), "Personal")
//Test.assertEquals(getWord("sequ", "ence"), "Sequence")
//Test.assertEquals(getWord("gove", "rnor"), "Governor")
//Test.assertEquals(getWord("igno", "rant"), "Ignorant")
//Test.assertEquals(getWord("fini", "shed"), "Finished")

