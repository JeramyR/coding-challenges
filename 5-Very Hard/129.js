

//title: Billboard

//tags: arrays,validation

//url: https://edabit.com/challenge/QPqN3tp7RqsxKRnq2

//Description:
//A billboard is an m * n array, where each array element consists of either one letter or a blank space. You are given a phrase and the billboard dimensions. Create a function that determines whether you can place the complete phrase on the billboard.
//There are two rules:
//If there is a space between two words:
//If they are on the same row, you must put a space.
//If they are two different rows, the space is optional.
//You can only put COMPLETE words on a row.
//To illustrate, canPut("GOOD MORN", [2, 4]) should yield true, since while there is a space between "GOOD" and "MORN", it's not needed since both words are on separate rows.
//[
//  ["G", "O", "O", "D"],
//  ["M", "O", "R", "N"]
//]
//On the other hand canPut("GOOD MORN", [1, 8]) should yield false. Since both words reside in the first row, we require nine spots, and eight would yield the incomplete phrase "GOOD MOR".
//[
//  ["G", "O", "O", "D", "_", "M", "O", "R"]
//]
//We would also return false if we could not fit a word on a row. So canPut("GOOD MORN", [3,3]) should yield false, since we can only fit "GOO" on the first row.
//[
//  ["G", "O", "O"],
//  ["D", "_", "M"],
//  ["O", "R", "N"]
//]
//
//// No good!
//Examples
//canPut("HEY JUDE", [2, 4]) ➞ true
//
//canPut("HEY JUDE", [1, 8]) ➞ true
//
//canPut("HEY JUDE", [1, 7]) ➞ false
//
//canPut("HEY JUDE", [4, 3]) ➞ false
//Notes
//It is okay to leave extra empty spaces on one line if you cannot fit two words with a space. For example, in a 5 x 5 billboard, you can put "BE" on the first row and "HAPPY" on the second row.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(canPut("HEY JUDE", [2, 4]), true)
//Test.assertEquals(canPut("HEY JUDE", [1, 8]), true)
//Test.assertEquals(canPut("HEY JUDE", [1, 7]), false, 'cannot fit leaving a space in')
//Test.assertEquals(canPut("HEY JUDE", [4, 3]), false, 'JUDE cannot fit on second row')
//Test.assertEquals(canPut("CU L8R", [2, 2]), false, 'L8R cannot fit on second row')
//Test.assertEquals(canPut("CU L8R", [1, 5]), false, 'cannot fit leaving a space in')
//Test.assertEquals(canPut("CU L8R", [5, 5]), true)
//Test.assertEquals(canPut("BEAUTY IS WITHIN", [3, 6]), true)
//Test.assertEquals(canPut("BEAUTY IS WITHIN", [4, 5]), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Word Chain 2.0

//tags: arrays,strings,validation

//url: https://edabit.com/challenge/yGvaYr3X8xHPxWRcb

//Description:
//Let's update our previous word-chain definition. In this 2.0 version, a word-chain is an array of words, where the next word is formed by either:
//Changing exactly one letter from the previous word.
//Adding or subtracting one letter.
//Examples
//isWordChain(["row", "crow", "crown", "brown", "brawn"]) ➞ true
//// add "c" to "row" to get "crow", "n" to get "crown", etc.
//
//isWordChain(["flew", "flaw", "flan", "flat", "fat", "rat", "rot", "tot"]) ➞ true
//
//isWordChain(["meek", "meet", "meat", "teal"]) ➞ false
//// "meat" => "teal" changes 2 letters (can only change 1).
//
//isWordChain(["run", "runny", "bunny"]) ➞ false
//// "run" => "runny" adds 2 letters (can only add 1).
//Notes
//You can only do one (not both) for each word change.
//All words will be in lower-case.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isWordChain(["row", "crow", "crown", "brown", "brawn"]), true)
//Test.assertEquals(isWordChain(["flew", "flaw", "flan", "flat", "fat", "rat", "rot", "tot"]), true)
//Test.assertEquals(isWordChain(["meek", "meet", "meat", "teal"]), false)
//Test.assertEquals(isWordChain(["run", "runny", "bunny"]), false)
//Test.assertEquals(isWordChain(["fun", "fund", "find", "bind", "wind", "wild", "wile", "wiles"]), true)
//Test.assertEquals(isWordChain(["nut", "but", "bot", "boot", "loot", "look", "book", "brook"]), true)
//Test.assertEquals(isWordChain(["some", "tome", "tame", "lame", "flame", "flamer", "blamer", "blamers"]), true)
//Test.assertEquals(isWordChain(["a", "at", "hat", "that", "what", "flat"]), false)
//Test.assertEquals(isWordChain(["link", "blink", "wink", "sink"]), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Make Anagram

//tags: formatting,strings

//url: https://edabit.com/challenge/AxiMSPKYwJhdkSrqt

//Description:
//Given two strings, that may or may not be of the same length, determine the minimum number of character deletions required to make an anagram. Any characters can be deleted from either of the strings.
//Examples
//makeAnagram("cde", "abc") ➞ 4
//// Remove d and e from cde to get c.
//// Remove a and b from abc to get c.
//// It takes 4 deletions to make both strings anagrams.
//
//makeAnagram("fcrxzwscanmligyxyvym", "jxwtrhvujlmrpdoqbisbwhmgpmeoke") ➞ 30
//
//makeAnagram("showman", "woman") ➞ 2
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(makeAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke'), 30)
//Test.assertEquals(makeAnagram('bugexikjevtubidpulaelsbcqlupwetzyzdvjphn', 'lajoipfecfinxjspxmevqxuqyalhrsxcvgsdxxkacspbchrbvvwnvsdtsrdk'), 40)
//Test.assertEquals(makeAnagram('fsqoiaidfaukvngpsugszsnseskicpejjvytviya', 'ksmfgsxamduovigbasjchnoskolfwjhgetnmnkmcphqmpwnrrwtymjtwxget'), 42)
//Test.assertEquals(makeAnagram('showman', 'woman'), 2)
//Test.assertEquals(makeAnagram('imkhnpqnhlvaxlmrsskbyyrhwfvgteubrelgubvdmrdmesfxkpykprunzpustowmvhupkqsyjxmnptkcilmzcinbzjwvxshubeln', 'wfnfdassvfugqjfuruwrdumdmvxpbjcxorettxmpcivurcolxmeagsdundjronoehtyaskpwumqmpgzmtdmbvsykxhblxspgnpgfzydukvizbhlwmaajuytrhxeepvmcltjmroibjsdkbqjnqjwmhsfopjvehhiuctgthrxqjaclqnyjwxxfpdueorkvaspdnywupvmy'), 102)
//Test.assertEquals(makeAnagram('cde', 'abc'), 4)
//​
//// Anshu Patel

