

//title: Odd Square Patch

//tags: arrays,loops,validation

//url: https://edabit.com/challenge/zquW8jxuJh4wkGm2h

//Description:
//Create a function that takes an array of numbers, and returns the size of the biggest square patch of odd numbers. See examples for a clearer picture.
//Examples
//oddSquarePatch([
//  [1, 2, 4, 9],
//  [4, 5, 5, 7],
//  [3, 6, 1, 7]
//]) ➞ 2
//
//// The 2x2 square at the lower right
//// ([5, 7] on the 2nd row, [1, 7] on the third).
//
//oddSquarePatch([[1, 2, 4, 9]]) ➞ 1
//
//// An array with a single row can only have a square patch of
//// maximum size 1x1 containing a single odd element.
//
//oddSquarePatch([[2, 4, 6]]) ➞ 0
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const arr1=[
//[1,2,4,9],
//[4,5,5,7],
//[3,6,1,7]]
//​
//const arr2=[[1,2,4,9]]
//​
//const arr3=[[2,4,8,2,2]]
//​
//const arr4=[
//[1,2,4,9,3,3,6,4],
//[4,8,5,3,7,1,1,8],
//[7,5,5,5,9,7,2,4],
//[3,9,1,7,5,9,5,2],
//[5,5,7,9,3,1,4,8]] 
//​
//const arr5=[
//[1,3,7,9],
//[4,5,5,8],
//[3,7,1,7],
//[5,7,9,3]]
//​
//const arr6=[
//[1,2,3,9],
//[5,6,7,8],

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Maximum Sum

//tags: loops,math

//url: https://edabit.com/challenge/E3CFX4HAHBxSAM8rs

//Description:
//You are given a sequence of integers. Your job is to take a continuous chunk of this sequence, such that the sum of its elements is maximized. You only need to return the maximum sum attained.
//For example, suppose you are given the sequence [3, -10, 4, -1, 2, 3, 6, -7]. You get the maximum sum by taking the elements [4, -1, 2, 3, 6] which sums to 14.
//Examples
//maxSum([-1, -9, 0, 8, -76, 5, 3]) ➞ 8
//
//maxSum([3, -10, 4, -1, 2, 3, 6, -7]) ➞ 14
//
//maxSum([1, -9, 0, -8, 76, 5, 43]) ➞ 124
//Notes
//There may be up to 10,000 integers in each sequence.
//It is possible to take a chunk of zero elements. In this case the sum is 0.
//This challenge can be solved in linear time and constant space.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(maxSum([3, -10, 4, -1, 2, 3, 6, -7]), 14)
//Test.assertEquals(maxSum([1, -9, 0, -8, 76, 5, 43]), 124)
//Test.assertEquals(maxSum([-1, -9, 0, -8, 76, 5, 43]), 124)
//Test.assertEquals(maxSum([10, -9, 0, -8, 76, 5, -40, 43]), 84)
//Test.assertEquals(maxSum([10, -9, 0, 8, 3, -1, -4, 6]), 13)
//Test.assertEquals(maxSum([-1, -9, 0, 8, -76, 5, 3]), 8)
//Test.assertEquals(maxSum([-1, -9, -4, -8, -1, -2]), 0)
//// efficiency test - 100 repetetions of 500 element list
//for (let i=0; i<100; i++) {
//  Test.assertEquals(maxSum([
//  99, 72, -49, -26, -54, 10, -78, -2, -80, 60, -80, 94, 58, -53, 18, -95, 
//  40, -26, 16, -26, -54, -68, 77, -57, 27, -76, 6, -35, 21, 25, -60, -84, 
//  59, 24, -70, -24, 14, -70, 94, 26, 63, -88, 2, 46, -19, -83, 30, -84, 
//  -77, -96, -89, -50, -87, -3, 83, -31, 78, 35, 15, -20, 10, 97, -82, -45, 
//  -86, -55, 22, 19, 20, -78, -42, -45, 7, 45, -3, 15, 88, -97, 78, -90, 48, 
//  12, 29, -65, 18, 8, 93, -49, -48, 51, 84, 18, 8, -54, 21, 12, -93, -68, 
//  -9, -65, 49, 59, -78, 15, 45, 4, -87, 82, -60, 53, -77, -46, -48, 45, 
//  -80, 96, -99, 81, 39, -25, -43, -12, 67, 97, 85, 67, -17, -16, 10, 65, 
//  -71, -28, 30, 30, -85, -81, -42, -5, -19, -55, -53, -73, 76, -20, -21, 
//  20, 72, -87, 81, 51, -79, 67, -15, 65, -28, 19, -59, -96, 38, -19, -6, 
//  -27, -38, 49, 55, -38, -53, -86, 90, 61, 67, 23, -55, -98, 23, -81, 34, 
//  64, -93, -86, -82, 41, -89, 20, -29, 99, -33, -42, 56, -54, 24, -59, 14, 
//  -79, 40, -6, 49, -63, 77, -41, 65, -15, 49, -4, -24, -16, -95, 61, -34, 
//  68, -75, -33, -14, 92, 10, 39, 36, -97, -62, -53, 57, 39, 59, -47, -34, 
//  -83, 75, -76, 0, 22, -30, 28, -19, 42, -44, -50, 68, 5, 80, -25, 66, 38, 

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sentence Primeness

//tags: numbers,scope,strings,validation

//url: https://edabit.com/challenge/9cE48rX6wTZqBWeia

//Description:
//A word value can be established summing up all the numeric values of every single character (excluding spaces and punctuation): a value from 1 ("a") to 26 ("z") is given to letters, while numbers have their literal values, from 0 to 9. The sentence value is the sum of the values of the words.
//sentence = "ABC ! abc ... @ 123"
//// Remove spaces, punctuation and any symbol.
//
//sentence = ["ABC", "abc", "123"]
//
//words values = "ABC" = 1+2+3 = 6 | "abc" = 1+2+3 = 6 | "123" = 1+2+3 = 6
//
//sentence value = 6 + 6 + 6 = 18
//Given a string sentence implement a function that returns:
//Prime Sentence if the original sentence value is a prime.
//
//Almost Prime Sentence (xxx) if the sentence value is not a prime but, after a single removal of any of the words the new sentence value is a prime (see example #2 for a clearer explanation), with xxx being the word removed. If more than a word can be removed to obtain a prime value, return the first encountered in the original sentence.
//
//Composite Sentence if the sentence value is not a prime and more than one removal is necessary to make the new sentence value (or if none is possible).
//Letters values are case insensitive ("aZ" = "Az" = 1 + 26 = 27), while numbers are treated as words ("123" = 1+2+3 = 6).
//Examples
//sentencePrimeness("Help me!") ➞ "Prime Sentence"
//// "Help" + "me" = 41 + 18 = 59 (prime)
//
//sentencePrimeness("42 is THE aNsWeR...") ➞ "Almost Prime Sentence (aNsWeR)
//// "42" + "is" + "THE" + "aNsWeR" = 6 + 28 + 33 + 80 = 147 (not prime)
//// Without "42" new value is 141
//// Without "is" new value is 119
//// Without "THE" new value is 114
//// Without "aNsWeR" new value is 67 (prime!)
//// If the word "aNsWeR" is removed from sentence the new value is a prime.
//
//sentencePrimeness("Did you smoke?") ➞ "Composite Sentence"
//// "Did" + "you" + "smoke" = 17 + 61 + 63 = 141 (not prime)
//// Without "Did" new value is 124
//// Without "you" new value is 80
//// Without "smoke" new value is 78
//// No single removals make the new sentence value a prime.
//Notes
//Only letters and digits can be part of the sentence.
//If it's an Almost Prime Sentence, the removed word between the brackets must maintain the same capitalization format found in the original sentence (see example #2).
//The sentence is Almost Prime if just a single word can be removed to make value a prime, no multiple removals allowed.
//Remember the rule for numbers: "10" is a word, so its value is 1+0 and not 10.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(sentencePrimeness("Help me!"), "Prime Sentence", "Example #1")
//Test.assertEquals(sentencePrimeness("42 is THE aNsWeR..."), "Almost Prime Sentence (aNsWeR)", "Example #2")
//Test.assertEquals(sentencePrimeness("Did you Smoke?"), "Composite Sentence", "Example #3")
//Test.assertEquals(sentencePrimeness("She SellS SeaShellS by the SeaShore"), "Prime Sentence")
//Test.assertEquals(sentencePrimeness("Lorem. Ipsum. Dolor. Sit. Amet."), "Almost Prime Sentence (Lorem)")
//Test.assertEquals(sentencePrimeness("three fASt hUNgry aniMALs -aNd- 3 slow faTTy kiDS"), "Almost Prime Sentence (aniMALs)")
//Test.assertEquals(sentencePrimeness("This is a 'Prime' Sentence"), "Composite Sentence")
//Test.assertEquals(sentencePrimeness("this is a composite sentence"), "Almost Prime Sentence (this)")
//Test.assertEquals(sentencePrimeness("Primes, PRIMES EVERYWHERE!"), "Composite Sentence")
//Test.assertEquals(sentencePrimeness("10 test cases are enough, this is the last one!"), "Prime Sentence")

