

//title: Array Chunking

//tags: arrays,conditions,loops

//url: https://edabit.com/challenge/AWEX2eYNWGEsig4Fc

//Description:
//Given an array and chunk size "n", create a function such that it divides the array into many subarrays where each subarray is of length size "n".
//Examples
//chunk([1, 2, 3, 4], 2) ➞ [
//  [1, 2], [3, 4]
//]
//
//chunk([1, 2, 3, 4, 5, 6, 7], 3) ➞ [
//  [1, 2, 3], [4, 5, 6], [7]
//]
//
//chunk([1, 2, 3, 4 ,5], 10) ➞ [
//  [1, 2, 3, 4, 5]
//]
//Notes
//Remember that number of subarrays may not be equal to chunk size.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(chunk([1, 2, 3, 4], 2), [[1, 2], [3, 4]])
//Test.assertSimilar(chunk([1, 2, 3, 4, 5], 2), [[ 1, 2], [3, 4], [5]])
//Test.assertSimilar(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3), [[ 1, 2, 3], [4, 5, 6], [7, 8]])
//Test.assertSimilar(chunk([1, 2, 3, 4, 5], 4), [[ 1, 2, 3, 4], [5]])
//Test.assertSimilar(chunk([1, 2, 3, 4, 5], 10), [[ 1, 2, 3, 4, 5]])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Unfair Hurdles

//tags: arrays,logic,strings,validation

//url: https://edabit.com/challenge/2qdzg4MMysjzCsAQr

//Description:
//Unfair hurdles are hurdles which are either too high, or way too close together.
//Create a function which takes in an array of strings, representing hurdles, and returns whether or not they are unfair. For the purposes of this challenge, unfair hurdles are:
//At least 4 characters tall.
//Strictly less than 4 spaces apart.
//Examples
//// Hurdle are good distance apart but are way too tall.
//
//isUnfairHurdle([
//  "#    #    #    #",
//  "#    #    #    #",
//  "#    #    #    #",
//  "#    #    #    #"
//]) ➞ true
//
//
//// Hurdles are a fine height but are way too close together.
//
//isUnfairHurdle([
//  "#  #  #  #",
//  "#  #  #  #",
//  "#  #  #  #"
//]) ➞ true
//
//
//// These hurdles are mighty splendid.
//
//isUnfairHurdle([
//  "#      #      #      #",
//  "#      #      #      #"
//]) ➞ false
//Notes
//Hurdles will be represented with a hashtag "#".
//There will be the same spacing between hurdles.
//Hurdles are always as high as the length of the array.
//Hurdles are always evenly spaced.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isUnfairHurdle([
//'#    #    #    #',
//'#    #    #    #',
//'#    #    #    #',
//'#    #    #    #'
//]), true)
//​
//Test.assertEquals(isUnfairHurdle([
//'#  #  #  #',
//'#  #  #  #',
//'#  #  #  #'
//]), true)
//​
//Test.assertEquals(isUnfairHurdle([
//'#    #    #    #',
//'#    #    #    #',
//'#    #    #    #'
//]), false)
//​
//Test.assertEquals(isUnfairHurdle([
//'#    #    #    #',
//'#    #    #    #'
//]), false)
//​
//Test.assertEquals(isUnfairHurdle([

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Longest Word in a 7 Segment Display

//tags: arrays,loops,strings

//url: https://edabit.com/challenge/zLSsBEKyu2HLTZYd8

//Description:
//Given an array of words, return the longest word which can fit on a 7 segment display.
//
//Letters which do not fit on a 7 segment display are k, m, v, w and x.
//Therefore, do not count words which include these letters.
//Examples
//longest7SegmentWord(["knighthood", "parental", "fridge", "clingfilm"]) ➞ "parental"
//
//longest7SegmentWord(["coding", "crackers", "edabit", "celebration"]) ➞ "celebration"
//
//longest7SegmentWord(["velocity", "mackerel", "woven", "kingsmen"]) ➞ ""
//Notes
//All words will be given in lowercase.
//Return an empty string if no words are eligible (see example #3).
//If multiple valid words have the same length, return the first word that appears.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(longest7SegmentWord(["knighthood", "parental", "fridge", "clingfilm"]), "parental")
//Test.assertEquals(longest7SegmentWord(["coding", "crackers", "edabit", "celebration"]), "celebration")
//Test.assertEquals(longest7SegmentWord(["velocity", "mackerel", "woven", "kingsmen"]), "")
//Test.assertEquals(longest7SegmentWord(["embarrassment", "perceive", "front"]), "front")
//Test.assertEquals(longest7SegmentWord(["truck", "accessible", "undermine", "unique", "tear", "cat", "avenue", "labour", "goat", "dance", "rise", "scale"]), "accessible")
//Test.assertEquals(longest7SegmentWord(["act", "adjust", "proud", "battery", "tear", "beautiful", "avenue", "thoughtful", "victory", "mobile", "straight"]), "thoughtful")
//Test.assertEquals(longest7SegmentWord(["fair", "tear", "truck"]), "fair")
//Test.assertEquals(longest7SegmentWord(["scale", "pass", "act", "sector", "vain", "scale"]), "sector")
//Test.assertEquals(longest7SegmentWord(["vegetarian", "unique", "sensitivity", "goat", "nature", "attract", "suntan", "mobile", "pillow", "economist", "arrest", "galaxy", "proud", "proud"]), "attract")
//Test.assertEquals(longest7SegmentWord(["vat", "suntan", "murder", "dance", "course", "institution"]), "institution")
//Test.assertEquals(longest7SegmentWord(["adjust", "garlic", "preoccupation", "nature", "garlic", "undermine", "pavement", "payment", "fair", "twin", "expertise", "pillow", "dance", "economist", "establish", "nervous", "sector"]), "preoccupation")
//Test.assertEquals(longest7SegmentWord(["embarrassment", "bell", "obese", "width", "singer", "strikebreaker", "width", "preoccupation", "nervous"]), "preoccupation")
//Test.assertEquals(longest7SegmentWord(["winner", "twin", "establish"]), "establish")
//Test.assertEquals(longest7SegmentWord(["fair", "institution", "vegetarian", "electron", "suntan", "settle", "royalty", "bracket", "conductor", "blade", "camp", "potential", "human body"]), "institution")
//Test.assertEquals(longest7SegmentWord(["width", "straight", "sign", "inspire", "lay", "pavement", "settle", "undermine", "cat", "labour", "adjust", "admire", "scramble", "pavement", "limited", "payment", "withdrawal", "full", "brave"]), "straight")
//Test.assertEquals(longest7SegmentWord(["limited", "arrest", "harm", "tear", "vain", "bracket", "settle", "settle", "spine", "mobile", "potential", "cat", "winner", "tear"]), "potential")
//Test.assertEquals(longest7SegmentWord(["front", "economist", "sector", "camp"]), "sector")
//Test.assertEquals(longest7SegmentWord(["murder", "vain", "fair", "sign", "establish", "flow", "bell", "truck", "winner", "tear", "avenue", "move", "pillow", "murder", "gesture", "garlic", "unique", "brave", "pass", "avenue"]), "establish")
//Test.assertEquals(longest7SegmentWord(["full", "suntan", "strikebreaker", "front", "truck", "vegetarian", "maze", "shine", "potential", "conductor", "width", "economist", "lounge", "pound", "camp", "sensitivity"]), "potential")
//Test.assertEquals(longest7SegmentWord(["party", "width", "sector", "withdrawal", "limited", "victory", "presidency", "pillow", "beautiful", "shine"]), "presidency")
//Test.assertEquals(longest7SegmentWord(["front", "mirror", "shine", "spine", "lay", "obese", "shine", "singer", "straight", "establish", "embarrassment", "admire", "vain", "presidency", "winner", "dance", "inject", "proud", "establish"]), "presidency")
//Test.assertEquals(longest7SegmentWord(["pound", "scramble", "labour", "vegetarian", "obese", "delicate", "dictionary", "act", "nature", "shine"]), "dictionary")
//Test.assertEquals(longest7SegmentWord(["goat", "institution", "move", "twin", "lay", "embarrassment", "labour"]), "institution")
//Test.assertEquals(longest7SegmentWord(["victory", "embarrassment", "truck", "presidency", "maze", "truck"]), "presidency")
//Test.assertEquals(longest7SegmentWord(["accessible", "embarrassment", "embarrassment", "extort", "width", "garlic"]), "accessible")

