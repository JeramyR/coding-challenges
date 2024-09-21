

//title: Strange Pair

//tags: language_fundamentals,strings,validation

//url: https://edabit.com/challenge/WBdjg7zgiqi6L5zsL

//Description:
//A pair of strings form a strange pair if both of the following are true:
//The 1st string's first letter = 2nd string's last letter.
//The 1st string's last letter = 2nd string's first letter.
//Create a function that returns true if a pair of strings constitutes a strange pair, and false otherwise.
//Examples
//isStrangePair("ratio", "orator") ➞ true
//// "ratio" ends with "o" and "orator" starts with "o".
//// "ratio" starts with "r" and "orator" ends with "r".
//
//isStrangePair("sparkling", "groups") ➞ true
//
//isStrangePair("bush", "hubris") ➞ false
//
//isStrangePair("", "") ➞ true
//Notes
//It should work on a pair of empty strings (they trivially share nothing).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isStrangePair("ratio", "orator"), true)
//Test.assertEquals(isStrangePair("sparkling", "groups"), true)
//Test.assertEquals(isStrangePair("mentee", "eminem"), true)
//Test.assertEquals(isStrangePair("yahtzee", "easy"), true)
//Test.assertEquals(isStrangePair("bush", "hubris"), false)
//Test.assertEquals(isStrangePair("edit", "cheese"), false)
//Test.assertEquals(isStrangePair("false", "true"), false)
//Test.assertEquals(isStrangePair("cupid", "dionysus"), false)
//Test.assertEquals(isStrangePair("futile", "elephant"), false)
//Test.assertEquals(isStrangePair("", ""), true)
//Test.assertEquals(isStrangePair("", "abc"), false)
//Test.assertEquals(isStrangePair("a", "a"), true)
//Test.assertEquals(isStrangePair("a", "b"), false)
//Test.assertEquals(isStrangePair("&", "&"), true)
//Test.assertEquals(isStrangePair("&!", "!&"), true)
//Test.assertEquals(isStrangePair("5556", "65"), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Odd Up, Even Down

//tags: arrays,control_flow,language_fundamentals,loops,numbers

//url: https://edabit.com/challenge/dWNPtNeQgyn6mS8FA

//Description:
//Create a function that goes through the array, incrementing (+1) for each odd-valued number and decrementing (-1) for each even-valued number.
//Examples
//transform([1, 2, 3, 4, 5]) ➞ [2, 1, 4, 3, 6]
//
//transform([3, 3, 4, 3]) ➞ [4, 4, 3, 4]
//
//transform([2, 2, 0, 8, 10]) ➞ [1, 1, -1, 7, 9]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(transform([1, 2, 3, 4, 5]), [2, 1, 4, 3, 6])
//Test.assertSimilar(transform([3, 3, 4, 3]), [4, 4, 3, 4])
//Test.assertSimilar(transform([2, 2, 0, 8, 10]), [1, 1, -1, 7, 9])
//Test.assertSimilar(transform([9, 13, 15, 5, 2, 11]), [10, 14, 16, 6, 1, 12])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Applying Discounts

//tags: algorithms,arrays,language_fundamentals

//url: https://edabit.com/challenge/qgS7XZjvL8wEChNvq

//Description:
//Create a function that applies a discount d to every number in the array.
//Examples
//getDiscounts([2, 4, 6, 11], "50%") ➞ [1, 2, 3, 5.5]
//
//getDiscounts([10, 20, 40, 80], "75%") ➞ [7.5, 15, 30, 60]
//
//getDiscounts([100], "45%") ➞ [45]
//Notes
//The discount is the percentage of the original price (i.e the discount of "75%" to 12 would be 9 as opposed to taking off 75% (making 3)).
//There won't be any awkward decimal numbers, only 0.5 to deal with.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(getDiscounts([2, 4, 6, 11], "50%"), [1, 2, 3, 5.5])
//Test.assertSimilar(getDiscounts([10, 20, 40, 80], "75%"), [7.5, 15, 30, 60])
//Test.assertSimilar(getDiscounts([100], "45%"), [45])

