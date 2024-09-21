

//title: Are Letters in the Second String Present in the First?

//tags: regex,strings,validation

//url: https://edabit.com/challenge/62FxK8G5XB6mdX4Fy

//Description:
//Create a function that accepts an array of two strings and checks if all of the letters in the second string are present in the first string.
//Examples
//letterCheck(["trances", "nectar"]) ➞ true
//
//letterCheck(["compadres", "DRAPES"]) ➞ true
//
//letterCheck(["parses", "parsecs"]) ➞ false
//Notes
//Function should not be case sensitive (as indicated in the second example).
//Both strings are presented as a single argument in the form of an array.
//Bonus: Solve this without RegEx.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(letterCheck(["trances", "nectar"]), true)
//Test.assertEquals(letterCheck(["THE EYES", "they see"]), true)
//Test.assertEquals(letterCheck(["assert", "staring"]), false)
//Test.assertEquals(letterCheck(["arches", "later"]), false)
//Test.assertEquals(letterCheck(["dale", "caller"]), false)
//Test.assertEquals(letterCheck(["parses", "parsecs"]), false)
//Test.assertEquals(letterCheck(["replays", "adam"]), false)
//Test.assertEquals(letterCheck(["mastering", "streaming"]), true)
//Test.assertEquals(letterCheck(["drapes", "compadres"]), false)
//Test.assertEquals(letterCheck(["deltas", "slated"]), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Potential Friend?

//tags: arrays,language_fundamentals,validation

//url: https://edabit.com/challenge/rBwM5LiDbaBqvdw67

//Description:
//Given two arrays of two people's different interests, return whether both people have at least two things in common or have exact interests. Return true if there's a potential friend!
//Examples
//isPotentialFriend(
//  ["sports", "music", "chess"],
//  ["coding", "music", "netflix", "chess"]
//) ➞ true
//
//isPotentialFriend(
//  ["cycling", "technology", "drawing"],
//  ["dancing", "drawing"]
//) ➞ false
//
//isPotentialFriend(
//  ["history"],
//  ["history"]
//) ➞ true
//Notes
//Arrays of interests may have varied lengths.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isPotentialFriend(
//  ["sports", "music", "chess"],
//  ["coding", "sports", "music"]
//), true)
//​
//Test.assertEquals(isPotentialFriend(
//  ["cycling", "technology", "reading"],
//  ["dancing", "planes", "politics"]
//), false)
//​
//Test.assertEquals(isPotentialFriend(
//  ["history"],
//  ["gaming", "drawing", "coding", "history"]
//), false)
//​
//Test.assertEquals(isPotentialFriend(
//  ["films"],
//  ["films"]
//), true)
//​
//Test.assertEquals(isPotentialFriend(
//  ["sports", "music", "chess"],
//  ["coding", "music", "netflix", "chess"]
//), true)
//​

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Longest Word

//tags: arrays,language_fundamentals,loops,strings

//url: https://edabit.com/challenge/GL628YEyxRzSNKRxJ

//Description:
//Write a function that finds the longest word in a sentence and returns it. If two or more words are the biggest, return the word closest to the start of the sentence. Characters such as apostrophe, commas, periods, etc count as letters (e.g. O'Connor is 8 characters long).
//Examples
//longestWord("Hello darkness my old friend") ➞ "darkness"
//
//longestWord("Hello there mate") ➞ "Hello"
//
//longestWord("Kayla's toy is plastic") ➞ "Kayla's"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(longestWord("Hello darkness my old friend"), "darkness")
//Test.assertEquals(longestWord("Hello there mate"), "Hello")
//Test.assertEquals(longestWord("Kayla's toy is plastic"), "Kayla's")
//Test.assertEquals(longestWord("Football is so cool!!!!!"), "cool!!!!!")

