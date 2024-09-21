

//title: Array of Consecutive Numbers

//tags: arrays,language_fundamentals,loops

//url: https://edabit.com/challenge/v5TorwH9tiNtddSY3

//Description:
//Implement a function that returns an array containing all the consecutive numbers in ascendant order from the given value low up to the given value high (bounds included).
//Examples
//getSequence(1, 5) ➞ [1, 2, 3, 4, 5]
//
//getSequence(98, 100) ➞ [98, 99, 100]
//
//getSequence(1000, 1000) ➞ [1000]
//Notes
//If you get stuck on a challenge, find help in the Resources tab.
//If you're really stuck, unlock solutions in the Solutions tab.
//ES6 deepening (for medium or higher level users): try to implement a one-liner function that calls a single method.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(getSequence(1, 5), [1, 2, 3, 4, 5], "Example #1")
//Test.assertSimilar(getSequence(98, 100), [98, 99, 100], "Example #2")
//Test.assertSimilar(getSequence(1000, 1000), [1000], "Example #3")
//Test.assertSimilar(getSequence(1450, 1460), [1450, 1451, 1452, 1453, 1454, 1455, 1456, 1457, 1458, 1459, 1460])
//Test.assertSimilar(getSequence(0, 3), [0, 1, 2, 3])
//Test.assertSimilar(getSequence(-10, 1), [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0,  1])
//Test.assertSimilar(getSequence(-100, -100), [-100])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Negate the Array of Numbers

//tags: arrays,language_fundamentals,loops,numbers

//url: https://edabit.com/challenge/BA8Pom669icAdkdgj

//Description:
//Given an array of numbers, negate all elements contained within.
//Negating a positive value -+n will return -n, because all +'s are removed.
//Negating a negative value --n will return n, because the first - turns the second minus into a +.
//Examples
//negate([1, 2, 3, 4]) ➞ [-1, -2, -3, -4]
//
//negate([-1, 2, -3, 4]) ➞ [1, -2, 3, -4]
//
//negate([]) ➞ []
//Notes
//If you get an empty array, return an empty array: []

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(negate([1, 2, 3, 4]), [-1, -2, -3, -4])
//Test.assertSimilar(negate([-1, -2, -3, -4]), [1, 2, 3, 4])
//Test.assertSimilar(negate([]), [])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Return the Four Letter Strings

//tags: arrays,conditions,strings,validation

//url: https://edabit.com/challenge/havnWL4BimvoaXNMn

//Description:
//Create a function that takes an array of strings and returns the words that are exactly four letters.
//Examples
//isFourLetters(["Tomato", "Potato", "Pair"]) ➞ ["Pair"]
//
//isFourLetters(["Kangaroo", "Bear", "Fox"]) ➞ ["Bear"]
//
//isFourLetters(["Ryan", "Kieran", "Jason", "Matt"]) ➞ ["Ryan", "Matt"]
//Notes
//You can expect valid strings for all test cases.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(isFourLetters(["Ryan", "Kieran", "Jason", "Matt"]), ["Ryan", "Matt"])
//Test.assertSimilar(isFourLetters(["Tomato", "Potato", "Pair"]), ["Pair"])
//Test.assertSimilar(isFourLetters(["Kangaroo", "Bear", "Fox"]), ["Bear"])
//Test.assertSimilar(isFourLetters(["Red", "Blue", "Green", "Pink"]), ["Blue", "Pink"])
//Test.assertSimilar(isFourLetters(["is", "up", "two", "elephant"]), [])
//Test.assertSimilar(isFourLetters([]), [])
//Test.assertSimilar(isFourLetters(["jazz", "quiz", "jump"]), ["jazz", "quiz", "jump"])
//Test.assertSimilar(isFourLetters([""]), [])
//Test.assertSimilar(isFourLetters(["Broccoli", "Carrot", "Spinach"]), [])

