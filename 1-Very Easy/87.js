

//title: String Pairs

//tags: arrays,conditions,language_fundamentals,strings

//url: https://edabit.com/challenge/tSBCQQ8w9dAAZuKio

//Description:
//Create a function that takes a string str and returns an array of two-paired characters. If the string has an odd number of characters, add an asterisk * in the final pair.
//See the below examples for a better understanding:
//Examples
//stringPairs("mubashir") ➞ ["mu", "ba", "sh", "ir"]
//
//stringPairs("edabit") ➞ ["ed", "ab", "it"]
//
//stringPairs("airforces") ➞ ["ai", "rf", "or", "ce", "s*"]
//Notes
//Return [] if the given string is empty.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(stringPairs("abcdef"), ["ab", "cd", "ef"])
//Test.assertSimilar(stringPairs("abcdefg"), ["ab", "cd", "ef", "g*"])
//Test.assertSimilar(stringPairs(""), [])
//Test.assertSimilar(stringPairs("pak"), ["pa", "k*"])
//Test.assertSimilar(stringPairs("mubashir"), ["mu", "ba", "sh", "ir"])
//Test.assertSimilar(stringPairs("edabit"), ["ed", "ab", "it"])
//Test.assertSimilar(stringPairs("airforces"), ["ai", "rf", "or", "ce", "s*"])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sum of Numbers in an Array

//tags: arrays,language_fundamentals,math,numbers

//url: https://edabit.com/challenge/L395zsraDGkjQCSpC

//Description:
//Create a function that takes an array of numbers nums as an argument. Square each number in the array if the number is even and square root √ the number if it is odd. Return the sum of the new array rounded to two decimal places.
//Example:
//[2, 4, 9]  ➞ 23
//2 ^ 2 + 4 ^ 2 + √9 = 4 + 16 + 3 = 23
//Examples
//arraySum([1, 3, 3, 1, 10]) ➞ 105.46
//
//arraySum([2, 3, 4, 5]) ➞ 23.97
//
//arraySum([1, 31, 3, 11, 0]) ➞ 11.62
//Notes
//No empty array in Tests.
//Each array element ≥ 0.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(arraySum([1, 3, 3, 1, 10]), 105.46)
//Test.assertEquals(arraySum([0, 3, 3, 1, 10]), 104.46)
//Test.assertEquals(arraySum([1, 31, 3, 11, 0]), 11.62)
//Test.assertEquals(arraySum([1, 2, 3, 4, 5, 6, 8]), 124.97) 
//Test.assertEquals(arraySum([2, 3, 4, 5]), 23.97)
//Test.assertEquals(arraySum([2, 4, 6, 8, 9, 11]), 126.32)
//Test.assertEquals(arraySum([6, 5, 7, 2, 1]), 45.88)
//Test.assertEquals(arraySum([2, 2, 2, 2]), 16)
//Test.assertEquals(arraySum([5, 1, 2, 3, 4, 6, 7, 8, 4]), 143.61)
//Test.assertEquals(arraySum([2, 4, 3, 2, 3, 4, 4, 5]), 61.7)
//Test.assertEquals(arraySum([1, 14, 9, 8, 17, 21]), 272.71) 
//Test.assertEquals(arraySum([7, 23, 22, 6, 8, 2]), 595.44)
//Test.assertEquals(arraySum([33, 2, 1, 5, 0, 5]), 15.22)
//Test.assertEquals(arraySum([5, 6, 7, 3, 22, 2]), 530.61)
//Test.assertEquals(arraySum([3, 4, 5, 6, 7, 8]), 122.61)
//Test.assertEquals(arraySum([1, 4, 5, 6, 7, 2, 3]), 63.61)
//Test.assertEquals(arraySum([2, 7, 0, 3, 4, 8, 3]), 90.11)
//Test.assertEquals(arraySum([9, 3, 0, 2, 7, 8]), 75.38)
//Test.assertEquals(arraySum([7, 7, 7, 7, 1]), 11.58)
//Test.assertEquals(arraySum([6, 7, 8, 9, 10, 3, 4]), 223.38)
//Test.assertEquals(arraySum([4, 5, 7, 8, 1, 2, 3, 0]), 91.61)
//Test.assertEquals(arraySum([9, 8, 7, 6, 5, 4, 3, 2]), 129.61)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Find the Average of the Letters 📊

//tags: arrays,loops,math

//url: https://edabit.com/challenge/xn3DTHgvGspvQxmRQ

//Description:
//Create a function that returns the average of a list composed of letters. First, find the number of the letter in the alphabet in order to find the average of the list.
//A = 1
//B = 2
//C = 3
//D = 4
//E = 5
//average = total sum of all numbers / number of item in the set
//Return the result rounded to two decimal points.
//Examples
//averageIndex(["a", "b", "c", "i"]) ➞ 3.75
//
//averageIndex(["e", "d", "a", "b", "i", "t"]) ➞ 6.83
//
//averageIndex(["y", "o", "u", "a", "r", "e", "t", "h", "e", "b", "e", "s", "t"]) ➞ 12.62
//Notes
//Letters given will always be lowercase.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(averageIndex(['a','b','c','i']), 3.75)
//Test.assertEquals(averageIndex(['e','d','a','b','i','t']), 6.83)
//Test.assertEquals(averageIndex(['o','m','g']),11.67)
//Test.assertEquals(averageIndex(['o','h','n','o']),13.0)
//Test.assertEquals(averageIndex(['t','w','e','n','t','y','t','w','e','n','t','y']),17.83)
//Test.assertEquals(averageIndex(['y','o','u','a','r','e','t','h','e','b','e','s','t']),12.62)
//​
//// Author: Juan esteban

