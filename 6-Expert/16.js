

//title: Recursion: Happy Number

//tags: arrays,recursion,validation

//url: https://edabit.com/challenge/GnF85aA7XgZdZYrZp

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
//You are expected to solve this challenge via recursion.
//You can check on the Resources tab for more details about recursion.
//A non-recursive version of this challenge can be found here.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

// const recursive = f => (`${f}`.match(RegExp(`${f.name}`, 'gm')) || []).length > +(/function/.test(f))
// Test.assertNotEquals(recursive(isHappy), false, "Recursion is required!")
//
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


//title: Patterned Wristband

//tags: arrays,functional_programming,loops,validation

//url: https://edabit.com/challenge/HX5eEuKb7epMgsKsj

//Description:
//A wristband can have 4 patterns:
//horizontal: each item in a row is identical.
//vertical: each item in a column is identical.
//diagonal left: each item is identical to the one on its upper left or bottom right.
//diagonal right: each item is identical to the one on its upper right or bottom left.
//You are shown an incomplete section of a wristband.
//Write a function that returns true if the section can be correctly classified into one of the 4 types, and false otherwise.
//Examples
//isWristband([
//  ["A", "A"],
//  ["B", "B"],
//  ["C", "C"]
//]) ➞ true 
//// Part of horizontal wristband.
//
//isWristband([
//  ["A", "B"],
//  ["A", "B"],
//  ["A", "B"]
//]) ➞ true 
//// Part of vertical wristband.
//
//isWristband([
//  ["A", "B", "C"],
//  ["C", "A", "B"],
//  ["B", "C", "A"],
//  ["A", "B", "C"]
//]) ➞ true
//// Part of diagonal left wristband.
//
//isWristband([
//  ["A", "B", "C"],
//  ["B", "C", "A"],
//  ["C", "A", "B"],
//  ["A", "B", "A"]
//]) ➞ true
//// Part of diagonal right wristband.
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isWristband( 
//[['A', 'A'], 
//['B', 'B'], 
//['C', 'C']]), true)
//​
//Test.assertEquals(isWristband(
//[['A', 'B'], 
//['A', 'B'], 
//['A', 'B']]), true)
//​
//Test.assertEquals(isWristband(
//[['A', 'B', 'C'], 
//['C', 'A', 'B'], 
//['B', 'C', 'A'], 
//['A', 'B', 'C']]), true)
//​
//Test.assertEquals(isWristband(
//[['A', 'B', 'C'], 
//['C', 'A', 'B'], 
//['D', 'C', 'A'], 
//['E', 'D', 'C']]), true)
//​
//Test.assertEquals(isWristband(
//[['A', 'B', 'C'], 
//['B', 'A', 'B'], 

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Phone Letter Combinations

//tags: algorithms,arrays,logic,loops

//url: https://edabit.com/challenge/npLurjMJofmFRCJwx

//Description:
//Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
//
//Examples
//letter_combinations("23") ➞ ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
//
//letter_combinations("532") ➞ ["jda", "jdb", "jdc", "jea", "jeb", "jec", "jfa", "jfb", "jfc", "kda", "kdb", "kdc", "kea", "keb", "kec", "kfa", "kfb", "kfc", "lda", "ldb", "ldc", "lea", "leb", "lec", "lfa", "lfb", "lfc"]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(letterCombinations("23"), ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"], "")
//Test.assertSimilar(letterCombinations("532"), ["jda", "jdb", "jdc", "jea", "jeb", "jec", "jfa", "jfb", "jfc", "kda", "kdb", "kdc", "kea", "keb", "kec", "kfa", "kfb", "kfc", "lda", "ldb", "ldc", "lea", "leb", "lec", "lfa", "lfb", "lfc"], "")
//Test.assertSimilar(letterCombinations("943"), ["wgd", "wge", "wgf", "whd", "whe", "whf", "wid", "wie", "wif", "xgd", "xge", "xgf", "xhd", "xhe", "xhf", "xid", "xie", "xif", "ygd", "yge", "ygf", "yhd", "yhe", "yhf", "yid", "yie", "yif", "zgd", "zge", "zgf", "zhd", "zhe", "zhf", "zid", "zie", "zif"], "")
//Test.assertSimilar(letterCombinations("372"), ["dpa", "dpb", "dpc", "dqa", "dqb", "dqc", "dra", "drb", "drc", "dsa", "dsb", "dsc", "epa", "epb", "epc", "eqa", "eqb", "eqc", "era", "erb", "erc", "esa", "esb", "esc", "fpa", "fpb", "fpc", "fqa", "fqb", "fqc", "fra", "frb", "frc", "fsa", "fsb", "fsc"], "")

