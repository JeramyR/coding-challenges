

//title: Bingo Check

//tags: algorithms,arrays,conditions

//url: https://edabit.com/challenge/fwXjqY6drw8eLGyfQ

//Description:
//Create a function that takes a 5x5 2D array and returns true if it has at least one Bingo, and false if it doesn't.
//Examples
//bingoCheck([
//  [45, "x", 31, 74, 87],
//  [64, "x", 47, 32, 90],
//  [37, "x", 68, 83, 54],
//  [67, "x", 98, 39, 44],
//  [21, "x", 24, 30, 52]
//]) ➞ true
//
//bingoCheck([
//  ["x", 43, 31, 74, 87],
//  [64, "x", 47, 32, 90],
//  [37, 65, "x", 83, 54],
//  [67, 98, 39, "x", 44],
//  [21, 59, 24, 30, "x"]
//]) ➞ true
//
//bingoCheck([
//  ["x", "x", "x", "x", "x"],
//  [64, 12, 47, 32, 90],
//  [37, 16, 68, 83, 54],
//  [67, 19, 98, 39, 44],
//  [21, 75, 24, 30, 52]
//]) ➞ true
//
//bingoCheck([
//  [45, "x", 31, 74, 87],
//  [64, 78, 47, "x", 90],
//  [37, "x", 68, 83, 54],
//  [67, "x", 98, "x", 44],
//  [21, "x", 24, 30, 52]
//]) ➞ false
//Notes
//Only check for diagonols, horizontals and verticals.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(bingoCheck([
//  [45, "x", 31, 74, 87],
//  [64, "x", 47, 32, 90],
//  [37, "x", 68, 83, 54],
//  [67, "x", 98, 39, 44],
//  [21, "x", 24, 30, 52]
//]), true)
//​
//Test.assertSimilar(bingoCheck([
//  ["x", 43, 31, 74, 87],
//  [64, "x", 47, 32, 90],
//  [37, 65, "x", 83, 54],
//  [67, 98, 39, "x", 44],
//  [21, 59, 24, 30, "x"]
//]), true)
//​
//Test.assertSimilar(bingoCheck([
//  [37, 16, 84, 51, 33],
//  [64, 12, 47, 32, 90],
//  ["x", "x", "x", "x", "x"],
//  [67, 19, 98, 39, 44],
//  [21, 75, 24, 30, 52]
//]), true)
//​
//Test.assertSimilar(bingoCheck([

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Repeated String

//tags: math,strings

//url: https://edabit.com/challenge/HabB3pm5BcFyA6Fkk

//Description:
//Edward has a string s of lowercase English letters that he repeated infinitely many times. Given an integer n, find and print the number of letter "a"s in the first n letters of Edward's infinite string. For example, if the string s=abcac and n=10, the substring we consider is abcacabcac, the first 10 characters of his infinite string. There are 4 occurrences of a in the substring.
//Complete the repeatedString() method. It should return an integer representing the number of occurrences of a in the prefix of length n in the infinitely repeating string.
//Examples
//repeatedString("aba", 10) ➞ 7
//
//repeatedString("a", 1000000000000) ➞ 1000000000000
//
//repeatedString("aab", 882787) ➞ 588525
//Notes
//You must solve each test case in less than 500 milliseconds.
//Video Description & Solution

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//let [actualParam, expectedParam] = [
//  [
//    ["aba", 10], ["a", 1000000000000], ["aab", 882787],
//    ["ceebbcb", 817723], ["gfcaaaecbg", 547602], ["x", 970770],
//    ["kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm", 736778906400],
//    ["epsxyyflvrrrxzvnoenvpegvuonodjoxfwdmcvwctmekpsnamchznsoxaklzjgrqruyzavshfbmuhdwwmpbkwcuomqhiyvuztwvq", 549382313570],
//    ["ababa", 3]
//  ],
//  [7, 1000000000000, 588525, 0, 164280, 0, 51574523448, 16481469408, 2]
//]
//for (let i in actualParam) Test.assertEquals(repeatedString(...actualParam[i]), expectedParam[i])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Calculate the Quartiles

//tags: arrays,math,numbers

//url: https://edabit.com/challenge/oAv74xPhmMNZvEfHK

//Description:
//In statistic a quartile is a type of quantile, more specifically is any of the three values (q1, q2 or q3) that divide the items of a sorted frequency distribution (that starts at q0 with the lowest value and ends at q4 with the highest value) into four classes with each containing one fourth of the total population.
//There are three main methods used for calculate the quartiles of a dataset: Tukey (abbr. T), Moore & McCabe (abbr. MM) and Mendenhall & Sincich (abbr. MS). (see Resources tab for more informations about quartiles and other calculation methods).
//As already said, in a dataset q0 is the lowest value and q4 is the highest value.
//All methods share one common statement: q2 is equal to the median of the set.
//
//Using T or MM you split the dataset in two parts:
//
//If dataset has an odd population T includes the median appending it at the end of the lower half and at the beginning of the upper half, while MM excludes the median from both parts.
//If dataset has an even population is splitted in two equal parts by both methods.
//With the dataset split in two q1 is equal to the median of the lower half and q3 is equal to the median of the upper half.
//
//Using MS you don't split the dataset:
//
//q1 is equal to the nth term of the dataset with n equal to (population length + 1) / 4, rounded to the nearest integer, unless the decimal part is equal to 0.5, in that case it should be rounded up to the nearest integer.
//q3 is equal to the nth term of the dataset with n equal to 3 * (population length + 1) / 4 rounded to the nearest integer, unless the decimal part is equal to 0.5, in that case it should be rounded down to the nearest integer.
//Given an array of values and a string with one of the three possible methods ("T", "MM" or "MS") return an array in the form [q0, q1, q2, q3, q4].
//Examples
//getQuartiles([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "T") ➞ [1, 3.5, 6, 8.5, 11]
//// T includes the median (q2 = 6) in lower half (1 to 6, q1 = mean of 3+4)
//// and in upper half (6 to 11, q3 = mean of 8+9).
//
//getQuartiles([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "MM") ➞ [1, 3, 6, 9, 11]
//// MM excludes the median in lower half (1 to 5, q1 = 3) and in upper
//// half (7 to 11, q3 = 9).
//
//getQuartiles([1, 2, 3, 4, 5, 6, 7, 8, 9] ➞ [1, 3, 5, 7, 9]
//// With MS q1 = population + 1 = 11 / 4 = 2.75 rounded up to 3 = third
//// number of dataset, and q2 = population + 1 = 11 * 3 = 33 / 4 = 8.25
//// rounded down to 8 = eighth number of dataset.
//Notes
//Try this challenge if you need to get familiar with medians.
//The dataset has to be sorted in ascending order.
//Values can be either positive or negative integers.
//All given arrays are valid, no exceptions to handle.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(getQuartiles([4, 1, 7, 8, 3, 6, 5, 2], "T"), [1, 2.5, 4.5, 6.5, 8])
//Test.assertSimilar(getQuartiles([4, 1, 7, 8, 3, 6, 5, 2], "MS"), [1, 2, 4.5, 7, 8])
//Test.assertSimilar(getQuartiles([2, 6, 1, 8, 5, 9, 7, 4, 3], "MM"), [1, 2.5, 5, 7.5, 9])
//Test.assertSimilar(getQuartiles([2, 6, 1, 8, 5, 9, 7, 4, 3], "MS"), [1, 3, 5, 7, 9])
//Test.assertSimilar(getQuartiles([10, 3, 1, 8, 6, 4, 7, 5, 2, 9], "T"), [1, 3, 5.5, 8, 10])
//Test.assertSimilar(getQuartiles([10, 3, 1, 8, 6, 4, 7, 5, 2, 9], "MM"), [1, 3, 5.5, 8, 10])
//Test.assertSimilar(getQuartiles([10, 3, 1, 8, 6, 4, 7, 5, 2, 9], "MS"), [1, 3, 5.5, 8, 10])
//Test.assertSimilar(getQuartiles([3, 9, 11, 2, 4, 1, 8, 6, 10, 5, 7], "T"), [1, 3.5, 6, 8.5, 11])
//Test.assertSimilar(getQuartiles([3, 9, 11, 2, 4, 1, 8, 6, 10, 5, 7], "MM"), [1, 3, 6, 9, 11])
//Test.assertSimilar(getQuartiles([41, 33, 10, 26, 52, 77, 20, 39, 33, 33], "T"), [10, 26, 33, 41, 77])
//Test.assertSimilar(getQuartiles([-4, -25, -33, 12, 37, 12], "MM"), [-33, -25, 4, 12, 37])
//Test.assertSimilar(getQuartiles([-121, 8, -3, 12, 412, -66], "MS"), [-121, -66, 2.5, 12, 412])

