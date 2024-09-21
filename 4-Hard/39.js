

//title: Recursion: Palindrome Word

//tags: recursion,strings,validation

//url: https://edabit.com/challenge/aeHGWC6M44KhLCRBt

//Description:
//Create a recursive function that determines whether a word is a palindrome or not.
//Examples
//isPalindrome("madam") ➞ true
//
//isPalindrome("adieu") ➞ false
//
//isPalindrome("rotor") ➞ true
//Notes
//All inputs are in lowercase.
//You are expected to solve this challenge via recursion.
//You can check on the Resources tab for more details about recursion.
//If you think recursion is fun, a collection of those challenges can be found in here.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const recursive = f => (`${f}`.match(RegExp(`${f.name}`,'gm'))||[]).length > +(/function/.test(f))
//Test.assertNotEquals(recursive(isPalindrome), false, "Recursion is required!")
//​
//let [strVector, resVector] = [
//  ["rascal", "racecar", "madam", "adieu", "radar", "rotor", "abacus", "rotator", "scholars"],
//  [false, true, true, false, true, true, false, true, false]
//]
//for (let i in strVector) Test.assertEquals(isPalindrome(strVector[i]), resVector[i])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Pluralize!

//tags: arrays,loops,strings

//url: https://edabit.com/challenge/ahAX627M3Y26tij9y

//Description:
//Given a list of words in the singular form, return a set of those words in the plural form if they appear more than once in the list.
//Examples
//pluralize(["cow", "pig", "cow", "cow"]) ➞ ["cows", "pig"]
//
//pluralize(["table", "table", "table"]) ➞ ["tables"]
//
//pluralize(["chair", "pencil", "arm"]) ➞ ["chair", "pencil", "arm"]
//Notes
//This is an oversimplification of the English language so no edge cases will appear.
//Only focus on whether or not to add an s to the ends of words.
//All tests will be valid.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//let [expected, actual] = [
//  [["cows", "pig"], ["tables"],  ["chair", "pencil", "arm"], ["list"], ["sets", "tuples", "strings", "integer"]],
//  [["cow", "pig", "cow", "cow"], ["table", "table", "table"], ["chair", "pencil", "arm"], ["list"],
//  ["set", "set", "tuple", "tuple", "string", "string", "string", "string", "integer"]]
//]
//for (let i in expected) Test.assertSimilar(pluralize(actual[i]), expected[i])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: RegEx XX : Group Ranges ⁠— Named Capturing Groups (?<Name>x)

//tags: formatting,regex

//url: https://edabit.com/challenge/8FG9myNKdmtdxWoNN

//Description:
//Groups and ranges indicate groups and ranges of expression characters. Named capturing groups matches "x" in (?\<Name>x) and stores it on the groups property of the returned matches under the name specified by \<Name>. The angle brackets, < and >, are required for group name.
//To extract the United States area code from a phone number, we could use:
//let match = "(214) 987-6482".match(/\((?<area>\d\d\d)\)/)
//console.log(match.groups.area) ➞ 214
//Grab the year, month and day from a string of dates. Name your groups with year, month, and day and in that order in your expression. You only have to come up with the regular expression. The replace() function is already implemented in the test.
//let REGEXP = your solution
//let str = "2019-10-30, 2020-01-01"
//
//str.replace(REGEXP, "$<day>.$<month>.$<year>") ➞ "30.10.2019, 01.01.2020"
//Notes
//Dates do not go back before 1900.
//Dates always come in year-month-day format.
//Check the Resources tab if you get stuck.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const str1 = "2019-10-30, 2020-01-01";
//const str2 = "2020-11-14, 1947-01-30, 1955-04-12";
//const str3 = "2001-03-09, 1988-12-19, 1918-03-20, 1969-08-15";
//​
//const validate = (REGEXP) => {
//   if(!/(year)+.*(month)+.*(day)+/.test(String(REGEXP))) return () => "invalid" 
//   return function testReg(str) {
//      return str.replace(REGEXP, '$<day>.$<month>.$<year>');
//   }
//}
//​
//const testExp = validate(REGEXP)
//​
//Test.assertNotEquals(testExp(str1), "invalid", "Only the named groups are allowed: year, month, day")
//Test.assertEquals(testExp(str1), "30.10.2019, 01.01.2020")
//Test.assertEquals(testExp(str2), "14.11.2020, 30.01.1947, 12.04.1955")
//Test.assertEquals(testExp(str3), "09.03.2001, 19.12.1988, 20.03.1918, 15.08.1969")
//​
//// credits to https://javascript.info/regexp-groups

