

//title: 🦁🐱 Count Animals 🐶🐺

//tags: language_fundamentals,regex,strings,validation

//url: https://edabit.com/challenge/96mNCCkMSn2zhEnZK

//Description:
//Mubashir needs your help to find out number of animals hidden in a given string txt.
//You are provided with an array of animals given below:
//animals = ["dog", "cat", "bat", "cock", "cow", "pig",
//"fox", "ant", "bird", "lion", "wolf", "deer", "bear",
//"frog", "hen", "mole", "duck", "goat"]
//Rule: Return the maximum number of animal names. See the below example:
//txt = "goatcode"
//
//countAnimals(txt) ➞ 2
//// First animal = "dog"
//// Remaining string = "atcoe",
//// Second animal = "cat".
//// count = 2 (correct)
//
//// If you got a "goat" first time
//// remaining string = "code",
//// no animal will be found during next time.
//// count = 1 (wrong)
//Examples
//countAnimals("goatcode") ➞ 2
//// "dog", "cat"
//
//countAnimals("cockdogwdufrbir") ➞ 4
//// "cow", "duck", "frog", "bird"
//
//countAnimals("dogdogdogdogdog") ➞ 5
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(countAnimals("dogcat"), 2)
//Test.assertEquals(countAnimals("bcaatt"), 2)
//Test.assertEquals(countAnimals("dopig"), 1)
//Test.assertEquals(countAnimals("goatcode"), 2)
//Test.assertEquals(countAnimals("dogdogdogdogdog"), 5)
//Test.assertEquals(countAnimals("cockdogwdufrbir"), 4)
//// Mubashir

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Recursion: Integer Digits Count

//tags: math,recursion

//url: https://edabit.com/challenge/SRat7mpAZBRR5RruZ

//Description:
//Create a function that recursively counts the integer's number of digits.
//Examples
//count(318) ➞ 3
//
//count(-92563) ➞ 5
//
//count(4666) ➞ 4
//
//count(-314890) ➞ 6
//
//count(654321) ➞ 6
//
//count(638476) ➞ 6
//Notes
//You are expected to solve this challenge via recursion.
//You can check on the Resources tab for more details about recursion.
//An iterative version of this challenge can be found via this link.
//A collection of challenges in recursion can be found via this link.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const recursive = f => (`${f}`.match(RegExp(`${f.name}`,'gm'))||[]).length > +(/function/.test(f))
//Test.assertNotEquals(recursive(count), false, "Recursion is required!")
//​
//let [numVector, resVector] = [
//  [0, 318, -92563, 4666, -314890, 654321, 638476, 12345, 1289396, -1232323, 12839393, -231273683],
//  [1, 3, 5, 4, 6, 6, 6, 5, 7, 7, 8, 9]
//]
//for (let i in numVector) Test.assertEquals(count(numVector[i]), resVector[i])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Ice Cream Sandwich

//tags: language_fundamentals,strings,validation

//url: https://edabit.com/challenge/euDed7qoDzgvcHwdS

//Description:
//An ice cream sandwich is a string that is formed by two identical ends and a different middle.
//Some examples of ice cream sandwiches:
//"AABBBAA"
//
//"3&&3"
//
//"yyyyymmmmmmmmyyyyy"
//
//"hhhhhhhhmhhhhhhhh"
//Notice how left and right ends of the sandwich are identical in both length and in repeating character. The middle section is distinctly different.
//Not ice cream sandwiches:
//"BBBBB"
//// You can't have just plain icecream.
//
//"AAACCCAA"
//// You can't have unequal sandwich ends.
//
//"AACDCAA"
//// You can't have more than one filling.
//
//"A"
//// You can't have fewer than 3 characters.
//Write a function that returns true if a string is an ice cream sandwich and false otherwise.
//Examples
//isIcecreamSandwich("CDC") ➞ true
//
//isIcecreamSandwich("AAABB") ➞ false
//
//isIcecreamSandwich("AA") ➞ false
//Notes
//An ice cream sandwich must have a minimum length of 3 characters, and at least two of these characters must be distinct (you can't only have the filling!).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isIcecreamSandwich("AABBBAA"), true)
//Test.assertEquals(isIcecreamSandwich("3&&3"), true)
//Test.assertEquals(isIcecreamSandwich("yyyyymmmmmmmmyyyyy"), true)
//Test.assertEquals(isIcecreamSandwich("hhhhhhhhmhhhhhhhh"), true)
//Test.assertEquals(isIcecreamSandwich("CDC"), true)
//Test.assertEquals(isIcecreamSandwich("BBBBB"), false, "only filling")
//Test.assertEquals(isIcecreamSandwich("AAACCCAA"), false, "ends are unbalanced")
//Test.assertEquals(isIcecreamSandwich("AACDCAA"), false, "can only have one type of filling")
//Test.assertEquals(isIcecreamSandwich("AAABB"), false, "only one end")
//Test.assertEquals(isIcecreamSandwich("AA"), false, "too short")
//Test.assertEquals(isIcecreamSandwich("A"), false, "too short")
//Test.assertEquals(isIcecreamSandwich(""), false, "too short")

