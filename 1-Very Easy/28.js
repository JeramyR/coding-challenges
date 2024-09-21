

//title: Convert an Array to a String

//tags: arrays,language_fundamentals,numbers,strings

//url: https://edabit.com/challenge/BLJ5SyhMoZD892G7w

//Description:
//Create a function that takes an array of numbers or letters and returns a string.
//Examples
//arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"
//
//arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"
//
//arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(arrayToString([1,2,3,4,5,6]), "123456")
//Test.assertEquals(arrayToString(['a','b','c','d','e','f']), "abcdef")
//Test.assertEquals(arrayToString([1,2,3,'a','s','d']), "123asd")
//Test.assertEquals(arrayToString(['a','s','d','f','e','r',1,2,3,4,5,0]), "asdfer123450")
//Test.assertEquals(arrayToString(['A','D','F','G','H','Y','TR','NNHJK']), "ADFGHYTRNNHJK")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Concatenating Two Integer Arrays

//tags: arrays,language_fundamentals,numbers

//url: https://edabit.com/challenge/CzPEsTuXfE8J8vknX

//Description:
//Create a function to concatenate two integer arrays.
//Examples
//concat([1, 3, 5], [2, 6, 8]) ➞ [1, 3, 5, 2, 6, 8]
//
//concat([7, 8], [10, 9, 1, 1, 2]) ➞ [7, 8, 10, 9, 1, 1, 2]
//
//concat([4, 5, 1], [3, 3, 3, 3, 3]) ➞ [4, 5, 1, 3, 3, 3, 3, 3]
//Notes
//Don't forget to return the result.
//See Resources tab for more info.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(concat([1, 3, 5], [2, 6, 8]), [1, 3, 5, 2, 6, 8])
//Test.assertSimilar(concat([7, 8], [10, 9, 1, 1, 2]), [7, 8, 10, 9, 1, 1, 2])
//Test.assertSimilar(concat([4, 5, 1], [3, 3, 3, 3, 3]), [4, 5, 1, 3, 3, 3, 3, 3])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Find the Index

//tags: arrays,language_fundamentals,loops,strings

//url: https://edabit.com/challenge/9ApjPggCLGiPt573m

//Description:
//Create a function that takes an array and a string as arguments and returns the index of the string.
//Examples
//findIndex(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2
//
//findIndex(["Red", "blue", "Blue", "Green"], "blue") ➞ 1
//
//findIndex(["a", "g", "y", "d"], "d") ➞ 3
//
//findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") ➞ 0
//Notes
//Don't forget to return the result.
//If you are stuck, find help in the Resources tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(findIndex(['abc', 'ghj', 'banana', 'grape'], 'grape'), 3)
//Test.assertEquals(findIndex(['a', 'b', 'c', 'd', 'e', 'f'], 'f'), 5)
//Test.assertEquals(findIndex(['hi', 'edabit.com', 'testcase', 'validstring'], 'edabit.com'), 1)

