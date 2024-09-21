

//title: Array of Multiples

//tags: arrays,loops,math,numbers

//url: https://edabit.com/challenge/ebcd4Xu8TLizaj6dm

//Description:
//Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.
//Examples
//arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
//
//arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
//
//arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
//Notes
//Notice that num is also included in the returned array.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(arrayOfMultiples(7, 5), [7, 14, 21, 28, 35])
//Test.assertSimilar(arrayOfMultiples(12, 10), [12, 24, 36, 48, 60, 72, 84, 96, 108, 120])
//Test.assertSimilar(arrayOfMultiples(17, 7), [17, 34, 51, 68, 85, 102, 119])
//Test.assertSimilar(arrayOfMultiples(630, 14), [630, 1260, 1890, 2520, 3150, 3780, 4410, 5040, 5670, 6300, 6930, 7560, 8190, 8820])
//Test.assertSimilar(arrayOfMultiples(140, 3), [140, 280, 420])
//Test.assertSimilar(arrayOfMultiples(7, 8), [7, 14, 21, 28, 35, 42, 49, 56])
//Test.assertSimilar(arrayOfMultiples(11, 21), [11, 22, 33, 44, 55, 66, 77, 88, 99, 110, 121, 132, 143, 154, 165, 176, 187, 198, 209, 220, 231])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Return the Objects Keys and Values

//tags: formatting,language_fundamentals,objects

//url: https://edabit.com/challenge/AP4hnF97anRc2mAZ6

//Description:
//Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically, and their corresponding values in the same order.
//Examples
//keysAndValues({ a: 1, b: 2, c: 3 })
//➞ [["a", "b", "c"], [1, 2, 3]]
//
//keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
//➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]
//
//keysAndValues({ key1: true, key2: false, key3: undefined })
//➞ [["key1", "key2", "key3"], [true, false, undefined]]
//Notes
//Remember to sort the keys.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(keysAndValues({a: 1, b: 2, c: 3}), [["a", "b", "c"], [1, 2, 3]])
//Test.assertSimilar(keysAndValues({a: "Apple", b: "Microsoft", c: "Google"}), [["a", "b", "c"], ["Apple", "Microsoft", "Google"]])
//Test.assertSimilar(keysAndValues({key1: true, key2: false, key3: undefined}), [["key1", "key2", "key3"], [true, false, undefined]])
//Test.assertSimilar(keysAndValues({1: null, 2: null, 3: null}), [["1", "2", "3"], [null, null, null]])
//Test.assertSimilar(keysAndValues({key1: "cat", key2: "dog", key3: null}), [["key1", "key2", "key3"], ["cat", "dog", null]])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Convert Key, Values in an Object to Array

//tags: arrays,objects

//url: https://edabit.com/challenge/4aaBNPnFMc3bzR7JR

//Description:
//Write a function that converts an object into an array of keys and values.
//Examples
//objectToArray({
//  D: 1,
//  B: 2,
//  C: 3
//}) ➞ [["D", 1], ["B", 2], ["C", 3]]
//
//objectToArray({
//  likes: 2,
//  dislikes: 3,
//  followers: 10
//}) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(objectToArray({
//  D: 1, 
//  B: 2, 
//  C: 3
//}), [["D", 1], ["B", 2], ["C", 3]])
//​
//Test.assertSimilar(objectToArray({
//  likes: 2, 
//  dislikes: 3, 
//  followers: 10
//}), [["likes", 2], ["dislikes", 3], ["followers", 10]])

