

//title: RegEx: Character Classes VIII ⁠— Wildcard .

//tags: formatting,language_fundamentals,regex

//url: https://edabit.com/challenge/bX8wn3XQ2WTkDDZht

//Description:
//You can think of character classes as characters with special meaning. They are recognized as special when you place the \ before the character. The . is the only exception. It requires no \ and it is a wildcard character. It matches any character except for line terminators.
//ES2018 added the s "dotAll" flag, which allows the dot to also match line terminators.
//Here are a list of the characters classes in JavaScript:
//., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]
//const str = "eta, edu, etc, ele, epa, eye, exe, emf, ete, eon, era"
//
//// Instead of a string we want an array like this:
//// ["eta", "edu", "etc", "ele", "epa", "eye", "exe", "emf", "ete", "eon", "era"]
//
//// You could use the split() method but let's try with a regular expression.
//Write the regular expression that returns an array of all words. Use the character class . in your expression.
//Notes
//Check the Resources tab for details on character classes if you're stuck.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const str = "eta, edu, etc, ele, epa, eye, exe, emf, ete, eon, era"
//​
//const validate = (REGEXP) => {
//   if(!/[.]/.test(String(REGEXP))) return () => "required"
//   return function testReg(str) {
//     return str.match(REGEXP)
//   }
//}
//​
//const testExp = validate(REGEXP)
//console.log(testExp(str))
//​
//Test.assertNotEquals(testExp(str), "required", "You are required to use a . character class in your expression.")
//Test.assertSimilar(testExp(str), ["eta", "edu", "etc", "ele", "epa", "eye", "exe", "emf", "ete", "eon", "era"])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Finding Common Elements

//tags: arrays,data_structures,language_fundamentals,logic,loops

//url: https://edabit.com/challenge/jtAvQyyDpFA2EaCcj

//Description:
//Create a function that takes two "sorted" arrays of numbers and returns an array of numbers which are common to both the input arrays.
//Examples
//commonElements([-1, 3, 4, 6, 7, 9], [1, 3]) ➞ [3]
//
//commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]) ➞ [1, 3, 4, 7]
//
//commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]) ➞ [1, 2, 4, 5]
//
//commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15]) ➞ []
//Notes
//Arrays are sorted.
//Try doing this problem with O(n + m) time complexity.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(commonElements([-1, 3, 4, 6, 7, 9], [1, 3]), [3])
//Test.assertSimilar(commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]), [1, 3, 4, 7])
//Test.assertSimilar(commonElements([-1, 3, 4, 6, 7, 9], []), [])
//Test.assertSimilar(commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]), [1, 2, 4, 5])
//Test.assertSimilar(commonElements([-1, 3, 4, 6, 7, 9], [100, 300, 900]), [])
//Test.assertSimilar(commonElements([18, 30, 60, 77, 89, 103, 107, 139, 149, 150, 201, 204, 233, 248, 250, 264, 273, 297, 308, 310, 319, 320, 348, 349, 353, 362, 365, 368, 376, 381, 395, 401, 405, 416, 421, 424, 434, 444, 452, 454, 464, 478, 497, 511, 513, 523, 533, 551, 562, 565, 593, 602, 604, 609, 610, 614, 620, 624, 643, 645, 654, 660, 674, 674, 685, 686, 700, 704, 712, 723, 728, 735, 741, 760, 765, 775, 776, 781, 787, 788, 791, 806, 823, 842, 848, 849, 901, 904, 909, 911, 916, 931, 932, 932, 940, 950, 951, 959, 973, 993], [3, 13, 25, 25, 27, 32, 39, 40, 45, 53, 55, 57, 60, 67, 78, 80, 81, 86, 114, 116, 125, 130, 146, 159, 164, 174, 192, 193, 209, 211, 265, 275, 279, 298, 303, 303, 314, 327, 330, 337, 355, 356, 375, 386, 405, 449, 452, 454, 457, 470, 476, 496, 499, 500, 501, 504, 516, 547, 577, 603, 604, 613, 618, 628, 638, 652, 659, 677, 683, 685, 700, 701, 710, 713, 727, 728, 734, 740, 774, 780, 790, 797, 833, 834, 837, 863, 869, 875, 885, 910, 911, 928, 930, 938, 943, 959, 964, 969, 987, 994]), [60, 405, 452, 454, 604, 685, 700, 728, 911, 959])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Hours Passed

//tags: dates,strings

//url: https://edabit.com/challenge/6dp2xWaQbN9KuKp8P

//Description:
//Write a function that takes time t1 and time t2 and returns the numbers of hours passed between the two times.
//Examples
//hoursPassed("3:00 AM", "9:00 AM") ➞ "6 hours"
//
//hoursPassed("2:00 PM", "4:00 PM") ➞ "2 hours"
//
//hoursPassed("1:00 AM", "3:00 PM") ➞ "14 hours"
//Notes
//Time t1 will always be the starting time and t2, the ending time.
//Return the string "No time has passed." if t1 is equal to t2.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//let [strVector, resVector] = [
//  [["3:00 AM", "9:00 AM"], ["2:00 PM", "4:00 PM"], ["1:00 AM", "3:00 PM"], ["2:00 AM", "3:00 PM"],
//   ["8:00 AM", "8:00 PM"], ["12:00 AM", "10:00 PM"], ["1:00 AM", "1:00 AM"], ["12:00 PM", "12:00 PM"]],
//  ["6 hours", "2 hours", "14 hours", "13 hours", "12 hours", "22 hours", "No time has passed.", "No time has passed."]
//]
//for (let i in strVector) Test.assertSimilar(hoursPassed(...strVector[i]), resVector[i])

