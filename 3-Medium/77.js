

//title: Extending the String Prototype

//tags: language_fundamentals,regex,strings

//url: https://edabit.com/challenge/otouNcoRc4nswPKHJ

//Description:
//Javascript has a String prototype default in the language which contains properties and methods such as .length and .toLowerCase(). Extend the String prototype by creating two new methods:
//consonants(word) which returns the number of consonants in a word when called.
//vowels(word) which returns the number of vowels in a word when called.
//Examples
//"hello".consonants() ➞ 3
//"hello".vowels() ➞ 2
//
//"greatly".consonants() ➞ 5
//"greatly".vowels() ➞ 2
//
//"Smithsonian".consonants() ➞ 7
//"Smithsonian".vowels() ➞ 4
//Notes
//Treat y as a consonant, not a vowel.
//Upper vs. lower case does not matter.
//Hint: See comments for another example if you get stuck.
//It is not mandatory for this exercise, but in general it is a good idea to double-check if there exists methods with the same name a your custom functions before using them to extend the prototype. This is to prevent the accidental overwrite of a pre-existing method. (See comments for additional info).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals('hello'.consonants(), 3)
//Test.assertEquals('hello'.vowels(), 2)
//Test.assertEquals('greatly'.consonants(), 5)
//Test.assertEquals('greatly'.vowels(), 2)
//Test.assertEquals('Smithsonian'.consonants(), 7)
//Test.assertEquals('Smithsonian'.vowels(), 4)
//Test.assertEquals('fudge'.consonants(), 3)
//Test.assertEquals('fudge'.vowels(), 2)
//Test.assertEquals('lemony'.consonants(), 4)
//Test.assertEquals('lemony'.vowels(), 2)
//Test.assertEquals('chocolate'.consonants(), 5)
//Test.assertEquals('chocolate'.vowels(), 4)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Ageing the Population...

//tags: numbers,objects

//url: https://edabit.com/challenge/xtDkfWxEh2hbmAHvn

//Description:
//Given an object of people and their ages, return how old the people would be after n years have passed. Use the absolute value of n.
//Examples
//afterNYears({
//  "Joel" : 32,
//  "Fred" : 44,
//  "Reginald" : 65,
//  "Susan" : 33,
//  "Julian" : 13
//}, 1) ➞ {
//  "Joel" : 33,
//  "Fred" : 45,
//  "Reginald" : 66,
//  "Susan" : 34,
//  "Julian" : 14
//}
//
//afterNYears({
//  "Baby" : 2,
//  "Child" : 8,
//  "Teenager" : 15,
//  "Adult" : 25,
//  "Elderly" : 71
//}, 19) ➞ {
//  "Baby" : 21,
//  "Child" : 27,
//  "Teenager" : 34,
//  "Adult" : 44,
//  "Elderly" : 90
//}
//
//afterNYears({
//  "Genie" : 1000,
//  "Joe" : 40
//}, 5) ➞ {
//  "Genie" : 1005,
//  "Joe" : 45
//}
//Notes
//Assume that everyone is immortal (it would be a bit grim if I told you to remove names once they reached 75).
//n should be a positive number because last time I checked, people don't tend to age backwards. Therefore, use the absolute value of n.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(afterNYears({
//  "Joel" : 32,
//  "Fred" : 44,
//  "Reginald" : 65,
//  "Susan" : 33,
//  "Julian" : 13
//}, 1), {
//  "Joel" : 33,
//  "Fred" : 45,
//  "Reginald" : 66,
//  "Susan" : 34,
//  "Julian" : 14
//})
//​
//Test.assertSimilar(afterNYears({
//  "Baby" : 2,
//  "Child" : 8,
//  "Teenager" : 15,
//  "Adult" : 25,
//  "Elderly" : 71
//}, 19), {
//  "Baby" : 21,
//  "Child" : 27,
//  "Teenager" : 34,
//  "Adult" : 44,

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: RegEx XIV: Group Ranges - Character Sets

//tags: regex

//url: https://edabit.com/challenge/vqwqCwfJ3r4zFvzPn

//Description:
//Groups and ranges indicate groups and ranges of expression characters. Character Sets match any characters inside of brackets [ ]. You can specify a range of characters by using a hyphen.
///[abcd]/ === /[a-d]/
//If the hyphen appears as the first or last character then it is considered a literal hyphen.
//"non-profit".match(/[abc-]/g)  // "-"
//"non-profit".match(/[-abc]/g)  // "-"
//You can also use character classes in a character set. So instead of this:
///[A-Za-z0-9_-]/
//You can do this:
///[\w]/
//Create a regex to match the letter "x" followed by two characters, each of which may be any digit or any character from A to F. Case sensitive.
//Examples
//"Exception 0xAF".match(REGEXP) ➞ "xAF"
//
//"Exception 0xD3".match(REGEXP) ➞ "xD3"
//
//"Exception 0xd3".match(REGEXP) ➞ null
//
//"Exception 0xZZ".match(REGEXP) ➞ null
//Notes
//Check the Resources tab if you get stuck.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const str1 = "Exception 0xAF"
//const str2 = "Exception 0x1A"
//const str3 = "Exception 0x22"
//const str4 = "Exception 0xF9"
//const str5 = "Exception 0xG0"
//const str6 = "Exception 0xH9"
//const str7 = "Exception 0xF9"
//const str8 = "Exception 0xF9"
//​
//const validate = (REGEXP) => {
//   if(/\[\]/.test(String(REGEXP))) return () => "invalid" 
//   return function testReg(str) {
//    return str.match(REGEXP) && str.match(REGEXP)[0];
//   }
//}
//​
//const testExp = validate(REGEXP)
//​
//Test.assertNotEquals(testExp(str1), "invalid", "You are require to use a character set your expression.")
//Test.assertSimilar(testExp(str1), "xAF")
//Test.assertSimilar(testExp(str2), "x1A")
//Test.assertSimilar(testExp(str3), "x22")
//Test.assertSimilar(testExp(str4), "xF9")
//Test.assertSimilar(testExp(str5), null)
//Test.assertSimilar(testExp(str6), null)

