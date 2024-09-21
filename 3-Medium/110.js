

//title: Hold Your Breath!

//tags: arrays,conditions,games,loops,numbers

//url: https://edabit.com/challenge/KxMhoaDkyC2CiNGQx

//Description:
//You will be given an array of numbers which represent your character's altitude above sea level at regular intervals:
//Positive numbers represent height above the water.
//0 is sea level.
//Negative numbers represent depth below the water's surface.
//Create a function which returns whether your character survives their unsupervised diving experience, given an array of integers.
//Your character starts with a breath meter of 10, which is the maximum. When diving underwater, your breath meter decreases by 2 per item in the array. Watch out! If your breath diminishes to 0, your character dies!
//
//To prevent this, you can replenish your breath by 4 (up to the maximum of 10) for each item in the array where you are at or above sea level.
//
//Your function should return true if your character survives, and false if not.
//Worked Example
//divingMinigame([-5, -15, -4, 0, 5]) ➞ true
//
//// Breath meter starts at 10.
//// -5 is below water, so breath meter decreases to 8.
//// -15 is below water, so breath meter decreases to 6.
//// -4 is below water, so breath meter decreases to 4.
//// 0 is at sea level, so breath meter increases to 8.
//// 5 is above sea level and breath meter is capped at 10 (would've been 12 otherwise).
//// Character survives!
//Examples
//divingMinigame([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) ➞ true
//
//divingMinigame([-3, -6, -2, -6, -2]) ➞ false
//
//divingMinigame([2, 1, 2, 1, -3, -4, -5, -3, -4]) ➞ false
//Notes
//Lists may be of any length.
//All arrays are valid.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(divingMinigame([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), true)
//Test.assertEquals(divingMinigame([-5, -15, -4, 0, 5]), true)
//Test.assertEquals(divingMinigame([0, -4, 0, -4, -5, -2]), true)
//Test.assertEquals(divingMinigame([-4, -3, -4, -3, 5, 2, -5, -20, -42, -4, 5, 3, 5]), true)
//​
//Test.assertEquals(divingMinigame([-3, -6, -2, -6, -2]), false)
//Test.assertEquals(divingMinigame([-4, -5, -2, -7, 2, -1000, -2000, -1]), false)
//Test.assertEquals(divingMinigame([1, 2, 1, 2, 1, 2, 1, 2, 1, -3, -4, -5, -3, -4]), false)
//Test.assertEquals(divingMinigame([-5, -5, -5, -5, -5, 2, 2, 2, 2, 2, 2, 2, 2]), false)
//​
//// Author: Joshua Señoron

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: RegEx: Boundary Assertions III

//tags: formatting,regex,validation

//url: https://edabit.com/challenge/5bETfgL67yy9FKnF4

//Description:
//Write a regular expression that ensures the word "end" is inside of another word (e.g. "bending"). Non-word characters such as !, ?, etc. cannot be boundaries.
//Examples
//"The end of the story." ➞ false
//"Endings are pointless." ➞ false
//"Let's send!" ➞ false
//"We viewed the rendering at the end." ➞ false
//"Sometimes bending the rules is good." ➞ true
//Notes
//You cannot use \w, *, . or + in your expressions.
//You don't need to write a function, just the pattern.
//The expression should be case-insensitive and should check all occurences of "end".
//Find more info on RegEx and boundary assertions in Resources.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const validate = (REGEXP) => {
//   if(/[w*.+]/.test(String(REGEXP))) return () => "exclude"
//   return function testReg(str) {
//     return REGEXP.test(str) 
//   }
//} 
//​
//let str1 = "The end of the story."
//let str2 = "Ending is pointless."
//let str3 = "DEFENDING THE CROWN WILL END THE CROWN"
//let str4 = "Let's send!"
//let str5 = "We viewed the rendering at the end." 
//let str6 = "Sometimes bending the rules is good."
//​
//const testStr = validate(REGEXP) 
//​
//Test.assertNotEquals(testStr(str1), "exclude", "You are not allowed to use \w, *, ., or + in your expressions.")
//Test.assertEquals(testStr(str1), false)
//Test.assertEquals(testStr(str2), false)
//Test.assertEquals(testStr(str3), true)
//Test.assertEquals(testStr(str3), false)
//Test.assertEquals(testStr(str4), false)
//Test.assertEquals(testStr(str5), true)
//Test.assertEquals(testStr(str5), false)
//Test.assertEquals(testStr(str6), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Array Multiplier

//tags: arrays,language_fundamentals

//url: https://edabit.com/challenge/7ZhszvZBs7wkEBncb

//Description:
//Create a function that takes an array as an argument and returns a new nested array for each element in the original array. The nested array must be filled with the corresponding element (string or number) in the original array and each nested array has the same amount of elements as the original array.
//Examples
//multiply([4, 5]) ➞ [[4, 4], [5, 5]]
//
//multiply(["*", "%", "$"]) ➞ [["*", "*", "*"], ["%", "%", "%"], ["$", "$", "$"]]
//
//multiply(["A", "B", "C", "D", "E"]) ➞ [["A", "A", "A", "A", "A"], ["B", "B", "B", "B", "B"], ["C", "C", "C", "C", "C"], ["D", "D", "D", "D", "D"], ["E", "E", "E", "E", "E"]]
//Notes
//The given array contains numbers or strings.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(multiply(["*", "%", "$"]), [["*", "*", "*"], ["%", "%", "%"], ["$", "$", "$"]])
//Test.assertSimilar(multiply([4, 5]), [[4, 4], [5, 5]])
//Test.assertSimilar(multiply(["A", "B", "C", "D", "E"]), [["A", "A", "A", "A", "A"], ["B", "B", "B", "B", "B"], ["C", "C", "C", "C", "C"], ["D", "D", "D", "D", "D"], ["E", "E", "E", "E", "E"]])
//Test.assertSimilar(multiply([1]), [[1]])

