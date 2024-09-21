

//title: Happy Number

//tags: arrays,loops,math,strings,validation

//url: https://edabit.com/challenge/y3e9Xdemxr65JQFX8

//Description:
//A happy number is a number which yields a 1 by repeatedly summing up the square of its digits. If such a process results in an endless cycle of numbers containing 4, the number is said to be an unhappy number.
//Create a function that accepts a number and determines whether the number is a happy number or not. Return true if so, false otherwise.
//Examples
//isHappy(67) ➞ false
//
//isHappy(89) ➞ false
//
//isHappy(139) ➞ true
//
//isHappy(1327) ➞ false
//
//isHappy(2871) ➞ false
//
//isHappy(3970) ➞ true
//Notes
//Hint: Your loop terminates if the value of n is either 1 or 4.
//Optionally, you can solve this challenge via a recursive approach.
//A recursive version of this challenge can be found here.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//let [numVector, resVector] = [
//  [1, 10, 44, 67, 89, 139, 1327, 2871, 3970, 5209, 6329, 8888, 9331, 10000],
//  [true, true, true, false, false, true, false, false, true, false, true, false, true, true]
//]
//for (let i in numVector) Test.assertEquals(isHappy(numVector[i]), resVector[i])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: WordRank Scoring System

//tags: algorithms,arrays,numbers,strings

//url: https://edabit.com/challenge/sZZ4gr9RNN8JpMaEv

//Description:
//Create a function that takes a string of words and returns the highest scoring word. Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3, etc.
//Examples
//wordRank("The quick brown fox.") ➞ "brown"
//
//wordRank("Nancy is very pretty.") ➞ "pretty"
//
//wordRank("Check back tomorrow, man!") ➞ "tomorrow"
//
//wordRank("Wednesday is hump day.") ➞ "Wednesday"
//Notes
//If two words score the same, return the word that appears first in the original string.
//The returned string should only contain alphabetic characters (a-z).
//Preserve case in the returned string (see 4th example above).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(wordRank("If the Easter Bunny and the Tooth Fairy had babies would they take your teeth and leave chocolate for you?"), "chocolate");
//Test.assertEquals(wordRank("The memory we used to share is no longer coherent."), "memory");
//Test.assertEquals(wordRank("He didn’t want to go to the dentist, yet he went anyway."), "dentist");
//Test.assertEquals(wordRank("What was the person thinking when they discovered cow’s milk was fine for human consumption... and why did they do it in the first place!?"), "consumption");
//Test.assertEquals(wordRank("Mary plays the piano."), "plays");
//Test.assertEquals(wordRank("I hear that Nancy is very pretty."), "pretty");
//Test.assertEquals(wordRank("If you like tuna and tomato sauce- try combining the two. It’s really not as bad as it sounds."), "sounds");
//Test.assertEquals(wordRank("She works two jobs to make ends meet; at least, that was her reason for not having time to join us."), "works");
//Test.assertEquals(wordRank("Wednesday is hump day, but has anyone asked the camel if he’s happy about it?"), "Wednesday");
//Test.assertEquals(wordRank("The body may perhaps compensates for the loss of a true metaphysics."), "metaphysics");
//Test.assertEquals(wordRank("The clock within this blog and the clock on my laptop are 1 hour different from each other."), "different");
//Test.assertEquals(wordRank("Check back tomorrow; I will see if the book has arrived."), "tomorrow");

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Crack the Code

//tags: algorithms,arrays,logic

//url: https://edabit.com/challenge/NNqAzPWi5v4HfTC9k

//Description:
//This is a reverse-coding challenge. Create a function that outputs the correct array from the input. Use the following examples to crack the code.
//Examples
//decode("hello") ➞ [5, 2, 9, 9, 3]
//
//decode("wonderful") ➞ [11, 3, 2, 1, 2, 6, 3, 9, 9]
//
//decode("something challenging") ➞ [7, 3, 10, 2, 8, 5, 6, 2, 4, 5, 18, 5, 16, 9, 9, 2, 2, 4, 6, 2, 4]
//Notes
//Check Comments if you're stuck.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(decode("hello"), [5, 2, 9, 9, 3])
//Test.assertSimilar(decode("wonderful"), [11, 3, 2, 1, 2, 6, 3, 9, 9])
//Test.assertSimilar(decode("all my friends"), [16, 9, 9, 5, 10, 4, 5, 3, 6, 6, 2, 2, 1, 7])
//Test.assertSimilar(decode("River"), [10, 6, 10, 2, 6])

