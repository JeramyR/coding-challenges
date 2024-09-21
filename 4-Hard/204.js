

//title: How Many Shuffles?

//tags: arrays,loops,math

//url: https://edabit.com/challenge/KX4Q6hAd4uMLrwrMQ

//Description:
//An out-shuffle, also known as an out Faro shuffle or a perfect shuffle, is a controlled method for shuffling playing cards. It is performed by splitting the deck into two equal halves and interleaving them together perfectly, with the condition that the top card of the deck remains in place.
//Using an array to represent a deck of cards, an out-shuffle looks like:
//[1, 2, 3, 4, 5, 6, 7, 8] ➞ [1, 5, 2, 6, 3, 7, 4, 8]
//// Card 1 remains in the first position.
//If we repeat the process, the deck eventually returns to original order:
//Shuffle 1:
//[1, 2, 3, 4, 5, 6, 7, 8] ➞ [1, 5, 2, 6, 3, 7, 4, 8]
//Shuffle 2:
//[1, 5, 2, 6, 3, 7, 4, 8] ➞ [1, 3, 5, 7, 2, 4, 6, 8]
//Shuffle 3:
//[1, 3, 5, 7, 2, 4, 6, 8] ➞ [1, 2, 3, 4, 5, 6, 7, 8]
//// Back where we started.
//Write a function shuffleCount that takes a positive even integer num representing the number of the cards in a deck, and returns the number of out-shuffles required to return the deck to its original order.
//Examples
//shuffleCount(8) ➞ 3
//
//shuffleCount(14) ➞ 12
//
//shuffleCount(52) ➞ 8
//Notes
//The number of cards is always greater than zero. Thus, the smallest possible deck size is 2.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(shuffleCount(2), 1)
//Test.assertEquals(shuffleCount(8), 3)
//Test.assertEquals(shuffleCount(14), 12)
//Test.assertEquals(shuffleCount(38), 36)
//Test.assertEquals(shuffleCount(52), 8)
//Test.assertEquals(shuffleCount(70), 22)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Learn Lodash: Write the "Property" Function - Return Value at the End String in an Ob

//tags: objects

//url: https://edabit.com/challenge/do9CKFbqmuTwR49c8

//Description:
//Write your own version of the lodash _.property function using vanilla JavaScript.
//It receives a string or an array representing a path in an object, it returns a function that receives an object. The new function will then return the value at the end of the path.
//For instance when using the normal javascript map method you could map an array like so:
//arrayOfCars.map(car => car.engine.sparkPlugs.replacementYear)
//returns [2020, 2021]
//But if you were using property you could write it like this:
//arrayOfCars.map(property('engine.sparkPlugs.replacementYear'))
//also returns [2020, 2021]
//This is a helper function that is often used by other more advanced lodash functions. As we write more of our own lodash functions, we need to use this.
//For instance, the "takeWhile" lodash function maps an array of objects and returns the ones that are a match. You can write it as _.takeWhile(users, 'active') and it will know that you wanting to use the "property" helper function because it received a string. It will then apply it to each value in the array and if 'active' is true it returns it. This is helpful when trying to write descriptive functions that describe what is happening at each step in your code.
//Arguments
//path (Array or String): The path of the property to get.
//returns: A new function.
//Examples
//const objects = [
//  { "a": { "b": 2 } },
//  { "a": { "b": 1 } }
//]
//
//objects.map(object, _.property("a.b"));
//// => [2, 1]
//
//objects.map(object, _.property(["a", "b"]));
//// => [2, 1]
//Notes
//Please don't import lodash, your challenge is to write your own version.
//This entire series of challenges can be found here.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const _ = require("lodash")
//​
//// Please don't import lodash into your answer.
//​
//const cars = [
//  {
//    manufacturer: "toyota",
//    engine: {
//      sparkPlugs: {
//        number: 4,
//        replacementYear: 2022,
//      },
//      timingBelt: {
//        make: "powerDrive",
//        replacementYear: 2024,
//        size: {
//          inches: 30,
//          milimeters: 762,
//        },
//      },
//      isDomestic: false,
//    },
//  },
//  {
//    manufacturer: "mazda",

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Valid Rondo Form?

//tags: loops,strings,validation

//url: https://edabit.com/challenge/QXGpj52dZfmM7STTe

//Description:
//Rondo Form is a type of musical structure, in which there is a recurring theme/refrain, notated as A. Here are the rules for valid rondo forms:
//Rondo forms always start and end with an A section.
//In between the A sections, there should be contrasting sections notated as B, then C, then D, etc... No letter should be skipped.
//There shouldn't be any repeats in the sequence (such as ABBACCA).
//Create a function which validates whether a given string is a valid Rondo Form.
//Examples
//validRondo("ABACADAEAFAGAHAIAJA") ➞ true
//
//validRondo("ABA") ➞ true
//
//validRondo("ABBACCA") ➞ false
//
//validRondo("ACAC") ➞ false
//
//validRondo("A") ➞ false
//Notes
//Inputs will be given as all uppercase.
//For the purposes of this challenge, accept ABA as valid Rondo forms.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(validRondo("ABACADAEAFAGAHAIAJA"), true)
//Test.assertEquals(validRondo("ABA"), true)
//Test.assertEquals(validRondo("ABBACCA"), false)
//Test.assertEquals(validRondo("ACAC"), false)
//Test.assertEquals(validRondo("A"), false)
//Test.assertEquals(validRondo("AB"), false)
//Test.assertEquals(validRondo("ABAC"), false)
//Test.assertEquals(validRondo("ABACA"), true)
//Test.assertEquals(validRondo("ABACADA"), true)
//Test.assertEquals(validRondo("ABACADAEA"), true)
//Test.assertEquals(validRondo("ABACADAEAFA"), true)
//Test.assertEquals(validRondo("ABACADAEAFAGA"), true)
//Test.assertEquals(validRondo("ABACADAEAFAGAHA"), true)
//Test.assertEquals(validRondo("ABACADAEAFAGAHAIA"), true)
//Test.assertEquals(validRondo("ABACADAEAFAGAHAIAJAKALAMANA"), true)
//Test.assertEquals(validRondo("ABACADAEAAGAHAIAJAKALAMANA"), false)
//Test.assertEquals(validRondo("ABACADAEAAGAHAIAJAKALAM"), false)
//Test.assertEquals(validRondo("HELLO"), false)

