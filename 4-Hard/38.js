

//title: Recursion: Halve and Halve Again

//tags: numbers,recursion

//url: https://edabit.com/challenge/nbLgTS3tCHTJcQfA5

//Description:
//Given two integers a and b, return how many times a can be halved while still being greater than b.
//Examples
//halveCount(4666, 544) ➞ 3
//// (4666 -> 2333 -> 1166.5 -> 583.25)
//
//halveCount(466, 54) ➞ 3
//// (466 -> 233 -> 116.5 -> 58.25)
//
//halveCount(1324, 98) ➞ 3
//// (1324 -> 662 -> 331 -> 165.5)
//
//halveCount(624, 8) ➞ 6
//// (624 -> 312 -> 156 -> 78 -> 39 -> 19.5 -> 9.75)
//
//halveCount(1000, 3) ➞ 8
//// (1000 -> 500 -> 250 -> 125 -> 62.5 -> 31.25 -> 15.625 -> 7.8125 -> 3.90625)
//Notes
//Integer a will always be (at least) greater than the twice of b.
//You are expected to solve this challenge via a recursive approach.
//A collection of challenges in recursion can be found via this link.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const isRecursive = f => (`${f}`.match(RegExp(`${f.name}`,'gm'))||[]).length > +(/function/.test(f))
//Test.assertNotEquals(isRecursive(halveCount), false, "Recursion is required!")
//​
//let [actualParam, expectedParam] = [
//  [
//    [4666, 544], [466, 54], [8, 2], [1891, 4], [1756, 14], [7764, 2], [1118, 47], [161, 79], [8573, 35], [4123, 1],
//    [1348, 60], [7549, 31], [4469, 5], [1123, 98], [8197, 85], [1199, 56], [8845, 4], [606, 67], [3375, 6], [7085, 10],
//    [299, 5], [1208, 82], [3635, 73], [2382, 3], [320, 80]
//  ],
//  [3, 3, 1, 8, 6, 11, 4, 1, 7, 12, 4, 7, 9, 3, 6, 4, 11, 3, 9, 9, 5, 3, 5, 9, 1]
//]
//for (let i in actualParam) Test.assertEquals(halveCount(...actualParam[i]), expectedParam[i])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Leader in an Array

//tags: arrays,language_fundamentals,loops

//url: https://edabit.com/challenge/wYdQGudMRdzME5B7m

//Description:
//Create a function that finds each number in the given array that is greater than every number that comes after it. Your solution should return an array of the number(s) that meet these criteria.
//Examples
//leader([2, 3, 20, 15, 8, 3]) ➞ [20, 15, 8, 3]
//// Note that 20 is greater than all the elements to it's
//// right side, similarly 15 and so on.
//
//leader([2, 3, 20, 15, 8, 25, 3]) ➞ [25, 3]
//// Note that 20 cannot be added because it is not greater than 25.
//
//leader([1, 2, 3, 4, 5]) ➞ [5]
//// 5 is technically greater than the (zero) remaining items.
//
//leader([8, 7, 1, 2, 10, 3, 5]) ➞[10, 5]
//// 10 is greater than all items to the right of it, so include.
//// 3 is not greater than all items to the right of it, so exclude.
//// 5 is greater than the remaining items, so include.
//Notes
//Add elements in the new array in the same order they occur in the input array.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(leader([2, 3, 20, 15, 8, 3]), [20, 15, 8, 3])
//Test.assertSimilar(leader([2, 3, 20, 15, 26, 3]), [26, 3])
//Test.assertSimilar(leader([1, 2, 3, 4, 3, 10]), [10])
//Test.assertSimilar(leader([500, 400, 300, 200, 100, 50, 10, 5]), [500, 400, 300, 200, 100, 50, 10, 5])
//Test.assertSimilar(leader([8, 7, 1, 2, 10, 3, 5]), [10, 5])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Case and Index Inverter

//tags: arrays,language_fundamentals,loops,strings

//url: https://edabit.com/challenge/TYcMysG6yy4RKEQPP

//Description:
//Write a function that takes a string input and returns the string in a reversed case and order.
//Examples
//invert("dLROW YM sI HsEt") ➞ "TeSh iS my worlD"
//
//invert("ytInIUgAsnOc") ➞ "CoNSaGuiNiTY"
//
//invert("step on NO PETS") ➞ "step on NO PETS"
//
//invert("XeLPMoC YTiReTXeD") ➞ "dExtErIty cOmplEx"
//Notes
//No empty strings and will neither contain special characters nor punctuation.
//A recursive version of this challenge can be found via this link.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//let [strVector, resVector] = [
//  [
//    "dLROW YM sI HsEt", "This string is CASE and INDEX reversed", "ReVeRsIbLe", "rAmIfIcAtIoN", "IntellectualS",
//    "DESREVER xedni DNA esac SI GNIRTS SIHt", "ElBiSrEvEr", "nOiTaCiFiMaR", "sLAUTCELLETNi",
//    "CoNSaGuiNiTY", "step on NO PETS", "dExtErIty cOmplEx"
//  ], [
//    "TeSh iS my worlD", "DESREVER xedni DNA esac SI GNIRTS SIHt", "ElBiSrEvEr", "nOiTaCiFiMaR", "sLAUTCELLETNi",
//    "This string is CASE and INDEX reversed", "ReVeRsIbLe", "rAmIfIcAtIoN", "IntellectualS",
//    "ytInIUgAsnOc", "step on NO PETS", "XeLPMoC YTiReTXeD"
//  ]
//]
//for (let i in strVector) Test.assertEquals(invert(strVector[i]), resVector[i])

