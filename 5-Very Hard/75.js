

//title: Scrambled Letters

//tags: arrays,regex,strings

//url: https://edabit.com/challenge/dxeZkyPPCbfeZBSht

//Description:
//Write a function that receives an array of words and a mask. Return an array of words, sorted alphabetically, that match the given mask.
//Examples
//scrambled([”red”, “dee”, “cede”, “reed”, “creed”, “decree”], “*re**”) ➞ [“creed”]
//
//scrambled([”red”, “dee”, “cede”, “reed”, “creed”, “decree”], “***”) ➞ [“dee”, “ree”]
//Notes
//The length of a mask will never exceed the length of the longest word in the word array.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//var recede = ["cee","dee","eer","erd","ere","red","ree","cede","cere","cree","deer","dere","dree","rede","reed","ceder","cedre","cered","creed","decree","recede"]
//​
//Test.assertSimilar(scrambled(recede, "*re**"), ["creed"])
//Test.assertSimilar(scrambled(recede, "***"), ["cee","dee","eer","erd","ere","red","ree"])
//Test.assertSimilar(scrambled(recede, "******"), ["decree","recede"])
//Test.assertSimilar(scrambled(recede, "c*d**"), ["ceder","cedre"])
//Test.assertSimilar(scrambled(recede, "d***"), ["deer","dere","dree"])
//Test.assertSimilar(scrambled(recede, "r***"), ["rede","reed"])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Kaprekar`s Constant

//tags: arrays,numbers,recursion,sorting

//url: https://edabit.com/challenge/wzjRyguraKuZ5XiSE

//Description:
//6174 is known as one of Kaprekar's constants, after the Indian mathematician D. R. Kaprekar. Number 6174 is notable for the following rule:
//Take any four-digit number, using at least two different digits (leading zeros are allowed).
//Arrange the digits in descending and then in ascending order to get two four-digit numbers, adding leading zeros if necessary.
//Subtract the smaller number from the bigger number.
//Go back to step 2 and repeat.
//The above process, known as Kaprekar's routine, will always reach its fixed point, 6174, in at most 7 iterations. Once 6174 is reached, the process will continue yielding 7641 – 1467 = 6174. For example, choose 3524:
//5432 – 2345 = 3087
//8730 – 0378 = 8352
//8532 – 2358 = 6174
//7641 – 1467 = 6174
//Write a recursive function that will return the number of times it will take to get from a number to 6174 (the above example would equal 3).
//(1)5432 – 2345 = 3087,
//(2)8730 – 0378 = 8352,
//(3)8532 – 2358 = 6174
//495 would produce the following: 4950 to 9540 - 459, 9081 to 9810 - 189, 9621 to 9621 - 1269, 8352 to 8532 - 2358 answer: 4
//For a 2 digit number, the following would be produced (stating with number 10 -> 100):
//100 to 100 - 1, 990 to 990 - 99, 8910 to 9810 - 189, 9621 to 9621 - 1269, 8352 to 8532 - 2358 answer: 5
//Examples
//kaprekar(6621) ➞ 5
//
//kaprekar(6554) ➞ 4
//
//kaprekar(1234) ➞ 3
//Notes
//If the subtracted number is less than 1000, add an extra zero to that number. The number 1111 will equal 0000, so this number (1111) is invalid. If you're still unclear, please check the comments section.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(kaprekar(1112), 5)
//Test.assertEquals(kaprekar(1342), 3)
//Test.assertEquals(kaprekar(2636), 3)
//Test.assertEquals(kaprekar(3219), 3)
//Test.assertEquals(kaprekar(3305), 6)
//Test.assertEquals(kaprekar(4132), 3)
//Test.assertEquals(kaprekar(4568), 7)
//Test.assertEquals(kaprekar(5610), 4)
//Test.assertEquals(kaprekar(6002), 1)
//Test.assertEquals(kaprekar(6081), 7)
//Test.assertEquals(kaprekar(6174), 0)
//Test.assertEquals(kaprekar(6287), 7)
//Test.assertEquals(kaprekar(7093), 7)
//Test.assertEquals(kaprekar(7412), 1)
//Test.assertEquals(kaprekar(7735), 2)
//Test.assertEquals(kaprekar(8591), 5)
//Test.assertEquals(kaprekar(8621), 3)
//Test.assertEquals(kaprekar(8650), 3)
//Test.assertEquals(kaprekar(9618), 6)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Need Help With Your Packing?

//tags: algorithms,logic,validation

//url: https://edabit.com/challenge/Sdmxq6WRarykrRa4p

//Description:
//You arrive at the supermarket checkout and you've only got a limited number of shopping bags with you. Miser that you are, you hate buying extra bags when you've got dozens at home that you forgot to bring with you!! Can you fit all your shopping into the bags you've got with you?
//Each bag can carry a maximum of 10kg and each item you've purchased weighs between 1 and 10kg.
//Create a function that takes two parameters, a list of the weights of each item and the number of bags you are carrying. Return true if there are enough bags to contain all the items, otherwise false.
//Example
//canFit([2, 1, 2, 5, 4, 3, 6, 1, 1, 9, 3, 2], 4) ➞ true
//// Bag 1 = [2, 1, 2, 5] (10kg)
//// Bag 2 = [4, 3, 3] (10kg)
//// Bag 3 = [6, 2, 1, 1] (10kg)
//// Bag 4 = [9] (9kg)
//
//canFit([2, 7, 1, 3, 3, 4, 7, 4, 1, 8, 2], 4) ➞ false
//// Bag 1 = [2, 8] (10kg)
//// Bag 2 = [3, 7] (10kg)
//// Bag 3 = [2, 4, 4] (10kg)
//// Bag 4 = [7, 3] (10kg)
//// two 1kg items left over!
//Notes
//All weights will be integers between 1 and 10kg inclusive
//Items can be packed in any order
//There may be more than one way to fit all the items in the available bags
//Based on an easier challenge How Many Boxes? by @zatoichi49.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(canFit([2, 1, 2, 5, 4, 3, 6, 1, 1, 9, 3, 2], 4), true, "Example 1")
//Test.assertEquals(canFit([7, 1, 2, 6, 1, 2, 3, 5, 9, 2, 1, 2, 5], 5), true)
//Test.assertEquals(canFit([2, 7, 1, 3, 3, 4, 7, 4, 1, 8, 2], 4), false, "Example 2, two 1kg items left over")
//Test.assertEquals(canFit([1, 3, 3, 3, 2, 1, 1, 9, 7, 10, 8, 6, 1, 2, 9], 8), true, "With a bag to spare")
//Test.assertEquals(canFit([4, 1, 2, 3, 5, 5, 1, 9], 3), true, "Perfect fit!")
//Test.assertEquals(canFit([3, 1, 2, 7, 2, 6, 1], 3), true, "8kg to spare")
//Test.assertEquals(canFit([4, 6, 1, 9, 6, 1, 1, 9, 2, 9], 5), true)
//Test.assertEquals(canFit([2, 2, 10, 10, 1, 5, 2], 4), true)
//Test.assertEquals(canFit([4, 4, 4, 4, 4], 2), false)
//Test.assertEquals(canFit([5, 4, 3, 2, 2, 2, 2], 2), false)
//Test.assertEquals(canFit([9, 6, 2, 3, 1, 2, 4, 8, 3, 1, 3], 4), false)
//Test.assertEquals(canFit([2, 5, 1, 6, 2, 9, 5, 2, 1, 6, 1, 6, 6, 1], 5), false)
//Test.assertEquals(canFit([2, 5, 1, 6, 2, 9, 5, 2, 1, 6, 1, 6, 6, 1], 6), true)
//Test.assertEquals(canFit([1, 2, 3, 2, 6, 4, 1], 2), true)
//Test.assertEquals(canFit([1, 1, 2, 1, 2, 10, 2, 2, 5, 1, 5], 4), true)
//Test.assertEquals(canFit([8, 3, 2, 1, 1, 2, 1, 3, 2, 1], 3), true)
//Test.assertEquals(canFit([10], 1), true)

