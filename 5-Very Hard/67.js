

//title: Vertical Text

//tags: arrays,formatting

//url: https://edabit.com/challenge/aBMEMcMoWbbSRjFWS

//Description:
//Create a function that converts a string into a matrix of characters that can be read vertically. Add spaces when characters are missing.
//Examples
//verticalText("Holy bananas") ➞ [
//  ["H", "b"],
//  ["o", "a"],
//  ["l", "n"],
//  ["y", "a"],
//  [" ", "n"],
//  [" ", "a"],
//  [" ", "s"]
//]
//
//verticalText("Hello fellas") ➞ [
//  ["H", "f"],
//  ["e", "e"],
//  ["l", "l"],
//  ["l", "l"],
//  ["o", "a"],
//  [" ", "s"]
//]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(verticalText("Holy bananas"), [['H', 'b'], ['o', 'a'], ['l', 'n'], ['y', 'a'], [' ', 'n'], [' ', 'a'], [' ', 's']])
//Test.assertSimilar(verticalText("Hello fellas"), [['H', 'f'], ['e', 'e'], ['l', 'l'], ['l', 'l'], ['o', 'a'], [' ', 's']])
//Test.assertSimilar(verticalText("I hope you have a great day"), [['I', 'h', 'y', 'h', 'a', 'g', 'd'], [' ', 'o', 'o', 'a', ' ', 'r', 'a'], [' ', 'p', 'u', 'v', ' ', 'e', 'y'], [' ', 'e', ' ', 'e', ' ', 'a', ' '], [' ', ' ', ' ', ' ', ' ', 't', ' ']])
//Test.assertSimilar(verticalText("Piri piri over there"), [['P', 'p', 'o', 't'], ['i', 'i', 'v', 'h'], ['r', 'r', 'e', 'e'], ['i', 'i', 'r', 'r'], [' ', ' ', ' ', 'e']])
//Test.assertSimilar(verticalText("Skill the baboon king"), [['S', 't', 'b', 'k'], ['k', 'h', 'a', 'i'], ['i', 'e', 'b', 'n'], ['l', ' ', 'o', 'g'], ['l', ' ', 'o', ' '], [' ', ' ', 'n', ' ']])
//Test.assertSimilar(verticalText("He took one for the team"), [['H', 't', 'o', 'f', 't', 't'], ['e', 'o', 'n', 'o', 'h', 'e'], [' ', 'o', 'e', 'r', 'e', 'a'], [' ', 'k', ' ', ' ', ' ', 'm']])
//Test.assertSimilar(verticalText("Schneid! 700 in to the face!"), [['S', '7', 'i', 't', 't', 'f'], ['c', '0', 'n', 'o', 'h', 'a'], ['h', '0', ' ', ' ', 'e', 'c'], ['n', ' ', ' ', ' ', ' ', 'e'], ['e', ' ', ' ', ' ', ' ', '!'], ['i', ' ', ' ', ' ', ' ', ' '], ['d', ' ', ' ', ' ', ' ', ' '], ['!', ' ', ' ', ' ', ' ', ' ']])
//Test.assertSimilar(verticalText("I hope you are ready for your daily dose of skill"), [['I', 'h', 'y', 'a', 'r', 'f', 'y', 'd', 'd', 'o', 's'], [' ', 'o', 'o', 'r', 'e', 'o', 'o', 'a', 'o', 'f', 'k'], [' ', 'p', 'u', 'e', 'a', 'r', 'u', 'i', 's', ' ', 'i'], [' ', 'e', ' ', ' ', 'd', ' ', 'r', 'l', 'e', ' ', 'l'], [' ', ' ', ' ', ' ', 'y', ' ', ' ', 'y', ' ', ' ', 'l']])
//Test.assertSimilar(verticalText("0 11 222 3333 44444 6666666 77777777 888888888 9999999999"), [['0', '1', '2', '3', '4', '6', '7', '8', '9'], [' ', '1', '2', '3', '4', '6', '7', '8', '9'], [' ', ' ', '2', '3', '4', '6', '7', '8', '9'], [' ', ' ', ' ', '3', '4', '6', '7', '8', '9'], [' ', ' ', ' ', ' ', '4', '6', '7', '8', '9'], [' ', ' ', ' ', ' ', ' ', '6', '7', '8', '9'], [' ', ' ', ' ', ' ', ' ', '6', '7', '8', '9'], [' ', ' ', ' ', ' ', ' ', ' ', '7', '8', '9'], [' ', ' ', ' ', ' ', ' ', ' ', ' ', '8', '9'], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '9']])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Complex Numbers Sum

//tags: arrays,math,numbers,strings

//url: https://edabit.com/challenge/kET9Pc5twtHjWroyp

//Description:
//Mubashir needs your help in his maths homework.
//Create a function which takes an array of Complex Numbers and returns the sum as a string.
//Examples
//sumComplex(["2+3i", "3-i"]) ➞ "5+2i"
//
//sumComplex(["1", "1"]) ➞ "2"
//
//sumComplex(["i", "2i", "3i"]) ➞ "6i"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(sumComplex([]), "0")
//Test.assertEquals(sumComplex(["3+4i"]), "3+4i");
//Test.assertEquals(sumComplex(["123+456i"]), "123+456i")
//Test.assertEquals(sumComplex(["0"]), "0")
//Test.assertEquals(sumComplex(["-i"]), "-i")
//Test.assertEquals(sumComplex(["1", "1"]), "2")
//Test.assertEquals(sumComplex(["-5", "5"]), "0")
//Test.assertEquals(sumComplex(["1", "10", "100", "1000"]), "1111")
//Test.assertEquals(sumComplex(["2+3i","3-i"]),"5+2i")
//Test.assertEquals(sumComplex(["5+4i", "11+3i"]), "16+7i")
//Test.assertEquals(sumComplex(["-2-4i", "-8+6i"]), "-10+2i")
//Test.assertEquals(sumComplex(["-1-i", "7+10i"]), "6+9i")
//Test.assertEquals(sumComplex(["1","-3+i"]),"-2+i")
//Test.assertEquals(sumComplex(["1","-3-i"]),"-2-i")
//Test.assertEquals(sumComplex(["3+4i", "3-4i"]), "6")
//Test.assertEquals(sumComplex(["10+i", "10-i", "9"]), "29")
//Test.assertEquals(sumComplex(["2+3i", "0", "0"]), "2+3i")
//Test.assertEquals(sumComplex(["2+i", "3+2i", "-5-2i"]), "i")
//Test.assertEquals(sumComplex(["2+i", "3+2i", "-5-4i"]), "-i")
//Test.assertEquals(sumComplex(["10+5i", "1-i", "-i"]), "11+3i")
//Test.assertEquals(sumComplex(["i", "2i", "3i"]), "6i")
//Test.assertEquals(sumComplex(["-i", "-3i", "1+i"]), "1-3i")
//Test.assertEquals(sumComplex(["-1000i", "1000i", "1234"]), "1234")
//Test.assertEquals(sumComplex(["-i", "123", "4-i"]), "127-2i")
////Mubashir

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sort by Factor Length

//tags: arrays,loops,sorting

//url: https://edabit.com/challenge/TyN8D68zYSg75i5gD

//Description:
//A numbers factor length is simply its total number of factors.
//For instance:
//3: 1, 3
//// 3's factor length = 2
//
//8: 1, 2, 4, 8
//// 8's factor length = 4
//
//36 : 1, 2, 3, 4, 6, 9, 12, 18, 36
//// 36's factor length = 9
//Create a function that sorts an array by factor length in descending order. If multiple numbers have the same factor length, sort these numbers in descending order, with the largest first.
//In the example below, since 13 and 7 both have only 2 factors, we put 13 ahead of 7.
//factorSort([9, 7, 13, 12]) ➞ [12, 9, 13, 7]
//// 12 : 6, 9: 3, 13: 2, 7: 2
//Examples
//factorSort([1, 2, 31, 4]) ➞ [4, 31, 2, 1]
//
//factorSort([5, 7, 9]) ➞ [9, 7, 5]
//
//factorSort([15, 8, 2, 3]) ➞ [15, 8, 3, 2]
//Notes
//Descending order: numbers with a higher factor length go before numbers with a lower factor length.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(factorSort([1, 2, 31, 4]), [4, 31, 2, 1])
//Test.assertSimilar(factorSort([5, 7, 9]), [9, 7, 5])
//Test.assertSimilar(factorSort([15, 8, 2, 3]), [15, 8, 3, 2])
//Test.assertSimilar(factorSort([1, 2, 3, 7, 11, 13, 16]), [16, 13, 11, 7, 3, 2, 1])
//Test.assertSimilar(factorSort([1, 5, 25, 17]), [25, 17, 5, 1])
//Test.assertSimilar(factorSort([1, 5, 4, 17]), [4, 17, 5, 1])

