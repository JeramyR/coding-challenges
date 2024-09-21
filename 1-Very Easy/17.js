

//title: Solve the Equation

//tags: language_fundamentals,math

//url: https://edabit.com/challenge/X6PDfNfJwcB4TkQuQ

//Description:
//Create a function that takes an equation (e.g. "1+1"), and returns the answer.
//Examples
//equation("1+1") ➞ 2
//
//equation("7*4-2") ➞ 26
//
//equation("1+1+1+1+1") ➞ 5
//Notes
//Supported operators are +, -, and *.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(equation("1+1"), 2)
//Test.assertEquals(equation("7*4-2"), 26)
//Test.assertEquals(equation("1+1+1+1+1"), 5)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Learn Lodash: _.drop, Drop the First Elements of an Array

//tags: arrays

//url: https://edabit.com/challenge/NMdKxEradTmpNnomZ

//Description:
//According to the lodash documentation, _.drop creates a slice of an array with n elements dropped from the beginning.
//Your challenge is to write your own version using vanilla JavaScript.
//Examples
//drop([1, 2, 3], 1) ➞ [2, 3]
//
//drop([1, 2, 3], 2) ➞ [3]
//
//drop([1, 2, 3], 5) ➞ []
//
//drop([1, 2, 3], 0) ➞ [1, 2, 3]
//Notes
//Do not attempt to import lodash; you are simply writing your own version.
//This entire series of challenges can be found here.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(drop([1, 2, 3], 2), [3])
//Test.assertSimilar(drop([1, 2, 3], 5), [])
//Test.assertSimilar(drop([1, 2, 3], 0), [1, 2, 3])
//Test.assertSimilar(drop(["banana", "orange", "watermelon", "mango"], 2), ["watermelon", "mango"])
//Test.assertSimilar(drop([], 2), [])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Upvotes vs Downvotes

//tags: arrays,language_fundamentals,numbers,objects

//url: https://edabit.com/challenge/654ABGmNS5GqscE8C

//Description:
//Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.
//Examples
//getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13
//
//getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31
//
//getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0
//Notes
//You can expect only positive integers for vote counts.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(getVoteCount({ upvotes: 13, downvotes: 0 }), 13)
//Test.assertEquals(getVoteCount({ upvotes: 2, downvotes: 33 }), -31)
//Test.assertEquals(getVoteCount({ upvotes: 132, downvotes: 132 }), 0)
//Test.assertEquals(getVoteCount({ upvotes: 0, downvotes: 0 }), 0)
//Test.assertEquals(getVoteCount({ downvotes: 4, upvotes: 1 }), -3)

