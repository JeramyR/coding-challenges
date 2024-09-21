

//title: What Gives a Bad Mood?

//tags: algorithms,arrays

//url: https://edabit.com/challenge/tWm9EtfbJEJPHcCug

//Description:
//The factors said to have the greatest impact on someone's mood are: weather, meals, and sleep. Your task is, given an array of sub-arrays of different values for: Mood, Weather, Meals, and Sleep, determine which other variable has had the greatest impact on the mood.
//Examples
//greatestImpact([
//  [1, 1, 3, 10],
//  [1, 1, 3, 10],
//  [1, 1, 3, 10]
//]) ➞ "Weather"
//
//// As it was always low but all others were high.
//
//greatestImpact([
//  [10, 10, 3, 10],
//  [10, 10, 3, 10],
//  [10, 10, 3, 10]
//]) ➞ "Nothing"
//
//// As all were always high.
//Notes
//The mood will always go from 1 to 10, the weather will always go from 1 to 10, the meals will always go from 1 to 3, and the sleep will always go from 1 to 10. In cases of mood and weather, 1 is negative and 10 is positive. All sub-arrays values will be in the order [Mood, Weather, Meals, Sleep].

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(greatestImpact([[10, 10, 3, 10], [10, 10, 3, 10], [10, 10, 3, 10]]), 'Nothing', 'No values were ever low.')
//Test.assertEquals(greatestImpact([[3, 2, 3, 9], [10, 9, 3, 8], [5, 6, 2, 9], [1, 1, 2, 10]]), 'Weather')
//Test.assertEquals(greatestImpact([[8, 9, 3, 10], [2, 10, 1, 9], [1, 9, 1, 8]]), 'Meals')
//Test.assertEquals(greatestImpact([[10, 9, 3, 9], [1, 8, 3, 4], [10, 9, 2, 8], [2, 9, 3, 2]]), 'Sleep')

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Index Parity of Largest Even

//tags: arrays,bit_operations,logic,loops

//url: https://edabit.com/challenge/rwWaie7W2jmHQFfJA

//Description:
//Write a function that returns the largest even integer in an array with its corresponding index and the parity of that index, but determining the parity of that index is limited to not using the modulo operator %.
//Output Structure
//You have to return an Object.
//{"@odd|even index " + index_of_largest: largest_integer}
//Examples
//bitwiseIndex([107, 19, 36, -18, -78, 24, 97]) ➞ {"@even index 2": 36}
//
//bitwiseIndex([31, 7, 2, 13, 7, 9, 10, 13]) ➞ {"@even index 6": 10}
//
//bitwiseIndex([4, 4, 4, 4, 4, 4]) ➞ {"@even index 0": 4}
//
//bitwiseIndex([-31, -7, -13, -7, -9, -13]) ➞ "No even integer found!"
//Notes
//The use of indexOf() and max() are restricted.
//If there are no even integers, return "No even integer found!".
//The set of limitations imposed on this challenge dictates the level of difficulty.
//Another version of this challenge that deals with recursion can be found here.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const noIndexOfMaxMod = f => !RegExp('indexOf|max|%').test(f)
//const noRecur = f => !((`${f}`.match(RegExp(`${f.name}`,'gm'))||[]).length > +(/function/.test(f)))
//Test.assertNotEquals(noRecur(bitwiseIndex), false, "A recursive solution isn't allowed!")
//Test.assertNotEquals(noIndexOfMaxMod(bitwiseIndex), false, 
//    "The use of modulo operator (%), built-in functions Math.max(), Array.indexOf() are prohibited!")
//​
//let [numVector, resVector] = [[
//    [107, 19, 36, -18, -78, 24, 97],
//    [31, 7, 2, 13, 7, 9, 10, 13],
//    [4, 4, 4, 4, 4, 4],
//    [-31, -7, -13, -7, -9, -13],
//    [1, 128, 9, 56, -1, 7, 18, 49],
//    [63, 12, 77, 112, 75, 92],
//    [6, 6, 6, 6, 6, 6],
//    [1, 129, 91, 5, -1, 7, 11, 9],
//    [-84, -42, 0, -2, -94, -8]], [
//    {"@even index 2": 36},
//    {"@even index 6": 10},
//    {"@even index 0": 4},
//    "No even integer found!",
//    {"@odd index 1": 128},
//    {"@odd index 3": 112},
//    {"@even index 0": 6},
//    "No even integer found!",
//    {"@even index 2": 0}]]

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Recursion: Find The Longest Word

//tags: arrays,recursion,sorting,strings

//url: https://edabit.com/challenge/NTf8qZfcbD76iQN6P

//Description:
//Write a recursive function that will return the longest word in a sentence. In cases where more than one word is found, return the first one.
//Examples
//findLongest("I will and ever will be gratefully and perpetually loving you Tesh!😘") ➞ "perpetually"
//
//findLongest("A thing of beauty is a joy forever.") ➞ "forever"
//
//findLongest("Forgetfulness is by all means powerless!") ➞ "forgetfulness"
//
//findLongest("The word strengths is the longest and most commonly used word with a single vowel.") ➞ "strengths"
//Notes
//Special characters and symbols don't count as part of the word.
//Return the longest word found in lowercase letters.
//You are expected to solve this challenge via a recursive approach.
//An iterative version of this challenge can be found via this link.
//A collection of challenges in recursion can be found via this link.

//code area
///////////////////////////////////////////////////////////////////////////
// const findLongest = function (param) {
    

// }


//////////////////////////////////////////////////////////////////////////

//tests:

// const recursive = f => (`${f}`.match(RegExp(`${f.name}`,'gm'))||[]).length > +(/function/.test(f))
// Test.assertNotEquals(recursive(findLongest), false, "Recursion is required!")
// ​
// let [strVector, resVector] = [
//     [
//  "I will and ever will be gratefully and perpetually loving you Tesh!😘",
//  "Hello darkness my old friend.", "Yourself is your soul's captain and fate's master.",
//  "The pretty daughter's toy, a doll, is as pretty as her.",
//  "A thing of beauty is a joy forever.", "Forgetfulness is by all means powerless!",
//  "\"Strengths\" is the longest and most commonly used word that contains only a single vowel."
// ], 
// [
//  "perpetually", "darkness", "yourself", "daughter", "forever", "forgetfulness", "strengths"
// ]]
// for (let i in strVector) Test.assertSimilar(findLongest(strVector[i]), resVector[i])

