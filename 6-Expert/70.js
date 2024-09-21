

//title: Trie or Trie not: There Is No "Do"

//tags: classes,data_structures,objects,strings

//url: https://edabit.com/challenge/RC8PZp77Mdfh27HTa

//Description:
//A trie (pronounced "try") is a particular type of tree data structure that breaks a word (or another similar linear bit of data) into individual pieces (i.e., letters) and then stores that broken-up word in a way that similar words are computationally easy (== quick) to find. Confused? Look at the following example trie:
//    words: car, cats, coat
//        . <--- Root node
//       /  \
//      c   (other stuff)
//     / \
//    a   o
//   / \    \
// r*   t     a
//       \     \
//       s*     t
// * = end of a word
//To find whether our trie contains a particular word, we start at the root node. We then check each letter in our candidate word sequentially, checking to see whether our current node has any children that match that letter. Let's do an example with the word "cats": 1. Start at the root node. 2. Take the first letter of 'cats', c. 3. Does the root node have a child node that matches c? Yes! 4. Move to the c node. 5. Take the second letter of 'cats', a. 6. Does the root node have a child node that matches a? Yes! 7. And so on.
//There are two things to note here:
//While there are actually two as that are "descendants" of our initial c, only one "works". We're only interested in immediate children here, not grandchildren or great-grandchildren!
//Every letter that "finishes" a word must have a particular flag (I've designated these with a * above) that indicates that it's the end of a word. As such, while the word "cat" is a legitimate, acceptable English word, it's not part of our trie: searching for "cat" in our trie should return false, as the t in "cat" does not have the "finishes a word" flag set to true.
//Trie-ing Times (Use Cases)
//One of the most common uses of Tries in the real world is in auto-suggests. You've seen this (occasionally probably to your confusion/amusement) in search engines like Google when typing in a word or phrase. Google will attempt to fill in the rest of your search query before you even finish typing it! Let's trie to think about how that might work:
//While it could just search through literally every search that's ever been submitted, that's pretty slow. Instead, it (probably!) uses a trie or trie-like structure. So let's say you type "c". Google will then say "okay, only include queries beginning with the letter 'c'". Next, you type "a". Google says "alrighty, only include words with the letters 'ca'". And so on, until you either finish typing your query or click one of the suggested queries.
//That's what you're going to be doing here.
//Trie It Yourself (Instructions)
//Here's what you'll need to do:
//You'll be given a list of words and/or phrases, searches, as well as a string of text input representing what the user has currently entered.
//Using a Trie class, for the given input, determine what the autosuggest should say, sorted alphabetically.
//It's up to you how exactly you structure your Trie class. However, keep in mind that you'll need an addWord() method to add words to your trie, and a hasWord() to detect if your trie contains a particular word.
//One of the tests will use your Trie class constructor directly!
//Make sure to use the provided autosuggest() function to actually run your Trie stuff.
//Notes
//For the sake of simplicity, only consider search terms that start with your given input.
//All strings will consist only of lowercase letters and spaces.
//Despite the name of this challenge, you're perfectly welcome to use a do...while loop if you feel that would benefit you.
//Not everything outlined in the "Explanation" section above may be needed, depending on your solution!
//My solution uses a Depth-First Search based algorithm. Yours may need to also!
//It is entirely possible to "cheat" this challenge and simply return a hard-coded list of all "correct" answers. However, that's not really the point here. Shame on cheaters!

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const tests = [{
//    s: ['apple', 'dog', 'cat', 'category', 'car', 'crag', 'scatter', 'cast', 'captain america', 'caligula was a weird dude', 'excavate'],
//    i: 'ca',
//    m: 'A simple search!',
//    e: ['cat','category','car','cast','captain america','caligula was a weird dude']
//}, {
//    s: ['potato', 'dog', 'bog', 'box', 'bole', 'bolling', 'bold', 'bolivia', 'bottom', 'bottomless', 'boldness'],
//    i: 'bol',
//    m: 'Works with three letter inputs too!',
//    e: ['bole','bolling','bold','bolivia','boldness']
//}, {
//    s: ['hackerrank', 'leetcode', 'codewars', 'codeingame', 'w3schools', 'codeacademy'],
//    i: 'ed',
//    m: 'Sometimes returns nothing!',
//    e: []
//}, {
//    s: ["don't do that", "do or do not there is no try", "do unto others as youd have them do unto you", "doobee doobee doo", "whom do you serve?"],
//    i: 'do ',
//    m: 'Works with spaces!',
//    e: ['do or do not there is no try','do unto others as youd have them do unto you']
//}]
//​
//console.log("Does the solution have a Trie class?")
//Test.assertEquals(typeof Trie,'function',"I can't find your Trie class!")
//if (typeof Trie != 'function') return false;

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Range of Numbers

//tags: numbers,strings

//url: https://edabit.com/challenge/cdtF7Gn5FWyuzbsFj

//Description:
//Create a function that takes an array of integers and returns the range of consecutive numbers separated by dash a - between starting and ending numbers.
//Separate different ranges by , commas.
//A range of numbers will be considered if three or more consecutive numbers are found in the array (see example #1).
//Examples
//numbersRange([-6, -3, -2, -1, 0, 1, 7, 8, 9, 10, 11, 14, 15]) ➞ "-6,-3-1,7-11,14,15"
//// -6 is an alone integer.
//// -3 to 1 is a range of consecutive numbers.
//// 7 to 11 is a range of consecutive numbers.
//// 14 and 15 are consecutive numbers but cannot be considered as a range.
//
//numbersRange([-3, -2, -1, 2, 10, 15, 16, 18, 19, 20]) ➞ "-3--1,2,10,15,16,18-20"
//
//numbersRange([1, 2, 3, 9, 10, 15, 16, 18, 56, 57]) ➞ "1-3,9,10,15,16,18,56,57"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(numbersRange([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]), "-6, -3-1, 3-5, 7-11, 14, 15, 17-20")
//Test.assertEquals(numbersRange([-3, -2, -1, 2, 10, 15, 16, 18, 19, 20]), "-3--1, 2, 10, 15, 16, 18-20")
//Test.assertEquals(numbersRange([1, 2, 3, 9, 10, 15, 16, 18, 56, 57]), "1-3, 9, 10, 15, 16, 18, 56, 57")
//Test.assertEquals(numbersRange([-4, -3, -2, -1, 0, 4, 5, 6, 7, 8, 23, 24, 25, 100, 101]), "-4-0, 4-8, 23-25, 100, 101")
//Test.assertEquals(numbersRange([0]), "0")
//Test.assertEquals(numbersRange([]), "")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Number Base Converter

//tags: math,numbers

//url: https://edabit.com/challenge/AFJqaLcKr26DQY4qy

//Description:
//Create a function that allows you to convert from a positive base 10 integer to any other base from 2 to 26, and also does the reverse, converts from base 2 to 26 back to base 10. The digits in the new base will be the lower case letters a-z with a=0 and z=25. If the number is out of range for the base specified, return the error message shown in the examples.
//Examples
//baseConv(15, 2) ➞ "bbbb"
//// 1111
//
//baseConv(16, 2) ➞ "baaaa"
//// converts 16 (base 10) to base 2
//
//baseConv(1234, 10) ➞ "bcde"
//
//baseConv("bac", 3) ➞ 11
//// converts "bac" (base 3) to base 10
//// 1*3**2 + 0*3 + 2 = 11
//
//base_conv("dac", 3) ➞ "dac is not a base 3 number."
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(baseConv(5, 4), "bb")
//Test.assertEquals(baseConv(5, 3), "bc")
//Test.assertEquals(baseConv(255, 2), "bbbbbbbb")
//Test.assertEquals(baseConv(1000, 7), "cgcg")
//Test.assertEquals(baseConv(20129, 10), "cabcj")
//Test.assertEquals(baseConv(1234567, 26), "csghj")
//Test.assertEquals(baseConv(4, 22), "e")
//Test.assertEquals(baseConv("python", 25), 156160988)
//Test.assertEquals(baseConv("python", 24), "python is not a base 24 number.")
//Test.assertEquals(baseConv("fizz", 26), 93963)
//Test.assertEquals(baseConv("aeiou", 22), 46792)
//Test.assertEquals(baseConv("k", 20), 10)
//Test.assertEquals(baseConv("bac bac", 3), "bac bac is not a base 3 number.")
//Test.assertEquals(baseConv("bananabanana", 14), 4319529727086)

