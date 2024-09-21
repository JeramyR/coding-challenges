

//title: Minimal II: Boolean Redundancy

//tags: conditions,language_fundamentals,logic

//url: https://edabit.com/challenge/gNMo9HagBZpWyAoNS

//Description:
//Check the principles of minimalist code in the intro to the first challenge.
//In the Code tab you will find a code that is missing a single character in order to pass the tests. However, your goal is to submit a function as minimalist as possible. Use the tips in the tips section down below.
//Write a function that returns the string "even" if the given integer is even, and the string "odd" if it's odd.
//Tips
//Converting a boolean, or something that will ultimately be interpreted as a boolean, into a boolean is redundant.
//For example, the code:
//let bool = Boolean(x < 4)
//return bool === true
//Is equivalent to simply:
//return x < 4
//A comparison with <, <=, ===, !==, >=, > will always result in a boolean, therefore using the function Boolean() is totally unnecessary.
//bool === true is redundant, as it will always return bool.
//To obtain the opposite of bool we could use bool === false. However, a much cleaner way of doing this is simply !bool.
//While preserving readability, avoid declaring unnecessary variables.
//Notes
//This is an open series: there isn't a definite list of features for the challenges. Please, do not hesitate to leave your suggestions in Comments.
//Readability is indeed a subjective concept. Let's discuss it! Feel free to leave your opinion in Comments.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(parity(2), 'even')
//Test.assertEquals(parity(3), 'odd')
//Test.assertEquals(parity(10), 'even')
//Test.assertEquals(parity(31), 'odd')
//Test.assertEquals(parity(666), 'even')
//Test.assertEquals(parity(777), 'odd')
//Test.assertEquals(parity(3482034), 'even')
//Test.assertEquals(parity(3482035), 'odd')

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Number of Stickers

//tags: algebra,math

//url: https://edabit.com/challenge/4afZPJkfREMhcjNsb

//Description:
//Given a Rubik's Cube with a side length of n, return the number of individual stickers that are needed to cover the whole cube.
//
//The Rubik's cube of side length 1 has 6 stickers.
//The Rubik's cube of side length 2 has 24 stickers.
//The Rubik's cube of side length 3 has 54 stickers.
//Examples
//howManyStickers(1) ➞ 6
//
//howManyStickers(2) ➞ 24
//
//howManyStickers(3) ➞ 54
//Notes
//Keep in mind there are 6 faces to keep track of.
//Expect only positive whole numbers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(howManyStickers(1), 6)
//Test.assertEquals(howManyStickers(2), 24)
//Test.assertEquals(howManyStickers(3), 54)
//Test.assertEquals(howManyStickers(4), 96)
//Test.assertEquals(howManyStickers(5), 150)
//Test.assertEquals(howManyStickers(6), 216)
//Test.assertEquals(howManyStickers(7), 294)
//Test.assertEquals(howManyStickers(8), 384)
//Test.assertEquals(howManyStickers(9), 486)
//Test.assertEquals(howManyStickers(10), 600)
//Test.assertEquals(howManyStickers(11), 726)
//Test.assertEquals(howManyStickers(12), 864)
//Test.assertEquals(howManyStickers(13), 1014)
//Test.assertEquals(howManyStickers(14), 1176)
//Test.assertEquals(howManyStickers(15), 1350)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Burglary Series (19): Prevent Changes

//tags: logic,objects

//url: https://edabit.com/challenge/eQs2yCBnzRZ3dnRKd

//Description:
//The police send you an electronic statement for you to sign. As you begin to sign, an error pops up. Apparently, they sent you a protected document.
//This challenge is a bit different as the function you are given already contains some code that you should not change or remove. Also, don't do a return statement, it is already included. Your task is, given an object, prevent changes to that object.
//Examples
//const obj = { noChanges: true }
//
//preventChanges(obj) {
//  // Write your code here, don't use a return statement
//
//  obj.noChanges = false;
//  obj.signature = "whatever"
//  return obj;
//
//}  ➞ { noChanges: true }
//Notes
//If you have suggestions on how to present or further test this challenge please leave me a comment. Thanks!
//This series is part of a collection that focuses on objects. If you are interested in following the breathtaking narrative skills of yours truly or just do some object focused challenges (the challenges are ordered in ascending difficulty order), you can more easily do that here.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(preventChanges({noChanges: true}), {noChanges: true})

