

//title: Promises II: What Is a Callback?

//tags: functional_programming,language_fundamentals

//url: https://edabit.com/challenge/W6RRCaj8mZJgiRAgy

//Description:
//Callbacks are first-class functions. This means they have first-class characteristics, like being able to be passed to other functions. There was a time when callbacks were used to handle async operations, but we needed something better because of a few shortcomings (like problems with nested callbacks).
//Here's a simple example of a callback:
//function asyncFunc(cb) {
//  let result = ""
//  // After some time the result of an async opertion comes back and is put in the "result" variable.  We'll use a string for this example.   
//  result = "hello"
//  cb(result)
//}
//
//function callback(str) {
//  console.log(str)
//}
//
//asyncFunc(callback)
//console.log("goodbye")
//
//// goodbye
//// hello
//"goodbye" appears before "hello" because the async operation in asyncFunc() is non-blocking, meaning that it is set aside until it finishes but in the meantime we go ahead and call the next function.
//Challenge
//Fix anotherFunc() so that calls to it will change the doc variable to bye.
//Keep the setTimeout to 100ms and do not change the callback function or the doc variable.
//Notes
//Check the Resources tab for more info on callbacks.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(doc, "hello", "Do not change the doc variable")
//​
//anotherFunc(callback)
//​
//setTimeout(()=> {
//  Test.assertEquals(doc, "bye")
//}, 1000)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Double Letters

//tags: regex,strings,validation

//url: https://edabit.com/challenge/YHLaB8itA9tEDN5TG

//Description:
//Create a function that takes a word and returns true if the word has two consecutive identical letters.
//Examples
//doubleLetters("loop") ➞ true
//
//doubleLetters("yummy") ➞ true
//
//doubleLetters("orange") ➞ false
//
//doubleLetters("munchkin") ➞ false
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//// True test cases
//Test.assertEquals(doubleLetters("loop"), true)
//Test.assertEquals(doubleLetters("meeting"), true)
//Test.assertEquals(doubleLetters("yummy"), true)
//Test.assertEquals(doubleLetters("moo"), true)
//Test.assertEquals(doubleLetters("toodles"), true)
//Test.assertEquals(doubleLetters("droop"), true)
//Test.assertEquals(doubleLetters("loot"), true)
//// False test cases
//Test.assertEquals(doubleLetters("orange"), false)
//Test.assertEquals(doubleLetters("munchkin"), false)
//Test.assertEquals(doubleLetters("forestry"), false)
//Test.assertEquals(doubleLetters("raindrops"), false)
//Test.assertEquals(doubleLetters("gold"), false)
//Test.assertEquals(doubleLetters("paradise"), false)
//Test.assertEquals(doubleLetters("chicken"), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Odd Up, Even Down — N Times

//tags: arrays,control_flow,loops

//url: https://edabit.com/challenge/MsNyn2xmTzRWjFuMT

//Description:
//Create a function that performs an even-odd transform to an array, n times. Each even-odd transformation:
//Adds two (+2) to each odd integer.
//Subtracts two (-2) from each even integer.
//Examples
//evenOddTransform([3, 4, 9], 3) ➞ [9, -2, 15]
//// Since [3, 4, 9] => [5, 2, 11] => [7, 0, 13] => [9, -2, 15]
//
//evenOddTransform([0, 0, 0], 10) ➞ [-20, -20, -20]
//
//evenOddTransform([1, 2, 3], 1) ➞ [3, 0, 5]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(evenOddTransform([3, 4, 9], 3), ([9, -2, 15]))
//Test.assertSimilar(evenOddTransform([0, 0, 0], 10), ([-20, -20, -20]))
//Test.assertSimilar(evenOddTransform([1, 2, 3], 1), ([3, 0, 5]))
//Test.assertSimilar(evenOddTransform([55, 90, 830], 2), ([59, 86, 826]))

