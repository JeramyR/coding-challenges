

//title: Multiplicity of Numbers

//tags: arrays,language_fundamentals

//url: https://edabit.com/challenge/PgNvoxjjy7Gx6zDni

//Description:
//Write a function that returns an array of elements [number, multiplicity]. The multiplicity of a number refers to the number of times it occurs in the array.
//To illustrate:
//[5, 5, 1, 1, 5, 5, 3]
//[[5, 4], [1, 2], [3, 1]]
//
//// Since 5 appears 4 times, 1 appears twice, and 3 appears once.
//The final array should only include unique elements, and the elements should be ordered by when they first appeared in the original array.
//Examples
//multiplicity([1, 1, 1, 2, 2, 3]) ➞ [[1, 3], [2, 2], [3, 1]]
//
//multiplicity([1, 1, 1, 1, 1]) ➞ [[1, 5]]
//
//multiplicity([1, 5, 4, 3, 2]) ➞ [[1, 1], [5, 1], [4, 1], [3, 1], [2, 1]]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(multiplicity([1, 1, 1, 2, 2, 3]), [[1, 3], [2, 2], [3, 1]])
//Test.assertSimilar(multiplicity([1, 1, 1, 1, 1]), [[1, 5]])
//Test.assertSimilar(multiplicity([1, 5, 4, 3, 2]), [[1, 1], [5, 1], [4, 1], [3, 1], [2, 1]])
//Test.assertSimilar(multiplicity([5, 5, 5, 5, 8]), [[5, 4], [8, 1]])
//Test.assertSimilar(multiplicity([3, 3, 3, 0]), [[3, 3], [0, 1]])
//Test.assertSimilar(multiplicity([1, 1, 2, 2, 3, 3, 4, 4]), [[1, 2], [2, 2], [3, 2], [4, 2]])
//Test.assertSimilar(multiplicity([4, 4, 3, 3, 2, 2, 1, 1]), [[4, 2], [3, 2], [2, 2], [1, 2]])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Where Are My Glasses?

//tags: arrays,regex,strings

//url: https://edabit.com/challenge/ayQR9ZBbR8LdXuwXq

//Description:
//Oh no! I've lost my glasses, but paradoxically, I need glasses to find my glasses!
//Please help me out by showing me the index in the list which contains my glasses. They look like two capital Os, with any number of dashes in between!
//This means that both O--O and O------------O are valid glasses, but not O----#--O for example!
//Search thoroughly, maybe you'll find my glasses in places such as 'dustO-Odust'
//Examples
//findGlasses(["phone", "O-O", "coins", "keys"]) ➞ 1
//
//findGlasses(["OO", "wallet", "O##O", "O----O"]) ➞ 3
//
//findGlasses(["O--#--O", "dustO---Odust", "more dust"]) ➞ 1
//Notes
//All lists will include one valid pair of glasses because I swear I dropped them around here somewhere ...
//All elements in the list are strings.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(findGlasses(['phone', 'O-O', 'coins', 'keys']), 1)
//Test.assertEquals(findGlasses(['OO', 'wallet', 'O##O', 'O----O']), 3)
//Test.assertEquals(findGlasses(['O_O', 'O-O', 'OwO']), 1)
//Test.assertEquals(findGlasses(['O--#--O', 'dustO---Odust', 'more dust']), 1)
//Test.assertEquals(findGlasses(['floor', 'the floor again', 'pockets', 'bed', 'cabinet', 'the top of my head O-O']), 5)
//Test.assertEquals(findGlasses(['OOOO----~OOO', '-------', 'OOOOOOO', 'OO-OO-OO-O']), 3)
//​
//// Author: Joshua Señoron

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Prime Factorization of an Integer

//tags: algorithms,loops,math,numbers

//url: https://edabit.com/challenge/azvHrxCsbn7GrRu8y

//Description:
//Create a function that returns an array containing the prime factors of whatever integer is passed to it.
//Examples
//primeFactors(20) ➞ [2, 2, 5]
//
//primeFactors(100) ➞ [2, 2, 5, 5]
//
//primeFactors(8912234) ➞ [2, 47, 94811]
//Notes
//Implement your solution using trial division.
//Your solution should not require recursion.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(primeFactors(20), [2, 2, 5])
//Test.assertSimilar(primeFactors(100), [2, 2, 5, 5])
//Test.assertSimilar(primeFactors(8912234), [2, 47, 94811])

