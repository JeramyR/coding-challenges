

//title: Number to Reversed Array

//tags: arrays,formatting,language_fundamentals,numbers

//url: https://edabit.com/challenge/2nLTDz2yk4vW8Cnwv

//Description:
//Create a function that takes a number and returns an array with the digits of the number in reverse order.
//Examples
//reverseArr(1485979) ➞ [9, 7, 9, 5, 8, 4, 1]
//
//reverseArr(623478) ➞ [8, 7, 4, 3, 2, 6]
//
//reverseArr(12345) ➞ [5, 4, 3, 2, 1]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(reverseArr(1485979), [9, 7, 9, 5, 8, 4, 1])
//Test.assertSimilar(reverseArr(623478), [8, 7, 4, 3, 2, 6])
//Test.assertSimilar(reverseArr(12345), [5, 4, 3, 2, 1])
//Test.assertSimilar(reverseArr(202069), [9, 6, 0, 2, 0, 2])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Purge and Organize

//tags: arrays,data_structures,loops,numbers,sorting

//url: https://edabit.com/challenge/CvPCBc9FtTLix9zov

//Description:
//Given an array of numbers, write a function that returns an array that...
//Has all duplicate elements removed.
//Is sorted from least to greatest value.
//Examples
//uniqueSort([1, 2, 4, 3]) ➞ [1, 2, 3, 4]
//
//uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]) ➞ [1, 2, 3, 4]
//
//uniqueSort([6, 7, 3, 2, 1]) ➞ [1, 2, 3, 6, 7]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(
//  uniqueSort([1, 5, 8, 2, 3, 4, 4, 4, 10]),
//  [1, 2, 3, 4, 5, 8, 10]
//);
//​
//Test.assertSimilar(
//  uniqueSort([1, 2, 5, 4, 7, 7, 7]),
//  [1, 2, 4, 5, 7]
//);
//​
//Test.assertSimilar(
//  uniqueSort([7, 6, 5, 4, 3, 2, 1, 0, 1]),
//  [0, 1, 2, 3, 4, 5, 6, 7]
//);
//​
//Test.assertSimilar(
//  uniqueSort([3, 6, 5, 4, 3, 27, 1, 100, 1]),
//  [1, 3, 4, 5, 6, 27, 100]
//);
//​
//Test.assertSimilar(
//  uniqueSort([-9, -3.1414, -87, 8, -4.323827, -3.1415, -3.1415]),
//  [-87, -9, -4.323827, -3.1415, -3.1414, 8]
//);

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: RegEx: Character Classes XI ⁠- \S

//tags: regex,validation

//url: https://edabit.com/challenge/6Zs9AyraoFAAEhX6v

//Description:
//You can think of character classes as characters with special meaning. They are recognized as special when you place the \ before the character.
//Here are a list of the characters classes in JavaScript:
//., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]
//Write a regex that will return true if the bio does not have any spaces before the last ending punctuation ?. You must use the \S character class in your expression.
//"Can read a spray chart and a balance sheet. 1 part Executive, 1 part entrepreneur, 2 parts geek and 3 parts baseball coach. Too many parts?"
//The bio above is in the correct format. Therefore your RegEx should return true for it.
//Notes
//Check the Resources tab for details on character classes if you're stuck.
//Mark Gallion's Twitter bio is used for educational purposes only.
//To search for the character ? in RegEx, the pattern must include \?.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const str1 = "Can read a spray chart and a balance sheet. 1 part Executive, 1 part entrepreneur, 2 parts geek and 3 parts baseball coach. Too many parts?"
//const str2 = "Can read a spray chart and a balance sheet. 1 part Executive, 1 part entrepreneur, 2 parts geek and 3 parts baseball coach. Too many parts ?"
//const str3 = "Can read a spray chart and a balance sheet. 1 part Executive, 1 part entrepreneur, 2 parts geek and 3 parts baseball coach. Too many parts  ?"
//​
//const validate = (REGEXP) => {
//   if(!/\\S/.test(String(REGEXP))) return () => "invalid" 
//   return function testReg(str) {
//     return REGEXP.test(str)
//   }
//}
//​
//const testExp = validate(REGEXP)
//​
//Test.assertNotEquals(testExp(str3), "invalid", "You are required to use a \\S character class in your expression.")
//Test.assertEquals(testExp(str1), true, "This string is in the correct format.") 
//Test.assertEquals(testExp(str2), false, "There is a space before the ending punctuation ?") 
//Test.assertEquals(testExp(str3), false, "There are spaces before the ending punctuation          ?")

