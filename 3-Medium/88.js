

//title: Return the Index of All Capital Letters

//tags: formatting,strings

//url: https://edabit.com/challenge/cRAqXCgyYnjdgktEq

//Description:
//Create a function that takes a single string as argument and returns an ordered array containing the indices of all capital letters in the string.
//Examples
//indexOfCaps("eDaBiT") ➞ [1, 3, 5]
//
//indexOfCaps("eQuINoX") ➞ [1, 3, 4, 6]
//
//indexOfCaps("determine") ➞ []
//
//indexOfCaps("STRIKE") ➞ [0, 1, 2, 3, 4, 5]
//
//indexOfCaps("sUn") ➞ [1]
//Notes
//Return an empty array if no uppercase letters are found in the string.
//Special characters ($#@%) and numbers will be included in some test cases.
//Assume all words do not have duplicate letters.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(indexOfCaps("eDaBiT"), [1, 3, 5])
//Test.assertSimilar(indexOfCaps("eQuINoX"), [1, 3, 4, 6])
//Test.assertSimilar(indexOfCaps("determine"), [])
//Test.assertSimilar(indexOfCaps("STRIKE"), [0, 1, 2, 3, 4, 5])
//Test.assertSimilar(indexOfCaps("sUn"), [1])
//Test.assertSimilar(indexOfCaps("SpiDer"), [0, 3])
//Test.assertSimilar(indexOfCaps("accOmpAnY"), [3, 6, 8])
//Test.assertSimilar(indexOfCaps("@xCE#8S#i*$en"), [2, 3, 6])
//Test.assertSimilar(indexOfCaps("1854036297"), [])
//Test.assertSimilar(indexOfCaps("Fo?.arg~{86tUx=|OqZ!"), [0, 12, 16, 18])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Scoring System

//tags: numbers,strings

//url: https://edabit.com/challenge/WvGmrCyiiZeunZLAg

//Description:
//Andy, Ben and Charlotte are playing a board game. The three of them decided to come up with a new scoring system. A player's first initial ("A", "B" or "C") denotes that player scoring a single point. Given a string of capital letters, return an array of the players' scores.
//For instance, if ABBACCCCAC is written when the game is over, then Andy scored 3 points, Ben scored 2 points, and Charlotte scored 5 points, since there are 3 instances of letter A, 2 instances of letter B, and 5 instances of letter C. So the array [3, 2, 5] should be returned.
//Examples
//calculateScores("A") ➞ [1, 0, 0]
//
//calculateScores("ABC") ➞ [1, 1, 1]
//
//calculateScores("ABCBACC") ➞ [2, 2, 3]
//Notes
//If given an empty string as an input, return [0, 0, 0].

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(calculateScores("AAB"), [2, 1, 0]);
//Test.assertSimilar(calculateScores("ABC"), [1, 1, 1]);
//Test.assertSimilar(calculateScores("ABCBACC"), [2, 2, 3]);
//Test.assertSimilar(calculateScores("CCBBBB"), [0, 4, 2]);
//Test.assertSimilar(calculateScores("CCAABBAABBCC"), [4, 4, 4]);
//Test.assertSimilar(calculateScores("A"), [1, 0, 0]);
//Test.assertSimilar(calculateScores(""), [0, 0, 0]);
//Test.assertSimilar(calculateScores("ACCCA"), [2, 0, 3]);

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Numbered Cards

//tags: arrays,games,numbers,validation

//url: https://edabit.com/challenge/JMht24XNt8Swf4MRL

//Description:
//You have a pack of 5 randomly numbered cards, which can range from 0-9. You can win if you can produce a higher two-digit number from your cards than your opponent. Return true if your cards win that round.
//Examples
//winRound([2, 5, 2, 6, 9], [3, 7, 3, 1, 2]) ➞ true
//// Your cards can make the number 96
//// Your opponent can make the number 73
//// You win the round since 96 > 73
//
//winRound([2, 5, 2, 6, 9], [3, 7, 3, 1, 2]) ➞ true
//
//winRound([1, 2, 3, 4, 5], [9, 8, 7, 6, 5]) ➞ false
//
//winRound([4, 3, 4, 4, 5], [3, 2, 5, 4, 1]) ➞ false
//Notes
//Return false if you and your opponent reach the same maximum number (see example #4).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//let [actualParam, expectedParam] = [
//  [
//    [[2, 5, 2, 6, 9], [3, 7, 3, 1, 2]], [[1, 2, 3, 4, 5], [9, 8, 7, 6, 5]], [[4, 3, 4, 4, 5], [3, 2, 5, 4, 1]],
//    [[3, 2, 8, 9, 4], [0, 7, 9, 3, 1]], [[1, 4, 9, 2, 1], [3, 7, 7, 8, 7]], [[6, 5, 5, 8, 5], [6, 2, 5, 2, 5]],
//    [[5, 3, 5, 9, 2], [5, 9, 2, 8, 0]], [[3, 2, 0, 3, 5], [7, 5, 8, 6, 2]], [[4, 1, 0, 2, 9], [3, 5, 5, 2, 8]],
//    [[9, 8, 7, 3, 4], [5, 3, 4, 7, 9]], [[3, 3, 3, 9, 9], [9, 0, 0, 6, 6]], [[3, 2, 8, 2, 0], [8, 5, 4, 5, 7]],
//    [[6, 2, 6, 8, 0], [7, 6, 3, 2, 9]], [[8, 3, 5, 3, 5], [5, 5, 4, 4, 6]], [[4, 0, 7, 7, 7], [8, 6, 7, 6, 3]],
//    [[5, 4, 8, 4, 8], [6, 6, 9, 3, 6]], [[8, 1, 2, 6, 5], [2, 6, 7, 1, 8]], [[9, 3, 8, 8, 6], [3, 1, 7, 9, 3]],
//    [[7, 2, 3, 0, 3], [1, 7, 9, 9, 9]], [[2, 7, 4, 6, 5], [2, 3, 1, 5, 6]], [[1, 7, 6, 3, 3], [8, 0, 7, 1, 1]],
//    [[5, 1, 6, 4, 7], [0, 7, 0, 1, 0]], [[6, 0, 9, 5, 9], [4, 0, 3, 2, 5]], [[1, 1, 7, 0, 5], [0, 0, 4, 7, 2]],
//    [[3, 3, 8, 3, 8], [8, 8, 4, 5, 5]], [[4, 4, 2, 3, 4], [3, 6, 1, 5, 7]], [[4, 0, 4, 0, 1], [2, 5, 1, 4, 1]],
//    [[5, 0, 1, 7, 5], [6, 9, 7, 2, 7]], [[6, 1, 1, 4, 2], [6, 4, 7, 1, 2]], [[8, 3, 5, 8, 4], [0, 8, 7, 8, 7]],
//  ],
//  [
//    true, false, false, true, true, true, false, false, true, true, true, false, false, true, false,
//    false, false, true, false, true, false, true, true, true, false, false, false, false, false, false,
//  ]
//]
//for (let i in actualParam) Test.assertEquals(winRound(...actualParam[i]), expectedParam[i])

