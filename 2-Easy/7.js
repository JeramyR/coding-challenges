

//title: Slightly Superior

//tags: language_fundamentals,objects

//url: https://edabit.com/challenge/xtHTBXjumRg5AhsT5

//Description:
//You will be given two extremely similar arrays, but exactly one of the items in an array will be valued slightly higher than its counterpart (which means that evaluating the value > the other value will return true).
//Create a function that returns whether the first array is slightly superior to that of the second.
//Examples
//isFirstSuperior([1, 2, 4], [1, 2, 3]) ➞ true
//// The pair of items at each index are compared in turn.
//// 1 from the first array is the same as 1 from the second array.
//// 2 is the same as 2.
//// However, 4 is greater than 3, so first array is superior.
//
//isFirstSuperior(["a", "d", "c"], ["a", "b", "c"]) ➞ true
//
//isFirstSuperior(["zebra", "ostrich", "whale"], ["ant", "ostrich", "whale"]) ➞ true
//
//isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4]) ➞ false
//
//isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"]) ➞ false
//Notes
//Both arrays will be the same length.
//All values and their counterparts will always be of the same data type.
//If the two arrays are the same, return false.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isFirstSuperior([1, 2, 3, 4], [1, 2, 3, 3]), true)
//Test.assertEquals(isFirstSuperior(['a', 'b', 'c'], ['a', 'd', 'c']), false)
//Test.assertEquals(isFirstSuperior([true, 10, 'zebra'], [true, 10, 'zebra']), false)
//Test.assertEquals(isFirstSuperior([true, 10, 'zebra'], [true, 10, 'ant']), true)
//Test.assertEquals(isFirstSuperior([true, true, false, true], [true, true, true, true]), false)
//Test.assertEquals(isFirstSuperior([9.1, 8.1, 7.1, 6.1], [9.1, 8.1, 7.1, 5.1]), true)
//Test.assertEquals(isFirstSuperior(['llama', 'alligator'], ['llama', 'buffalo']), false)
//Test.assertEquals(isFirstSuperior(['zebra', 'ostrich', 'whale'], ['ant', 'ostrich', 'whale']), true)
//Test.assertEquals(isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4]), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Come Check Out This Crazy Function

//tags: bit_operations,cryptography

//url: https://edabit.com/challenge/Fp7p3BoHkF5Dub8pq

//Description:
//You are given two numbers, a and b. Write a function which uses an expression to return the expected output. I am not going to tell you what the expression is because that will spoil the fun! :)
//Examples
//crazyfunction(10, 20) ➞ 30
//
//crazyfunction(17, 35) ➞ 50
//
//crazyfunction(61, 233) ➞ 212
//Notes
//Hint: Notice the tags?

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//// ITS EASIER THAN YOU THINK LMAO
//​
//// Set 1
//Test.assertEquals(crazyfunction(10, 20), 30)
//Test.assertEquals(crazyfunction(17, 35), 50)
//Test.assertEquals(crazyfunction(61, 233), 212)
//Test.assertEquals(crazyfunction(33, 47), 14)
//Test.assertEquals(crazyfunction(18, 209), 195)
//Test.assertEquals(crazyfunction(91, 54), 109)
//Test.assertEquals(crazyfunction(88, 123), 35)
//Test.assertEquals(crazyfunction(11, 8), 3)
//​
//// Set 2
//Test.assertEquals(crazyfunction(56, 80), 104)
//Test.assertEquals(crazyfunction(8, 45), 37)
//Test.assertEquals(crazyfunction(99, 201), 170)
//Test.assertEquals(crazyfunction(11, 78), 69)
//Test.assertEquals(crazyfunction(49, 139), 186)
//Test.assertEquals(crazyfunction(31, 50), 45)
//Test.assertEquals(crazyfunction(102, 113), 23)
//Test.assertEquals(crazyfunction(90, 500768), 500858)
//​
//// Author : comecheckoutmycode

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Count Instances of a Character in a String

//tags: interview,language_fundamentals,loops,strings

//url: https://edabit.com/challenge/kbFhwaDyrd79JrgeB

//Description:
//Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.
//Examples
//charCount("a", "edabit") ➞ 1
//
//charCount("c", "Chamber of secrets") ➞ 1
//
//charCount("b", "big fat bubble") ➞ 4
//Notes
//Your output must be case-sensitive (see second example).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(charCount('a', 'edabit'), 1)
//Test.assertEquals(charCount('b', 'big fat bubble'), 4)
//Test.assertEquals(charCount('c', 'Chamber of secrets'), 1)
//Test.assertEquals(charCount('f', 'frank and his friends have offered five foxes for sale'), 7)
//Test.assertEquals(charCount('x', 'edabit'), 0)
//Test.assertEquals(charCount('a', 'Adam and Eve bit the apple and found a snake'), 6)
//Test.assertEquals(charCount('s', 'sssssssssssssssssssssssss'), 25)
//Test.assertEquals(charCount('7', '10795426697'), 2)

