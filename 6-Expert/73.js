

//title: Ctrl + C, Ctrl + V

//tags: formatting,strings

//url: https://edabit.com/challenge/oL32o4Qwwmx34ntLm

//Description:
//Given a sentence containing few instances of "Ctrl + C" and "Ctrl + V", return the sentence after those keyboard shortcuts have been applied! Note that:
//In this case, "Ctrl + C" will copy all text behind it.
//In this case, "Ctrl + V" will do nothing if there is no "Ctrl + C" before it.
//A "Ctrl + C" which follows another "Ctrl + C" will overwrite what it copies.
//Examples
//keyboardShortcut("the egg and Ctrl + C Ctrl + V the spoon") ➞ "the egg and the egg and the spoon"
//
//keyboardShortcut("WARNING Ctrl + V Ctrl + C Ctrl + V") ➞ "WARNING WARNING"
//
//keyboardShortcut("The Ctrl + C Ctrl + V Town Ctrl + C Ctrl + V") ➞ "The The Town The The Town"
//Notes
//Keyboard shortcut commands will appear like normal words in a sentence but shouldn't be copied themselves (see example #2).
//Pasting should add a space between words.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(keyboardShortcut("the egg and Ctrl + C Ctrl + V the spoon"), "the egg and the egg and the spoon")
//Test.assertEquals(keyboardShortcut("WARNING Ctrl + V Ctrl + C Ctrl + V"), "WARNING WARNING")
//Test.assertEquals(keyboardShortcut("The Ctrl + C Ctrl + V Town Ctrl + C Ctrl + V"), "The The Town The The Town")
//Test.assertEquals(keyboardShortcut("bacteria Ctrl + C Ctrl + V Ctrl + C Ctrl + V Ctrl + C Ctrl + V"), "bacteria bacteria bacteria bacteria bacteria bacteria bacteria bacteria")
//Test.assertEquals(keyboardShortcut("You gotta copy something Ctrl + V first my Ctrl + V guy"), "You gotta copy something first my guy")
//Test.assertEquals(keyboardShortcut("You gotta paste at Ctrl + C some point my Ctrl + C guy"), "You gotta paste at some point my guy")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Recursion: Consecutive Ascending Numbers

//tags: arrays,numbers,recursion,strings

//url: https://edabit.com/challenge/ckAccFkn3yR5d4xSm

//Description:
//Write a function that will return true if a given string (divided and grouped into a size) will contain a set of consecutive ascending numbers, otherwise, return false.
//Examples
//ascending("123124125") ➞ true
//// Contains a set of consecutive ascending numbers
//// if grouped into 3's : 123, 124, 125
//
//ascending("101112131415") ➞ true
//// Contains a set of consecutive ascending numbers
//// if grouped into 2's : 10, 11, 12, 13, 14, 15
//
//ascending("32332432536") ➞ false
//// Regardless of the grouping size, the numbers can't be consecutive.
//
//ascending("326325324323") ➞ false
//// Though the numbers (if grouped into 3's) are consecutive but descending.
//
//ascending("666667") ➞ true
//// Consecutive numbers: 666 and 667.
//Notes
//A number can consist of any number of digits, so long as the numbers are adjacent to each other, and the string has at least two of them.
//An iterative version of this challenge can be found via this link.
//A collection of challenges in recursion can be found via this link.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const isRecursive = src => (`${src}`.match(RegExp(`${src.name}`, 'gm')) || []).length > +(/function/.test(src))
//Test.assertNotEquals(isRecursive(ascending), false, "Recursion is required!")
//​
//let [actualParam, expected] = [
//  [
//    "123124125", "101112131415", "666667", "232425", "444445", "1234567", "123412351236", "57585960616263", "500001500002500003",
//    "919920921", "12341235123612371238", "32332432536", "326325324323", "2324256", "1235", "121316", "12131213", "54321",
//    "56555453", "90090190290", "35236237238"
//  ], [
//    true, true, true, true, true, true, true, true, true, true, true,
//    false, false, false, false, false, false, false, false, false, false
//  ]
//]
//for (let i in actualParam) Test.assertEquals(ascending(actualParam[i]), expected[i])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sum of 1-N Succession

//tags: logic,math,numbers

//url: https://edabit.com/challenge/e2KzptNbCbSnbA5G9

//Description:
//In this challenge you must create a program which takes a number n and returns the length or number of digits in all numbers from 1 to n concatenated.
//Examples
//concatenationSum(5) ➞ 5
//
//concatenationSum(10) ➞ 11
//
//concatenationSum(13) ➞ 17
//Notes
//Keep in mind that the output is the number of digits in the concatenated number. For example, if the input was 5, the output would be 5 because 12345 has 5 digits. Similarly when the input is 13 the ouput is 17 because 12345678910111213 has 17 digits.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(concatenationSum(1), 1)
//Test.assertEquals(concatenationSum(9), 9)
//Test.assertEquals(concatenationSum(10), 11)
//Test.assertEquals(concatenationSum(999), 2889)
//Test.assertEquals(concatenationSum(1000), 2893)
//Test.assertEquals(concatenationSum(4525), 16993)
//Test.assertEquals(concatenationSum(14122352), 101867713)
//Test.assertEquals(concatenationSum(114453454235252), 1605690702417684)

