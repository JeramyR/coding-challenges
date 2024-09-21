

//title: The Museum of Incredibly DULL Things

//tags: arrays,formatting,numbers,sorting

//url: https://edabit.com/challenge/9ukwiKyv8R9NHSt3d

//Description:
//A museum wants to get rid of some exhibitions. Katya, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and removes the one with the lowest rating. Just as she finishes rating the exhibitions, she's called off to an important meeting. She asks you to write a program that tells her the ratings of the items after the lowest one is removed.
//Create a function that takes an array of integers and removes the smallest value.
//Examples
//removeSmallest([1, 2, 3, 4, 5] ) ➞ [2, 3, 4, 5]
//
//removeSmallest([5, 3, 2, 1, 4]) ➞ [5, 3, 2, 4]
//
//removeSmallest([2, 2, 1, 2, 1]) ➞ [2, 2, 2, 1]
//Notes
//Don't change the order of the left over items.
//If you get an empty array, return an empty array: [] ➞ []
//If there are multiple items with the same value, remove item with lower index (3rd example).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(removeSmallest([1, 2, 3, 4, 5]), [2, 3, 4, 5])
//Test.assertSimilar(removeSmallest([5, 3, 2, 1, 4]), [5, 3, 2, 4])
//Test.assertSimilar(removeSmallest([2, 2, 1, 2, 1]), [2, 2, 2, 1])
//Test.assertSimilar(removeSmallest([3, 1, 6, 7, 3, 7, 6]), [3, 6, 7, 3, 7, 6])
//Test.assertSimilar(removeSmallest([4, 4, 4, 1]), [4, 4, 4])
//Test.assertSimilar(removeSmallest([5, 4, 5, 3, 1, 1]), [5, 4, 5, 3, 1])
//Test.assertSimilar(removeSmallest([1, 5, 3]), [5, 3])
//Test.assertSimilar(removeSmallest([]), [])
//Test.assertSimilar(removeSmallest([6, 2, 5, 4, 8, 6, 3, 2, 7]), [6, 5, 4, 8, 6, 3, 2, 7])
//Test.assertSimilar(removeSmallest([3]), [])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Removing Enemies

//tags: arrays,language_fundamentals

//url: https://edabit.com/challenge/maTTAmN9j8creL4Jq

//Description:
//Remove enemies from the array of people, even if the enemy shows up twice.
//Examples
//removeEnemies(["Fred"], []) ➞ ["Fred"]
//
//removeEnemies(["Adam", "Emmy", "Tanya", "Emmy"], ["Emmy"]) ➞ ["Adam", "Tanya"]
//
//removeEnemies(["John", "Emily", "Steve", "Sam"], ["Sam", "John"]) ➞ ["Emily", "Steve"]
//Notes
//All names to be removed will be in the enemies array; simply return the array, no fancy strings.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(removeEnemies(["Steve", "Eleanor"], []), ["Steve", "Eleanor"])
//Test.assertSimilar(removeEnemies(["Jeff", "Charlie", "James", "Fredrick"], ["James", "Jeff"]), ["Charlie", "Fredrick"])
//Test.assertSimilar(removeEnemies(["Amelia", "Max", "Isobel", "Alex", "Phil"], ["Phil", "Max"]), ["Amelia", "Isobel", "Alex"])
//Test.assertSimilar(removeEnemies(["John", "Skye", "Alexander", "Skye", "Tony"], ["Skye", "John"]), ["Alexander", "Tony"])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Censor Words Longer Than Four Characters

//tags: conditions,strings

//url: https://edabit.com/challenge/huiJkoQzegoc5qeCJ

//Description:
//Create a function that takes a string and censors words over four characters with *.
//Examples
//censor("The code is fourty") ➞ "The code is ******"
//
//censor("Two plus three is five") ➞ "Two plus ***** is five"
//
//censor("aaaa aaaaa 1234 12345") ➞ "aaaa ***** 1234 *****"
//Notes
//Don't censor words with exactly four characters.
//If all words have four characters or less, return the original string.
//The amount of * is the same as the length of the word.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(censor("The code is fourty"),"The code is ******", "Example #1")
//Test.assertEquals(censor("Two plus three is five"),"Two plus ***** is five", "Example #2")
//Test.assertEquals(censor("aaaa aaaaa 1234 12345"),"aaaa ***** 1234 *****", "Example #3")
//Test.assertEquals(censor("abcdefghijklmnop"),"****************")
//Test.assertEquals(censor("a"),"a")
//​
//// made by @Joshua Señoron

