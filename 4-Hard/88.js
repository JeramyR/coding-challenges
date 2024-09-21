

//title: Number of Even or Odd Digits

//tags: arrays,higher_order_functions

//url: https://edabit.com/challenge/fZxhP7ZSFEhLGvjME

//Description:
//Create a function that takes in an array of integers returns the number of even or odd digits for each number, depending on the parameter.
//Examples
//countDigits([22, 53, 99, 61, 777, 8], "odd") ➞ [0, 2, 2, 1, 3, 0]
//
//countDigits([22, 53, 99, 61, 777, 8], "even") ➞ [2, 0, 0, 1, 0, 1]
//
//countDigits([54, 113, 89, 10], "odd") ➞ [1, 3, 1, 1]
//
//countDigits([54, 113, 89, 10], "even") ➞ [1, 0, 1, 1]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(countDigits([22, 53, 99, 61, 777, 8], "odd"), [0, 2, 2, 1, 3, 0])
//Test.assertSimilar(countDigits([54, 113, 89, 10], "odd"), [1, 3, 1, 1])
//Test.assertSimilar(countDigits([17, 19, 21], "odd"), [2, 2, 1])
//Test.assertSimilar(countDigits([1, 2, 3, 4], "odd"), [1, 0, 1, 0])
//Test.assertSimilar(countDigits([22, 53, 99, 61, 777, 8], "even"), [2, 0, 0, 1, 0, 1])
//Test.assertSimilar(countDigits([54, 113, 89, 10], "even"), [1, 0, 1, 1])
//Test.assertSimilar(countDigits([5, 8, 9, 12], "even"), [0, 1, 0, 1])
//Test.assertSimilar(countDigits([1, 2, 3], "even"), [0, 1, 0])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sort Words by a String

//tags: sorting,strings

//url: https://edabit.com/challenge/ScrNCxkxyWEBAvfck

//Description:
//Create a function that sorts words by a given string.
//Examples
//sortByString(["apple", "banana", "cherry", "date"], "dbca")
//➞ ["date", "banana", "cherry", "apple"]
//
//sortByString(["small", "big", "medium"], "sazymtb")
//➞ ["small", "medium", "big"]
//
//sortByString(["poof", "floof", "loop"], "flatp")
//➞ ["floof", "loop", "poof"]
//Notes
//The string may have excess letters (see examples #1 and #2).
//There will be unique starting letters in each array.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(sortByString(["apple", "banana", "cherry", "date"], "dbca"),
//["date", "banana", "cherry", "apple"])
//​
//Test.assertSimilar(sortByString(["small", "big", "medium"], "sazymtb"),
//["small", "medium", "big"])
//​
//Test.assertSimilar(sortByString(["poof", "floof", "loop"], "flatp"),
//["floof", "loop", "poof"])
//​
//Test.assertSimilar(sortByString(["yellow", "phone", "book"], "abcdpy"),
//["book", "phone", "yellow"])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Extend the global Array object with an `isEqual()` method

//tags: arrays,language_fundamentals

//url: https://edabit.com/challenge/ngX9LEmCvRq7ud7J5

//Description:
//Extend the global Array object to have an instance method called isEqual(). The method should accept an array as the first argument, and a second optional argument that is a flag to ignore the order of the arrays. This second argument should default to false
//Examples
//[1, 2, 3].isEqual([1, 2, 3]) ➞ true
//
//[1, 2, 3].isEqual([1, 3, 2]) ➞ false
//
//[1, 2, 3].isEqual([1, 3, 2], true) ➞ true
//Notes
//This method does not need to compare Arrays, Objects, and non-primitives. It just needs to consider numbers, booleans, and strings.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar([1, 2, 3].isEqual([1, 2, 3]), true, "Test #1 - Same order")
//Test.assertSimilar([1, 2, 3].isEqual([1, 3, 2]), false, "Test #2 - Different order, ignoreOrder = false")
//Test.assertSimilar([7, 45, "hello"].isEqual(["hello", 45, 7], true), true, "Test #3 - Different order, ignoreOrder = true")

