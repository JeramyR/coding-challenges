

//title: Check If objOne Is Equal to objTwo

//tags: language_fundamentals,objects,validation

//url: https://edabit.com/challenge/zvq3A6AJDWmnnK7Ry

//Description:
//Create a function that checks to see if two object arguments are equal to one another. Return true if the objects are equal, otherwise, return false.
//Example #1
//// The first object parameter.
//
//{
//  name: "Benny",
//  phone: "3325558745",
//  email: "benny@edabit.com"
//}
//
//// The second object parameter.
//
//{
//  name: "Jason",
//  phone: "9853759720",
//  email: "jason@edabit.com"
//}
//
//
//➞ false
//Example #2
//// The first object parameter.
//
//{
//  name: "Jason",
//  phone: "9853759720",
//  email: "jason@edabit.com"
//}
//
//// The second object parameter.
//
//{
//  name: "Jason",
//  phone: "9853759720",
//  email: "jason@edabit.com"
//}
//
//
//➞ true
//Notes
//If you have a suggestion on how to make these instructions easier to understand, please leave a comment. Your feedback is greatly appreciated.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//describe("Tests", function () {
//  it("Test #1", function () {
//    const objOne = {
//      name: "Benny",
//      phone: "3325558745",
//      email: "benny@edabit.com"
//    }
//​
//    const objTwo = {
//      name: "Jason",
//      phone: "9853759720",
//      email: "jason@edabit.com"
//    }
//​
//    Test.assertEquals(isEqual(objOne, objTwo), false);
//  });
//​
//  it("Test #2", function () {
//    const objOne = {
//      name: "Jason",
//      phone: "9853759720",
//      email: "jason@edabit.com"
//    }
//​
//    const objTwo = {

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Changing Mixed Types

//tags: arrays,conditions

//url: https://edabit.com/challenge/FY8DmJXbQXL3yugGC

//Description:
//Create a function that changes all the elements in an array as follows:
//Add 1 to all even integers, nothing to odd integers.
//Concatenates "!" to all strings and make the first letter of the word a capital letter.
//Changes all boolean values to its opposite.
//Examples
//changeTypes(["a", 12, true]) ➞ ["A!", 13, false]
//
//changeTypes([13, "13", "12", "twelve"]) ➞ [13, "13!", "12!", "Twelve!"]
//
//changeTypes([false, "false", "true"]) ➞ [true, "False!", "True!"]
//Notes
//There won't be any float values.
//You won't get strings with both numbers and letters in them.
//Although the task may be easy, try keeping your code as clean and as readable as possible!

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(changeTypes(["a", 12, true]),["A!", 13, false])
//Test.assertSimilar(changeTypes([13, "13", "12", "twelve"]), [13, "13!", "12!", "Twelve!"])
//Test.assertSimilar(changeTypes([false, "false", "true"]), [true, "False!", "True!"])
//​
//// made by @Joshua Señoron

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Functioninator 8000

//tags: formatting,strings

//url: https://edabit.com/challenge/xpGPz3QCAhtsZrWeW

//Description:
//Create a function that takes a single word string and does the following:
//Concatenates inator to the end if the word ends with a consonant otherwise, concatenate -inator instead.
//
//Adds the word length of the original word to the end, supplied with '000'.
//The examples should make this clear.
//Examples
//inatorInator("Shrink") ➞ "Shrinkinator 6000"
//
//inatorInator("Doom") ➞ "Doominator 4000"
//
//inatorInator("EvilClone") ➞ "EvilClone-inator 9000"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(inatorInator('Shrink'), 'Shrinkinator 6000')
//Test.assertEquals(inatorInator('Doom'),'Doominator 4000')
//Test.assertEquals(inatorInator('EvilClone'), 'EvilClone-inator 9000')
//Test.assertEquals(inatorInator('Destroy'),'Destroyinator 7000')
//Test.assertEquals(inatorInator('a'),'a-inator 1000')
//Test.assertEquals(inatorInator('Shrek'),'Shrekinator 5000')
//Test.assertEquals(inatorInator('bEE'),'bEE-inator 3000')
//Test.assertEquals(inatorInator('CAPITALISE'),'CAPITALISE-inator 10000')

